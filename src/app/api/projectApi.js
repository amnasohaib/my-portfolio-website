import axios from "axios";
import { useEffect, useState } from "react";

const getScreenshot = (url) => {
  return `https://api.screenshotone.com/take?url=https://${url}&access_key=${process.env.SCREENSHOT_API_KEY}`;
};

export const useVercelProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVercelProjects = async () => {
      try {
        const response = await axios.get('/api/github-projects');
        
        const projectsWithScreenshots = response.data.projects.map(project => ({
          ...project,
          previewImageUrl: project.liveLink ? getScreenshot(project.liveLink.replace('https://', '')) : null
        }));

        setProjects(projectsWithScreenshots);
      } catch (err) {
        console.error("Error fetching projects", err);
        setError(err.message || "An unknown error occurred");
      }
    };

    fetchVercelProjects();
  }, []);

  return { projects, error };
};
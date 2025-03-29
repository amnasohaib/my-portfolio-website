import axios from "axios";
import { useEffect, useState } from "react";

const getScreenshot = (url) => {
  return `https://api.apiflash.com/v1/urltoimage?access_key=2e25ea061ee94e7dbe56c46414bbdb95&url=https://${url}&width=1200&height=630`;
};

export const useVercelProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVercelProjects = async () => {
      try {
        const accessToken = process.env.NEXT_PUBLIC_VERCEL_ACCESS_TOKEN;
        const githubToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

        if (!accessToken || !githubToken) {
          throw new Error("Vercel or GitHub access token is missing");
        }

        const projectsResponse = await axios.get(
          `https://api.vercel.com/v4/projects`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const projectsWithDetails = await Promise.all(
          projectsResponse.data.projects.map(async (project) => {
            try {
              let repoName = project.link?.repo;
              let githubUser = project.link?.org;

              let description = "No description available";
              let technologies = [];
              if (repoName && githubUser) {
                const githubResponse = await axios.get(
                  `https://api.github.com/repos/${githubUser}/${repoName}`,
                  { headers: { Authorization: `Bearer ${githubToken}` } }
                );
                description = githubResponse.data.description || description;

                const projectLanguages = await axios.get(
                  `https://api.github.com/repos/${githubUser}/${repoName}/languages`,
                  { headers: { Authorization: `Bearer ${githubToken}` } }
                );
                const languagesArray = Object.keys(projectLanguages.data);

                technologies = [...languagesArray];
              }

              return {
                id: project.id,
                name: project.name,
                previewImageUrl: getScreenshot(project.alias[0]?.domain),
                description,
                technologies,
                githubLink: `https://github.com/${githubUser}/${project.link.repo}`,
                liveLink: `https://${project.alias[0]?.domain}` || "",
              };
            } catch (err) {
              console.error(`Failed to fetch details for ${project.name}`, err);
              return project;
            }
          })
        );

        setProjects(projectsWithDetails);
      } catch (err) {
        console.error("Error fetching Vercel projects", err);
        setError(err.message || "An unknown error occurred");
      }
    };

    fetchVercelProjects();
  }, []);

  return { projects, error };
};

import axios from "axios";
import { useEffect, useState } from "react";

export const useVercelProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVercelProjects = async () => {
      try {
        const response = await axios.get("/api/github-projects");

        setProjects(response.data.projects);
      } catch (err) {
        console.error("Error fetching projects", err);
        setError(err.message || "An unknown error occurred");
      }
    };

    fetchVercelProjects();
  }, []);

  return { projects, error };
};

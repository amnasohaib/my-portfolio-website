// app/api/github-projects/route.js
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const accessToken = process.env.VERCEL_ACCESS_TOKEN; // Server-side env var
    const githubToken = process.env.GITHUB_ACCESS_TOKEN; // Server-side env var

    if (!accessToken || !githubToken) {
      return NextResponse.json({ error: 'Missing access tokens' }, { status: 500 });
    }

    // Fetch Vercel projects
    const projectsResponse = await axios.get(
      'https://api.vercel.com/v4/projects',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const projectsWithDetails = await Promise.all(
      projectsResponse.data.projects.map(async (project) => {
        let repoName = project.link?.repo;
        let githubUser = project.link?.org;
        let description = "";
        let technologies = [];

        if (repoName && githubUser) {
          try {
            // This will work server-side with proper token
            const githubResponse = await axios.get(
              `https://api.github.com/repos/${githubUser}/${repoName}`,
              { headers: { Authorization: `Bearer ${githubToken}` } }
            );

            console.log(githubResponse.data)
            
            description = githubResponse.data.description || description;

            const projectLanguages = await axios.get(
              `https://api.github.com/repos/${githubUser}/${repoName}/languages`,
              { headers: { Authorization: `Bearer ${githubToken}` } }
            );
            
            technologies = Object.keys(projectLanguages.data);
          } catch (err) {
            console.error(`Failed to fetch details for ${project.name}`, err);
          }
        }

        return {
          id: project.id,
          name: project.name,
          description,
          technologies,
          liveLink: project.alias?.[0]?.domain ? `https://${project.alias[0].domain}` : "",
          // Don't expose private GitHub links in client response
          hasGithubRepo: !!(repoName && githubUser)
        };
      })
    );

    return NextResponse.json({ projects: projectsWithDetails });
  } catch (err) {
    console.error('Error fetching projects:', err);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
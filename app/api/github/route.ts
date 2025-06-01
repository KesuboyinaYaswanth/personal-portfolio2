import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const GITHUB_TOKEN = "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"

  if (GITHUB_TOKEN) {
    console.log("GITHUB_TOKEN", GITHUB_TOKEN);
  }
 
  const query = `
      {
        user(login: "gitcuber369") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();

  const days = json.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap((week) => week.contributionDays)
    .map((day) => ({
      date: day.date,
      count: day.contributionCount,
    }));

  res.status(200).json(days);
}

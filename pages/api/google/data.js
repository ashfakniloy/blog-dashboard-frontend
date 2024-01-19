import { google } from "googleapis";
// import fs from "fs";
import { API_URL } from "@/config";

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// function getCredentials() {
//   try {
//     const creds = fs.readFileSync("creds.json");
//     oauth2Client.setCredentials(JSON.parse(creds));
//   } catch (error) {
//     console.log("No creds found");
//   }
// }

async function getCredentials() {
  try {
    // const creds = fs.readFileSync("creds.json");
    const res = await fetch(`${API_URL}/exchange-token`);
    const data = res.json();

    if (data.length) {
      const token = data.tokens[0];

      oauth2Client.setCredentials(token);
    }
  } catch (error) {
    console.log("No creds found");
  }
}

getCredentials();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const searchConsole = google.searchconsole({
      version: "v1",
      auth: oauth2Client,
    });

    try {
      const { data } = await searchConsole.searchanalytics.query({
        siteUrl: "https://thecatflix.com",
        startDate: "2023-12-12",
        endDate: "2024-01-10",
        dimensions: ["date"],
      });
      return res.status(200).json(data);
      // return NextResponse.json(data);
    } catch (error) {
      console.error("Error executing request", error);
      return res.status(200).json({ error: "Error executing request" });
      // return NextResponse.json({ error: 'Error executing request' });
    }
  }
}
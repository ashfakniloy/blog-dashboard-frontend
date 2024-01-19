import { google } from "googleapis";
// import fs from "fs";
import { API_URL } from "@/config";

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

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
    // const url = new URL(req.url);

    // const code = url.searchParams.get("code");
    const { code } = req.query;

    try {
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      // fs.writeFileSync("creds.json", JSON.stringify(tokens));
      const res = await fetch(`${API_URL}/exhange-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tokenData: tokens }),
      });

      // const mainUrl = url.origin;

      const protocol = req.headers["x-forwarded-proto"] || "http";
      const host = req.headers.host;
      const origin = `${protocol}://${host}`;

      console.log("origin", origin);

      // Now you can use `oauth2Client` for further API requests
      res.redirect(307, origin);
      // return NextResponse.redirect(mainUrl);
    } catch (error) {
      console.error("Error exchanging code for tokens", error.message);
      return res
        .status(400)
        .json({ error: "Error exchanging code for tokens" });
      // return NextResponse.json({ error: "Error exchanging code for tokens" });
    }
  }

  if (req.method === "POST") {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/webmasters",
      "https://www.googleapis.com/auth/webmasters.readonly",
    ];

    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
    });

    return res.status(200).json({ url });
    // return NextResponse.json({ url });
  }
}

// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";
// import { authConfigure } from "@/utils/authConfigure";

// export default async function handler(req, res) {
//   const session = await getServerSession(req, res, authOptions);
//   const token = session?.user?.token;
//   const oauth2Client = authConfigure(token);
//   // console.log("session", session);

//   const scopes = [
//     "https://www.googleapis.com/auth/userinfo.profile",
//     "https://www.googleapis.com/auth/drive",
//   ];

//   const url = oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     scope: scopes,
//   });

//   // res.redirect(307, url)
//   res.redirect(url);
// }

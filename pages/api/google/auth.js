import { google } from 'googleapis';
// import fs from "fs";
import { API_URL } from '@/config';

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// async function getCredentials() {
//   try {
//     // const creds = fs.readFileSync("creds.json");
//     const res = await fetch(`${API_URL}/exchange-token`);
//     const data = await res.json();
//     if (data.tokens) {
//       const token = data.tokens[0];
//       oauth2Client.setCredentials(token);
//     }
//   } catch (error) {
//     console.log('No creds found');
//   }
// }

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;

    try {
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      const res = await fetch(`${API_URL}/exhange-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenData: tokens }),
      });

      // const mainUrl = url.origin;

      const protocol = req.headers['x-forwarded-proto'] || 'http';
      const host = req.headers.host;
      const origin = `${protocol}://${host}`;

      console.log('origin', origin);

      // Now you can use `oauth2Client` for further API requests
      res.redirect(307, origin);
    } catch (error) {
      console.error('Error exchanging code for tokens', error.message);
      return res
        .status(400)
        .json({ error: 'Error exchanging code for tokens' });
    }
  }

  if (req.method === 'POST') {
    const res = await fetch(`${API_URL}/exchange-token`);
    if (res.status === 200) {
      const tokenData = await res.json();
      oauth2Client.setCredentials(tokenData.tokens[0]);
      const scopes = [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/webmasters',
        'https://www.googleapis.com/auth/webmasters.readonly',
      ];

      const url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
      });

      return res.status(200).json({ url });
    }
  }
}

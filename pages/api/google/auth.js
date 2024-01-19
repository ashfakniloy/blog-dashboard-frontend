import { google } from 'googleapis';
// import fs from "fs";
import { API_URL } from '@/config';
import axios from 'axios';

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
      console.log('start');
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      console.log(tokens);
      console.log('step 1');
      const savedData = await axios.post(
        'https://bayshore-backend.vercel.app/exchange-token',
        {
          tokenData: tokens,
        }
      );
      console.log('step 3');

      // const mainUrl = url.origin;

      console.log(savedData);

      if (savedData.status === 200) {
        const protocol = req.headers['x-forwarded-proto'] || 'http';
        const host = req.headers.host;
        const origin = `${protocol}://${host}`;

        console.log('origin', origin);

        // Now you can use `oauth2Client` for further API requests
        return res.redirect(307, origin);
      }
    } catch (error) {
      console.error('Error exchanging code for tokens', error.message);
      return res
        .status(400)
        .json({ error: 'Error exchanging code for tokens' });
    }
  }

  if (req.method === 'POST') {
    try {
      const getToken = await fetch(`${API_URL}/exchange-token`);
      console.log(getToken);
      if (getToken.status === 200) {
        const tokenData = await getToken.json();
        if (tokenData.tokens.length) {
          oauth2Client.setCredentials(tokenData.tokens[0]);
        }

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
    } catch (error) {
      console.log(error);
    }
  }
}

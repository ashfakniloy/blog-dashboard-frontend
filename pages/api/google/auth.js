import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { authConfigure } from "@/utils/authConfigure";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const token = session?.user?.token;
  const oauth2Client = authConfigure(token);
  // console.log("session", session);

  const scopes = [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/drive",
  ];

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });

  // res.redirect(307, 'url')
  res.redirect(url);
}

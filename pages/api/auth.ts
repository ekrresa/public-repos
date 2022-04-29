import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const GITHUB_SECRET = process.env.GITHUB_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const requestCode = req.query.code;
    const response = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${GITHUB_SECRET}&code=${requestCode}`,
      undefined,
      {
        headers: {
          accept: 'application/json',
        },
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error_description);
    }

    res.status(200).send({ access_token: response.data.access_token });
  } catch (error) {
    const reqError = error as AxiosError;
    res.status(400).json({ error: reqError.response?.data || reqError.message });
  }
}

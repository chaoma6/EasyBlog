/* eslint-disable @typescript-eslint/naming-convention */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from '@sanity/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rzwcrflf',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    await client.create({
      _type: 'comment',
      post: { _type: 'reference', _ref: _id },
      name,
      email,
      comment,
    });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't submit comment`, error });
  }
  return res.status(200).json({ message: 'Comment submitted' });
}

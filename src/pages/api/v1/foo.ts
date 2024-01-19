import type { NextApiRequest, NextApiResponse } from 'next'

async function handler (req: NextApiRequest, res: NextApiResponse) {
  console.log('foo')
  console.log(process.env.NEXT_PUBLIC_SENTRY_DSN);
  
  res.json({})
}

export default handler

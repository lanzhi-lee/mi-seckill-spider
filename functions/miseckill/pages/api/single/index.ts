import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Request from ${req.url}`)
  
  const url = `http://${req.headers.host}/api/single/1`
  const { data } = await axios.get(url)

  res.json({ data })
}

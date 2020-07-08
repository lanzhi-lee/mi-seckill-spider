import { NextApiRequest, NextApiResponse } from 'next'
import { getAllList } from '../../components'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Request from ${req.url}`)

  const list = await getAllList()
  res.send({ data: list })
}

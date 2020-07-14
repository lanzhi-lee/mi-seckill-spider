import { NextApiRequest, NextApiResponse } from 'next'
import { getAllList, AllList } from '../../components'
import * as dayjs from 'dayjs'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`Request from ${req.url}`)

  const list = await getAllList()

  const top5Keys = Object.keys(list)
    .map((key) => Number(key))
    .sort((x, y) => x - y)
    .slice(0, 5)

  const top5 = top5Keys.reduce((pre: AllList, cur) => {
    const key = dayjs.unix(cur).format('YYYY-MM-DD HH:mm:ss')
    pre[key] = list[cur]

    return pre
  }, {})

  res.send({ data: top5 })
}

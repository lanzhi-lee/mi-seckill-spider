import axios from 'axios'

/**
 * 指具体商品的元素
 */
interface ResourceGoodsItem {
  desc: string
  goods_id: string
  goods_name: string
  goods_price: string
  img: string
  release_num: number
  remind_num: string
  remind_status: number
  seckill_price: string
  seckill_type: string
}

/**
 * 指 5 个大列表的元素
 */
interface ResourceListItem {
  banner_config: null
  cdm: string
  list: ResourceGoodsItem[]
  list_count: number
  time_id: number
  start_time: number
  end_time: number
}

/**
 * 输出的商品的元素
 */
interface GoodsItem {
  id: string
  name: string
  desc: string
  price: string
  img: string
  seckill_price: string
  discount: number
}

/**
 * 输出的列表元素
 */
interface ListItem {
  list: GoodsItem[]
  start_time: number
  // start_time: string
}

export interface AllList {
  [key: string]: GoodsItem[]
}

/**
 * 根据 page 值获取对应的数据
 */
export function getListByPage(page: number) {
  const url = 'https://a.huodong.mi.com/flashsale/getlist'

  const time = new Date().getTime()
  const params = {
    now_time: `${time}`.slice(0, 10),
    size: 15,
    page,
    _: time,
  }

  const headers = {
    Referer: 'https://www.mi.com/seckill',
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
  }

  return new Promise<ListItem[]>((resolve) => {
    axios.get(url, { params, headers }).then((res) => {
      if (res.status === 200) {
        const list = res.data.data.data.list as ResourceListItem[]

        const data = list.reduce((pre, cur) => {
          const list = cur.list.reduce((pre, cur) => {
            const discount = Number(
              (Number(cur.seckill_price) / Number(cur.goods_price)).toFixed(2)
            )
            pre.push({
              id: cur.goods_id,
              name: cur.goods_name,
              desc: cur.desc,
              price: cur.goods_price,
              img: cur.img,
              seckill_price: cur.seckill_price,
              discount,
            })
            return pre
          }, [] as GoodsItem[])

          pre.push({
            list,
            start_time: cur.start_time,
            // start_time: dayjs.unix(cur.start_time).format('YYYY-MM-DD HH:mm:ss'),
          })
          return pre
        }, [] as ListItem[])

        resolve(data)
      } else throw new Error('ERROR OCCUR IN FUNCTION getList')
    })
  })
}

/**
 * 获取当前的全部数据
 */
export async function getAllList() {
  // 依次请求接口获取各部分数据，存入 lists 中
  let index = 1
  const lists: ListItem[][] = []

  while (true) {
    const temp = await getListByPage(index)
    if (temp.length !== 0) {
      lists.push(temp)
      index++
    } else break
  }

  return lists.reduce((pre: AllList, cur) => {
    cur.forEach((elem) => {
      if (!pre[elem.start_time]) pre[elem.start_time] = elem.list
      else pre[elem.start_time].push(...elem.list)
    })

    return pre
  }, {})
}

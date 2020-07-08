import axios from 'axios'
import cheerio from 'cheerio'
import Koa from 'koa'
import KoaRouter from 'koa-router'

/* 此方案失败，网页为动态网页，无法使用cheerio进行静态分析
 * - 请求链接获取HTML
 * - cheerio 载入HTML进行解析
 * - 根据要求输出 json 格式数据
 */

function getHTML() {
  return new Promise<string>((resolve, reject) => {
    axios.get('https://www.mi.com/seckill').then((res) => {
      if (res.status === 200) resolve(res.data)
      else throw new Error('ERROR OCCUR IN FUNCTION getHTML')
    })
  })
}

function parseHTML(html: string) {
  const $ = cheerio.load(html)
  return $('.J_seckillBanner')
    .children()
    .eq(1)
    .children()
    .map((index, elem) => {
      const text = $(elem).find('a em:first-child').eq(0).text()
      console.log(text)
      return text
    })
}

const app = new Koa()
const router = new KoaRouter()

router.get('/', async (ctx) => {
  const html = await getHTML()
  ctx.body = html
})

router.get('/data', async (ctx) => {
  const html = await getHTML()

  ctx.type = 'application/json'
  ctx.body = {
    demo: parseHTML(html),
  }
})

app.use(router.routes())
app.listen(3009)
console.log('app started at port 3009...')

;(async () => {
  const html = await getHTML()
  console.log('-------')
  const parseHTMLResult = parseHTML(html)
  console.log(parseHTMLResult, typeof parseHTMLResult, 'parseHTMLResult')
})()

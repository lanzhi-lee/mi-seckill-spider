import { FC } from 'react'
import { GoodsCard, AllList } from '../components'

interface HomeProps {
  data: AllList
}

const Home: FC<HomeProps> = (props) => {
  const { data } = props

  return (
    <section className='app'>
      <header className='header'>
        <nav className='container header__nav'>
          <a href='#'>首页</a>
          <a href='#'>关于</a>
        </nav>
        <section className='container header__container'>
          <div className='header-title'>
            <h1>Mi SecKill Plus</h1>
            <div>这里有一条站点的简介</div>
          </div>

          <div className='search-wraper' role='search'>
            <div className='search-form-group'>
              <input
                type='text'
                className='search-form-input'
                placeholder='输入关键词以搜索商品名'
                autoComplete='off'
                autoFocus
                tabIndex={0}
                autoCorrect='off'
                autoCapitalize='off'
                spellCheck={false}
              />
              {/* <i className='fa fa-search'></i> */}
            </div>
          </div>
        </section>
      </header>

      <section className='container body'>
        <section className='toolbar'>toolbar</section>
        <section className='body-wrapper'>
          <main className='main'>
            {Object.keys(data).reduce((pre: JSX.Element[], cur) => {
              const list = data[cur].map((elem) => {
                const props: Required<typeof GoodsCard.defaultProps> = {
                  id: elem.id,
                  imgUrl: elem.img,
                  title: elem.name,
                  desc: elem.desc,
                  nowPrice: elem.seckill_price,
                  originPrice: elem.price,
                  discountPercent: elem.discount,
                  discountMoney: `${Number(elem.price) - Number(elem.seckill_price)}`,
                  startTime: cur,
                }
                return <GoodsCard key={cur + props.id} {...props} />
              })

              return [...pre, ...list]
            }, [])}
          </main>
          <aside className='aside'>aside</aside>
        </section>
      </section>
      <footer className='footer'>footer</footer>
    </section>
  )
}

export async function getStaticProps() {
  const devUrl = 'http://localhost:3000/api/all'
  const prodUrl = 'https://app.leezx.cn/miseckill/api/all'

  const res = await fetch(process.env.NODE_ENV === 'development' ? devUrl : prodUrl)
  const { data } = await res.json()

  return { props: { data } }
}

export default Home

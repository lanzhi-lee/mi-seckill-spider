import { GoodsCard } from '../components'

export default function Home() {
  const ListData = [
    {
      id: '2181400001',
      name: '小米AI音箱',
      desc: '听音乐、语音遥控家电',
      price: '299',
      img:
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1e5e065d515ba0a0303d96740ea58494.jpg',
      seckill_price: '199.00',
      discount: 0.67,
    },
    {
      id: '2201400003',
      name: '米家IH电饭煲 4L 白色',
      desc: '多才多艺的智能电饭煲',
      price: '599',
      img:
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2444839875723f9f371929bc491fec9c.jpg',
      seckill_price: '449.00',
      discount: 0.75,
    },
    {
      id: '2164300024',
      name: '米家空气净化器Pro',
      desc: '大空间，快循环',
      price: '1499',
      img:
        'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f11b3f5b4a1df7e9bdfce788b6506ebb.jpg',
      seckill_price: '1099.00',
      discount: 0.73,
    },
    {
      id: '1185200007',
      name: '定频 | 米家空调 大1匹',
      desc: '出众静音，快速制冷热',
      price: '1799',
      img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8674c6a19801dde5419640af8a254597.jpg',
      seckill_price: '1499.00',
      discount: 0.83,
    },
  ]

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
            {[...ListData, ...ListData, ...ListData].map((elem) => {
              const props: Required<typeof GoodsCard.defaultProps> = {
                id: elem.id,
                imgUrl: elem.img,
                title: elem.name,
                desc: elem.desc,
                nowPrice: elem.seckill_price,
                originPrice: elem.price,
                discountPercent: elem.discount,
                discountMoney: `${Number(elem.price) - Number(elem.seckill_price)}`,
              }
              return <GoodsCard key={props.id} {...props} />
            })}
          </main>
          <aside className='aside'>aside</aside>
        </section>
      </section>
      <footer className='footer'>footer</footer>
    </section>
  )
}

interface GoodsCardInterface {
  id: string
  imgUrl: string
  title: string
  desc: string
  nowPrice: string
  originPrice: string
  discountPercent: number
  discountMoney: string
  startTime: string
}

export const GoodsCard: React.FC<GoodsCardInterface> = (props) => {
  const { id, imgUrl, title, desc, nowPrice, originPrice, discountPercent, discountMoney } = props

  // const isMobile = window && window.innerWidth <= 845
  // const pcLink = `https://www.mi.com/buy/detail?product_id=${id}`
  // const mobileLink = `https://m.mi.com/commodity/detail/${id}`
  // console.log(window.innerWidth <= 845, '-------')

  return (
    <section className='card'>
      <img className='card__img' src={imgUrl} alt='title' />

      <div className='card__info'>
        <span className='card__info-title'>{title}</span>
        <span className='card__info-desc'>{desc}</span>
        <span className='card__info-price'>
          <span className='card__info-price-now'>{nowPrice}元</span>
          <del className='card__info-price-origin'>{originPrice}元</del>
        </span>
        <span className='card__info-discount'>
          <span className='card__info-discount-percent'>
            <span>{discountPercent * 100}</span> 折
          </span>
          <span className='card__info-discount-money'>
            共优惠 <span>{discountMoney}</span> 元
          </span>
        </span>
        <a
          className='card__info-detail'
          // href={isMobile ? mobileLink : pcLink}
          href={`https://www.mi.com/buy/detail?product_id=${id}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='card__info-detail-btn'>详情</span>
        </a>
      </div>
    </section>
  )
}

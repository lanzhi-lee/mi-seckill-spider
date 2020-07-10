export default function Home() {
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
        <aside className='aside'>aside</aside>
        <main className='main'>main</main>
      </section>
      <footer className='footer'>footer</footer>
    </section>
  )
}

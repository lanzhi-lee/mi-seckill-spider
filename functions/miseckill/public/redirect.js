var href = window.location.href
if (href.includes('app.leezx.cn') && !href.startsWith('https')) {
  window.location.href = href.replace('http', 'https')
}
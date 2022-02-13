const redirectDict = {
  '/jekyll-setup': '/tech/2022/01/26/replit-for-jekyll-github-pages.html'
}

let pathname = window.location.pathname;
if (window.location.pathname in redirectDict) {
  const val = redirectDict[window.location.pathname];
  if (val.startsWith('http')) {
    window.location = val;
  }
  pathname = val;
}
window.location = 'https://joshcai.com' + pathname;
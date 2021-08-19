  // Navbar Mobile
  const menu = (selector = '.menu__icon') => {
    const navbarButton = document.querySelector(selector)
    navbarButton?.addEventListener('click', event => {
      event.target.closest(selector).parentNode.querySelector('.menu').classList.toggle('open')
      if (event.target.closest(selector).parentNode.querySelector('.menu').closest('.open')) {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
      } else {
        document.body.style.overflowY = 'auto';
        document.body.style.position = 'relative';
      }
    })
  }

  export default menu

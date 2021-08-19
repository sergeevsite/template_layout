// Recaptcha
const SITE_KEY = '6LeOO98aAAAAAIVQJ0im6Sw_sOnAp5BubqVHFwrn'

const callbackCaptchas = {
  create_captcha: (response) => {
    console.log('create_captcha -> success')
  }
}

let createCaptcha

const renderCaptchas = () => {
  
  grecaptcha.ready(() => {
    if(document.getElementById('create_captcha')) {
      createCaptcha = grecaptcha.render('create_captcha', {
        'sitekey' : SITE_KEY,
        'callback': callbackCaptchas['create_captcha'],
      });
    }
  })
}

const loadRecaptcha = () => {
  let script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
  script.async = true;
  script.onload = () => {
    renderCaptchas()
  }
  document.body.appendChild(script);
}

loadRecaptcha()

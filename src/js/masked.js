
//*! Need cleve.js *//
//Formatting
const formattingPhone = value => {
  const onlyNum = value
  if (onlyNum === '9' || onlyNum[0] === '9') {
      return onlyNum.replace(/^[9]/g, '+7 (9');
  } else if (onlyNum === '7' || onlyNum[0] === '7') {
      if (onlyNum[1] && onlyNum[1] !== '9') {
          return onlyNum[1].replace(/^[\d]/g, '+7 (9');
      }
      return onlyNum.replace(/^[7]/g, '+7');
  } else if (onlyNum === '8' || onlyNum[0] === '8') {
      return onlyNum.replace(/^[8]/g, '+7');
  } else if (onlyNum === '+') {
      return onlyNum.replace(/[\+]/i, '');
  } else {
      return onlyNum.replace(/^[\d]/g, '+7');
  }
}

const onlyNumber = (fieldId) => {
  const field = document.getElementById(fieldId)

  field.addEventListener('input', event => {
    if(field.dataset.mask === 'phone') {
      if(/[^0-9\+\s\(\)\-]/g.test(event.target.value)) return event.target.value = ''
      event.target.value = formattingPhone(event.target.value)
    } else {
      if(/[^0-9]/g.test(event.target.value)) return event.target.value = ''
    }
  })
}

const onlyEnglish = (fieldId) => {
  const field = document.getElementById(fieldId)

  field.addEventListener('input', event => {
    if(/[А-Яа-яЁё]/g.test(event.target.value)) return event.target.value = ''
  })
}

//Mask Phone
const fieldMaskPhone = document.querySelectorAll('[data-mask="phone"]')

fieldMaskPhone.forEach(field => {
  onlyNumber(field.id)
  new Cleave(field, {
    delimiters: ["", " (", ") ", "-", "-", "-"],
    blocks: [1, 1, 3, 3, 2, 2],
    delimiterLazyShow: true
  })
})

//Mask Email
const fieldMaskEmail = document.querySelectorAll('[data-mask="email"]')

fieldMaskEmail.forEach(field => {
  onlyEnglish(field.id)
})
  //*! jQuery and jQuery validation *//
  
  //Validation
  const errorMessages = {
    required: 'Обязательное поле',
    email: 'Формат поля не верный',
    phoneLength: 'Телефон введен не полностью'
  }

  $.validator.addMethod("customEmail", (value, element, regexp) => {
    var re = new RegExp(regexp);
    return re.test(value);
  }, errorMessages.email);

  $.validator.addMethod("customPhoneLength", (value, element, minLength) => {
    if(value.replace(/[^0-9]/g, '').length === minLength) {
      return true
    } else {
      return false
    }
  }, errorMessages.phoneLength);

  $('#createForm').validate({
    errorElement: "span",
    errorClass: "invalid",
    submitHandler: (form, event) => {
      event.preventDefault()

      if(grecaptcha.getResponse(createCaptcha) !== '') {
        // form.submit()
        // Send Form
        document.querySelector('[data-modal="create"]').classList.remove('open')
        document.querySelector('[data-modal="message"]').classList.add('open')
      }
    },
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        customEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      },
      phone: {
        required: true,
        customPhoneLength: 11
      },
      company: {
        required: true,
      }
    },
    messages: {
      name: {
        required: errorMessages.required
      },
      email: {
        required: errorMessages.required
      },
      phone: {
        required: errorMessages.required
      },
      company: {
        required: errorMessages.required
      }
    }
  })

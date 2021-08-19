// Faq
const faqContainer = document.querySelector('.faq'),
  faqQuestions = faqContainer && faqContainer.querySelectorAll('.faq-questions li'),
  faqAnswer = faqContainer && faqContainer.querySelectorAll('.faq-answers p')

if (faqQuestions && faqAnswer) {
  faqQuestions[0].classList.add('active')
  faqAnswer[0].classList.add('active')

  faqQuestions.forEach((quest, iQuest) => {
    quest.addEventListener('click', event => {
      event.target.parentNode.querySelectorAll('li').forEach(item => {
        item.classList.remove('active')
      })
      event.target.classList.add('active')

      faqAnswer.forEach((answer, iAnswer) => {
        answer.classList.remove('active')
        faqAnswer[iQuest].classList.add('active')
      })
    })

  })
}
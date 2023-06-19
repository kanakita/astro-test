/**
 * accordion
 */
export default function accordion() {
  const button = document.querySelector(
    '[data-trigger="accordion"]'
  );
  const buttonClass = document.querySelector('.js-accordion-trigger')
  if(buttonClass === null) return
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const body = document.body;
    body.dataset.showAccordion === 'true' ? body.dataset.showAccordion = 'false' : body.dataset.showAccordion = 'true'
    body.dataset.showAccordion === 'true' ? buttonClass.innerHTML = '閉じる' : buttonClass.innerHTML = '続きを見る'
  }, false)
}
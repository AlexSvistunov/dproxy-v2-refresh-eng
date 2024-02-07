const guideBoxes = document.querySelectorAll('.guide-box__inner');

guideBoxes.forEach(guideBox => {
  console.log(guideBox);
  guideBox.addEventListener('click', () => {
    toggleAccordion(guideBox);
  });

  guideBox.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      toggleAccordion(guideBox);
    }
  });
});

function toggleAccordion(guideBox) {
  const innerContent = guideBox.closest('.guide-api__box').querySelector('.guide-api__content');

  if (innerContent) {
    guideBox.closest('.guide-api__box').classList.toggle('box--active');
    if (guideBox.closest('.guide-api__box').classList.contains('box--active')) {
      guideBox.closest('.guide-api__box').style.maxHeight = guideBox.closest('.guide-api__box').scrollHeight + 'px';
      innerContent.setAttribute('aria-hidden', 'false');
      guideBox.closest('.guide-api__box').setAttribute('aria-expanded', 'true');
    } else {
      guideBox.closest('.guide-api__box').style.maxHeight = null;
      innerContent.setAttribute('aria-hidden', 'true');
      guideBox.closest('.guide-api__box').setAttribute('aria-expanded', 'false');
    }
  }
}

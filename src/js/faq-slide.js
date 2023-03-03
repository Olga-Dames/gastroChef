const btnRef = document.querySelectorAll('.faq__item');

btnRef.forEach(btn => {
  btn.addEventListener('click', function () {
    const parent = btn.parentNode;

    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
    } else {
      document
        .querySelectorAll('.faq__list')
        .forEach(child => child.classList.remove('active'));
      parent.classList.add('active');
    }
  });
});

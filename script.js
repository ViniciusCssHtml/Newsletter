function validate() {
  const btn = document.querySelector('button');
  const update = document.querySelector('.update');
  const article = document.querySelector('article');
  const ok = document.querySelector('.enviado');
  const button = document.querySelector('.button');

  btn.addEventListener('click', validt);

  function validt(event) {
    event.preventDefault();
    const input = document.querySelector('#email');
    const error = document.querySelector('.error');
    const value = input.value;

    if (!isValidEmail(value)) {
      error.classList.add('ativo');
      input.style.border = '1px solid red';
    } else {
      error.classList.remove('ativo');
      input.style.border = '';
      input.value = '';
      update.classList.add('ativo');
      article.classList.add('ativo');
      ok.innerText = value;
    }
  }

  button.addEventListener('click', () => {
    article.classList.remove('ativo');
    update.classList.remove('ativo');
  });

  function isValidEmail(email) {
    // Usando uma expressão regular simples para validar o formato do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
validate();

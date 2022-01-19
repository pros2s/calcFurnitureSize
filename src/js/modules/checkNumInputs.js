const checkNumInputs = selector => {
  const numInputs = document.querySelectorAll(selector);

  //for all numver inputs
  numInputs.forEach(item => {
    item.addEventListener('input', () => {
      //deliting all NOT digits
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default checkNumInputs;
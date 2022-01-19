import checkNumInputs from "./checkNumInputs";

const forms = state => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'loading....',
    succes: 'Succes!',
    failure: 'Error'
  };

  //function of realiton posting data process
  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;//visual message for post loading
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text();//returning text massage of data
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();

      //block of create visual message of submit process
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      //class FormData to create template of data
      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData('assets/server.php', formData)
      .then(res => {
        console.log(res);
        statusMessage.textContent = message.succes;
      })
      .catch(() => statusMessage.textContent = message.failure)//failure if something is wrong
      //always clearing inputs and deliting messages(after 5sec)
      .finally(() => {
        clearInputs();

        setTimeout(() => {
          statusMessage.remove();
        }, 5000);
      });
    });
  });
};

export default forms;
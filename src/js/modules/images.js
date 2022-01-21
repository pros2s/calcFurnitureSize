const images = () => {
  const imagesSection = document.querySelector('.works'),
        imgPopup = document.createElement('div'),
        bigImage = document.createElement('img');

  imgPopup.classList.add('popup_images');
  imagesSection.appendChild(imgPopup);

  imgPopup.style.cssText = 'justify-content: center; align-items: center;';
  imgPopup.style.display = 'none';

  imgPopup.appendChild(bigImage);

  imagesSection.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      bigImage.setAttribute('src', target.parentNode.getAttribute('href'));
      bigImage.classList.add('adaptiveImg');
    }

    if (target && target.matches('div.popup_images')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;
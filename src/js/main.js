//Importing every modules to main file for module configuration
import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

//Main function wich works when DOM content has loaded
window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  //Modals functions
  let modalState = {};//object to fill itself data of calc modal
  changeModalState(modalState);//filling modalState
  modals();//function for popup modals

  //Calls tab function for every elements with tabs
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', '.after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');

  forms(modalState);

  let deadline = '2023-01-30';
  timer('.container1', deadline);

  images();
});
const tabsButton = document.querySelectorAll('.tabs-product__button');
const tabsDesk = document.querySelector('.tabs-product__tabs-desk');
const tabsTabl = document.querySelector('.tabs-product__tabs-tabl');
const tabsDelivery = document.querySelector('.tabs-product__tabs-delivery');
const tabsVideo = document.querySelector('.tabs-product__tabs-video');
 

tabsButton.forEach((item) => {
   onTabClick(item);
});

// tabsButton.forEach(onTabClick); либо так

function onTabClick(item) {
   item.addEventListener('click', () => {
      let currentButton = item;
      let tabId = currentButton.getAttribute('data-tab'); // получаем загчение атрибута т.е айди
      let currentTab = document.querySelector(tabId); // мы как-бы связываем 17 и 18 строку
      if( !currentButton.classList.contains('tabs-product__button_active') ) {
         tabsButton.forEach((item) => {
            item.classList.remove('tabs-product__button_active');
         });
         tabsDesk.classList.remove('active');
         tabsTabl.classList.remove('active');
         tabsDelivery.classList.remove('active');
         tabsVideo.classList.remove('active');
   
         currentButton.classList.add('tabs-product__button_active');
         currentTab.classList.add('active');
      }
      
   });
};

document.querySelector('.tabs-product__button').click();


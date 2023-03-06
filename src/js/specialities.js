//====================programe type==============================

const specProgBtn = document.querySelectorAll(
  '.specialities__programe-type--btn'
);
const specProgBtnlist = document.querySelector(
  '.specialities__programe-type--list'
);

specProgBtnlist.addEventListener('click', e => {
  makeActiveEL(e, specProgBtn);
});

//=====================diet programe==========================

const dietTypeBtnList = document.querySelector(
  '.specialities__diet-type--list'
);
const dietTypeBtn = document.querySelectorAll('.specialities__diet-type--btn');
const dietDescEL = document.querySelectorAll('.specialities__diet-descr--item');

dietTypeBtnList.addEventListener('click', e => {
  makeActiveEL(e, dietTypeBtn);
  dietDescEL.forEach(descr => {
    if (descr.dataset.active === e.target.dataset.active) {
      descr.classList.add('active');
      return;
    }
    descr.classList.remove('active');
  });
});
//=========================schedule=================================

const scheduleDayList = document.querySelector(
  '.specialities__schedule-day--list'
);
const scheduleDayBtn = document.querySelectorAll(
  '.specialities__schedule-day--btn'
);

//-------------change from day to day------------
const d = new Date();

scheduleDayBtn.forEach(day => {
  if (day.dataset.day == d.getDay()) {
    day.classList.add('active');
  }
});

//-------------change manually-----------------

scheduleDayList.addEventListener('click', e => {
  makeActiveEL(e, scheduleDayBtn);
});

//==========make btn active==========================================

function makeActiveEL(event, btnArr) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  if (event.target.classList.contains('active')) {
    return;
  }

  btnArr.forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');
}

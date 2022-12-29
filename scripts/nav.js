$('.NavSide').insertAdjacentHTML(
  'afterend',
  `<div class="NavSideOverlay hide" onclick="clickNavSideOverlay()"></div>`
);

const clickNavSideOverlay = () => {
  hideNaveSideOverlay();
  closeNaveSide();
  bodyUnlockScroll();
};

$('#InitNavSide').addEventListener('click', () => {
  showNaveSideOverlay();
  bodyLockScroll();
});

$('#InitNavSide2').addEventListener('click', () => {
  hideNaveSideOverlay();
  bodyUnlockScroll();
});

const showNaveSideOverlay = () => {
  $('.NavSideOverlay').classList.remove('hide');
};

const hideNaveSideOverlay = () => {
  $('.NavSideOverlay').classList.add('hide');
};

const closeNaveSide = () => {
  $('#InitNavSide2').click();
};

const bodyLockScroll = () => {
  $('body').classList.add('lock-scroll');
};

const bodyUnlockScroll = () => {
  $('body').classList.remove('lock-scroll');
};

const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.text');
const Yes = document.querySelector('.Yes');
const No = document.querySelector('.No');

const wrapperRect = wrapper.getBoundingClientRect();
const noRect = No.getBoundingClientRect();

Yes.addEventListener('click', () => {
   window.location.href = 'index2.html';
});

No.addEventListener('mouseover', () => {
   const x = Math.floor(Math.random() * (wrapperRect.width - noRect.width)) + 1;
   const y = Math.floor(Math.random() * (wrapperRect.height - noRect.height)) + 1;
 
   No.style.position = 'absolute';
   No.style.left = x + 'px';
   No.style.top = y + 'px';
   
});
let ham = document.querySelector(".ham");
let list = document.querySelector(".list");
let nav = document.querySelector(".header");
let firstdiv = document.querySelectorAll(".slide")[0];
let slide = document.querySelectorAll(".slide");
let counter = 0;
let links = document.querySelectorAll(".links");

links.forEach((o) => {
   o.onclick = () => {
      scroller(o.innerText);
   };
});

const scroller = (rec) => {
   let elem = document.getElementById(`${rec}`);
   elem.scrollIntoView();
   ham.click();
};

const Next = () => {
   if (counter < slide.length - 1) {
      counter++;
      console.log(counter);
      slideDiv();
   }
};

const Prev = () => {
   if (!(counter <= 0)) {
      counter--;
      console.log(counter);
      slideDiv();
   }
};

const slideDiv = () => {
   slide.forEach((slide) => {
      slide.style.transform = `translateX(-${
         counter * (firstdiv.clientWidth + 10)
      }px)`;
   });
};
ham.addEventListener("click", () => {
   ham.classList.toggle("active");
   nav.classList.toggle("active");
   list.classList.toggle("active");
});
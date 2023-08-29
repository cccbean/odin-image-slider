const imgList = [...document.querySelectorAll(".mySlides")];
const circleDivs = document.querySelectorAll(".circle");
console.log(imgList);

let slideIndex = 0;

const hideImgs = () => {
  imgList.forEach((img, index) => {
    if (index !== slideIndex) {
      img.style.display = "none";
    } else {
      img.style.display = "block";
    }
  });
  circleDivs.forEach((circle, index) => {
    if (index !== slideIndex) {
      circle.style.backgroundColor = "gray";
    } else {
      circle.style.backgroundColor = "black";
    }
  });
};
hideImgs();

circleDivs.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    circleDivs.forEach((circle) => {
      circle.style.backgroundColor = "gray";
    });
    circle.style.backgroundColor = "black";
    slideIndex = index;
    hideImgs();
  });
});

const rightBtn = document.querySelector(".right-btn");
rightBtn.addEventListener("click", () => {
  if (slideIndex === 3) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }
  hideImgs();
});

const leftBtn = document.querySelector(".left-btn");
leftBtn.addEventListener("click", () => {
  if (slideIndex === 0) {
    slideIndex = 3;
  } else {
    slideIndex -= 1;
  }
  hideImgs();
});

const intervalFunction = () => {
  if (slideIndex === 3) {
    slideIndex = 0;
  } else {
    slideIndex += 1;
  }
  hideImgs();
};

setInterval(intervalFunction, 5000);

//탭메뉴
const tabList = document.querySelectorAll(".gnb li");
const contents = document.querySelectorAll(".cont");
let activeCont = "";

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
      contents[j].style.display = "none";
    }
    this.parentNode.classList.add("is_on");

    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  });
}

//타이핑 효과
const text = document.querySelector(".typing-box .typing");

// 글자 모음
const letters = [
  "열정적인",
  "공부하는",
  "즐거운"
];

// 글자 입력 속도
const speed = 150;
let k = 0;

// 타이핑 효과
const typing = async () => {
  const letter = letters[k].split("");

  while (letter.length) {
    await wait(speed);
    text.innerHTML += letter.shift();
  }

  // 잠시 대기
  await wait(800);

  // 지우는 효과
  remove();
}

// 글자 지우는 효과
const remove = async () => {
  const letter = letters[k].split("");

  while (letter.length) {
    await wait(speed);

    letter.pop();
    text.innerHTML = letter.join("");
  }
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  k = !letters[k + 1] ? 0 : k + 1;
  typing();
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}
// 초기 실행
setTimeout(typing, 1500);

//일러스트레이터 모달창 띄우기
const imgBtn = document.querySelectorAll(".img-btn");
const imgModal = document.querySelectorAll(".modal-img");
const modalBtn = document.querySelectorAll(".modal-img button");


imgBtn[0].addEventListener("click", function (e) {
  imgModal[0].style.display = "flex";
  document.querySelector(".modal-bg").style.display = "block";
})
imgBtn[1].addEventListener("click", function (e) {
  imgModal[1].style.display = "flex";
  document.querySelector(".modal-bg").style.display = "block";
})

for(var i = 0; i < modalBtn.length; i++){
  modalBtn[i].addEventListener("click", function() {
    document.querySelector(".modal-bg").style.display = "none";
    for(var i = 0; i < imgModal.length; i++) {
      imgModal[i].style.display = "none";
    }
  })
}

document.querySelector(".modal-bg").addEventListener("click", function() {
  document.querySelector(".modal-bg").style.display = "none";
  for(var i = 0; i < imgModal.length; i++) {
    imgModal[i].style.display = "none";
  }
})

//슬라이드
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
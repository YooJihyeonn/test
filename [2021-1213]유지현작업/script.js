// h3에 마우스호버했을 때 h3이 옆으로 이동하면서
// 보이지 않던 이미지가 보이고 마우스 커서를 따라다녔으면 좋겟어
// 그리고 정해진 영역에서 벗어나면 다음 영역에 이미지로 바뀌였으면 좋겟어
const imagesFadein = document.querySelector("#diffserimg");
const container = document.querySelector(".container");
const textTag = document.querySelector(".diffsertext");
console.log(container);
console.log(imagesFadein);

container.addEventListener("mouseenter", function () {
  imagesFadein.animate(
    [
      {
        height: "10vh",
        width: "10vw",
        opacity: 0,
      },
      {
        height: "20vh",
        width: "20vw",
        opacity: 0.5,
      },
      {
        height: "35vh",
        width: "30vw",
        opacity: 1,
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
  imagesFadein.classList.remove("hidden");
  textTag.style.marginLeft = "25vh";
});
container.onmousemove = (e) => {
  // 마우스의 좌표값 clientX,Y 현재 보이는 브라우저 기준 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정
  const x = e.pageX;
  const y = e.pageY;
  imagesFadein.style.left = x - 250 + "px";
  imagesFadein.style.top = y - 140 + "px";
};
container.addEventListener("mouseout", function () {
  imagesFadein.classList.add("hidden");
  textTag.style.marginLeft = "0";
});

const fabricImg = document.querySelector("#fabircimg");
const fabricCon = document.querySelector(".containerfabric");
const fabricTag = document.querySelector(".fabrictext");
console.log(fabricImg);
console.log(fabricCon);
console.log(fabricTag);
console.dir(fabricTag);

fabricCon.addEventListener("mouseenter", function () {
  fabricImg.animate(
    [
      {
        height: "10vh",
        width: "10vw",
        opacity: 0,
      },
      {
        height: "20vh",
        width: "20vw",
        opacity: 0.5,
      },
      {
        height: "35vh",
        width: "30vw",
        opacity: 1,
      },
    ],
    {
      duration: 500,
      fill: "forwards",
    }
  );
  fabricImg.classList.remove("hidden");
  fabricTag.style.marginRight = "25vh";
});
fabricCon.onmousemove = (e) => {
  // pageX,Y 문서 전체를 기준으로 삼음 스크롤 화면 포함해서 측정
  const x = e.pageX;
  const y = e.pageY;
  fabricImg.style.left = x - 250 + "px";
  fabricImg.style.top = y - 140 + "px";
};
fabricCon.addEventListener("mouseout", function () {
  fabricImg.classList.add("hidden");
  fabricTag.style.marginRight = "0";
});

// const deoimg = document.querySelector('#deoimg');
// const deoCon = document.querySelector('.containerdeo');
// const deoTag = document.querySelector('.deotext');
// console.log(deoimg);
// console.log(deoCon);
// console.log(deoTag);

// deoCon.addEventListener('mouseenter', function () {
//   deoimg.animate([{
//       height: '10vh',
//       width: '10vw',
//       opacity: 0
//     },
//     {
//       height: '20vh',
//       width: '20vw',
//       opacity: 0.5
//     },
//     {
//       height: '35vh',
//       width: '30vw',
//       opacity: 1
//     }
//   ], {
//     duration: 500,
//     fill: 'forwards'
//   });
//   deoimg.classList.remove('hidden');
//   deoTag.style.marginLeft = "25vh";
// });
// deoCon.onmousemove = (e) => {
//   // pageX,Y 문서 전체를 기준으로 삼음 스크롤 화면 포함해서 측정
//   const x = e.pageX;
//   const y = e.pageY;
//   deoimg.style.left = (x - 250) + "px";
//   deoimg.style.top = (y - 140) + "px";
// };
// deoCon.addEventListener('mouseout', function () {
//   deoimg.classList.add('hidden');
//   deoTag.style.marginLeft = "";
// });

// const handimg = document.querySelector('#handimg');
// const handCon = document.querySelector('.containerhand');
// const handTag = document.querySelector('.handtext');
// console.log(handimg);
// console.log(handCon);
// console.log(handTag);

// handCon.addEventListener('mouseenter', function () {
//   handimg.animate([{
//       height: '10vh',
//       width: '10vw',
//       opacity: 0
//     },
//     {
//       height: '20vh',
//       width: '20vw',
//       opacity: 0.5
//     },
//     {
//       height: '35vh',
//       width: '30vw',
//       opacity: 1
//     }
//   ], {
//     duration: 500,
//     fill: 'forwards'
//   });
//   handimg.classList.remove('hidden');
//   handTag.style.marginRight = "25vh";
// });
// handCon.onmousemove = (e) => {
//   // pageX,Y 문서 전체를 기준으로 삼음 스크롤 화면 포함해서 측정
//   const x = e.pageX;
//   const y = e.pageY;
//   handimg.style.left = (x - 250) + "px";
//   handimg.style.top = (y - 140) + "px";
// };
// handCon.addEventListener('mouseout', function () {
//   handimg.classList.add('hidden');
//   handTag.style.marginRight = "";
// });

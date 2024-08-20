window.addEventListener('scroll', function() {
  var navbar = document.getElementById('header_pc');
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
var canvas = document.querySelector(".main_s1_process_b2_d");
var ctx = canvas.getContext("2d");

// 이미지 배열 생성
var images = [];
for (var i = 1; i <= 49; i++) {
    var img = new Image();
    img.src = "../image/mo/home-hero-sq-" + String(i - 1).padStart(3, '0') + ".webp"; // 파일명 형식 지정
    images.push(img);
}

// 애니메이션 함수
var currentIndex = 0;
var delay = 50; // 지연 시간 (밀리초)
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[currentIndex], 0, 0, canvas.width, canvas.height);
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(animate, delay);
    }

    // 애니메이션 시작
    animate();

const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 4000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      720: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 'auto',
      },
    },
  });
  const card = document.querySelectorAll('.swiper-slide');
  const test = document.querySelectorAll('.main_s2_process_e2')

  card.forEach(item => {
    item.addEventListener('mouseover', () => {
      swiper.autoplay.stop();
      
    });

    item.addEventListener('mouseout', () => {
      swiper.autoplay.start();
    });
  });
  const toggleButton = document.querySelector('.f1_c2_a1');


  const over = document.querySelector('.f1_c2');
  const arrowImg = toggleButton.querySelector('.f1_c2_a1 img');
  const menus = document.querySelectorAll('.f1_c2_a2');

  let isRotated = false;

  toggleButton.addEventListener('click', function() {
      
      isRotated = !isRotated; // 토글 상태 변경
      arrowImg.style.transform = isRotated ? 'rotate(180deg)' : 'rotate(0deg)';
      
      // 모든 메뉴에 대해 'expanded' 클래스 토글
      menus.forEach(menu => menu.classList.toggle('expanded'));
  });

  // 마우스가 밖으로 나갈 때도 원래 상태로 되돌리기
  over.addEventListener('mouseleave', function() {
      arrowImg.style.transform = 'rotate(0deg)';
      menus.forEach(menu => menu.classList.remove('expanded'));
  });

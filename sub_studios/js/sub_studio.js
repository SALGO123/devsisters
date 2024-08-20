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

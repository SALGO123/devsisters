window.addEventListener('scroll', function() {
  // 각 요소의 위치 감지
  checkVisibility('.motion');
});

// 요소의 가시성 확인 함수
function checkVisibility(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

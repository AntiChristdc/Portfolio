document.querySelector('.letter').addEventListener('mouseover', function() {
    document.getElementById('symbols').classList.add('active');
});
  
document.querySelector('.letter').addEventListener('mouseout', function() {
    document.getElementById('symbols').classList.remove('active');
});

const stars = document.querySelectorAll('.star');

const animateElement = document.querySelector('.letter');

animateElement.addEventListener('mouseover', function() {
    stars.forEach(star => {
        star.style.opacity = '1';
    });
});

animateElement.addEventListener('mouseout', function() {
    stars.forEach(star => {
        star.style.opacity = '0';
    });
});

  

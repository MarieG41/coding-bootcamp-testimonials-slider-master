const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const testimonialOne = document.querySelector('.One');
const testimonialTwo =document.querySelector('.testimonial-2');

function nextTest() {
        next.addEventListener('click', function() {
        testimonialTwo.classList.remove('hidden');
        testimonialOne.classList.add('hidden');
    })
}
function PreviousTest() {
    prev.addEventListener('click', function() {
        testimonialTwo.classList.add('hidden');
        testimonialOne.classlist.remove('hidden');
    }) 
}

nextTest();
PreviousTest();

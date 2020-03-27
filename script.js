const portfolio=document.getElementById('content_icon');

document.addEventListener("scroll", onscroll);

function onscroll(){
   const curPos=window.scrollY;
   const positionID=document.querySelectorAll('#content-wrapper>section,#content-wrapper>header');
   const links=document.querySelectorAll('#menu a');

    positionID.forEach((el)=>{
        if(el.offsetTop-90 <= curPos &&(el.offsetTop + el.offsetHeight-90)>curPos){
            links.forEach((a) =>{
                a.classList.remove('active');
                if(el.getAttribute('id')===a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
        }
    })
}
// portfolio
portfolio.onclick= function (event) {
    if(event.target.tagName !=='IMG' ){ return }
    portfolio.querySelectorAll('img').forEach(el => el.classList.remove('content_icon'));
    event.target.classList.add('content_icon');
};

// Btn Slider Phone
const btnDisplayPhoneLeft=document.getElementById('btn_phone_left');
const inactiveDisplayLeft= document.getElementById('display_phone_left');

btnDisplayPhoneLeft.addEventListener('click',()=>{
    inactiveDisplayLeft.classList.toggle('displayPhone_left');
});
const btnDisplayPhoneRight=document.getElementById('btn_phone_right');
const inactiveDisplayRight= document.getElementById('display_phone_right');

btnDisplayPhoneRight.addEventListener('click',()=>{
    inactiveDisplayRight.classList.toggle('displayPhone_right');
});

//END Btn Slider Phone
// Slider
/*
const slides =  document.getElementById('slidesContainer').children;

document.getElementById('rightSliderBtn').onclick = toggleSlides;
document.getElementById('leftSliderBtn').onclick = toggleSlides;

function toggleSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.toggle('active')
    }
}

 */
// End Slider

// Portfolio
const portfolioButtons=document.getElementById('portfolio_button').children;
const portfolioButtonsActive=document.getElementById('portfolio_button');
portfolioButtonsActive.addEventListener('click',(event)=>{
    portfolioButtonsActive.querySelectorAll('button').forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
});


for (let i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].addEventListener('click', handleClickPortfolioBtn);
}

const itemsContainer = document.getElementById('content_icon');
const arrIcon = [];
itemsContainer.querySelectorAll('div').forEach((element) => {
    arrIcon.push(element);
});

function reBuildArray() {
 let newArray = arrIcon.sort(function(){
        return Math.random() - 0.5;
    });
    return newArray
}

function handleClickPortfolioBtn() {
    const sortedArray = reBuildArray();
    for(let i = 0; i < sortedArray.length; i++){
        itemsContainer.append(sortedArray[i]);
    }
}
// END Portfolio


//document.getElementById('blockFormBtn').onsubmit()

const contactForm = document.getElementById('contactForm');

document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
  let subject = document.getElementById('subject').value.toString();
  let describe = document.getElementById('describe').value.toString();
  if (!subject) {
      subject = ' Without subject';
      document.getElementById('subject_result').innerText = subject;
  }
  if (!describe) {
      describe=' Without description';
      document.getElementById('describe_result').innerText = describe;
  }
  document.getElementById('subject_result').innerText = subject;
  document.getElementById('describe_result').innerText = describe;
  document.getElementById('message_block').classList.remove('hidden');
});

const closeBtn=document.getElementById('close_btn');
closeBtn.addEventListener('click',()=>{
    contactForm.reset();
    document.getElementById('message_block').classList.add('hidden');
});

// СЛАЙДЕР

let slide = document.querySelectorAll('.slide');
let currentSlide = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentSlide = (n + slide.length) % slide.length;
}

function hideItem(direction) {
    isEnabled = false;
    slide[currentSlide].classList.add(direction);
    slide[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}
function showItem(direction) {
    slide[currentSlide].classList.add('active', direction);
    slide[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}
function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}


document.querySelector('.left-button').addEventListener('click', function() {
    if (isEnabled) {
        previousItem(currentSlide);
    }
});

document.querySelector('.right-button').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentSlide);
    }
});
let HandleDescription = document.querySelector("#describe");

HandleDescription.onkeyup  = function(event) {
    if (event.target.value.length > 500) {
        event.target.value = event.target.value.substring(0, 500);
    }
};











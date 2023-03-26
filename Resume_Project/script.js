var homeClick = document.getElementById('home');
var aboutClick = document.getElementById('about');
var skillClick = document.getElementById('skills');
var experienceClick = document.getElementById('experience')
var educationClick = document.getElementById('education');
var portfolioClick = document.getElementById('portfolio');
var contactClick = document.getElementById('contacts-scroll');


aboutClick.addEventListener('click',function(){
    let targetPos = 100;
    let currentPos = 0;
    let scrollInterval = setInterval(function(){
        window.scrollBy(0,20);
        currentPos+=20;
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            currentPos = 0;
        }
    },20);
});

skillClick.addEventListener('click',function(){
    let targetPos = 650;
    let currentPos = 0;
    let scrollInterval = setInterval(function(){
        window.scrollBy(0,20);
        currentPos+=20;
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            currentPos = 0;
        }
    },20);
});

experienceClick.addEventListener('click',function(){
    let targetPos = 1100;
    let currentPos = 0;
    let scrollInterval = setInterval(function(){
        window.scrollBy(0,20);
        currentPos+=20;
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            currentPos = 0;
        }
    },20);
});

educationClick.addEventListener('click',function(){
    let targetPos = 2010;
    let currentPos = 0;
    let scrollInterval = setInterval(function(){
        window.scrollBy(0,20);
        currentPos+=20;
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            currentPos = 0;
        }
    },20);
});

portfolioClick.addEventListener('click',function(){
    let targetPos = 2900;
    let currentPos = 0;
    let scrollInterval = setInterval(function(){
        window.scrollBy(0,20);
        currentPos+=20;
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            currentPos = 0;
        }
    },20);
});

contactClick.addEventListener('click',function(){
    let targetPos = 3000;
    let currentPos = 0;
    let scrollInterval = setInterval(function(){
        window.scrollBy(0,20);
        currentPos+=20;
        if(currentPos >= targetPos){
            clearInterval(scrollInterval);
            currentPos = 0;
        }
    },20);
});

// var educationSection = document.getElementById('education');
// console.log(educationSection);

// var coordinates = educationSection.getBoundingClientRect();
// console.log(coordinates);

// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);

// for(var i = 0; i < navMenuAnchorTags.length;i++){
//     navMenuAnchorTags[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId)
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top <= 0){
//                 clearInterval(interval);
//                 return;
//             }
//             window.scrollBy(0,30);
//             console.log(targetSectionCoordinates);
//         },20);
//     });
// }

var interval;

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTags);
for(var i = 0; i < navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        console.log(targetSection);
        interval = setInterval(scrollVertically,20, targetSection);
    });
}

function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,30);
}
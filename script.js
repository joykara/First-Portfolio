window.addEventListener('scroll', onScroll);

function onScroll(){
    var onScrolls = document.querySelectorAll('.onScroll');

    for(var i = 0; i < onScrolls.length; i++){

        var windowheight = window.innerHeight;
        var onScrolltop = onScrolls[i].getBoundingClientRect().top;
        var onScrollpoint = 10;

        if(onScrolltop < windowheight - onScrollpoint){
          onScrolls[i].classList.add('active');
        }
        else{
          onScrolls[i].classList.remove('active');
        }
      }
}

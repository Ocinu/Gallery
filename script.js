
$(function(){
    var img = $('.img_cont');
    
    var number_img = img.length;
    var index_slide = 0;
    var next_slide;
    var anim = 0;
    var auto;
    for(let i = 0; i < number_img; i++){
        if(i == 0){
            $('.circle_cont').append(`<div class="circle now" value=${i}></div>`);
        }else{
            $('.circle_cont').append(`<div class="circle"  value=${i}></div>`);
        }
        
    }

    var circle = $('.circle');
    for(let i = 0; i < circle.length; i++){
        $(circle[i]).click(function(){
            for(let i = 0; i < circle.length; i++){
                if($(circle[i]).hasClass('now')){
                    $(circle[i]).removeClass('now');
                }
            }
            if(!$(this).hasClass('now')){
                $(this).addClass('now');
            }
            next_slide = $(this).attr('value');
                    if($('.img_cont:animated').length == 0){
                        anim++;
                        if(next_slide > index_slide){
                            $(img[next_slide]).css('left', '100%');
                            var left = -100;
                        }else{
                            $(img[next_slide]).css('left', '-100%');
                            var left = 100;
                        }
                        $(img[next_slide]).addClass('active');
                        $('.img_cont').animate({
                            left: `+=${left}%`
                        }, 1000);
                        setTimeout(function(){
                            $(img[index_slide]).removeClass('active');
                            $('.img_cont').css('left', '0');
                            $(circle[index_slide]).removeClass('now');
                            $(circle[next_slide]).addClass('now');
                            index_slide = next_slide;
                            anim--;
                        }, 1010);
                    }else{
                        if(anim < 2){
                            anim++;
                            setTimeout(function(){
                                $(img[next_slide]).css('left', '100%');
                                $(img[next_slide]).addClass('active');
                                $('.img_cont').animate({
                                    left: '+=-100%'
                                }, 1000);
                                setTimeout(function(){
                                    $(img[index_slide]).removeClass('active');
                                    $('.img_cont').css('left', '0');
                                    index_slide = next_slide;
                                    anim--;
                                }, 1010);
                            }, 1020*anim);
                        }
                    }
        })
    }

    $('#next').click(function(){
        if($('.img_cont:animated').length == 0){
            anim++;
            if(index_slide == number_img - 1){
                next_slide = 0;
            }else{
                next_slide = index_slide + 1;
            }
            $(img[next_slide]).css('left', '100%');
            $(img[next_slide]).addClass('active');
            $('.img_cont').animate({
                left: '+=-100%'
            }, 1000);
            setTimeout(function(){
                $(img[index_slide]).removeClass('active');
                $('.img_cont').css('left', '0');
                $(circle[index_slide]).removeClass('now');
                $(circle[next_slide]).addClass('now');
                index_slide = next_slide;
                anim--;
            }, 1010);
        }else{
            if(anim < 2){
                anim++;
                setTimeout(function(){
                    if(index_slide == number_img - 1){
                        next_slide = 0;
                    }else{
                        next_slide = index_slide + 1;
                    }
                    $(img[next_slide]).css('left', '100%');
                    $(img[next_slide]).addClass('active');
                    $('.img_cont').animate({
                        left: '+=-100%'
                    }, 1000);
                    setTimeout(function(){
                        $(img[index_slide]).removeClass('active');
                        $('.img_cont').css('left', '0');
                        $(circle[index_slide]).removeClass('now');
                        $(circle[next_slide]).addClass('now');
                        index_slide = next_slide;
                        anim--;
                    }, 1010);
                }, 1020*anim);
            }
        }
    })

    $('#first').click(function(){
        if($('.img_cont:animated').length == 0){
            anim++;
            if(index_slide != 0){
                next_slide = 0;
                $(img[next_slide]).css('left', '-100%');
                $(img[next_slide]).addClass('active');
                $('.img_cont').animate({
                    left: '+=100%'
                }, 1000);
                setTimeout(function(){
                    $(img[index_slide]).removeClass('active');
                    $('.img_cont').css('left', '0');
                    $(circle[index_slide]).removeClass('now');
                    $(circle[next_slide]).addClass('now');
                    index_slide = next_slide;
                    anim--;
                }, 1010);
            }   
        }else{
            anim++;
            setTimeout(function(){
                if(index_slide != 0){
                    next_slide = 0;
                    $(img[next_slide]).css('left', '-100%');
                    $(img[next_slide]).addClass('active');
                    $('.img_cont').animate({
                        left: '+=100%'
                    }, 1000);
                    setTimeout(function(){
                        $(img[index_slide]).removeClass('active');
                        $('.img_cont').css('left', '0');
                        $(circle[index_slide]).removeClass('now');
                        $(circle[next_slide]).addClass('now');
                        index_slide = next_slide;
                        anim--;
                    }, 1010);
                }   
            }, 1020*anim);
        }
    })

    $('#last').click(function(){
        if($('.img_cont:animated').length == 0){
            anim++;
            if(index_slide != number_img - 1){
                next_slide = number_img -1;
                $(img[next_slide]).css('left', '100%');
                $(img[next_slide]).addClass('active');
                $('.img_cont').animate({
                    left: '-=100%'
                }, 1000);
                setTimeout(function(){
                    $(img[index_slide]).removeClass('active');
                    $('.img_cont').css('left', '0');
                    $(circle[index_slide]).removeClass('now');
                    $(circle[next_slide]).addClass('now');
                    index_slide = next_slide;
                    anim--;
                }, 1010);
            }   
        }else{
            anim++;
            setTimeout(function(){
                if(index_slide != number_img -1){
                    next_slide = number_img - 1;
                    $(img[next_slide]).css('left', '100%');
                    $(img[next_slide]).addClass('active');
                    $('.img_cont').animate({
                        left: '-=100%'
                    }, 1000);
                    setTimeout(function(){
                        $(img[index_slide]).removeClass('active');
                        $('.img_cont').css('left', '0');
                        $(circle[index_slide]).removeClass('now');
                        $(circle[next_slide]).addClass('now');
                        index_slide = next_slide;
                        anim--;
                    }, 1010);
                }   
            }, 1020*anim);
        }
    })

    $('#auto').click(function(){
        $('#stop_auto').addClass('active');
        $('#auto').removeClass('active');
        $('#last').removeClass('active');
        $('#first').removeClass('active');
        $('#next').removeClass('active');
        auto = setInterval(() => {
            if($('.img_cont:animated').length == 0){
                anim++;
                if(index_slide == number_img - 1){
                    next_slide = 0;
                }else{
                    next_slide = index_slide + 1;
                }
                $(img[next_slide]).css('left', '100%');
                $(img[next_slide]).addClass('active');
                $('.img_cont').animate({
                    left: '+=-100%'
                }, 1000);
                setTimeout(function(){
                    $(img[index_slide]).removeClass('active');
                    $('.img_cont').css('left', '0');
                    $(circle[index_slide]).removeClass('now');
                    $(circle[next_slide]).addClass('now');
                    index_slide = next_slide;
                    anim--;
                }, 1010);
            }else{
                anim++;
                setTimeout(function(){
                    if(index_slide == number_img - 1){
                        next_slide = 0;
                    }else{
                        next_slide = index_slide + 1;
                    }
            
                    $(img[next_slide]).css('left', '100%');
                    $(img[next_slide]).addClass('active');
                    $('.img_cont').animate({
                        left: '+=-100%'
                    }, 1000);
                    setTimeout(function(){
                        $(img[index_slide]).removeClass('active');
                        $('.img_cont').css('left', '0');
                        $(circle[index_slide]).removeClass('now');
                        $(circle[next_slide]).addClass('now');
                        index_slide = next_slide;
                        anim--;
                    }, 1010);
                }, 1020*anim);
            }
        }, 3000);
    })

    $('#stop_auto').click(function(){
        clearInterval(auto);
        $('#auto').addClass('active');
        $('#next').addClass('active');
        $('#first').addClass('active');
        $('#last').addClass('active');
        $('#stop_auto').removeClass('active');
    })
})

// Tooltips
let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

//   стока ниже по умолчанию имеет значение "coords.top - tooltipElem.offsetHeight - 5"
  let top = coords.top + tooltipElem.offsetHeight + 15;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};
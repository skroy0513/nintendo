function init(){
  let imgHeight = $('.img-box').height();
  document.querySelector('.banner').style.height = `${imgHeight}px`;
}
init();
$(window).on('resize',function(){
  let imgHeight = $('.img-box').height();
  document.querySelector('.banner').style.height = `${imgHeight}px`;
})

// image slider
let count = 0;

function Next(){
  $('.img-box').eq(count).animate({'left': '-100%'}, 600, function(){
    $(this).css({'left' : '100%'})
  })
  count = (count + 1) % 8;
  $('.img-box').css({'left' : '100%'}).eq(count).animate({'left': '0'}, 600)
}

let countnum = 0
function IndicatorNext(){
  $('.cleft').eq(countnum).css({'display' : 'none'})
  countnum = (countnum + 1) % 8;
  $('.cleft').eq(countnum).css({'display': 'block'}, 600)
}

$('.right').on('click',function(){
  Next();
  IndicatorNext();
  clearInterval(timer);
  timer = setInterval(function(){
    Next();
    IndicatorNext();
  }, 6000);
})

let timerToggle = false;

let timer = setInterval(function(){
  Next();
  IndicatorNext();
}, 6000);

//이전으로 가는 애니메이션 만들기
function Prev (){
  $('.img-box').eq(count).animate({'left':'100%'}, 600, function(){
    $(this).css({'left' : '-100%'})
  });
  count = (count - 1 + 8) % 8;
  $('.img-box').css({'left':'-100%'}).eq(count).animate({'left': '0'}, 600)
}

function IndicatorPrev(){
  $('.cleft').eq(countnum).css({'display' : 'none'});
  countnum = (countnum - 1 + 8) % 8;
  $('.cleft').eq(countnum).css({'display': 'block'}, 600);
}

$('.left').on('click', function(){
  Prev();
  IndicatorPrev();
  clearInterval(timer);
  timer = setInterval(function(){
    Next();
    IndicatorNext();
  }, 6000);
});

// menu open
$('.mainMap>li').on('click', function(){

  let subMap = $(this).find('.subMap');
  let notSubMap = $('.mainMap>li').not($(this)).find('.subMap');
  let updown = $(this).find('a');
  let notUpdown = $('.mainMap>li').not($(this)).find('a');
  let curHeight = subMap.height();
  let autoHeight = subMap.css('height', 'auto').height();
  
  if(curHeight === 0){
    subMap.height(curHeight).animate({'height': autoHeight}, 200);
    notSubMap.animate({'height' : "0"}, 200);
  }else{
    subMap.animate({'height' : "0"}, 200)
  }
  if(updown.hasClass('opened')){
    updown.removeClass('opened')
  }else{
    updown.addClass('opened');
    notUpdown.removeClass('opened');
  }
})

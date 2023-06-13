$(function () {

    $('.main_slide').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
    });

    $('.mobile_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
        $('h1').toggleClass('on');
    });


    //원을 그리며 도는 텍스트 애니메이숀

    // function ctxt(t) {
    //     let newTxt = [];
    //     [...t].forEach((it, idx) => {
    //         newTxt.push(`<span>${it}</span>`)
    //     });
    //     const txtContainer = document.querySelector('.cicle_txt');
    //     txtContainer.innerHTML = newTxt.join('');
    //     const spanTxt = document.querySelectorAll('.cicle_txt span');
    //     spanTxt.forEach((it, idx) => {
    //         console.log(it)
    //         it.style.cssText = `
    //         position: absolute;
    //         top: 0;
    //         left: 50%;
    //         transform: translate(-50% , 0) rotate(${(360 / spanTxt.length) * idx}deg);
    //         transform-origin: center bottom;
    //         height: 50%;
    //         `
    //     })
    // }

    // ctxt('스케치업 교재 2권씩 부족합니다. 지금 좀 부탁드리겠습니다.');


    // 스크롤에 반응하는 메뉴 만들 때 좋은 거.
    //https://www.laneige.com/kr/ko/best-new/new-product/
    // let pg = 0;
    // $(window).on('scroll', function () {
    //     let { pageYOffset } = window;
    //     pageYOffset > pg ? $('.gr_hover h2').addClass('on') : $('.gr_hover h2').removeClass('on');
    //     pg = pageYOffset <= 0 ? 0 : pageYOffset;
    //     console.log(pageYOffset, pg);
    // })
});
window.addEventListener("DOMContentLoaded", function () {
    "use strict";



    const up_btn = this.document.getElementById("link-top");


    var ScrollFunc = function () {
        var y = window.scrollY;
        var x = window.innerWidth;
       
        if (x > 1000) {
            if (y >= 300) {
                up_btn.classList.remove("hide");
            } else {
                up_btn.classList.add("hide");
            }
        }
        else{
            up_btn.classList.add("hide");
        }
      
    };

    window.addEventListener("scroll", ScrollFunc);



    //бургер
    const bur_content = document.getElementById("burger-bg");
    const bur_btn = document.getElementById('menu-burger');
    const bur_closeBtn = document.getElementById("burger-content__close");



    bur_btn.addEventListener("click", function () {
        bur_content.classList.remove("hide");
        bur_btn.style.display = "none";
        bur_closeBtn.addEventListener("click", closeModal);
        function closeModal() {

            bur_content.classList.add("hide");
            bur_btn.style.display = "inline";
            bur_closeBtn.removeEventListener("click", closeModal);

            bur_content.removeEventListener("click", hideModal);
        }
        bur_content.addEventListener("click", hideModal);

        function hideModal(event) {

            if (event.target === bur_content) {
                bur_btn.style.display = "inline";
                bur_content.classList.add("hide");
            }
        }
    });

    //,бургер



    //модальное 
    const modal = document.getElementById("modal-block_bg");
    const btn = document.getElementsByClassName("modal-btn");
    const closeBtn = document.getElementById("modal-block__close");

    for (var i = 0; i < btn.length; i++) {

        btn[i].addEventListener("click", function () {
            modal.classList.remove("hide");
            closeBtn.addEventListener("click", closeModal);
            function closeModal() {
                modal.classList.add("hide");
                closeBtn.removeEventListener("click", closeModal);

                modal.removeEventListener("click", hideModal);
            }
            modal.addEventListener("click", hideModal);
            // Закрытие при клике вне зоны модального окна
            function hideModal(event) {
                if (event.target === modal) {
                    modal.classList.add("hide");
                }
            }
        });
    }
    //модальное 



    //табы 
    function hideEl(el) {
        el.classList.add("hide");
    }
    function showEl(el) {
        el.classList.remove("hide");
    }

    let tab_btn = document.getElementsByClassName("change-content-btn"),
        tab_btn_container = document.getElementById("container-btn"),
        tab_btn_Text = document.querySelectorAll(".change-content-btn__text"),
        tab_content = document.querySelectorAll(".content-container");


    tab_btn_container.addEventListener("mouseover", function (event) {
        let target = event.target;

        if (target && target.classList.contains("change-content-btn")) {

            for (var i = 0; i < tab_btn.length; i++) {
                // showEl(tab_btn_Text[i]);
                // tab_btn[i].classList.add("change-content-btn_anim");
                if (target == tab_btn[i]) {
                    tab_btn[i].addEventListener("mouseover", function (event) {
                        let target = event.target;



                        showEl(tab_btn_Text[i]);


                    });
                    tab_btn[i].addEventListener("mouseout", function (event) {
                        let target = event.target;


                        hideEl(tab_btn_Text[i]);

                    });
                    tab_btn[i].addEventListener("click", function () {

                        for (var j = 0; j < tab_content.length; j++) {
                            if (!tab_content[j].classList.contains("content-hide")) {
                                tab_content[j].classList.add("content-hide");

                            }
                        }
                        tab_content[i].classList.remove("content-hide");
                    });
                    break;
                }

            }
        }
    });
    //табы


    let accordeon_btn = document.querySelectorAll(".accordeon-el__slide-down-btn"),
        accordeon_content = document.querySelectorAll(".accordeon-el__info-sec"),
        accordeon_btn_cont = document.querySelectorAll(".accordeon-el"),
        accorderon_sec = document.getElementById("accordeon-sec__main-sec");

    //console.log(accordeon_btn);

    const accordion = () => {
        const accordeon_btn = document.querySelectorAll(".accordeon-el__slide-down-btn");
        accordeon_btn.forEach((btn) => {
            btn.addEventListener("click", function () {
                this.classList.toggle("accordeon-el__slide-down-btn_animation");
                console.log("клик по кнопке");
                this.nextElementSibling.classList.toggle("info-hide");
            });
        });
    };
    accordion();


    // accorderon_sec.addEventListener("click", function (event) {
    //     let target2 = event.target;


    //     if (target2 && target2.classList.contains("accordeon-el__slide-down-btn")) {

    //         for (var i = 0; i < accordeon_btn.length; i++) {

    //             if (target2 == accordeon_btn[i]) {
    //                 console.log(target2);
    //                 accordeon_btn[i].classList.toggle("accordeon-el__slide-down-btn_animation");
    //                 console.log("клик по кнопке");
    //                 accordeon_content[i].classList.remove("info-hide");


    //             }
    //             else {
    //                 break;
    //             }
    //         }


    //     }
    // });
    // for (var i = 0; i < accordeon_btn.length; i++) {


    //     accordeon_btn[i].addEventListener("click", function (event) {
    //         accordeon_btn[i].classList.toggle("accordeon-el__slide-down-btn_animation");
    //         console.log("клик по кнопке");
    //         accordeon_content[i].classList.toggle("info-hide");


    //     });

    //     break;
    // }


    const next_btn = this.document.getElementById('slider-next'),
        prev_btn = this.document.getElementById('slider-prev'),
        content_slider = this.document.getElementsByClassName("slider__main-sec");
    let active_number = 0;

    for (var i = 0; i < content_slider.length; i++) {
        if (!content_slider[i].classList.contains("active")) {
            content_slider[i].style.display = "none";
        }

    }

    next_btn.addEventListener("click", function () {

        // if (!content_slider[active_number].classList.contains("slider__main-sec_animation_over_dir")){
        //     content_slider[active_number].classList.remove("slider__main-sec_animation_over_dir");
        // }

        content_slider[active_number].style.display = "none";
        content_slider[active_number].classList.remove("slider__main-sec_animation_over_dir");
        active_number++;
        if (active_number == content_slider.length) {
            content_slider[content_slider.length - 1].style.display = "none";
            active_number = 0;

        }
        console.log(active_number);
        content_slider[active_number].style.display = "flex";

    });

    prev_btn.addEventListener("click", function () {

        content_slider[active_number].classList.remove("slider__main-sec_animation_over_dir");
        content_slider[active_number].style.display = "none";
        active_number--;
        if (active_number < 0) {
            content_slider[0].style.display = "none";
            active_number = content_slider.length - 1;

        }
        console.log(active_number);

        content_slider[active_number].classList.add("slider__main-sec_animation_over_dir");
        content_slider[active_number].style.display = "flex";

    });

});

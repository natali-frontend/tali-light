document.addEventListener('DOMContentLoaded', function () {

    const header = document.getElementsByClassName("header")[0];
    const burger = document.getElementsByClassName("burger")[0];
    const menu = document.getElementsByClassName("menu")[0];
    burger.addEventListener("click", function () {
        this.classList.toggle("active");
        menu.classList.toggle("mobile-menu");
        header.classList.toggle("header-mobile")
    });

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 60) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    // Smooth animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const id = anchor.getAttribute("href");
            const block = document.querySelector(id);
            if (window.innerWidth < 992)  {
                burger.classList.toggle("active");
                menu.classList.toggle("mobile-menu");
                header.classList.toggle("header-mobile");
            }
            window.scroll({
                top: block.offsetTop - 100,
                left: 0,
                behavior: 'smooth'
            });
        });
    });

    //Popup
    const btn = document.getElementsByClassName("btn-support");
    const popup = document.getElementsByClassName("popup")[0];
    const close = document.getElementsByClassName("close")[0];
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            popup.style.display = "flex";
        });
    }
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

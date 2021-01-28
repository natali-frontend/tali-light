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
            if (window.innerWidth < 992) {
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

    // Contact Form
    const submit = $("#submit");
    const email = $("#email");
    const message = $("#message");
    const error = $(".error");

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    submit.on('click', function (e) {
        e.preventDefault();
        if (email.val() === '' || message.val() === '') {
            console.log(1)
            error.html('Please Fill Required Fields');
        } else if (!validateEmail(email.val())) {
            console.log(2)
            error.html('Please enter a valid email address');
        } else {
            console.log(3)
            $.ajax({
                url: './ajax/mail.php',
                type: 'POST',
                cache: false,
                data: {
                    'email': email.val(),
                    'message': message.val(),
                },
                dataType: 'html',
                beforeSend: function () {
                    submit.attr('disabled', 'true')
                    console.log("Wait, data is being sent to the server");
                },
                success: function (data) {
                    if (!data) {
                        console.log('There were errors, the message was not sent');
                    } else {
                        // clear form fields
                        $("#contact-form").trigger("reset");
                        submit.attr('disabled', 'false');
                        console.log('Your request has been sent');
                    }
                }
            });
        }

    });
});

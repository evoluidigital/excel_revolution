/* ==========================================
   EXCEL REVOLUTION PREMIUM
   SCRIPT.JS
========================================== */


/* Inicialização das animações */

AOS.init({

    duration:900,

    once:true,

    offset:80

});



/* ==========================================
   SIMULADOR DE TEMPO
========================================== */


const slider = document.getElementById("timeSlider");

const sliderText = document.getElementById("sliderText");



if(slider && sliderText){


    slider.addEventListener("input", function(){


        let value = this.value;


        if(value >= 60){

            sliderText.innerHTML = value + " minutos";

        }else{

            sliderText.innerHTML = value + " minutos";

        }


    });


}



/* ==========================================
   HEADER COM EFEITO AO ROLAR
========================================== */


window.addEventListener("scroll",function(){


    const header = document.getElementById("header");


    if(window.scrollY > 50){


        header.style.background = 
        "rgba(5,11,20,.85)";


        header.style.backdropFilter =
        "blur(15px)";


    }else{


        header.style.background =
        "transparent";


    }



});



/* ==========================================
   ANIMAÇÃO SUAVE NOS LINKS
========================================== */


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(this.getAttribute("href"));


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }

      /* ==========================================
   CONTADOR DE RESULTADOS
========================================== */


const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;


        const increment = target / 100;



        if(current < target){


            counter.innerText =
            Math.ceil(current + increment);


            setTimeout(updateCounter,20);


        }else{


            counter.innerText = target;


        }


    };


    updateCounter();


});



/* ==========================================
   BOTÕES COM EFEITO DE CLIQUE
========================================== */


const buttons = document.querySelectorAll("button, .btn");


buttons.forEach(button => {


    button.addEventListener("click", function(){


        this.style.transform = "scale(.95)";


        setTimeout(()=>{


            this.style.transform = "";


        },150);


    });


});



/* ==========================================
   ALERTA DE SAÍDA INTELIGENTE
========================================== */


let exitShown = false;


document.addEventListener("mouseleave", function(e){


    if(e.clientY <= 0 && !exitShown){


        exitShown = true;


        const popup =
        document.getElementById("exitPopup");


        if(popup){


            popup.style.display="flex";


        }


    }


});



/* ==========================================
   FECHAR POPUP
========================================== */


const closePopup =
document.querySelector(".closePopup");


if(closePopup){


    closePopup.addEventListener("click",()=>{


        document.getElementById("exitPopup").style.display="none";


    });


}



/* ==========================================
   DIGITAÇÃO AUTOMÁTICA PREMIUM
========================================== */


const typing =
document.querySelector(".typing");


if(typing){


const text =
typing.innerHTML;


typing.innerHTML="";


let index=0;


function typeEffect(){


    if(index < text.length){


        typing.innerHTML += text.charAt(index);


        index++;


        setTimeout(typeEffect,50);


    }


}


typeEffect();


}
      /* ==========================================
   ANIMAÇÃO DE ELEMENTOS FLUTUANTES
========================================== */


const floatingElements =
document.querySelectorAll(".floating");


floatingElements.forEach(element => {


    let position = 0;


    setInterval(()=>{


        position += 0.05;


        element.style.transform =
        `translateY(${Math.sin(position)*10}px)`;


    },30);


});



/* ==========================================
   DETECTOR DE SEÇÃO VISÍVEL
========================================== */


const sections =
document.querySelectorAll("section");


const observer =
new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("active");


        }


    });


},{

    threshold:0.2

});



sections.forEach(section=>{


    observer.observe(section);


});



/* ==========================================
   PROTEÇÃO CONTRA CLIQUES DUPLOS
========================================== */


document.querySelectorAll(".btn").forEach(btn=>{


    btn.addEventListener("click",function(){


        if(this.classList.contains("clicked")){


            return;


        }


        this.classList.add("clicked");


        setTimeout(()=>{


            this.classList.remove("clicked");


        },1500);


    });


});



/* ==========================================
   ANIMAÇÃO DE NÚMEROS AUTOMÁTICA
========================================== */


function animateNumbers(){


const numbers =
document.querySelectorAll(".number");


numbers.forEach(number=>{


    const value =
    number.getAttribute("data-number");


    let count = 0;


    const interval =
    setInterval(()=>{


        count += Math.ceil(value / 80);


        if(count >= value){


            count=value;


            clearInterval(interval);


        }


        number.innerHTML=count;


    },25);



});


}



const numberSection =
document.querySelector(".numbers");


if(numberSection){


const numberObserver =
new IntersectionObserver(entries=>{


    if(entries[0].isIntersecting){


        animateNumbers();


        numberObserver.disconnect();


    }


});


numberObserver.observe(numberSection);


}
      /* ==========================================
   MENU MOBILE
========================================== */


const menuButton =
document.querySelector(".menu-toggle");


const menu =
document.querySelector(".menu");


if(menuButton && menu){


    menuButton.addEventListener("click",()=>{


        menu.classList.toggle("open");


        menuButton.classList.toggle("active");


    });


}



/* ==========================================
   FECHAR MENU AO CLICAR NO LINK
========================================== */


document.querySelectorAll(".menu a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(menu){


            menu.classList.remove("open");


        }


        if(menuButton){


            menuButton.classList.remove("active");


        }


    });


});



/* ==========================================
   VALIDAÇÃO DE FORMULÁRIOS
========================================== */


const forms =
document.querySelectorAll("form");


forms.forEach(form=>{


    form.addEventListener("submit",function(e){


        const inputs =
        this.querySelectorAll("input[required]");


        let valid=true;



        inputs.forEach(input=>{


            if(input.value.trim()===""){


                valid=false;


                input.classList.add("error");


            }else{


                input.classList.remove("error");


            }


        });



        if(!valid){


            e.preventDefault();


        }


    });


});



/* ==========================================
   EFEITO PARALLAX PREMIUM
========================================== */


window.addEventListener("scroll",()=>{


    const parallax =
    document.querySelectorAll(".parallax");


    parallax.forEach(item=>{


        let speed =
        item.getAttribute("data-speed") || 0.3;


        let y =
        window.scrollY * speed;


        item.style.transform =
        `translateY(${y}px)`;


    });


});



/* ==========================================
   ANIMAÇÃO DE CARREGAMENTO DA PÁGINA
========================================== */


window.addEventListener("load",()=>{


    document.body.classList.add("loaded");


});

    });


});

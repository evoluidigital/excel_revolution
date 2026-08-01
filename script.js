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
       /* ==========================================
   SISTEMA FAQ - ABRIR E FECHAR PERGUNTAS
========================================== */


const faqItems =
document.querySelectorAll(".faq-item");


faqItems.forEach(item=>{


    const question =
    item.querySelector(".faq-question");


    if(question){


        question.addEventListener("click",()=>{


            faqItems.forEach(other=>{


                if(other !== item){


                    other.classList.remove("active");


                }


            });



            item.classList.toggle("active");


        });


    }


});



/* ==========================================
   DESTAQUE AUTOMÁTICO NOS CTA
========================================== */


const ctas =
document.querySelectorAll(".cta, .btn-primary");



ctas.forEach(cta=>{


    setInterval(()=>{


        cta.classList.add("pulse");


        setTimeout(()=>{


            cta.classList.remove("pulse");


        },800);



    },5000);


});



/* ==========================================
   COPIAR TEXTO PARA ÁREA DE TRANSFERÊNCIA
========================================== */


const copyButtons =
document.querySelectorAll(".copy-btn");



copyButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const text =
        button.getAttribute("data-copy");



        if(text){


            navigator.clipboard.writeText(text);



            button.innerHTML =
            "Copiado ✓";



            setTimeout(()=>{


                button.innerHTML =
                "Copiar";


            },2000);


        }


    });


});



/* ==========================================
   ANIMAÇÃO DE BENEFÍCIOS
========================================== */


const benefits =
document.querySelectorAll(".benefit-card");



benefits.forEach((card,index)=>{


    card.style.transitionDelay =
    `${index * 100}ms`;



});



/* ==========================================
   SCROLL PROGRESS BAR
========================================== */


const progressBar =
document.querySelector(".progress-bar");



window.addEventListener("scroll",()=>{


    if(progressBar){


        let scrollTop =
        document.documentElement.scrollTop;


        let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


        let progress =
        (scrollTop / height) * 100;



        progressBar.style.width =
        progress + "%";


    }


});
       /* ==========================================
   LAZY LOAD DE IMAGENS
========================================== */


const lazyImages =
document.querySelectorAll("img[data-src]");


if(lazyImages.length){


const imageObserver =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const image =
            entry.target;


            image.src =
            image.dataset.src;


            imageObserver.unobserve(image);


        }


    });


});



lazyImages.forEach(img=>{


    imageObserver.observe(img);


});


}



/* ==========================================
   ANIMAÇÃO DE CARDS AO PASSAR O MOUSE
========================================== */


const cards =
document.querySelectorAll(".card, .feature-card");



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.transform =
        "translateY(-8px)";


    });



    card.addEventListener("mouseleave",()=>{


        card.style.transform =
        "translateY(0)";


    });



});



/* ==========================================
   MODO FOCO PARA CTA PRINCIPAL
========================================== */


const mainCTA =
document.querySelector(".main-cta");



if(mainCTA){


    window.addEventListener("scroll",()=>{


        let position =
        mainCTA.getBoundingClientRect();



        if(position.top < window.innerHeight &&
           position.bottom > 0){


            mainCTA.classList.add("visible");


        }


    });


}



/* ==========================================
   DETECÇÃO DE DISPOSITIVO
========================================== */


const isMobile =
window.innerWidth <= 768;



if(isMobile){


    document.body.classList.add("mobile");


}else{


    document.body.classList.add("desktop");


}



/* ==========================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================== */


const year =
document.querySelector(".current-year");



if(year){


    year.innerHTML =
    new Date().getFullYear();


}



/* ==========================================
   FINALIZAÇÃO DO SCRIPT
========================================== */


console.log(
"Excel Revolution Premium carregado com sucesso!"
);

    });


});
/* ==========================================
   BACK TO TOP - BOTÃO VOLTAR AO TOPO
========================================== */


const backTop =
document.querySelector(".back-top");



window.addEventListener("scroll",()=>{


    if(backTop){


        if(window.scrollY > 500){


            backTop.classList.add("show");


        }else{


            backTop.classList.remove("show");


        }


    }


});



if(backTop){


    backTop.addEventListener("click",()=>{


        window.scrollTo({


            top:0,


            behavior:"smooth"


        });


    });


}



/* ==========================================
   DETECÇÃO DE LINKS EXTERNOS
========================================== */


document.querySelectorAll("a").forEach(link=>{


    const href =
    link.getAttribute("href");



    if(href && href.startsWith("http")){


        link.setAttribute(
            "target",
            "_blank"
        );


        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );


    }


});



/* ==========================================
   BLOQUEIO DE ERROS SILENCIOSOS
========================================== */


window.addEventListener(
"error",
function(event){


    console.warn(
        "Elemento não carregado:",
        event.target
    );


},
true);



/* ==========================================
   EXPERIÊNCIA PREMIUM MOBILE
========================================== */


let lastScroll = 0;


window.addEventListener("scroll",()=>{


    const currentScroll =
    window.scrollY;



    const header =
    document.getElementById("header");



    if(header){


        if(currentScroll > lastScroll &&
           currentScroll > 150){


            header.style.transform =
            "translateY(-100%)";


        }else{


            header.style.transform =
            "translateY(0)";


        }


    }



    lastScroll =
    currentScroll;


});



/* ==========================================
   INICIALIZAÇÃO FINAL
========================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


    document.body.classList.add(
        "js-loaded"
    );


});

//Animação no scroll

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else{
            entry.target.classList.remove("show")

        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))


const buttonWhatsApp = document.querySelector(".containerButtonWhatsApp")

buttonWhatsApp.addEventListener('click', ()=>{
    window.location.href = "https://api.whatsapp.com/send/?phone=5567996485777&text&type=phone_number&app_absent=0"
})

const sections = document.querySelectorAll('section')
const iconHome = document.querySelector('.fa-house-chimney');
const iconUser = document.querySelector('.fa-user');
const btnBurger = document.querySelector('.menu-burger button i');
const list = document.querySelector('.menu-burger ul');
const enlaces = document.querySelectorAll('nav .menu-burger ul li a');

const options = {rootMargin: '-10px', threshold: "0.9"}

const observer = new IntersectionObserver((entries)=> {
  entries.forEach(e => {
    
    if(e.isIntersecting){
      if(e.target.id === "home"){
        iconHome.classList.add('text-white')
      }else{iconHome.classList.remove('text-white')}
      if(e.target.id === "about"){
        iconUser.classList.add('text-white')
      }else{iconUser.classList.remove('text-white')}

    }
  })
}, options)

sections.forEach(section => observer.observe(section))

const navExpand = e =>{
  if(!e.target.parentNode.parentNode.classList.contains('expand')){
    e.target.parentNode.parentNode.classList.remove('reduce')
    e.target.parentNode.parentNode.classList.add('expand')
    
    setTimeout(() => {
      list.style.display = "flex"  
    }, 200);

    sections.forEach(section => section.style.display ="none")

  }else{
    e.target.parentNode.parentNode.classList.remove('expand')
    e.target.parentNode.parentNode.classList.add('reduce')
    list.style.display = "none"

    sections.forEach(section => section.style.display ="flex")
  }
}

const redirect = () =>{
   
   btnBurger.parentNode.parentNode.classList.remove('expand')
   btnBurger.parentNode.parentNode.classList.add('reduce')
   list.style.display = "none"

   sections.forEach(section => section.style.display ="flex")
}




btnBurger.addEventListener('click',navExpand)
enlaces.forEach(a => a.addEventListener('click',redirect))

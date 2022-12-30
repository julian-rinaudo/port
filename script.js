
const sections = document.querySelectorAll('section')
const iconHome = document.querySelector('.fa-house-chimney');
const iconUser = document.querySelector('.fa-user');

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


const sections = document.querySelectorAll("section");
const iconHome = document.querySelector(".fa-house-chimney");
const iconUser = document.querySelector(".fa-user");
const iconContact = document.querySelector(".fa-paper-plane");
const iconProyect = document.querySelector(".fa-briefcase");
const btnBurger = document.querySelector(".menu-burger button i");
const list = document.querySelector(".menu-burger ul");
const enlaces = document.querySelectorAll("nav .menu-burger ul li a");
const navFIx = document.querySelector(".nav-menu");
const menuFix = document.querySelector(".nav-fix");
const iconMail = document.querySelector(".fa-envelope");
const iconPhone = document.querySelector(".fa-mobile-button");
const mail = document.querySelector("#p-mail");
const phoneNum = document.querySelector("#p-phone");

// tooltip
if (screen.width >= 992) {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
}

const options = { rootMargin: "10px", threshold: "0.9" };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.id === "home") {
        iconHome.classList.add("text-white");
      } else {
        iconHome.classList.remove("text-white");
      }
      if (e.target.id === "about") {
        iconUser.classList.add("text-white");
      } else {
        iconUser.classList.remove("text-white");
      }
      if (e.target.id === "proyect") {
        iconProyect.classList.add("text-white");
        menuFix.style.backgroundColor = "rgb(193, 18, 31)";
      } else {
        iconProyect.classList.remove("text-white");
        menuFix.style.backgroundColor = "";
      }
      if (e.target.id === "contact") {
        iconContact.classList.add("text-white");
      } else {
        iconContact.classList.remove("text-white");
      }
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));

const navExpand = (e) => {
  btnBurger.classList.add("rotate-diagonal-1");
  if (!e.target.parentNode.parentNode.classList.contains("expand")) {
    e.target.parentNode.parentNode.classList.remove("reduce");
    e.target.parentNode.parentNode.classList.add("expand");

    setTimeout(() => {
      list.style.display = "flex";
      btnBurger.classList.remove("bars-staggered");
      btnBurger.classList.add("fa-xmark");
      btnBurger.classList.remove("rotate-diagonal-1");
    }, 300);

    sections.forEach((section) => (section.style.display = "none"));
  } else {
    e.target.parentNode.parentNode.classList.remove("expand");
    e.target.parentNode.parentNode.classList.add("reduce");
    list.style.display = "none";

    setTimeout(() => {
      list.style.display = "none";
      btnBurger.classList.remove("fa-xmark");
      btnBurger.classList.remove("rotate-diagonal-1");
      btnBurger.classList.add("bars-staggered");
    }, 300);

    sections.forEach((section) => (section.style.display = "flex"));
  }
};

const redirect = () => {
  btnBurger.parentNode.parentNode.classList.remove("expand");
  btnBurger.parentNode.parentNode.classList.add("reduce");
  list.style.display = "none";

  sections.forEach((section) => (section.style.display = "flex"));
  btnBurger.classList.remove("fa-xmark");
  btnBurger.classList.add("bars-staggered");
};

//scroll
window.onscroll = function () {
  let y = window.scrollY;
  if (y > 0) {
    navFIx.classList.add("sombra");
  } else {
    navFIx.classList.remove("sombra");
  }
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});

const changeMail = () => {
  if (!iconMail.classList.contains("fa-envelope-open-text")) {
    iconMail.classList.remove("fa-envelope");
    iconMail.classList.add("fa-envelope-open-text");
    mail.classList.remove("d-none");
    mail.classList.add("scale-up-ver-top", "p-mail");
  } else {
    iconMail.classList.remove("fa-envelope-open-text");
    iconMail.classList.add("fa-envelope");
    mail.classList.add("d-none");
    mail.classList.remove("p-mail");
  }
};

const changePhone = () => {
  if (!iconPhone.classList.contains("fa-mobile-screen-button")) {
    iconPhone.classList.remove("fa-mobile-button");
    iconPhone.classList.add("fa-mobile-screen-button");
    phoneNum.classList.remove("d-none");
    phoneNum.classList.add("scale-up-ver-top", "p-phone");
  } else {
    iconPhone.classList.remove("fa-mobile-screen-button");
    iconPhone.classList.add("fa-mobile-button");
    phoneNum.classList.add("d-none");
    phoneNum.classList.remove("p-mail");
  }
};

btnBurger.addEventListener("click", navExpand);
enlaces.forEach((a) => a.addEventListener("click", redirect));
iconMail.addEventListener("click", changeMail);
iconPhone.addEventListener("click", changePhone);

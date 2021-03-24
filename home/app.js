const translate = document.querySelectorAll(".translate");
const titulo = document.querySelector(".titulo");
const header = document.querySelector("header");
const sombra = document.querySelector(".sombra");
const texto = document.querySelector(".texto");
const section = document.querySelector("section");
const img_Container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity")

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })

  opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height);
  })
  titulo.style.opacity = -scroll / (header_height / 2) + 1;
  sombra.style.opacity = `${scroll * 0.5 + 300}px`;
  texto.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`
  img_Container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -25 + 25}px)`
})
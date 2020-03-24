const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e) {
  span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout',function(e) {
  span.classList.remove('animated', 'rubberBand')
}))


const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')
const nodeBar = document.querySelector('.bar-nodejs')
const photo = document.querySelector('.bar-photo')
const illustrator = document.querySelector('.bar-illustrator')
const aftereffect = document.querySelector('.bar-aftereffect')
const num = document.querySelectorAll('.num')

TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

tl.fromTo(num, .50, {left: `0%`}, {left: `95%`})
  .fromTo(htmlBar, .50, {with: `0%`}, {width: `80%`, ease: Power4.easeOut})
  .fromTo(photo, .50, {with: `0%`}, {width: `70%`, ease: Power4.easeOut})
  .fromTo(cssBar, .50, {with: `0%`}, {width: `85%`, ease: Power4.easeOut})
  .fromTo(illustrator, .50, {with: `0%`}, {width: `85%`, ease: Power4.easeOut})
  .fromTo(jsBar, .50, {with: `0%`}, {width: `70%`, ease: Power4.easeOut})
  .fromTo(aftereffect, .50, {with: `0%`}, {width: `70%`, ease: Power4.easeOut})
  .fromTo(reactBar, .50, {with: `0%`}, {width: `75%`, ease: Power4.easeOut})
  .fromTo(nodeBar, .50, {with: `0%`}, {width: `50%`, ease: Power4.easeOut})

var scene = new ScrollMagic.Scene({
  triggerElement: ".skills",
  triggerHook: 1
})
  .setTween(tl)
  .addTo(controller);

scene.addIndicators();

const showRequiredCategory = event => {
  console.log(event.id)
  const getId = event.id 
  const links =document.querySelectorAll('.work-category button')
  for(i=0; i<links.length; i++) {
    if(links[i].hasAttribute('class')) {
      links[i].classList.remove('active')
    }
  }

  event.classList.add('active')
  const getCategory = document.querySelector(`.category-${getId}`)
  const categories = document.querySelectorAll('div[class ^= "category-"]')
  for(i=0; i<categories.length; i++) {
    if(categories[i].hasAttribute('class')) {
      categories[i].classList.remove('showCategory')
      categories[i].classList.add('hideCategory')

    }
  }
  getCategory.classList.remove('hideCategory')
  getCategory.classList.add('showCategory')
}
import { animate } from "motion";
const settings = {
  speed: 0.15
}
let currentAnimation
let lastScrollPosition

function animateFrame(vnode, els, startingPoint, settings) {
  // const pageYOffset = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
  const pageYOffset = window.pageYOffset
  let scrollPosition = pageYOffset
  let offset = scrollPosition * settings.speed

  if (scrollPosition > 0 && lastScrollPosition !== scrollPosition) {
    lastScrollPosition = scrollPosition

    currentAnimation = animate(
      els,
      {
        y: offset,
      },
      { easing: 'linear' }
    );
  }
  vnode.$animationFrame = window.requestAnimationFrame(animateFrame.bind(null, vnode, els, startingPoint, settings))
}

function parallax(vnode, els, startingPoint, settings) {
  vnode.$animationFrame = window.requestAnimationFrame(animateFrame.bind(null, vnode, els, startingPoint, settings))
}

const observerDirective = {
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el, binding, vnode, prevVnode) {
    const els = el.querySelectorAll('.parallax')
    const startingPoint = settings.startParallaxFromBottom
      ? window.innerHeight
      : (window.innerHeight / 2)

    const observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
        vnode.$animationFrame = parallax(vnode, els, startingPoint, settings)
      } else {
        el.classList.remove('is-visible')
        if (currentAnimation) {
          currentAnimation.finish()
        }
        window.cancelAnimationFrame(vnode.$animationFrame)
        delete vnode.$animationFrame
      }
    });

    vnode.$observer = observer
    vnode.$observer.observe(el);
  },

  // called before the parent component is unmounted
  beforeUnmount(el, binding, vnode, prevVnode) {
    if (vnode.$observer) {
      vnode.$observer.disconnect()
      vnode.$observer = null
    }
    if (vnode.$animationFrame) {
      if (currentAnimation) {
        currentAnimation.finish()
      }
      window.cancelAnimationFrame(vnode.$animationFrame)
      delete vnode.$animationFrame
    }
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("parallax", observerDirective)
});

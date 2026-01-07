const observerDirective = {
  // called when the bound element's parent component
  // and all its children are mounted.
  mounted(el, binding, vnode, prevVnode) {
    const observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      if (entry.isIntersecting) {
        el.classList.add('is-visible')
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
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("observe", observerDirective)
});

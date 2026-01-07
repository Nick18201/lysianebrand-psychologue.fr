import type { RouterConfig } from "@nuxt/schema";

// TODO: replace after rc.13 as this should be by default

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
};

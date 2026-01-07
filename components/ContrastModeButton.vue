<template>
  <button
    @click="onClick"
    aria-describedby="button-contrast"
    :title="state.hasContrastMode ? 'Réduire Contraste' : 'Augmenter Contraste'"
  >
    <span id="button-contrast">
      {{ state.hasContrastMode ? "Réduire Contraste" : "Augmenter Contraste" }}
    </span>
    <svg
      width="26"
      height="23"
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.7728 10.8018C25.6214 10.6015 22.8951 7.14727 18.8563 5.09475L20.0175 1.34013C20.1689 0.789452 19.866 0.188714 19.3107 0.0385289C18.7553 -0.111656 18.1495 0.188714 17.9981 0.739391L16.8874 4.2437C15.6757 3.84321 14.3631 3.54284 13 3.54284C5.98252 3.54284 0.479612 10.5014 0.227184 10.8018C-0.0757281 11.2023 -0.0757281 11.7029 0.227184 12.1034C0.429126 12.4037 5.52816 18.8116 12.1922 19.3122L11.4854 21.565C11.334 22.1157 11.6369 22.7164 12.1922 22.8666C12.2932 22.9167 12.3942 22.9167 12.4951 22.9167C12.9495 22.9167 13.3534 22.6163 13.5049 22.1657L14.4136 19.2121C20.7243 18.3611 25.5204 12.3537 25.7728 12.0533C26.0757 11.7029 26.0757 11.2023 25.7728 10.8018ZM2.44854 11.4526C3.91262 9.80053 8.1534 5.64542 13 5.64542C14.1107 5.64542 15.2214 5.89573 16.2816 6.24616L15.9282 7.34752C15.0699 6.74678 14.0611 6.44641 13 6.44641C10.2233 6.44641 7.95146 8.69918 7.95146 11.4526C7.95146 14.206 10.2233 16.4587 13 16.4587H13.101L12.8485 17.2597C8.05243 17.1596 3.91262 13.0545 2.44854 11.4526ZM13.7573 14.256C13.5049 14.3061 13.2524 14.3561 13 14.3561C11.3845 14.3561 10.0718 13.0545 10.0718 11.4526C10.0718 9.8506 11.3845 8.54899 13 8.54899C13.8583 8.54899 14.666 8.94949 15.2214 9.55023L13.7573 14.256ZM15.1204 17.0094L18.2 7.14727C20.6738 8.49893 22.6427 10.4513 23.5515 11.4526C22.2893 12.8543 19.0583 16.0582 15.1204 17.0094Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script setup>
const state = reactive({ hasContrastMode: false });

const onClick = () => {
  state.hasContrastMode = !state.hasContrastMode;
};

watch(state, (newState, oldState) => {
  if (window && window.document.documentElement) {
    if (newState.hasContrastMode) {
      window.document.documentElement.style.setProperty(
        "--color-fern-green",
        "var(--color-fern-green-contrast)"
      );
      window.document.documentElement.style.setProperty(
        "--color-sage-green",
        "var(--color-sage-green-contrast)"
      );
    } else {
      window.document.documentElement.style.setProperty(
        "--color-fern-green",
        "var(--color-fern-green-default)"
      );
      window.document.documentElement.style.setProperty(
        "--color-sage-green",
        "var(--color-sage-green-default)"
      );
    }
  }
});

onMounted(() => {
  if (window && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-contrast: more)");
    state.hasContrastMode = mediaQuery.matches;
  }
});
</script>

<style lang="postcss" scoped>
span {
  display: none;
}
</style>

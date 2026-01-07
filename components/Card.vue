<template>
  <div class="Card">
    <slot></slot>
  </div>
</template>

<style lang="postcss">
.Card {
  padding: 3rem;
  z-index: 1;
  position: relative;

  @apply relative;
  @apply rounded-sm xs:rounded-md;

  @screen xs {
    padding: 8rem 7rem;
  }
}
</style>

<template>
  <div class="background" v-parallax>
    <div class="feather feather--top parallax">
      <svg>
        <use xlink:href="#icon-feather" href="#icon-feather"></use>
      </svg>
    </div>
    <div class="feather feather--bottom parallax">
      <svg>
        <use xlink:href="#icon-feather" href="#icon-feather"></use>
      </svg>
    </div>
    <div class="twig twig--top parallax">
      <svg>
        <use xlink:href="#icon-twig1" href="#icon-twig1"></use>
      </svg>
    </div>
    <div class="twig twig--bottom parallax">
      <svg>
        <use xlink:href="#icon-twig2" href="#icon-twig2"></use>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.background {
  @apply overflow-hidden inset-0 absolute;
}

.feather {
  z-index: 0;
  @apply absolute;

  svg {
    @apply w-[25.7rem] h-[28.8rem];
  }

  &--top {
    left: -6rem;
    @apply top-6;

    svg {
      @apply text-cornflower-blue;
    }
  }
  &--bottom {
    right: -12rem;
    bottom: -11rem;
    svg {
      @apply text-blue;
    }
  }
}

.twig {
  z-index: 0;
  @apply absolute;

  svg {
    @apply text-blue;
  }

  &--top {
    left: 105rem;
    top: 36rem;
    svg {
      width: 5.5rem;
      height: 8.3rem;
    }
  }

  &--bottom {
    right: 16rem;
    bottom: 4rem;

    svg {
      width: 3rem;
      height: 4.4rem;
    }
  }
}
</style>

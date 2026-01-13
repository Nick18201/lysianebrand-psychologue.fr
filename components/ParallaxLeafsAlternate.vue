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
    transform: scale3d(-1, 1, 1);
    @apply w-[25.7rem] h-[28.8rem];
  }

  &--top {
    right: -6rem;
    @apply top-6;

    svg {
      color: #6B6BFC;
    }
  }
  &--bottom {
    left: -12rem;
    bottom: -11rem;
    svg {
      color: #6B6BFC;
    }
  }
}

.twig {
  z-index: 0;
  @apply absolute;

  svg {
    transform: scale3d(-1, 1, 1);
    color: #FF3939;
  }

  &--top {
    top: 2rem;
    right: 2rem;

    @screen xs {
      top: 36rem;
    }

    @screen wide {
      right: 25rem;
    }

    svg {
      width: 5.5rem;
      height: 8.3rem;
    }
  }

  &--bottom {
    left: 2rem;
    bottom: 0rem;

    @screen xs {
       left: 16rem;
       bottom: 5rem;
    }

    @screen wide {
      bottom: 30rem;
    }

    svg {
      width: 3rem;
      height: 4.4rem;
    }
  }
}
</style>

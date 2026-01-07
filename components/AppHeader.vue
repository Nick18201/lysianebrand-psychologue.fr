<template>
  <header :class="{ 'is-open': state.isOpen }">
    <div>
      <NuxtLink class="main-link no-link" to="/">
        Lysiane Brand
        <span>Psychologue</span>
        <span class="line"></span>
      </NuxtLink>

      <button class="menu-button" @click="toggle">
        {{ state.isOpen ? "Fermer" : "Menu" }}
      </button>
      <nav>
        <ul>
          <li>
            <NuxtLink class="link" to="/psychologie/" @click="close"
              >Psychologie</NuxtLink
            >
          </li>

          <li>
            <NuxtLink class="link" to="/emdr/" @click="close">EMDR</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link" to="/qui-suis-je/" @click="close"
              >Qui suis-je?</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="link" to="/contact/" @click="close"
              >Contact</NuxtLink
            >
          </li>
          <ClientOnly>
            <li>
              <ContrastModeButton />
            </li>
          </ClientOnly>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({ isOpen: false });

function toggle() {
  state.isOpen = !state.isOpen;
}

function close() {
  state.isOpen = false;
}
</script>

<style scoped lang="postcss">
header {
  padding: 2rem 3rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;

  @screen mobileMenu {
    padding: 5rem 3rem 5rem 3rem;
  }

  @screen wide {
    max-width: 144rem;
    @apply mx-auto;
  }
}

header > div {
  @apply flex flex-wrap items-center w-full;
}

.main-link {
  max-width: 19rem;
  @apply block;
  @apply font-black text-24 leading-24 lowercase;
  @apply text-royal-blue;

  span {
    display: block;
  }

  .line {
    display: block;
    width: 6.5rem;
    height: 1px;
    margin-top: 1rem;
    @apply bg-fern-green;
  }

  @screen mobileMenu {
    max-width: 23.8rem;
    @apply text-30 leading-30;

    .line {
      width: 8.3rem;
    }
  }
}

nav li a,
button {
  @apply font-black;
  @apply text-16 leading-16;
  @apply lowercase;
  @apply text-royal-blue;
}

.menu-button {
  @apply relative inline-block h-full;

  &:hover:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 100%;
    @apply border-b;
  }
}

nav {
  display: none;
  width: 100%;
}

nav li a {
  display: inline-block;
  margin-top: 6rem;
  position: relative;

  &.router-link-active:before {
    content: "";
    width: 100%;
    height: 100%;
    border-bottom: 1px solid;
    display: block;
    position: absolute;
    bottom: -6px;
    left: 0;
  }
}

nav li:first-of-type {
  flex: 0;

  @screen menuFirstItem {
    flex: inherit;
  }
}

nav li:last-of-type {
  margin-top: 6rem;
}

.menu-button {
  margin-left: auto;
}

header.is-open {
  @apply bg-mint-cream;
  z-index: 99;

  nav {
    display: block;
  }
}

@screen mobileMenu {
  nav {
    display: block;
    flex: 1;
  }

  nav ul {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    @apply gap-22;
  }

  nav li a,
  nav li:last-of-type {
    margin-top: 0rem;
  }

  .menu-button {
    display: none;
  }

  header.is-open {
    background: transparent;
  }
}

@media (min-width: 1120px) {
  header {
    padding: 5rem 8rem 5rem 3rem;
  }
}
</style>

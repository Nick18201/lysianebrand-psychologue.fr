<template>
  <NuxtLink
    class="floating-link button-link button-link--alt !hidden xs:!inline-flex hover:cursor-pointer"
    :to="DOCTOLIB_URL"
    target="_blank"
  >
    <BaseLink>RDV sur Doctolib</BaseLink>
  </NuxtLink>
</template>

<style lang="postcss">
.floating-link {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 99;
}
</style>

<script setup>
import { DOCTOLIB_URL } from "~/app/constants";
</script>

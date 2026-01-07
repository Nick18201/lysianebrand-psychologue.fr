<template>
  <section class="BlockContact texture-pipin">
    <ParallaxLeafs />
    <slot name="card"></slot>

    <div
      class="relative overflow-visible wrapper py-62 xs:py-88 flex flex-wrap z-0"
    >
      <slot name="content">
        <h2 class="h1 mb-28 xs:order-1 xs:max-w-[45rem]">Envie d'échanger ?</h2>
        <div class="xs:flex xs:order-3 w-full">
          <p class="h3 mb-22 max-w-sm">N'hésitez pas à me contacter</p>
          <p class="mb-22 max-w-sm xs:max-w-[31rem] text">
            Pour toute demande, me contacter au 06.74.55.20.22<br />
            ou sur
            <a
              class="inline-link"
              href="https://www.instagram.com/marge_de_manoeuvre.psy/"
              target="_blank"
              rel="nooepener"
              >Instagram</a
            >.
          </p>
        </div>

        <NuxtLink
          class="button-link xs:order-2 xs:flex-none xs:ml-auto xs:self-center"
          :to="DOCTOLIB_URL"
          target="_blank"
          rel="noopener"
        >
          <BaseLink>Prendre RDV</BaseLink>
        </NuxtLink>
      </slot>
    </div>
  </section>
</template>

<script setup>
import { DOCTOLIB_URL } from "~/app/constants";
</script>

<style lang="postcss">
.BlockContact {
  padding-top: 1px;
  overflow: visible !important;
}
</style>

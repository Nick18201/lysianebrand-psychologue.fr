<template>
  <div v-if="state.hasAcceptedCookies">
    <iframe
      class="mx-auto xs:flex-1 w-full max-w-[52rem] max-h-[18rem] xs:max-h-[29rem] text-sage-green"
      id="player"
      type="text/html"
      width="320"
      height="290"
      :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1`"
      frameborder="0"
    ></iframe>
  </div>
  <div
    class="relative mx-auto xs:flex-1 w-full max-w-[52rem] xs:max-h-[29rem] text-sage-green"
    v-else
  >
    <img
      :src="preview"
      loading="lazy"
      width="480"
      height="360"
      class="w-full fit-content max-w-[52rem] max-h-[18rem] xs:max-h-[29rem] mx-auto"
    />
    <div class="static xs:absolute inset-0 xs:p-28 flex">
      <div class="bg-white p-22 self-center">
        <p class="mb-22"><strong>Permission requise</strong></p>
        <p class="mb-18">
          Afficher ce contenu peut autoriser YouTube à sauvegarder vos données
          personnelles telle que votre adresse IP et/ou sauvegarder des cookies
          sur votre ordinateur.
        </p>
        <p>Vous devez tout d'abord donner votre permission.</p>
        <div class="mt-8 inline-flex gap-8 flex-wrap">
          <button class="font-bold link" @click="onAcceptCookies">
            Accepter Cookies
          </button>
          <NuxtLink
            class="font-bold link"
            :external="true"
            :to="`https://www.youtube.com/watch?v=${videoId}`"
          >
            Voir sur YouTube
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videoId: String,
  preview: String,
});

const state = reactive({ hasAcceptedCookies: false });

const onAcceptCookies = () => {
  state.hasAcceptedCookies = true;
};
</script>

<template>
  <button
    @click="onClick"
    class="flex items-center justify-center bg-blue !text-white px-12 py-8 rounded-sm hover:bg-opacity-90 transition-all gap-8"
    aria-describedby="button-text-size"
    :title="state.isLargeText ? 'Réduire la taille du texte' : 'Agrandir la taille du texte'"
  >
    <span id="button-text-size" class="sr-only">
      {{ state.isLargeText ? "Réduire la taille du texte" : "Agrandir la taille du texte" }}
    </span>
    <span class="font-bold text-16 font-montserrat text-white normal-case">Aa</span>
  </button>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue';

const state = reactive({ isLargeText: false });

const onClick = () => {
  state.isLargeText = !state.isLargeText;
};

watch(() => state.isLargeText, (isLarge) => {
  if (import.meta.client && document.documentElement) {
    if (isLarge) {
      document.documentElement.classList.add('large-text');
      localStorage.setItem('preferred-text-size', 'large');
    } else {
      document.documentElement.classList.remove('large-text');
      localStorage.setItem('preferred-text-size', 'normal');
    }
  }
});

onMounted(() => {
  if (import.meta.client) {
    const saved = localStorage.getItem('preferred-text-size');
    if (saved === 'large') {
      state.isLargeText = true;
    }
  }
});
</script>

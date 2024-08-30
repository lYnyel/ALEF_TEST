<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  text: string;
  href: string;
}>();
</script>

<template>
  <router-link :to="props.href" class="navigation-link">
    {{ props.text }}
    </router-link>
</template>

<style scoped>
.navigation-link {
  margin-left: 20px;
  text-decoration: none;
  color: #7a7a7a;
}
.navigation-link:hover {
  color: #000;
}
</style>
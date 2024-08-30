<script setup lang="ts">
import Navigation from './Navigation.vue';

interface Link {
  text: string;
  href: string;
}

const links: Link[] = [
  { text: 'Форма', href: '/' },
  { text: 'Превью', href: '/preview' },
];
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="/public/Frame 10.svg" alt="Logo" />
    </div>
    <nav class="navigation">
      <Navigation
        v-for="(link, index) in links"
        :key="index"
        :text="link.text"
        :href="link.href"
      />
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
}

.logo img {
  height: 40px; 
}

.navigation {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}
</style>

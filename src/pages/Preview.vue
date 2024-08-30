<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Child {
  name: string;
  age: number | null;
}

const personalName = ref<string>('');
const personalAge = ref<number | null>(null);
const children = ref<Child[]>([]);

onMounted(() => {
  const data = localStorage.getItem('formData');
  if (data) {
    const parsedData = JSON.parse(data);
    personalName.value = parsedData.personalName;
    personalAge.value = parsedData.personalAge;
    children.value = parsedData.children;
  }
});
</script>

<template>
  <main>
    <h2>Превью</h2>
    <div class="preview-section">
      <h3>Персональные данные</h3>
      <p><strong></strong> {{ personalName}}, {{personalAge}} лет</p>
    </div>
    <div class="preview-section">
      <h3>Дети</h3>
      <div v-for="(child, index) in children" :key="index">
        <p class="child"><strong></strong> {{ child.name }}, {{ child.age }} лет</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.preview-section {
  margin-bottom: 50px;
  font-weight: 600;
}

.preview-section h3 {
  margin-bottom: 10px;
}

.preview-section p {
  margin: 5px 0;
}
.child {
    background: #F1F1F1;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;
}
</style>

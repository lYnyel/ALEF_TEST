<script setup lang="ts">
import { ref } from 'vue';

interface Child {
  name: string;
  age: number | null;
}

const personalName = ref<string>('');
const personalAge = ref<number | null>(null);

const children = ref<Child[]>([]);

const maxChildren = 5;

const addChild = () => {
  if (children.value.length < maxChildren) {
    children.value.push({ name: '', age: null });
  }
};

const removeChild = (index: number) => {
  children.value.splice(index, 1);
};

const isMaxChildrenReached = () => {
  return children.value.length >= maxChildren;
};

const saveData = () => {
  const data = {
    personalName: personalName.value,
    personalAge: personalAge.value,
    children: children.value,
  };
  localStorage.setItem('formData', JSON.stringify(data));
  alert('Данные успешно сохранены!');
};
</script>

<template>
  <main>
    <div class="form-section">
      <h2>Персональные данные</h2>
      <div class="form-group">
        <div class="input-wrapper">
          <input v-model="personalName" type="text" id="personalName" />
          <label for="personalName">Имя</label>
        </div>
      </div>
      <div class="form-group">
        <div class="input-wrapper">
          <input v-model.number="personalAge" type="number" id="personalAge" />
          <label for="personalAge">Возраст</label>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="children-header">
        <h2>Дети (макс. {{ maxChildren }})</h2>
        <button
          v-if="!isMaxChildrenReached()"
          type="button"
          @click="addChild"
          class="add-btn"
        >
          <span class="plus">+</span> Добавить ребенка
        </button>
      </div>
      <div v-for="(child, index) in children" :key="index" class="child-form">
        <div class="form-group">
          <div class="input-wrapper">
            <input v-model="child.name" type="text" :id="'childName' + index" />
            <label :for="'childName' + index">Имя ребенка</label>
          </div>
        </div>
        <div class="form-group">
          <div class="input-wrapper">
            <input v-model.number="child.age" type="number" :id="'childAge' + index" />
            <label :for="'childAge' + index">Возраст ребенка</label>
          </div>
        </div>
        <button type="button" @click="removeChild(index)" class="remove-btn">
          Удалить
        </button>
      </div>
    </div>

    <button type="button" @click="saveData" class="submit-btn">
      Сохранить
    </button>
  </main>
</template>

<style scoped>
main {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-section {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 10px;
  position: relative;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 8px 12px 8px;
  box-sizing: border-box;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  height: 56px;
  outline: none;
}

.input-wrapper label {
  position: absolute;
  top: 50%;
  left: 12px;
  font-size: 16px;
  color: #aaa;
  pointer-events: none;
  transform: translateY(70%);
  transition: all 0.2s ease;
  background: white;
  padding: 0 4px;
}

.input-wrapper input:focus + label,
.input-wrapper input:not(:placeholder-shown) + label {
  top: -10px;
  left: 8px;
  font-size: 12px;
  color: #acacac;
}

.children-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.child-form {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.child-form .form-group {
  flex: 1;
  margin-right: 10px;
}

.remove-btn {
  background:none;
  color: #01A7FD;
  border: none;
  cursor: pointer;
}

.add-btn {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: #01A7FD;
  border: 2px solid #01A7FD;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 100px;
}

.add-btn:hover {
  background-color: #01A7FD;
  color: #fff;
}

.submit-btn {
  background-color:#01A7FD;
  ;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 100px;
}

.submit-btn:hover {
  background-color: #028cd1;
}

.plus{
    width: 24px;
    font-size: 24px;
}
</style>

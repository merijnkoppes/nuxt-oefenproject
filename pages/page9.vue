<script setup>
const todos = useTodos();
const newtodo = ref("");
</script>
<template>
  <div>
    <input
      required
      type="text"
      v-model="newtodo"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    /><br /><button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="
        todos.push(newtodo);
        newtodo = '';
      "
    >
      Voeg nieuwe todo toe!
    </button>
    <br /><br />
    <div v-for="(todo, index) in todos" :key="todo.id">
      <h2>
        {{ index + 1 || "No ID" }}
        <button
          class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="todos.splice(index, 1)"
        >
          delete
        </button>
      </h2>

      <p>{{ todo }}</p>
    </div>
  </div>
</template>
<style scoped>
div {
  padding: 20px;
}
input {
  color: black;
}
</style>

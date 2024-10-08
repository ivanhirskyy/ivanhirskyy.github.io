<script lang="ts" setup>
const props = defineProps<{
  content: string;
}>();

const fileContent = ref(props.content);
</script>

<template>
  <code>
    <textarea
      v-model="fileContent"
      class="h-96 h-full w-full resize-none bg-gray-800 p-2 px-8 py-4 text-white outline-none"
    ></textarea>
  </code>
</template>

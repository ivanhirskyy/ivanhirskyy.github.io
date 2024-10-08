<script lang="ts" setup>
const fileContent = ref('');

const { getFileContent } = useFiles();
const route = useRoute();
const content = await getFileContent(route.path);

console.log('contentwwwwwwww', content, route.path);

// fill the file content with a creative about me page using just text and \n characters
fileContent.value = `Ivan Hirskyy - Frontend Developer\n\nSkills:\n- Vue.js\n- Nuxt.js\n- TypeScript\n\nExperience:\n- 3 years of experience\n- 5 projects completed\n\nContact:\n- Email:`;
</script>

<template>
  <CodeEditor v-if="content" class="flex-grow" :content></CodeEditor>
</template>

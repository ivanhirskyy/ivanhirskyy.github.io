<script lang="ts" setup>
const { files } = useFiles();
</script>
<template>
  <div
    class="relative flex h-full w-64 min-w-[210px] shrink-0 flex-col bg-gray-700 p-2.5 text-white"
  >
    <ul class="space-y-2">
      <li
        v-for="file in files"
        :key="file.name"
        class="cursor-pointer rounded hover:bg-gray-800"
      >
        <NuxtLink :to="file.link" class="block px-4 py-2">
          {{ file.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

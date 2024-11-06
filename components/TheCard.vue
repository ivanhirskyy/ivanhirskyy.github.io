<script lang="ts" setup>
const props = defineProps<{
  tag?: string;
  title?: string;
}>();
</script>
<template>
  <component
    :is="props.tag || 'div'"
    class="shadow-card relative flex flex-col overflow-hidden rounded-lg bg-gray-800"
  >
    <div
      v-if="props.title"
      class="shadow-card-head flex justify-between gap-4 rounded-t-md bg-teal-900 p-6 py-4 text-3xl font-medium"
    >
      {{ props.title }}
    </div>
    <div class="w-full grow p-6">
      <slot></slot>
    </div>
  </component>
</template>

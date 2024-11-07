<script lang="ts" setup>
const props = defineProps<{
  tag?: string;
  title?: string;
  contentClass: string;
}>();
</script>
<template>
  <component
    :is="props.tag || 'div'"
    class="card relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-card"
  >
    <div
      v-if="props.title"
      class="card-head z-10 flex justify-between gap-4 rounded-t-md bg-teal-900 p-6 py-4 text-3xl font-medium shadow-card-head"
    >
      {{ props.title }}
    </div>
    <div class="card-body w-full grow p-6" :class="props.contentClass">
      <slot></slot>
    </div>
  </component>
</template>

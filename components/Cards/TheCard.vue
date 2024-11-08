<script lang="ts" setup>
const props = defineProps<{
  tag?: string;
  title?: string;
}>();
</script>
<template>
  <component
    :is="props.tag || 'div'"
    class="card relative flex flex-col overflow-hidden rounded-lg border border-gray-700 bg-gray-800 shadow-card"
  >
    <div
      v-if="props.title"
      class="card-head z-10 flex items-center justify-between gap-4 rounded-t-md bg-teal-900 p-4 py-3 text-xl font-medium shadow-card-head sm:p-6 sm:py-4 sm:text-2xl md:text-3xl"
    >
      {{ props.title }}
      <slot name="head"></slot>
    </div>
    <div class="card-body w-full grow p-4 sm:p-6">
      <slot></slot>
    </div>
  </component>
</template>

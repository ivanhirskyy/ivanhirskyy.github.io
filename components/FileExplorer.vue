<script lang="ts" setup>
const { files } = useFiles();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleResize = () => {
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
</script>
<template>
  <Icon
    name="mdi:menu"
    class="fixed left-4 top-4 z-[100] h-6 w-6 cursor-pointer text-white lg:hidden"
    size="24"
    @click="toggleMobileMenu"
  />
  <div
    class="absolute left-0 top-0 z-[99] h-full w-32 min-w-[120px] shrink-0 flex-col overflow-hidden rounded-t-sm bg-gray-700 py-12 text-white lg:relative lg:py-4"
    :class="{ 'hidden lg:flex': !isMobileMenuOpen }"
  >
    <ul class="space-y-2">
      <li
        v-for="file in files"
        :key="file.name"
        class="cursor-pointer hover:bg-gray-800"
      >
        <NuxtLink :to="file.link" class="block px-4 py-2">
          {{ file.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

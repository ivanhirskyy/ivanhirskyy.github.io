<template>
  <div
    v-show="!isHidden"
    ref="hover-trail"
    class="mouse-gradient fixed top-0 z-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-green-400 to-blue-500 blur-2xl transition-opacity duration-150 ease-in-out max-md:hidden"
  ></div>
</template>

<script lang="ts" setup>
const hoverTrail = useTemplateRef('hover-trail');
const isHidden = ref(true);

const handleMouseMove = (e: MouseEvent) => {
  if (hoverTrail.value) {
    isHidden.value = false;
    hoverTrail.value.style.opacity = '.4';
    hoverTrail.value.style.top = `${e.clientY - 200}px`;
    hoverTrail.value.style.left = `${e.clientX - 200}px`;
  }
};

const handleMouseLeave = () => {
  if (hoverTrail.value) {
    hoverTrail.value.style.opacity = '0';
  }
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
});
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const stars = ref<{ id: number; style: Record<string, string> }[]>([]);

const generateStars = () => {
  const starCount = 500; // Adjust the number of stars as needed
  const newStars = [];

  // Cache the window height and width for better performance
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  for (let i = 0; i < starCount; i++) {
    const size = Math.random() * 2 + 1 + 'px';
    const topPercentage = Math.random() * 100 + 100; // Start below the viewport
    const top = `${topPercentage}%`; // Use percentage to control the initial position
    const left = `${Math.random() * 100}%`;

    // Calculate the distance the star has to travel in pixels
    const topDistance = (topPercentage / 100) * windowHeight;

    // Duration based on the distance, capped at a maximum duration for smoother animation
    const duration = `${Math.min(30, (topDistance / windowHeight) * (Math.random() * 10 + 10))}s`;

    const opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1

    // Using CSS variables to handle dynamic styles
    newStars.push({
      id: i,
      style: {
        '--size': size,
        '--top': top,
        '--left': left,
        '--duration': duration,
        '--opacity': opacity.toString(),
      },
    });
  }

  stars.value = newStars;
};

onMounted(() => {
  generateStars();
});
</script>

<template>
  <div
    class="starry-background absolute h-full w-full overflow-hidden bg-gray-950 max-sm:hidden"
  >
    <div
      v-for="star in stars"
      :key="star.id"
      class="star absolute rounded-full bg-yellow-200"
      :style="star.style"
    ></div>
  </div>
</template>

<style scoped>
.star {
  width: var(--size);
  height: var(--size);
  top: var(--top);
  left: var(--left);
  opacity: var(--opacity);
  animation: moveStar var(--duration) linear infinite;
  transform: translateY(0);
  will-change: transform, opacity; /* Informs the browser to optimize rendering */
}

@keyframes moveStar {
  from {
    transform: translateY(0); /* Start from the initial position */
  }
  to {
    transform: translateY(-100vh); /* Move above the viewport */
  }
}
</style>

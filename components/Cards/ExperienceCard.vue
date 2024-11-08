<script setup lang="ts">
const experiences = [
  {
    title: 'Niw · Front-end Developer',
    date: '2022-Now',
    description: [
      'Front-end development for global automotive brands such as Toyota, Ford, Lexus, and Nissan.',
      'Developed a custom CMS product to improve content management, SEO, and website efficiency for 15+ projects.',
      'Collaborated with cross-functional teams using Git, Jira, and Confluence, ensuring smooth project execution.',
      'Implemented end-to-end testing with Cypress and Jest to maintain high code quality and performance.',
    ],
  },
  {
    title: 'Redicom · Front-end Developer',
    date: '2019-2022',
    description: [
      'Built and maintained high-traffic ecommerce websites for leading brands.',
      'Delivered scalable and responsive solutions across 100+ projects, using JavaScript, HTML, CSS, and AngularJS.',
      'Optimized user interfaces to improve page load times and user engagement.',
    ],
  },
  {
    title: 'Domoweb · Web Developer Intern',
    date: '2019',
    description: [
      'Developed custom websites and applications for small businesses and startups.',
      'Collaborated with clients to understand their needs and deliver tailored solutions.',
      'Implemented responsive design and SEO best practices to enhance user experience and search engine visibility.',
    ],
  },
];
</script>
<template>
  <TheCard tag="section" title="Experience">
    <div class="space-y-6">
      <div v-for="experience in experiences" :key="experience.title">
        <div class="exp relative">
          <div class="exp__header relative flex items-center justify-between">
            <p class="text-md font-medium text-gray-100 md:text-lg">
              {{ experience.title }}
            </p>
            <p class="text-right font-mono italic text-gray-400 max-sm:text-sm">
              {{ experience.date }}
            </p>
          </div>

          <ul class="mt-3 list-disc pl-5 font-light text-gray-100">
            <li v-for="desc in experience.description" :key="desc">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </TheCard>
</template>

<style scoped>
.exp {
  padding-right: 16px;
}
.exp__header::before {
  content: '';
  position: absolute;
  right: calc(-16px - 10px);
  top: calc(50% - 8px);
  width: 16px;
  height: 16px;
  @apply rounded-full border-2 border-yellow-400;
  @apply bg-gray-800;
}

:deep(.card-body) {
  margin-right: 24px;
  @apply border-r-4 border-yellow-400 pr-0;
  max-width: calc(100% - 24px);
}
</style>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  title?: string;
  contentClass: string;
}>();

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
      <!-- <div class="exp relative">
        <div class="exp__header relative text-gray-400">
          <p class="font-mono italic">2022-Present</p>
        </div>
        <p class="font-medium">Niw · Front-end Developer</p>
        <ul class="ml-5 mt-2 list-disc text-gray-300">
          <li>
            Front-end development for global automotive brands such as Toyota,
            Ford, Lexus, and Nissan.
          </li>
          <li>
            Developed a custom CMS product to improve content management, SEO,
            and website efficiency for 15+ projects.
          </li>
          <li>
            Collaborated with cross-functional teams using Git, Jira, and
            Confluence, ensuring smooth project execution.
          </li>
          <li>
            Implemented end-to-end testing with Cypress and Jest to maintain
            high code quality and performance.
          </li>
        </ul>
      </div>
      <div class="exp relative">
        <p class="exp__header relative flex justify-between">
          <span class="font-bold text-gray-200"
            >Redicom · Front-end Developer</span
          >
          <span class="font-mono italic text-gray-400">2019-2022</span>
        </p>
        <ul class="ml-5 mt-2 list-disc text-gray-300">
          <li>
            Built and maintained high-traffic ecommerce websites for leading
            brands.
          </li>
          <li>
            Delivered scalable and responsive solutions across 100+ projects,
            using JavaScript, HTML, CSS, and AngularJS.
          </li>
          <li>
            Optimized user interfaces to improve page load times and user
            engagement.
          </li>
        </ul>
      </div>
      <div class="exp relative">
        <p class="exp__header relative text-gray-300">
          <span class="font-mono italic text-gray-400">2019</span> -
          <span class="font-bold text-gray-300">Domoweb</span> - Web Developer
          Intern
        </p>
        <ul class="ml-5 mt-2 list-disc text-gray-300">
          <li>
            Developed custom websites and applications for small businesses and
            startups.
          </li>
          <li>
            Collaborated with clients to understand their needs and deliver
            tailored solutions.
          </li>
          <li>
            Implemented responsive design and SEO best practices to enhance user
            experience and search engine visibility.
          </li>
        </ul>
      </div> -->
      <div v-for="experience in experiences" :key="experience.title">
        <div class="exp relative">
          <div class="exp__header relative flex items-center justify-between">
            <p class="text-lg font-medium text-gray-100">
              {{ experience.title }}
            </p>
            <p class="font-mono italic text-gray-400">{{ experience.date }}</p>
          </div>

          <ul class="ml-5 mt-3 list-disc text-gray-200">
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

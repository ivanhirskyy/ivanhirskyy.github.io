<script setup lang="ts">
const mainTechnologies = [
  {
    name: 'Nuxt',
    icon: 'mdi:nuxt',
    color: '#00DC82',
    link: 'https://nuxtjs.org',
  },
  {
    name: 'Vue',
    icon: 'mdi:vuejs',
    color: '#42b883',
    link: 'https://vuejs.org',
  },
  {
    name: 'TypeScript',
    icon: 'mdi:language-typescript',
    color: '#60a5fa',
    link: 'https://www.typescriptlang.org/',
  },
];
</script>
<template>
  <div>
    <!-- Header Section -->
    <header class="relative flex justify-between gap-4">
      <div class="space-y-6 lg:space-y-4">
        <div class="flex items-center gap-4">
          <NuxtImg
            src="./avatar.webp"
            width="76"
            height="76"
            class="rounded-full"
            alt="Ivan Hirskyy"
          />
          <div class="space-y-2">
            <h1 class="text-4xl font-bold text-white">Ivan Hirskyy</h1>
            <div
              class="flex flex-col gap-2 text-xl text-gray-400 lg:flex-row lg:items-center lg:gap-4"
            >
              Frontend Developer
              <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
                <!--  //on hover add text shadow -->
                <NuxtLink
                  v-for="tech in mainTechnologies"
                  :key="tech.name"
                  :to="tech.link"
                  class="custom-class flex cursor-pointer items-center gap-1 transition-all duration-150"
                  :style="{
                    color: tech.color,
                  }"
                >
                  {{ tech.name }}
                  <Icon :name="tech.icon" size="25" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-2 flex flex-col gap-4 text-gray-400 lg:flex-row lg:gap-8"
        >
          <p class="flex items-center gap-1">
            <Icon name="mdi:map-marker" size="18" /> Porto, Portugal
          </p>
          <a
            href="tel:+351938028711"
            class="flex items-center gap-1 text-teal-400 hover:underline"
          >
            <Icon name="mdi:phone-classic" size="18" />+351 938 028 711
          </a>
          <a
            href="mailto:ivan.hirskyy@gmail.com"
            class="flex items-center gap-1 text-teal-400 hover:underline"
          >
            <Icon name="mdi:envelope" size="18" />ivan.hirskyy@gmail.com
          </a>
        </div>
      </div>
      <AnalogClock class="max-md:absolute max-md:bottom-0 max-md:right-0" />
    </header>

    <hr class="my-4 border-gray-600" />

    <!-- Summary Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold text-white">Summary</h2>
      <p class="mt-2 text-gray-300">
        I'm a Front-end Developer with 5 years of experience building fast,
        responsive websites and applications. Skilled in Vue, Nuxt, CSS, and
        TypeScript, I've worked on projects for ecommerce and automotive
        clients, always focusing on clean code and user-friendly design. I enjoy
        tackling complex challenges and transforming design concepts into
        smooth, functional experiences.
      </p>
    </section>

    <!-- Current Role Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold text-white">Current Role</h2>
      <p class="italic text-gray-400">
        2022-Present - Niw, Front-end Developer
      </p>
      <ul class="ml-5 mt-2 list-disc text-gray-300">
        <li>
          Lead front-end development for global automotive brands such as
          Toyota, Ford, Lexus, and Nissan.
        </li>
        <li>
          Developed a custom CMS product to improve content management, SEO, and
          website efficiency for 15+ projects.
        </li>
        <li>
          Collaborated with cross-functional teams using Git, Jira, and
          Confluence, ensuring smooth project execution.
        </li>
        <li>
          Implemented end-to-end testing with Cypress and Jest to maintain high
          code quality and performance.
        </li>
      </ul>
    </section>

    <!-- Previous Role Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold text-white">Previous Role</h2>
      <p class="italic text-gray-400">
        2019-2022 - Redicom, Front-end Developer
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
    </section>

    <!-- Skills Section -->
    <section>
      <h2 class="text-2xl font-semibold text-white">Skills</h2>
      <div class="mt-2 grid grid-cols-1 gap-4 text-gray-300 sm:grid-cols-2">
        <div>
          <p>
            <span class="font-semibold">Languages:</span> HTML, CSS, JavaScript,
            TypeScript, PHP, SQL
          </p>
          <p>
            <span class="font-semibold">Frameworks & Libraries:</span> Vue,
            Nuxt, Node, Express, JQuery
          </p>
          <p><span class="font-semibold">CSS:</span> Tailwind, SASS</p>
          <p>
            <span class="font-semibold">Databases:</span> MongoDB, SQL Server,
            MySQL, PostgreSQL
          </p>
          <p><span class="font-semibold">Testing:</span> Jest, Cypress</p>
          <p><span class="font-semibold">Tools:</span> Git, Jira, Confluence</p>
          <p><span class="font-semibold">Build Tools:</span> Webpack, Vite</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.custom-class:hover,
.custom-class:hover span {
  text-shadow: 0 0 8px currentColor;
}
</style>

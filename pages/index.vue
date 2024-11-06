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
  <div class="column-layout gap-8 space-y-8">
    <!-- Header Section -->
    <TheCard tag="header">
      <div class="flex h-full flex-col justify-between gap-6">
        <div class="flex flex-wrap gap-6">
          <div
            class="card-md shadow-card-md h-[140px] max-h-full w-[140px] shrink-0 overflow-hidden rounded-lg border-2 border-gray-900"
          >
            <NuxtImg
              src="./avatar.webp"
              width="240"
              height="240"
              class="avatar block aspect-square"
              alt="Ivan Hirskyy"
            />
          </div>
          <div class="flex grow flex-col justify-between gap-4">
            <h1 class="name text-2xl font-medium text-gray-300 sm:text-4xl">
              Ivan Hirskyy
            </h1>

            <div class="flex items-center gap-2">
              <span class="italic text-gray-400">Based in</span
              ><span class="text-gray-300 transition hover:text-blue-500"
                >Porto</span
              >
              <Icon
                title="Portugal"
                name="flag:pt-4x3"
                size="16"
                class="ml-2 rounded-sm border border-gray-400"
              />
            </div>

            <p
              class="title text-2xl font-bold text-gray-100 sm:text-3xl 2xl:text-5xl"
            >
              Front-end Developer
            </p>
          </div>
        </div>
        <!-- <div>
          <div class="tech flex flex-wrap items-center gap-x-4 gap-y-2">
            <NuxtLink
              v-for="tech in mainTechnologies"
              :key="tech.name"
              :to="tech.link"
              class="custom-class flex cursor-pointer items-center gap-1 text-xl transition-all duration-150"
              :style="{
                color: tech.color,
              }"
            >
              {{ tech.name }}
              <Icon :name="tech.icon" size="25" />
            </NuxtLink>
          </div>
        </div> -->
      </div>
    </TheCard>
    <!-- <a
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
          </a> -->
    <!-- <AnalogClock class="max-md:absolute max-md:bottom-0 max-md:right-0" /> -->

    <!-- Summary Section -->

    <!-- Current Role Section -->
    <TheCard tag="section" title="Experience">
      <div>
        <p class="italic text-gray-400">
          2022-Present - Niw, Front-end Developer
        </p>
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
    </TheCard>

    <TheCard tag="section" title="Summary">
      <p>
        I'm a Front-end Developer with 5 years of experience building fast,
        responsive websites and applications. Skilled in Vue, Nuxt, CSS, and
        TypeScript, I've worked on projects for ecommerce and automotive
        clients, always focusing on clean code and user-friendly design. I enjoy
        tackling complex challenges and transforming design concepts into
        smooth, functional experiences.
      </p>
    </TheCard>

    <TheCard tag="section">
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
    </TheCard>

    <!-- Skills Section -->
    <TheCard tag="section">
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
    </TheCard>
  </div>
</template>

<style scoped>
.custom-class:hover,
.custom-class:hover span {
  text-shadow: 0 0 8px currentColor;
}

.header-area {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'avatar name'
    'avatar title';
}

@media (max-width: 420px) {
  .header-area {
    grid-template-areas:
      'avatar name'
      'title title';
  }
}

.header-area .avatar {
  grid-area: avatar;
}

.header-area .name {
  grid-area: name;
}

.header-area .title {
  grid-area: title;
}

.header-area .tech {
  grid-area: tech;
}

.column-layout {
  columns: 2 350px;
}
</style>

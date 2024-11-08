<script setup lang="ts">
import { templateRef } from '@vueuse/core';

const skills = [
  // Core Front-End Skills
  { name: 'Vue', icon: 'mdi:vuejs', iconColor: '#42b883' },
  { name: 'Nuxt', icon: 'mdi:nuxt', iconColor: '#00dc82' },
  { name: 'JavaScript', icon: 'mdi:language-javascript', iconColor: '#f7df1e' },
  { name: 'TypeScript', icon: 'mdi:language-typescript', iconColor: '#3178c6' },
  { name: 'HTML', icon: 'mdi:language-html5', iconColor: '#e34f26' },
  { name: 'CSS', icon: 'mdi:language-css3', iconColor: '#1572b6' },

  // Styling and UI Frameworks
  { name: 'Tailwind', icon: 'mdi:language-css3', iconColor: '#38b2ac' },
  { name: 'SASS', icon: 'mdi:sass', iconColor: '#cc6699' },

  // Backend & Full-Stack Skills (less prioritized but valuable)
  { name: 'Node', icon: 'mdi:nodejs', iconColor: '#68a063' },
  { name: 'Express', icon: 'mdi:nodejs', iconColor: '#000000' },
  { name: 'PHP', icon: 'mdi:language-php', iconColor: '#777bb4' },

  // Databases (organized by usage likelihood)
  { name: 'MongoDB', icon: 'mdi:database', iconColor: '#47a248' },
  { name: 'SQL', icon: 'mdi:database', iconColor: '#336791' },
  { name: 'PostgreSQL', icon: 'mdi:database', iconColor: '#336791' },
  { name: 'MySQL', icon: 'mdi:database', iconColor: '#00758f' },
  { name: 'SQL Server', icon: 'mdi:database', iconColor: '#cc2927' },

  // Testing
  { name: 'Jest', icon: 'mdi:tools', iconColor: '#c21325' },
  { name: 'Cypress', icon: 'mdi:tools', iconColor: '#00bcd4' },

  // Other Tools
  { name: 'Git', icon: 'mdi:git', iconColor: '#f05032' },
  { name: 'Webpack', icon: 'mdi:tools', iconColor: '#8ed6fb' },
  { name: 'Vite', icon: 'mdi:tools', iconColor: '#646cff' },
  { name: 'Jira', icon: 'mdi:tools', iconColor: '#357DE8' },
  { name: 'Confluence', icon: 'mdi:tools', iconColor: '#357DE8' },
  { name: 'JQuery', icon: 'mdi:jquery', iconColor: '#0769ad' },
];

const search = ref('');
const searchEl = templateRef<HTMLInputElement>('searchEl');

const filteredSkills = computed(() => {
  return skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.value.toLowerCase()),
  );
});
</script>

<template>
  <TheCard tag="section" title="Skills">
    <template #head>
      <div class="w-48 max-w-sm">
        <div class="relative">
          <input
            ref="searchEl"
            v-model="search"
            type="text"
            class="ease font-regular block w-full rounded-md border border-gray-400 bg-teal-950 bg-transparent py-2 pl-3 pr-10 text-sm text-gray-50 shadow-sm transition duration-300 placeholder:text-gray-400 hover:border-gray-50 focus:border-gray-50 focus:shadow focus:outline-none"
            placeholder="Search skills..."
          />
          <!-- delete icon -->
          <Transition>
            <Icon
              v-if="search"
              name="material-symbols:backspace-outline-rounded"
              size="20"
              class="absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 transition-all hover:text-gray-200"
              @click="
                search = '';
                searchEl.focus();
              "
            />
          </Transition>
          <Icon
            name="mdi:magnify"
            size="20"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-200"
          />
        </div>
      </div>
    </template>
    <transition-group
      v-if="filteredSkills.length > 0"
      tag="ul"
      class="xxs:grid-cols-2 grid grid-cols-1 gap-6 sm:grid-cols-3 xl:grid-cols-4"
    >
      <li
        v-for="skill in filteredSkills"
        :key="skill.name"
        :title="skill.name"
        class="flex items-center justify-between gap-2 rounded-lg bg-gray-700 p-3 transition-transform duration-200 hover:scale-110"
      >
        <p
          class="md:text-md pointer-events-none text-sm font-medium text-gray-100"
        >
          {{ skill.name }}
        </p>
        <Icon
          :name="skill.icon"
          size="22"
          class="pointer-events-none shrink-0"
          :style="{ color: skill.iconColor }"
        />
      </li>
    </transition-group>
    <p v-if="filteredSkills.length === 0">
      Skill <span class="text-yellow-400">"{{ search }}"</span> not found :(
    </p>
  </TheCard>
</template>

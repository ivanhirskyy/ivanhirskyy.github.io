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
    <MeCard />
    <TheCard tag="section" title="About me">
      <p class="text-gray-200">
        I'm a <span class="text-teal-300">Front-end Developer</span> with
        <span class="text-teal-300">5 years of experience</span> building fast,
        responsive websites and applications. Skilled in Vue, Nuxt, CSS, and
        TypeScript, I've worked on projects for ecommerce and automotive
        clients, always focusing on clean code and user-friendly design. I enjoy
        tackling complex challenges and transforming design concepts into
        smooth, functional experiences.
      </p>
    </TheCard>
    <ExperienceCard />
    <SkillsCard />
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

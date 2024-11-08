<template>
  <div class="column-layout gap-8 space-y-8">
    <MeCard />
    <TheCard tag="section" title="About me">
      <p class="font-light text-gray-200">
        I'm a Front-End Developer with five years of hands-on experience in
        building web projects with Vue, Nuxt, CSS, and TypeScript. I’ve worked
        on a range of sites and applications for ecommerce and automotive
        brands, focusing on creating smooth, engaging user experiences. I enjoy
        the challenge of bringing a design to life and making sure every
        interaction feels intuitive and refined.
        <br />
        <br />
        Outside of work, my interests include hiking, exploring the world,
        health and staying active with sports. I'm always looking for new ways
        to grow and learn, so I can keep pushing myself to be better than I was
        yesterday.
      </p>
    </TheCard>
    <ExperienceCard />
    <SkillsCard />
  </div>
</template>

<!-- <style scoped>
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
</style> -->

<template>
  <TheCard tag="header">
    <div class="flex h-full flex-col justify-between gap-6">
      <div class="max-xs:flex-col flex gap-4 sm:gap-6">
        <div
          class="card-md xs:h-[180px] xs:w-[180px] max-h-full shrink-0 overflow-hidden rounded-lg border-2 border-gray-900 shadow-card-md"
        >
          <NuxtImg
            src="./avatar.webp"
            width="360"
            height="360"
            class="avatar block aspect-square h-full w-full object-cover"
            alt="Ivan Hirskyy"
          />
        </div>
        <div class="flex grow flex-col justify-between gap-4">
          <h1 class="name text-2xl font-medium text-gray-300 sm:text-4xl">
            Ivan Hirskyy
          </h1>

          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="italic text-gray-400">Born in</span>
              <span class="split-text ukraine">Ukraine</span>

              <Icon
                title="Ukraine"
                name="flag:ua-4x3"
                size="16"
                class="rounded-sm"
              />
            </div>

            <div class="flex items-center gap-2">
              <span class="italic text-gray-400">Living in</span>
              <span class="split-text portugal">Portugal</span>

              <Icon
                title="Portugal"
                name="flag:pt-4x3"
                size="16"
                class="rounded-sm"
              />
            </div>
          </div>

          <p
            class="title text-2xl font-bold text-gray-100 sm:text-3xl 2xl:text-4xl"
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
</template>

<style scoped>
.ukraine {
  background: linear-gradient(to bottom, #0057b7 50%, #ffd700 50%);
}

.portugal {
  background: linear-gradient(
    to right,
    #006600 0%,
    /* Green starts */ #018601 40%,
    /* Green ends */ #ffcc00 40%,
    /* Yellow starts */ #ffcc00 50%,
    /* Yellow ends */ #ff0000 50%,
    /* Red starts */ #ff0000 100% /* Red ends */
  );
}

.split-text {
  font-weight: 700;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}
</style>

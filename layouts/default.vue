<template>
  <div class="background h-dvh w-full overflow-hidden bg-gray-950">
    <StarryBackground />
    <HoverTrail />
    <div class="flex h-full">
      <div
        class="z-50 m-auto grid h-full max-w-[1200px] flex-grow grid-cols-1 overflow-hidden rounded-lg shadow-md shadow-black sm:grid-cols-[40%_60%]"
      >
        <CommandTerminal class="grow max-sm:hidden" />

        <div class="grow basis-0 overflow-y-auto bg-gray-600 bg-opacity-90">
          <div class="px-5 py-5 text-white lg:px-8 lg:py-8">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

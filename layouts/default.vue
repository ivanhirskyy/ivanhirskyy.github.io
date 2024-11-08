<template>
  <div class="background h-dvh w-full overflow-hidden bg-gray-950">
    <StarryBackground />
    <HoverTrail />
    <div class="flex h-full">
      <!-- <FileExplorer /> -->
      <div
        class="z-50 m-auto flex h-full max-w-[768px] flex-grow flex-col overflow-hidden rounded-lg shadow-md shadow-black"
      >
        <div class="grow basis-0 overflow-y-auto bg-gray-600 bg-opacity-90">
          <div class="px-5 py-5 text-white lg:px-8 lg:py-8">
            <slot />
          </div>
        </div>
        <!-- <TheTerminal /> -->
        <CommandTerminal class="max-sm:hidden" />
      </div>
    </div>
  </div>
</template>

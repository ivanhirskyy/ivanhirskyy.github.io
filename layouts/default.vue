<template>
  <div class="h-dvh w-full bg-gray-800 p-2">
    <div class="flex h-full border border-[1px] border-gray-800">
      <!-- <FileExplorer /> -->
      <div class="flex h-full flex-grow flex-col">
        <div class="grow basis-0 overflow-y-auto">
          <div class="max-w-7xl px-4 py-8 text-white lg:px-8 lg:py-4">
            <slot />
          </div>
        </div>
        <TheTerminal />
      </div>
    </div>
  </div>
</template>

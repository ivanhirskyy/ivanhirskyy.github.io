<template>
  <div class="h-dvh w-full bg-gray-600 p-2">
    <div class="flex h-full ">
      <!-- <FileExplorer /> -->
      <div class="flex h-full bg-gray-800 flex-grow rounded-lg flex-col container m-auto border border-[1px] border-gray-800 shadow-lg overflow-hidden">
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

<template>
  <div class="h-dvh w-full bg-gray-800 p-2">
    <div class="flex h-full border border-[1px] border-gray-800">
      <FileExplorer />
      <div class="flex h-full flex-grow flex-col">
        <div class="h-full max-w-7xl overflow-y-auto px-8 py-4 text-white">
          <slot />
        </div>
        <TheTerminal />
      </div>
    </div>
  </div>
</template>

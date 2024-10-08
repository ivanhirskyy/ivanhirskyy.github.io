<template>
  <div
    class="flex h-dvh border border-[10px] border-gray-900"
    style="outline: 2px solid white"
  >
    <FileExplorer />
    <div class="flex h-full flex-grow flex-col">
      <CodeEditor class="flex-grow">
        <slot />
      </CodeEditor>
      <TheTerminal />
    </div>
  </div>
</template>

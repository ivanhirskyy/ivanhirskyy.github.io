<script setup lang="ts">
const defaultMessage =
  "Welcome to the terminal! Type 'help' for a list of commands.";
const logs = ref([defaultMessage]);
const currentCommand = ref('');

const commandInput = useTemplateRef('commandInput');
const terminal = useTemplateRef('terminal');

let isResizing = ref(false);
let startY = ref(0);
let startHeight = ref(160);

const logToTerminal = (message: string) => {
  if (logs.value.length > 20) {
    // Remove the first element if the logs exceed 100
    logs.value.shift();
  }

  logs.value.push(message);
};

const processCommand = async (command: string) => {
  if (command === '' || !terminal.value) return;

  let message = '';

  switch (command.toLowerCase()) {
    case 'help':
      message =
        'Available commands:\n- help: Show available commands\n- clear: Clear the terminal\n- date: Show the current date\n- time: Show the current time\n- about: Show information about me\n- projects: Show information about my projects\n- contact: Show my contact information';
      break;
    case 'clear':
      logs.value = [defaultMessage];
      break;
    case 'date':
      message = 'Today is ' + new Date().toDateString();
      break;
    case 'time':
      message = 'Now is ' + new Date().toLocaleTimeString();
      break;
    case 'about':
      message =
        'About Me: Ivan Hirskyy, Frontend Developer. Skilled in Vue.js, Nuxt.js, TypeScript.';
      break;
    case 'projects':
      message =
        'Projects: Barbier (booking platform), Ecommerce Website, CMS Product.';
      break;
    case 'contact':
      message =
        'Contact Info: Email: ivan.hirskyy@example.com, LinkedIn: linkedin.com/in/ivan-hirskyy';
      break;
    default:
      message = `Unknown command: '${command}'. Type 'help' for a list of commands.`;
      break;
  }

  if (message) logToTerminal(command + '\n' + message);

  await nextTick();
  terminal.value.scrollTop = terminal.value.scrollHeight;
  currentCommand.value = '';
};

const handleKeydown = () => {
  processCommand(currentCommand.value);
};

const handleMouseDown = (event: MouseEvent) => {
  if (!terminal.value) return;
  isResizing.value = true;
  startY.value = event.clientY;
  startHeight.value = terminal.value.clientHeight;

  // Prevent text selection while resizing
  event.preventDefault();
};

const handleMouseUp = () => {
  if (!terminal.value) return;
  isResizing.value = false;
  startY.value = 0;
  startHeight.value = 0;
};

const handleResize = (event: MouseEvent) => {
  if (!isResizing.value || !terminal.value) return;

  const newHeight = startHeight.value + (startY.value - event.clientY);
  terminal.value.style.height = `${newHeight}px`;
};

onMounted(() => {
  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', handleMouseUp);
});
</script>

<template>
  <div
    class="relative left-0 top-0 z-10 h-[3px] w-full cursor-ns-resize transition-all duration-300"
    :style="{ 'background-color': isResizing ? '#F6EB61' : '#fff' }"
    @mousedown="handleMouseDown"
  >
    <div
      class="absolute left-1/2 top-1/2 flex h-[16px] w-[24px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-md bg-yellow-300"
    >
      <Icon name="mdi:resize-vertical" class="text-black" />
    </div>
  </div>
  <div
    ref="terminal"
    tabindex="0"
    class="relative max-h-[50dvh] min-h-[160px] cursor-default overflow-y-auto border-t border-gray-700 bg-gray-800 bg-opacity-95 px-4 py-4 font-mono leading-6 text-white lg:px-8 lg:py-4"
    :class="{ 'select-none': isResizing }"
    @click="commandInput?.focus()"
  >
    <div class="flex max-w-7xl flex-col gap-3">
      <div v-if="logs.length" class="flex flex-col space-y-3">
        <div
          v-for="(log, index) in logs"
          :key="index"
          class="whitespace-break-spaces break-all"
          style="overflow-wrap: anywhere; word-break: normal"
        >
          <p>
            <span v-if="index > 0" class="mr-2 text-green-400"
              >FE:\ivanhirskyy></span
            >{{ log }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span class="text-green-400">FE:\ivanhirskyy></span>
        <input
          ref="commandInput"
          v-model="currentCommand"
          class="terminal-input fixed grow cursor-default border-none bg-transparent text-yellow-400 opacity-0 outline-none"
          autofocus
          @keydown.enter="handleKeydown"
        />
        <div class="flex items-center gap-[1px]">
          {{ currentCommand }}
          <div
            v-if="!isResizing"
            class="animate-blink h-4 w-2 bg-yellow-400"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}
</style>

<script setup lang="ts">
const logs = ref([
  "Welcome to the terminal! Type 'help' for a list of commands.",
]);
const currentCommand = ref('');

const commandInput = useTemplateRef('commandInput');
const terminal = useTemplateRef('terminal');

const logToTerminal = (message: string) => {
  console.log('message', message);
  if (logs.value.length > 20) {
    // Remove the first element if the logs exceed 100
    logs.value.shift();
  }

  logs.value.push(message);
};

const processCommand = async (command: string) => {
  if (command === '' || !terminal.value) return;

  switch (command.toLowerCase()) {
    case 'help':
      logToTerminal(
        'Available commands:\n- help: Show available commands\n- clear: Clear terminal\n- about: View about info\n- projects: View projects\n- contact: View contact info',
      );
      break;
    case 'clear':
      logs.value = [];
      break;
    case 'about':
      logToTerminal(
        'About Me: Ivan Hirskyy, Frontend Developer. Skilled in Vue.js, Nuxt.js, TypeScript.',
      );
      break;
    case 'projects':
      logToTerminal(
        'Projects: Barbier (booking platform), Ecommerce Website, CMS Product.',
      );
      break;
    case 'contact':
      logToTerminal(
        'Contact Info: Email: ivan.hirskyy@example.com, LinkedIn: linkedin.com/in/ivan-hirskyy',
      );
      break;
    default:
      logToTerminal(
        `Unknown command: '${command}'. Type 'help' for a list of commands.`,
      );
      break;
  }

  await nextTick();
  terminal.value.scrollTop = terminal.value.scrollHeight;
  currentCommand.value = '';
};

const handleKeydown = () => {
  processCommand(currentCommand.value);
};
</script>

<template>
  <div
    ref="terminal"
    tabindex="0"
    class="max-h-80 min-h-40 cursor-default overflow-y-auto bg-gray-900 px-8 py-6 font-mono leading-6 text-white"
    @click="commandInput?.focus()"
  >
    <div class="flex max-w-7xl flex-col gap-2">
      <div v-if="logs.length" class="flex flex-col">
        <p v-for="(log, index) in logs" :key="index" class="whitespace-pre">
          {{ log }}
        </p>
      </div>

      <div class="flex items-center gap-2">
        <span>FE:\ivanhirskyy></span>
        <input
          ref="commandInput"
          v-model="currentCommand"
          class="terminal-input cursor-default border-none bg-transparent outline-none"
          autofocus
          @keydown.enter="handleKeydown"
        />
      </div>
    </div>
  </div>
</template>

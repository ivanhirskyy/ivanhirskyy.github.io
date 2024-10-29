<script lang="ts" setup>
const clockCanvas = useTemplateRef<HTMLCanvasElement>('clockCanvas');

const theme = {
  clockBackground: '#2c3e50',
  clockNumbers: '#42b883',
  hourHand: '#F6EB61',
  minuteHand: '#7bed9f',
  secondHand: '#60a5fa',
};

const fancyFont = "bold 11px 'Cursive', sans-serif"; // Customize with a fancy font

const drawClock = (ctx: CanvasRenderingContext2D, radius: number) => {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = theme.clockBackground;
  ctx.fill();

  // Draw clock numbers
  ctx.font = `bold ${radius * 0.2}px Arial`;
  ctx.fillStyle = theme.clockNumbers;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';

  for (let num = 1; num <= 12; num++) {
    const angle = (num * Math.PI) / 6; // Calculate angle for each number
    const x = radius * 0.8 * Math.cos(angle - Math.PI / 2); // Adjust position to fit numbers
    const y = radius * 0.8 * Math.sin(angle - Math.PI / 2);
    ctx.fillText(String(num), x, y); // Draw the number
  }

  // Draw clock face border
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.lineWidth = radius * 0.05;
  ctx.strokeStyle = '#1a252f';
  ctx.stroke();

  //Draw clock bars, do 12 long bars and 60 short bars
  for (let i = 0; i < 60; i++) {
    const isLong = i % 5 === 0;
    let len = isLong ? 0.08 : 0.04;
    ctx.beginPath();
    ctx.moveTo(radius * (1 - len), 0);
    ctx.lineTo(radius, 0);
    ctx.lineWidth = radius * 0.02;
    ctx.strokeStyle = theme.clockNumbers;
    ctx.stroke();
    ctx.rotate(6 * (Math.PI / 180));
  }
};

const drawHands = (
  ctx: CanvasRenderingContext2D,
  radius: number,
  handType: 'hour' | 'minute' | 'second',
  timeFraction: number,
) => {
  let length;
  let width;
  let color;

  switch (handType) {
    case 'hour':
      length = radius * 0.4;
      width = 5;
      color = theme.hourHand;
      break;
    case 'minute':
      length = radius * 0.6;
      width = 4;
      color = theme.minuteHand;
      break;
    case 'second':
      length = radius * 0.7;
      width = 2;
      color = theme.secondHand;
      break;
  }

  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.moveTo(0, 0);
  ctx.rotate(timeFraction * 2 * Math.PI);
  ctx.lineTo(0, -length);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.rotate(-timeFraction * 2 * Math.PI);
};

// Function to draw the horizontal text inside the clock
const drawTextInsideClock = (ctx: CanvasRenderingContext2D) => {
  const text = 'Ivan'; // Text to display
  const fontStyle = fancyFont; // Fancy font style

  ctx.font = fontStyle;
  ctx.fillStyle = '#F0E68C'; // Less goldish but whiter color
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Position the text slightly below the center of the clock
  const offsetY = 15;
  ctx.fillText(text, 0, offsetY);
};

const setCanvasClock = () => {
  const canvas = clockCanvas.value;
  const ctx = canvas!.getContext('2d')!;

  const radius = canvas!.height / 2;
  ctx.translate(radius, radius);
  const draw = () => {
    ctx.clearRect(-radius, -radius, canvas!.width, canvas!.height);

    const now = new Date();
    const secondFraction = now.getSeconds() / 60;
    const minuteFraction = (now.getMinutes() + secondFraction) / 60;
    const hourFraction = ((now.getHours() % 12) + minuteFraction) / 12;

    drawClock(ctx, radius);

    drawTextInsideClock(ctx);

    drawHands(ctx, radius, 'hour', hourFraction);
    drawHands(ctx, radius, 'minute', minuteFraction);
    drawHands(ctx, radius, 'second', secondFraction);
  };

  setInterval(draw, 1000);
};

const isMounted = ref(false);
onMounted(() => {
  const canvas = clockCanvas.value;
  canvas!.width = 116;
  canvas!.height = 116;
  setCanvasClock();

  setTimeout(() => {
    isMounted.value = true;
  }, 1000);
});
</script>
<template>
  <canvas
    ref="clockCanvas"
    class="h-[116px] w-[116px] rounded-full outline outline-4 outline-[#42b883]"
    :class="{ 'opacity-0': !isMounted }"
  ></canvas>
</template>

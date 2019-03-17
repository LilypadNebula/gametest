<template>
  <div class="flex flex-col items-center font-sans text-5xl text-white h-full">
    <div class="flex">
      <p class="p-16">
        {{shownString}}
        <span class="cursor">|</span>
      </p>
    </div>
    <button @click="clear" v-if="this.current < this.strings.length">Next</button>
    <button @click="$emit('done')" v-else>Done</button>
  </div>
</template>

<script>
export default {
  name: "Typer",
  props: {
    strings: {
      /**@type {{new (): string[]}} */
      type: Array,
      required: true
    }
  },
  mounted() {
    this.interval = setInterval(this.typing, 100);
  },
  data: () => ({
    shownString: "",
    interval: null,
    current: 0,
    stringSpot: 0
  }),
  methods: {
    typing() {
      if (this.shownString === this.strings[this.current]) {
        this.current++;
        this.stringSpot = 0;
        clearInterval(this.interval);
      } else {
        this.shownString += this.strings[this.current].slice(
          this.stringSpot,
          this.stringSpot + 1
        );
        this.stringSpot++;
      }
    },
    clear() {
      this.interval = setInterval(this.removing, 100);
    },
    removing() {
      if (this.shownString.length < 1) {
        clearInterval(this.interval);

        if (this.current <= this.strings.length) {
          this.interval = setInterval(this.typing, 100);
        }
      } else {
        this.shownString = this.shownString.slice(0, -1);
      }
    }
  }
};
</script>

<style scoped lang="postcss">
@keyframes blinky {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.cursor {
  animation: blinky 1.5s infinite;
}

div {
  min-height: 50%;
}

button {
  @apply text-white;
}

button:focus {
  @apply outline-none;
}
</style>


<template>
  <div class="h-full">
    <top-bar></top-bar>
    <div class="bg-black text-white h-full overflow-auto font-digi">
      <div class="w-full p-4 text-center border-b mb-4 text-2xl">Test Console</div>
      <div class="consoleBody">
        <console-line v-for="line in history" :key="line.id" :display="line.text"></console-line>
        <console-line>
          <input
            ref="consoleInput"
            type="text"
            class="text-white bg-black focus:outline-none"
            @keyup.enter="send"
          >
        </console-line>
      </div>
    </div>
  </div>
</template>

<script>
import ConsoleLine from "../../components/ConsoleLine.vue";
import TopBar from "../../components/TopBar.vue";
import { head, has } from "lodash";
const parse = require("yargs-parser");

export default {
  components: { ConsoleLine, TopBar },
  data: () => ({
    history: [],
    commandList: {
      echo(v, arg) {
        v.history.push({
          id: Math.floor(Math.random() * Math.random() * 1000),
          text: arg.join(" ")
        });
      }
    }
  }),
  methods: {
    send(e) {
      this.history.push({
        id: Math.floor(Math.random() * Math.random() * 1000),
        text: e.target.value
      });
      const input = parse(e.target.value)._;
      const command = head(input);
      const args = input.slice(1);
      e.target.value = "";
      if (has(this.commandList, command)) {
        this.commandList[command](this, args);
      } else {
        this.history.push({
          id: Math.floor(Math.random() * Math.random() * 1000),
          text: `${command} is not a valid command`
        });
      }
    }
  },
  mounted() {
    this.$refs.consoleInput.focus();
  }
};
</script>


<style lang="postcss" scoped>
.consoleBody {
  max-height: 90%;
  @apply overflow-auto;
}
</style>

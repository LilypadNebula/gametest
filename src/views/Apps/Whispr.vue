<template>
  <div class="wrapper">
    <div class="sidebar">
      <div
        v-for="peep in people"
        :key="peep"
        class="flex justify-around items-center p-10 rounded font-bold"
        :class="peep === selected ? 'bg-grey-light text-black' : 'text-white'"
        @click="selected = peep"
      >
        <div class="h-12 w-12 rounded-full bg-purple"></div>
        <p class="text-2xl">Person {{peep}}</p>
      </div>
    </div>
    <div class="chat">
      <div
        v-for="message in selectedConversation.messages"
        :key="message.id"
        class="flex items-center border-b-2 border-grey-light p-8"
      >
        <div
          class="h-24 w-24 rounded-full mx-4"
          :class="message.person === 0 ? 'bg-yellow' : 'bg-purple'"
        ></div>
        <div class="flex flex-col">
          <p
            v-for="(c,index) in message.content"
            :key="`${message.id}-${index}`"
            class="text-5xl my-1"
          >{{c}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    people: [1, 2, 3, 4, 5, 6, 7, 8],
    selected: 1,
    conversations: [
      {
        person: 1,
        messages: [
          {
            person: 1,
            id: 4242,
            content: [
              "Hey",
              "What's up?",
              "I found that thing you wanted, but it's gonna cost you"
            ]
          },
          { person: 0, id: 93939, content: ["Oh yeah?", "How much?"] },
          { person: 1, id: 994933, content: ["😉 You'll find out tomorrow"] }
        ]
      }
    ]
  }),
  computed: {
    selectedConversation() {
      return (
        this.conversations[
          this.conversations.findIndex(e => e.person === this.selected)
        ] || []
      );
    }
  }
};
</script>


<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: "sidebar chat";
  @apply h-full overflow-hidden font-sans;
}

.sidebar {
  grid-area: sidebar;
  background-color: hsl(0, 0%, 40%);
  @apply flex flex-col p-4 overflow-auto shadow-lg z-50;
}

.chat {
  grid-area: chat;
  background-color: hsl(0, 0%, 80%);
  @apply flex flex-col p-4 overflow-auto z-0;
}

.message {
  @apply p-10 text-white text-2xl;
}

.sent + .received,
.received + .sent {
  @apply border-t-2 border-grey-light;
}
</style>


<template>
  <div class="wrapper">
    <div class="sidebar bg-orange"></div>
    <div class="chat bg-purple"></div>
  </div>
</template>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: "sidebar chat";
  @apply h-full;
}

.sidebar {
  grid-area: sidebar;
}

.chat {
  grid-area: chat;
}
</style>


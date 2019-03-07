<template>
  <div class="main">
    <div class="screen">
      <component :is="current"></component>
    </div>
    <div class="toolbar bg-blue flex items-center justify-around">
      <Pushy @press-end="current = 'console'">
          <font-awesome-icon icon="terminal" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Console</p>
      </Pushy>
      <Pushy @press-end="current = 'whispr'">
          <font-awesome-icon icon="comment-alt" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Whispr</p>
      </Pushy>
      <Pushy @press-end="current = 'market'">
          <font-awesome-icon icon="shopping-cart" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Market</p>
      </Pushy>
      <Pushy @press-end="current = 'oink'">
          <font-awesome-icon icon="piggy-bank" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Oink Banking</p>
      </Pushy>
    </div>
  </div>
</template>

<script>
import posed from "vue-pose";

export default {
  components: {
    Console: () => import('./Apps/Console'),
    Market: () => import('./Apps/Market'),
    Oink: () => import('./Apps/Oink'),
    Whispr: () => import('./Apps/Whispr'),
    Pushy: posed.button({
      hoverable: true,
      pressable: true,
      init: { scale: 1, afterChildren: true },
      hover: { scale: 1.5, beforeChildren: true },
      press: { scale: 1.2 }
    })
  },
  data: () => ({
    current: 'console'
  })
};
</script>


<style lang="postcss" scoped>
.main {
  height: 100vh;
  display: grid;
  grid-template-rows: 85% 15%;
  grid-template-columns: 100%;
  grid-template-areas: "screen" "toolbar";
}

.screen {
  grid-area: screen;
}

.toolbar {
  grid-area: toolbar;
}

button {
  @apply flex flex-col items-center no-underline;
}

p {
  @apply text-2xl text-white;
}
</style>

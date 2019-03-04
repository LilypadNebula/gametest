<template>
  <div class="main">
    <div class="screen">
      <router-view></router-view>
    </div>
    <div class="toolbar bg-blue flex items-center justify-around">
      <Pushy>
        <router-link to="/" class>
          <font-awesome-icon icon="home" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Desktop</p>
        </router-link>
      </Pushy>
      <Pushy>
        <router-link to="/console">
          <font-awesome-icon icon="terminal" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Console</p>
        </router-link>
      </Pushy>
      <Pushy>
        <router-link to="/whispr">
          <font-awesome-icon icon="comment-alt" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Whispr</p>
        </router-link>
      </Pushy>
      <Pushy>
        <router-link to="/market">
          <font-awesome-icon icon="shopping-cart" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Market</p>
        </router-link>
      </Pushy>
      <Pushy>
        <router-link to="/oink">
          <font-awesome-icon icon="piggy-bank" class="text-white mx-4" size="3x"></font-awesome-icon>
          <p>Oink Banking</p>
        </router-link>
      </Pushy>
    </div>
  </div>
</template>

<script>
import posed from "vue-pose";

export default {
  components: {
    Pushy: posed.div({
      hoverable: true,
      pressable: true,
      init: { scale: 1, afterChildren: true },
      hover: { scale: 1.5, beforeChildren: true },
      press: { scale: 1.2 }
    })
  },
  async mounted() {
    this.$store.dispatch("initGame");
  }
};
</script>


<style lang="postcss" scoped>
@import "assets/styles/tailwind.postcss";

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

a {
  @apply flex flex-col items-center no-underline;
}

p {
  @apply text-2xl text-white;
}
</style>

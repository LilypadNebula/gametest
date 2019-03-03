<template>
  <div class="main">
    <div class="screen">
      <router-view></router-view>
    </div>
    <div class="toolbar bg-blue flex items-center">
      <Pushy>
        <router-link to="/">
          <font-awesome-icon icon="home" class="text-white mx-4" size="3x"></font-awesome-icon>
        </router-link>
      </Pushy>
      <Pushy>
        <router-link to="/console">
          <font-awesome-icon icon="terminal" class="text-white mx-4" size="3x"></font-awesome-icon>
        </router-link>
      </Pushy>
      <Pushy>
        <router-link to="/whispr">
          <font-awesome-icon icon="comment-alt" class="text-white mx-4" size="3x"></font-awesome-icon>
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
      init: { scale: 1 },
      hover: { scale: 1.5 },
      press: { scale: 1.2 }
    })
  }
};
</script>


<style lang="postcss" scoped>
@import "assets/styles/tailwind.postcss";

.main {
  height: 100vh;
  display: grid;
  grid-template-rows: 90% 10%;
  grid-template-columns: 100%;
  grid-template-areas: "screen" "toolbar";
}

.screen {
  grid-area: screen;
}

.toolbar {
  grid-area: toolbar;
}
</style>

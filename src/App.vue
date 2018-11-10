<template>
  <div id="app">
    <div class="ui inverted menu">
      <a class="item">
        <router-link to="/">Ninjas Dash</router-link>
      </a>
      <a class="item">
        <router-link to="/ninja">Ninja Board</router-link>
      </a>
    </div>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>  
</template>


<script>  
  export default { }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 2%;
  margin-right: 2%;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
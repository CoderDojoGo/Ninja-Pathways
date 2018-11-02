<template>
<div class="ui stackable right aligned grid">
  <div class="center aligned four column row">
    <div class="column">
        <ninja-card></ninja-card>
    </div>
    <div class="column">
        <ninja-card></ninja-card>
    </div>
    <div class="column">
        <ninja-card></ninja-card>
    </div>    
    <div class="column">
        <ninja-card></ninja-card>
    </div>    
  </div>
</div>
</template>

<script>
  import NinjaCard from "./NinjaCard.vue";  
  export default {
    components: {
        NinjaCard
    }
  }
</script>

<style scoped>
    .column {
        margin: auto;
        text-align: center;
    }
</style>

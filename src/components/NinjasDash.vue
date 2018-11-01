<template>
    <div class="ui four column divided grid">
    <div class="row">
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
    <div class="row">
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
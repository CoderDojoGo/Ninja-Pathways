<template>
    <div class="ui left aligned celled list">
        <div class="item" v-for="ninja in ninjas.slice(0, 5)" :key="ninja.username">
            <img class="ui avatar image" src="../assets/ninja.png">
            <div class="content">
                <div class="ui left floated header">{{ ninja.username }}</div>
                    <a class="ui tag label">{{ ninja.workshop }} </a> <a class="ui tag label"> LVL - {{ ninja.level }} </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        ninjas: Array
    }
}
</script>
<style>

</style>

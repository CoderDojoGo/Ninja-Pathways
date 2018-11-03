<template>
    <div class="ui card" id="ninjacard">
        <div class="image">
            <img src="../assets/ninja.png">
        </div>
        <div class="content">
            <a class="header">{{ ninja.username }}</a>
            <div class="meta">
                <span class="date">{{ ninja.workshop }} - {{ ninja.level }}</span>
            </div>
            <div class="description">
                
            </div>
        </div>
        <div class="extra content">
            <a>
            <i class="user icon"></i>
                Infos supp
            </a>
        </div>
    </div>    
</template>

<script>

export default {
    props:{
        value: Object
    },
    computed:{
        ninja() { return this.value }
    }
}
</script>

<style>
#ninjacard{
    margin: 0 auto;
    padding: 0 auto
}
</style>



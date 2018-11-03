<template>
    <div class="ui segment">
        <div class="ui two column stackable internally celled grid">
            <div class="column">
                <ninja-search @search="search"></ninja-search>
            </div>
            <div class="column">
                <transition name="fade">
                    <ninja-card :value="ninja" v-if="show"></ninja-card> 
                </transition>
            </div>
        </div>
    </div>
</template>


<script>
    import NinjaSearch  from "./NinjaSearch.vue";   
    import NinjaCard  from "./NinjaCard.vue";    

    import Ninja from "../js/ninja";

    export default {
        data() {
            return {
                text: "",    
                ninja : new Ninja(),
                show : false
            }
        },
        computed:{
            ninjaV: {
                get() {
                    return this.ninja
                },
                set(value) {
                    this.ninja = value
                }

            }
        },
        components: {
            NinjaSearch,
            NinjaCard
        },
        methods: {
            search(text){
                let result = this.getNinjas.filter(x => x.username === text)
                if(result.length > 0){
                    
                    this.ninjaV = result.find(x => x.username === text)

                    this.show = true
                }
            }
        }

    }
</script>

<style>
    #ninja{
        margin: 0 auto
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>

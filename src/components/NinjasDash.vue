<template>
<div>
    <div class="ui right aligned category search" id="search" >
        <div class="ui icon input">
            <input class="prompt" type="text" v-model="text" @change="search" placeholder="Search a ninja...">
            <i class="search icon"></i>
        </div>
        <div class="results"></div>
        
    </div>
    <ninja-card v-model="person" v-if="found"></ninja-card>
</div>
</template>

<script> 
    import NinjaCard  from "./NinjaCard.vue";       
    import Ninja from "../js/ninja";
    let ninjas = [
        { username: 'Sasuke', workshop: 'Maker', level: '1' },
        { username: 'Naruto', workshop: 'Maker', level: '1' },
        { username: 'Sakura', workshop: 'Maker', level: '1' },
        ];
    export default {
        data(){
            return {
                text: "",
                found: false,
                ninja: new Ninja()
            }
        },
        components: {
            NinjaCard
        },
        computed:{
            person : {
                get() {
                    return this.ninja
                },
                set(value) {
                    this.ninja = value
                }
            } 
        },
        methods:{
            search(){
                let result = ninjas.filter(x => x.username === this.text)
                if(result.length > 0){
                    this.found=true
                    console.log( this.person)
                    this.person = result.find(x => x.username === this.text)
                    console.log( this.person)
                }
            }
        }
    }


</script>

<style scoped>
    #search {
        margin-bottom: 20px; 
    }
</style>

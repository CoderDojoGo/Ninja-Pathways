<template>
    <div>

        <div class="ui segment">
            <div class="ui two column very relaxed grid">
                <div class="column">
                    <div class="container">
                        <div class="Chart__list">
                            <div class="Chart">
                            <h2>Ninjas Skills</h2>
                            <ninja-pie></ninja-pie>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    
                </div>
            </div>
            <div class="ui vertical divider">
                Scratch
            </div>
        </div>
        <ninja-search @search="search"></ninja-search>
        <div class="result">
            <ninja-card v-model="person" v-if="found"></ninja-card> 

        </div>
    </div>
</template>

<script> 
    import NinjaCard  from "./NinjaCard.vue";     
    import NinjaSearch  from "./NinjaSearch.vue";     
    import NinjaPie from "./NinjasPie.vue";       

    import Ninja from "../js/ninja";
    
    let data = {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
        datasets: [{
            data: [20, 10, 4, 2]
        }]
    }
    let options = {
        scale: {
            // Hides the scale
            display: false
        }
    };    
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
            NinjaCard,
            NinjaSearch,
            NinjaPie
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
            search(text){
                let result = ninjas.filter(x => x.username === text)
                if(result.length > 0){
                    this.found=true
                    this.person = result.find(x => x.username === text)
                }
            }
        }
    }
</script>

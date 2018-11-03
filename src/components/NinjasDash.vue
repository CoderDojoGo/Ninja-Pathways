<template>
    <div>

        <div class="ui segment">
            <div class="ui two column very relaxed grid">
                <div class="column">
                    <div class="container">
                        <div class="Chart__list">
                            <div class="Chart">
                            <h2>Ninjas Skills</h2>
                            <ninja-pie :chart-data="datacollection"></ninja-pie>
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


    export default {
        data(){
            return {
                text: "",
                found: false,
                ninja: new Ninja(),
                ninjas: [
                    { username: 'Sasuke', workshop: 'Maker', level: '1' },
                    { username: 'Naruto', workshop: 'Maker', level: '2' },
                    { username: 'Sakura', workshop: 'Maker', level: '1' },
                ],
                datacollection: null
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
            },
            persons : {
                get() {
                    return this.ninjas
                },
                set(value) {
                    this.ninjas = value
                }                
            }
        },
        methods:{
            search(text){
                let result = this.persons.filter(x => x.username === text)
                if(result.length > 0){
                    this.found=true
                    this.person = result.find(x => x.username === text)
                }
            },
            fillData () {
                    let lvl = this.persons.map(x => x.level)
                    
                    this.datacollection = {
                    labels: ['LVL 1', 'LVL 2', 'LVL 3'],
                    datasets: [{
                        data: [
                            lvl.filter(x => x === "1").length, 
                            lvl.filter(x => x === "2").length, 
                            lvl.filter(x => x === "3").length
                        ],
                        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe']
                    }]
                }
            }
        },
        mounted () {
            this.fillData()
        }
    }
</script>

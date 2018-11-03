<template>
    <div class="ui segment">
        <div class="ui two column stackable internally celled grid">
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
                <h2>Scratch Team</h2>
                <transition-group appear name="list" tag="p">
                    <ninja-list :ninjas="ninjas" key="ninjas.username"></ninja-list>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script> 
    import NinjaPie from "./NinjasPie.vue";   
    import NinjaList from "./NinjasList.vue";        

    import Ninja from "../js/ninja";


    export default {
        data(){
            return {
                ninja: new Ninja(),
                datacollection: null
            }
        },
        components: {
            NinjaPie,
            NinjaList
        },
        computed:{
            ninjas : {
                get() {
                    return this.getNinjas
                }
            }
        },
        methods:{
            fillData () {
                    let lvl = this.ninjas.map(x => x.level)
                    
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

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

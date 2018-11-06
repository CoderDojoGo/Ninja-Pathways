<template>
    <div>
        <div class="ui active inverted dimmer" v-if="!show">
            <div class="ui mini text loader">Loading</div>
        </div>
        <div v-if="show">
            <div class="ui segment">
                <div class="ui two column stackable internally celled grid">
                    <div class="column">
                        <div class="container">
                            <div class="Chart__list">
                                <div class="Chart">
                                <h2>Scratch Skills</h2>
                                    <ninja-pie :chart-data="scratchData" :options="{responsive: true, maintainAspectRatio: false}" :width="300" :height="150"></ninja-pie>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <h2>Scratch Team</h2>
                        <transition-group appear name="list" tag="p">
                            <ninja-list :ninjas="scratchNinjas" key="ninjas.username"></ninja-list>
                        </transition-group>
                    </div>
                </div>
            </div>
            <div class="ui segment">
                <div class="ui two column stackable internally celled grid">
                    <div class="column">
                        <div class="container">
                            <div class="Chart__list">
                                <div class="Chart">
                                <h2>Makers Skills</h2>
                                <ninja-pie :chart-data="makersData" :options="{responsive: true, maintainAspectRatio: false}" :width="300" :height="150"></ninja-pie>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <h2>Makers Team</h2>
                        <transition-group appear name="list" tag="p">
                            <ninja-list :ninjas="makersNinjas" key="ninjas.username"></ninja-list>
                        </transition-group>
                    </div>
                </div>
            </div>
            <div class="ui segment">
                <div class="ui two column stackable internally celled grid">
                    <div class="column">
                        <div class="container">
                            <div class="Chart__list">
                                <div class="Chart">
                                <h2>Web Skills</h2>
                                <ninja-pie :chart-data="webData" :options="{responsive: true, maintainAspectRatio: false}" :width="300" :height="150"></ninja-pie>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <h2>Web Team</h2>
                        <transition-group appear name="list" tag="p">
                            <ninja-list :ninjas="webNinjas" key="ninjas.username"></ninja-list>
                        </transition-group>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
    import NinjaPie from "./NinjasPie.vue";   
    import NinjaList from "./NinjasList.vue";        

    export default {
        data(){
            return {
                ninjas: [],
                scratchData: null,
                webData: null,
                makersData: null,
                show: false,
                scratchNinjas: [],
                webNinjas:  [],
                makersNinjas:  []
            }
        },
        components: {
            NinjaPie,
            NinjaList
        },
        methods:{
            fillData () {
                this.scratchNinjas = this.ninjas.filter(x => x.workshop === "Scratch")
                this.makersNinjas = this.ninjas.filter(x => x.workshop === "Makers")
                this.webNinjas = this.ninjas.filter(x => x.workshop === "Web")

                let lvl = this.scratchNinjas.map(x => x.level)

                if(lvl.length > 0){
                    this.scratchData = {
                        labels: ['LVL 1', 'LVL 2', 'LVL 3'],
                        datasets: [{
                            data: [
                                lvl.filter(x => x === 1).length, 
                                lvl.filter(x => x === 2).length, 
                                lvl.filter(x => x === 3).length
                            ],
                            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
                        }]
                    }
                }
                
                lvl = this.makersNinjas.map(x => x.level)

                if(lvl.length > 0){
                    this.webData = {
                        labels: ['LVL 1', 'LVL 2', 'LVL 3'],
                        datasets: [{
                            data: [
                                lvl.filter(x => x === 1).length, 
                                lvl.filter(x => x === 2).length, 
                                lvl.filter(x => x === 3).length
                            ],
                            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
                        }]
                    }
                }

                lvl = this.webNinjas.map(x => x.level)

                if(lvl.length > 0){
                    this.makersData = {
                        labels: ['LVL 1', 'LVL 2', 'LVL 3'],
                        datasets: [{
                            data: [
                                lvl.filter(x => x === 1).length, 
                                lvl.filter(x => x === 2).length, 
                                lvl.filter(x => x === 3).length
                            ],
                            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
                        }]
                    }
                }

            }
        },
        mounted () {
            this.$http.get('http://localhost:5000/api/ninjas').then(response => {
                this.ninjas = response.data
                this.show= true
                console.log(this.ninjas)
                this.fillData()
            })
                
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

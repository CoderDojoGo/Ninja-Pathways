<template>
    <div class="ui segment">
        <div class="ui two column stackable internally celled grid">
            <div class="column">
            </div>
            <div class="column">
                <h2>Scratch Team</h2>
                <transition-group name="list" appear>
                    <ninjas-list :ninjas="ninjas" key="l"></ninjas-list>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script>      
    import { mapState } from 'vuex'
    import NinjasList from './NinjasList.vue'

    export default {
        computed: mapState({
            ninjas: state => state.ninjasModule.all    
        }),
        components: {
            NinjasList
        },
        methods:{

        },
        mounted () {
            this.$store.dispatch('ninjasModule/getAllNinjasAync')
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

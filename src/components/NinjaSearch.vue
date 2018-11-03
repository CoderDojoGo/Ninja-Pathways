<template>
    <div class="ui right aligned category search" id="search" > 
        <div class="ui icon input">
            <input class="prompt" type="text" v-model="text" @change="search" placeholder="Search a ninja...">
            <i class="search icon"></i>
        </div>
    </div>    
</template>


<script>
export default {
    data(){
        return {
            text: ""
        }
    },
    methods:{
        search(){
            this.$emit('search', this.text)
        }
    }
    
}
</script>


<style scoped>
    #search {
        margin-bottom: 20px; 
    }
</style>
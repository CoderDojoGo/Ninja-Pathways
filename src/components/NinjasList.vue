<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-list three-line>
          <template v-for="(ninja, index) in ninjas">

            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-if="ninja.avatar" :src="ninja.avatar"> 
                    <img v-else src='../assets/ninja.png'>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title v-html="ninja.username"></v-list-tile-title>
                    <v-list-tile-sub-title>
                        {{ninja.workshop}} - {{ninja.level}}
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
        ninjas: Array
    }
  }
</script>
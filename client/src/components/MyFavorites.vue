<template>
   <v-card>
    <v-list three-line dark>
      <template>
        <v-list-tile v-for="(resto, i) in restaurants"
          :key="i"
          avatar
          ripple
        >
        <v-list-tile-avatar>
          <img :src="resto.featured_image" alt="">
        </v-list-tile-avatar>
          <v-list-tile-content>
            <v-container>
              <v-layout row>
                <v-flex xs12 sm12 md4 lg4>
                  <v-list-tile-title>{{resto.title}}</v-list-tile-title>
                </v-flex>
                <v-flex xs12 sm12 md4 lg4>
                  <v-list-tile-title>{{resto.location}}</v-list-tile-title>
                </v-flex>
                <v-flex xs12 sm12 md4 lg4>
                    <v-btn :to="'/'+resto.restaurantId" small>
                      Details
                    </v-btn>
                  
                </v-flex>
              </v-layout>
            </v-container>
          </v-list-tile-content>

          <v-list-tile-action>
            
          </v-list-tile-action>

        </v-list-tile>
        <v-divider
          
        ></v-divider>
      </template>
    </v-list>    
  </v-card>
</template>

<script>
import db from '../config.js'
export default {
  name: 'MyFavorites',
  data () {
    return {
      restaurants: []
    }
  },
  mounted () {
    this.getMyFavorites()
  },
  methods: {
    getMyFavorites () {
      db
        .collection('restaurants')
        .onSnapshot(snapshot => {
          var restaurants = []
          snapshot.forEach(doc => {
            restaurants.push({id: doc.id, ...doc.data()})
          })
        this.restaurants = restaurants
        })
    }
  }
}
</script>

<style>

</style>

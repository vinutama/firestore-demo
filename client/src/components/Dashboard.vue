<template>
   <v-card>
    <v-list two-line dark>
      <template>
        <v-list-tile v-for="(resto, i) in restaurants"
          :key="i"
          avatar
          ripple
        >
         <v-list-tile-avatar>
          <img :src="resto.restaurant.featured_image" alt="">
        </v-list-tile-avatar>
          <v-list-tile-content>
            <v-container>
              <v-layout row>
                <v-flex xs12 sm12 md4 lg4>
                  <v-list-tile-title>{{resto.restaurant.name}}</v-list-tile-title>
                </v-flex>
                <v-flex xs12 sm12 md4 lg4>
                  <v-list-tile-title>{{resto.restaurant.location.address}}</v-list-tile-title>
                </v-flex>
                <v-flex xs12 sm12 md4 lg4>
         
                    <v-btn small fab @click.prevent="addRestaurant(resto.restaurant.id, resto.restaurant.name, resto.restaurant.location.address, resto.restaurant.currency, resto.restaurant.cuisines, resto.restaurant.user_rating.aggregate_rating, resto.restaurant.featured_image, resto.restaurant.menu_url)">
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn small :to="'/'+resto.restaurant.id">
                      Details
                    </v-btn>
             
                </v-flex>
              </v-layout>
            </v-container>
          </v-list-tile-content>

          <v-list-tile-action>
            
          </v-list-tile-action>

        </v-list-tile>
        <v-divider></v-divider>
        <v-divider dark></v-divider>
      </template>
    </v-list>    
  </v-card>
</template>

<script>
import db from '../config.js'
export default {
  name: 'Dashboard',
  data () {
    return {
      name: ''
    }
  },
  props: ['restaurants'],
  mounted () {
    
  },
  methods: {
    addRestaurant (id, title, location, currency, cuisines, rating, img, menu) {
      let result = {
        restaurantId: id,
        title: title,
        location: location,
        currency: currency,
        cuisines: cuisines,
        rating: rating,
        featured_image: img,
        menu: menu
      }
      db
        .collection('restaurants')
        .add(result)
        .then(docRef => {
          
        })
    }
  }
}
</script>

<style>

</style>

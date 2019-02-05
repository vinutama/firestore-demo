<template>
  <div class="home">
    <v-snackbar
      v-model="response.snackbar"
      :timeout="response.timeout"
      :top="response.y === 'top'"
      :color="response.color"
      
    >
      {{ response.text }}
      <v-btn
        color="pink"
        flat
        @click="reponse.snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-container>
      <v-layout>
        <v-flex>
          <Navbar></Navbar>
          <div class="mt-5">
            <subNavbar @get-restaurants="getRestaurants"></subNavbar>
            <router-view :restaurants="restaurants" @register-resp="registerResp"></router-view>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'
import SubNavbar from '@/components/SubNavbar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'home',
  data () {
    return {
      restaurants: [],
      resto: '',
      response: {}
    }
  },
  components: {
    Dashboard,
    SubNavbar,
    Navbar
  },
  methods: {
    getRestaurants (val) {
      this.restaurants = val.restaurants
    },
    registerResp (val) {
      this.response = val
    } 
  }
}
</script>

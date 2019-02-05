<template>
  <div>
   <v-toolbar color="light-blue darken-4" dark flat>

      <v-toolbar-title>Fav's Restaurant</v-toolbar-title>

      <v-spacer></v-spacer>


      <div class="text-xs-center">
        <v-btn to="/favorites">
          My Favorites
        </v-btn>
        <v-btn to="/">
         Search restaurant
        </v-btn>
      </div>
    </v-toolbar>

    <v-toolbar
      dense
      flat
    >
     <v-btn icon type="submit" v-show="this.$route.path === '/'">
        <v-icon>search</v-icon>
      </v-btn>
    <v-form @submit.prevent="searchRestaurant" v-show="this.$route.path === '/'">
      <v-text-field
        
        single-line
        v-model="name"
        label="Search Restaurant Name"
      ></v-text-field>
    </v-form>

    </v-toolbar>
      <v-card v-show="this.$route.path === '/'" dark>
        <v-container>
          <v-layout row>
            <v-flex xs12 sm12 md4 lg4>
              <v-card-title>Restaurant Name</v-card-title>
            </v-flex>
            <v-flex xs12 sm12 md4 lg4>
              <v-card-title>Restaurant Location</v-card-title>
            </v-flex>
            <v-flex xs12 sm12 md4 lg4>
              <v-card-title>Actions</v-card-title>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    searchRestaurant () {
      this.$axios({
        method: `GET`,
        headers: {
          'user-key': 'c2f8eca9c1d612e1de64bd6c6d2c6f87'
        },
        url: `/search?entity_id=74&q=${this.name}`
      })
      .then(({ data }) => {
        this.$emit('get-restaurants', data)
      })
    }
  }
}
</script>

<style>

</style>

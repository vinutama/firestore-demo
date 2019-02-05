<template>
  <div class="mt-4">
    <v-card dark>
      <v-img :src="restaurant.featured_image"></v-img>
      <v-card-title>{{restaurant.name}}</v-card-title>
      <v-divider></v-divider>
      <v-card-text>Cuisines: {{restaurant.cuisines}}</v-card-text>
      <v-card-text>Currency: {{restaurant.currency}}</v-card-text>
      <v-card-text>Location: {{restaurant.location.address}}</v-card-text>
      <v-card-text>Rating: {{restaurant.user_rating.aggregate_rating}}</v-card-text>
      <v-card-text>
        <v-btn light>
          <a :href="restaurant.menu_url">
              Menu
          </a>
        
        </v-btn>
      </v-card-text>
      <v-card-action>
        
      </v-card-action>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Details',
  mounted () {
    this.getDetails()
  },
  data () {
    return {
      restaurant: {}
    }
  },
  methods: {
    getDetails () {
      this.$axios({
        method: `GET`,
        headers: {
          'user-key': 'c2f8eca9c1d612e1de64bd6c6d2c6f87'
        },
        url: `/restaurant?res_id=${this.$route.params.id}`
      })
      .then(({ data }) => {
        this.restaurant = data
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>

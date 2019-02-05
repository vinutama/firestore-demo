<template>
  <v-toolbar dark color="primary" app>
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Cloud Cafe</v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-btn icon to="/">
      <v-icon>home</v-icon>
    </v-btn>
    
    <v-tooltip bottom>
      <v-btn icon to="/register" slot="activator">
        <v-icon>assignment</v-icon>
      </v-btn>
      <span>Register Here</span>
    </v-tooltip>

    <v-tooltip bottom>
      <v-btn icon to="/login" slot="activator">
        <v-icon>input</v-icon>
      </v-btn>
      <span>Login Here</span>
    </v-tooltip>


    </v-toolbar>

    
</template>

<script>
import Register from '@/components/FormRegister.vue'
export default {
  name: 'Navbar',
  data () {
    return {
      dialog: false
    }
  },
  components: {
    Register
  },
  methods: {
    
  }
}
</script>

<style>

</style>

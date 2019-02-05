<template>
  <v-container>
      <v-layout>
        <v-flex>
          <v-card dark>
            <div class="headline pt-2">
              Login
            </div>
            <v-container>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
            v-model="password"
            type="password"
            :counter="10"
            :rules="passRules"
            required
            label="Password">
              
            </v-text-field>

            <v-btn
              color="warning"
              type="submit"
              @click.prevent="login"
            >
              Login
            
            <v-icon class="pl-2">input</v-icon>
            </v-btn>
          </v-form>
          </v-container>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      password: '',
      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length <= 10) || 'Password must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }
  }
}
</script>

<style>

</style>

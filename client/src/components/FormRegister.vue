<template>
    <v-container>
      <v-layout>
        <v-flex>
          <v-card dark>
            <div class="headline pt-2">
              Register
            </div>
            <v-container>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :counter="20"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

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

            <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
            ></v-checkbox>

            <v-btn
              color="error"
              @click="reset"
            >
              Reset Form
            </v-btn>

            <v-btn
              color="warning"
              type="submit"
              @click.prevent="register"
            >
              Register
            
            <v-icon class="pl-2">send</v-icon>
            </v-btn>
          </v-form>
          </v-container>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import db from '../config.js'

export default {
  name: 'Register',
  data () {
    return {
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters'
      ],
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
      checkbox: false,
      snackbar: false,
      y: 'top',
      text: '',
      timeout: 6000,
      color: ''
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
          this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    register () {
      let response = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      db
        .collection('users')
        .add(response)
        .then(docRef => {
          this.snackbar = true
          this.y = 'top'
          this.text = 'Successfully register!, Please login to continue!'
          this.timeout = 6000 
          this.color = 'green'
          let response = {
            snackbar: this.snackbar,
            y: this.y,
            text: this.text,
            timeout: this.timeout,
            color: this.color
          }
          this.$emit('register-resp', response)
        })
    }
  }
}
</script>

<style>

</style>

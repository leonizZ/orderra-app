<template>
  <v-container class="pa-0">
    <v-row class="justify-center"> </v-row>
    <v-row no-gutters class="justify-center align-center login-cont white-bg">
      <v-col cols="12" sm="9" md="6" class="">
        <v-img
          src="/orderra-logo.svg"
          class="logo-img mb-4 text-center"
        ></v-img>
        <h2>Welcome!</h2>
        <p>Sign in to your account to continue</p>
        <!-- login-form -->
        <v-form ref="form" v-model="valid" lazy-validation>
          <p class="mb-0 py-2">Email</p>
          <v-text-field
            solo
            dense
            flat
            background-color="#f1f1f1"
            hide-details="auto"
            v-model="email"
            label="Email"
            required
          ></v-text-field>
          <p class="mb-0 py-2">Password</p>
          <v-text-field
            solo
            dense
            flat
            background-color="#f1f1f1"
            hide-details="auto"
            v-model="name"
            label="***"
            required
          ></v-text-field>

          <v-btn color="warning" class="mt-4" block>
            LogIn
          </v-btn>
          <!-- <v-btn color="primary" class="mt-4" block outlined>
            Register
          </v-btn> -->

          <v-btn color="info" class="mt-4" block>
            continue with Facebook
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>

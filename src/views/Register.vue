<template>
  <v-container>
    <v-row no-gutters class="justify-center">
      <v-col cols="12" sm="9" md="6">
        <h2>Register!</h2>
        <p>Free Delivery is waiting</p>
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
          <p class="mb-0 py-2">Conform Password</p>
          <v-text-field
            solo
            dense
            flat
            background-color="#f1f1f1"
            hide-details="auto"
            append-icon="mdi-eye-off"
            v-model="name"
            label="***"
            required
          ></v-text-field>

          <v-btn color="warning" class="mt-4" block>
            Register
          </v-btn>
          <!-- <v-btn color="primary" class="mt-4" block outlined>
            Register
          </v-btn> -->
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

<template>
  <v-row class="categories-cont">
    <v-col
      cols="4"
      xs="4"
      sm="3"
      md="2"
      v-for="category in categories"
      :key="category.id"
    >
      <v-hover v-slot="{ hover }">
        <v-card
          class="pa-4 text-center "
          color="#FAFAFA"
          :elevation="hover ? 6 : 0"
        >
          <v-avatar :color="CategoryColor(category.color)" class="rounded-xl">
            <v-icon dark>
              {{ category.icon }}
            </v-icon>
          </v-avatar>

          <p class="mb-0 body-1">{{ category.title }}</p>
          <p class="body-2 grey--text mb-0">{{ category.options }}</p>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    CategoryColor(color) {
      return color;
    }
  },
  computed: {},
  data: () => ({
    categories: [
      {
        id: 1,
        icon: "mdi-silverware",
        title: "Restaurant",
        color: "#BA68C8",
        options: "200+ options"
      },
      {
        id: 2,
        icon: "mdi-basket-fill",
        title: "Groceries",
        color: "#42A5F5",
        options: "200+ options"
      },
      {
        id: 3,
        icon: "mdi-pharmacy",
        title: "Medicine",
        color: "#43A047",
        options: "200+ options"
      },
      {
        id: 4,
        icon: "mdi-food",
        title: "Snacks",
        color: "#FB8C00",
        options: "200+ options"
      },
      {
        id: 5,
        icon: "mdi-engine",
        title: "Hardware",
        color: "#43A047",
        options: "200+ options"
      },
      {
        id: 6,
        icon: "mdi-food",
        title: "Sample",
        color: "#FB8C00",
        options: "200+ options"
      }
    ]
  })
};
</script>

<style>
.categories-cont .v-card {
  cursor: pointer;
}
</style>

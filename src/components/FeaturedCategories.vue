<template>
  <div class="test">
    <v-slide-group mandatory show-arrows>
      <v-slide-item v-for="category in categories" :key="category.id">
        <v-card
          class="pa-4 mx-4 text-center category-cont"
          @click="selectCategory(category.id)"
        >
          <v-avatar :color="CategoryColor(category.color)" class="rounded-xl">
            <v-icon dark>
              {{ category.icon }}
            </v-icon>
          </v-avatar>

          <p class="mb-0 body-1">{{ category.title }}</p>
          <p class="body-2 grey--text mb-0">{{ category.options }}</p>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  methods: {
    CategoryColor(color) {
      return color;
    },

    selectCategory(id) {
      this.$router.push({ path: "/category/" + id });
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
      },
      {
        id: 7,
        icon: "mdi-food",
        title: "Sample",
        color: "#FB8C00",
        options: "200+ options"
      },

      {
        id: 8,
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
.test {
  border: 1px solid red;
}
</style>

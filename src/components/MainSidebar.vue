<template>
  <v-navigation-drawer app dense color="#F8F8F8" floating>
    <v-list-item>
      <v-list-item-content>
        <v-img src="/orderra-logo.svg"></v-img>
      </v-list-item-content>
    </v-list-item>

    <v-list dense>
      <v-list-item-group v-model="group">
        <v-list-item
          link
          v-for="(item, i) in items"
          :key="i"
          @click="goTo('/' + item.link)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template v-slot:append>
      <div class="d-flex ma-4 flex-column">
        <v-btn small block color="primary" @click="goTo('/login')">
          Login
        </v-btn>

        <v-btn
          small
          block
          outlined
          color="warning"
          @click="goTo('/register')"
          class="mt-3"
        >
          Register
        </v-btn>
      </div>

      <div class="d-flex align-center ma-4">
        <v-avatar color="indigo">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        <div class="ml-4">
          <p class="mb-0 ">Leonil Dayadyo</p>

          <small>leonild77@gmail.com</small>
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    group: null,
    dialog: false,
    items: [
      {
        icon: "mdi-home",
        text: "Home",
        link: ""
      },
      {
        icon: "mdi-heart",
        text: "Favorite",
        link: "favorites"
      },
      {
        icon: "mdi-send",
        text: "Orders",
        link: "order"
      },
      {
        icon: "mdi-settings",
        text: "Settings",
        link: "settings"
      }
    ]
  }),
  methods: {
    goTo(path) {
      this.$router.push({ path: path }).catch(() => {
        this.drawer = false;
      });
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style></style>

export default {
  computed: {
    knownRoutes() {
      return this.$store.state.knownRoutes;
    },

    subRoutes() {
      return this.$store.state.subRoutes;
    },
    exemptRoutes() {
      return this.$store.state.exemptRoutes;
    },
    mainRoute() {
      return this.knownRoutes.includes(this.$route.name);
    },
    subRoute() {
      return this.subRoutes.includes(this.$route.name);
    },
    isGame() {
      return this.$route.name === "play";
    },
    queryString() {
      return window.location.search || "";
    },
    urlParams() {
      return this.queryString ? new URLSearchParams(this.queryString) : null;
    }
  }
};

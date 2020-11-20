export default {
  data() {
    return {
      navTitle: null,
      drawer: false,
      initReload: false,
      online: true,
    };
  },
  computed: {
    subAppView() {
      if (this.$route.name === "advance" || this.$route.name === "play")
        return false;
      return this.inApp;
    },
    showNav() {
      return window.SETTINGS.SHOW_NAVBAR;
    },
    loading() {
      return this.$store.state.loading;
    },
    video() {
      return this.$store.state.video;
    },
    isOddUser() {
      return this.$store.getters.isOddUser;
    },
  },
  methods: {
    initApp() {
      this.$vuetify.theme.dark = true;
      let invalidMsg = "The given data was invalid.";
      window.axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (error) => {
          if (error.code === "ECONNABORTED") {
            if (this.$route.name === "add-credits") {
              this.$store.dispatch("snackbar", {
                message:
                  "A timeout has occured. The attached file may be too big or you have a slow internet connection. Please try again.",
                color: "red darken-4",
              });
            } else {
              this.$store.dispatch("snackbar", {
                message:
                  "A timeout has occured. Please check your internet connection and try again.",
                color: "red darken-4",
              });
            }
          }
          switch (error.response.status) {
            case 401:
              if (this.$route.name !== `login`)
                this.$router.push({ name: `login` });
              break;
            case 422:
              if (error.response.data && error.response.data.errors) {
                try {
                  invalidMsg =
                    error.response.data.errors[
                      Object.keys(error.response.data.errors)[0]
                    ][0];
                } catch (e) {
                  console.log(e);
                }
              } else {
                if (error.response.data && error.response.data.message)
                  invalidMsg = error.response.data.message;
              }
              if (this.$route.name !== "login")
                this.$store.dispatch("snackbar", {
                  message: invalidMsg,
                  color: "warning",
                });
              break;
            case 429:
              this.$store.dispatch("snackbar", {
                message: error.response.data.message,
                color: "warning",
              });
              break;
            case 500:
              this.$store.dispatch("snackbar", {
                message: "Oops! Something went wrong.",
                color: "red darken-4",
              });
              break;
            default:
              console.log(error);
              break;
          }
          console.log(error.response.status);
          return Promise.reject(error);
        }
      );

      document.addEventListener("app-resume", this.onResume, false);
      document.addEventListener("offline", this.onOffline, false);
      document.addEventListener("online", this.onOnline, false);
    },
    checkRoute() {
      let gameName = window.SETTINGS.GAME_TITLE;
      let route = this.$route.name;
      let title = route
        ? route.replace(/-+/g, " ").replace(/(?:^|\s)\S/g, (a) => {
            return a.toUpperCase();
          })
        : gameName;
      if (title === "Cash Ins") title = "Cash-in Requests";
      if (title === "Add Credits Source") title = "Add Credits";
      document.title = `${title} - ${gameName}`;
      route !== "play" ? (this.navTitle = title) : (this.navTitle = "");
      if (this.inApp) {
        this.$store.dispatch(
          "setUser",
          JSON.parse(localStorage.getItem("user"))
        );
        this.$nextTick(() => {
          if (this.pusher === null) this.initPusher();
        });
      } else {
        try {
          if (this.pusher) this.pusher.disconnect();
          this.pusher = null;
        } catch (error) {
          console.log(error);
        }
      }
    },
    reload() {
      this.initReload = true;
      this.getUserProfile(() => {
        this.$nextTick(() => {
          window.location.reload();
        });
      });
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.axios.defaults.headers.common["Authorization"] = null;
      this.$router.push({ name: `login` });
    },
    onOffline() {
      this.online = false;
      if (this.$route !== "download") {
        this.$store.dispatch("overlay", {
          message:
            "<strong>You are disconnected or offline</strong><br>Trying to reconnect...",
          button: false,
        });
      }
    },
    onOnline() {
      this.online = true;
      this.$store.dispatch("overlayHide");
    },
    onResume() {
      // if (window.isAndroid && this.video.wss_url && this.isGame) {
      //     this.reload()
      // } else if (this.online && this.inApp) {
      //     this.getGame(true)
      // }

      if (this.online && this.inApp) {
        this.getGame(true);
      }
    },
  },
  created() {
    this.initApp();
  },
  mounted() {
    this.checkRoute();

    if (window.isAndroid) {
      //
    } else {
      window.addEventListener("focus", this.onResume);
    }
  },
  watch: {
    $route() {
      this.$nextTick(() => {
        this.checkRoute();
      });
    },
  },
};

export default {
  methods: {
    bootGame() {
      this.getGame();
      this.getTrends();
      this.getHistory();
    },
    onBetSubmit() {
      // this.getUserProfile()
    },
    getGame(resume = false) {
      this.getData(
        `/${window.SETTINGS.API_SLUG}/games?next_only=1`,
        response => {
          this.$store.dispatch("setGame", response.game[0]);
          this.$store.dispatch("setVideo", response.set);
          if ((response.game[0] && response.game[0].winner) || resume) {
            this.getUserProfile();
            this.getTrends();
          }
        }
      );
    },
    getTrends(delay = 1200) {
      setTimeout(() => {
        this.getData(`/${window.SETTINGS.API_SLUG}/trends`, response => {
          this.$store.dispatch("setTrends", response);
        });
      }, delay);
    },
    getHistory(page = 1, delay = 1000, newData = false) {
      setTimeout(() => {
        this.getData(
          `/${window.SETTINGS.API_SLUG}/bets?limit=10&page=${page}`,
          response => {
            if (newData) response["new_data"] = true;
            this.$store.dispatch("setHistory", response);
          }
        );
      }, delay);
    },
    getRandomHistory() {
      let delay = ((Math.random() * (4 - 1 + 1)) << 0) * 1000;
      console.log("get history delay: " + delay);
      this.getHistory(1, delay, true);
    },
    getUserProfile(callback) {
      this.getData(
        `/${window.SETTINGS.API_SLUG}/account`,
        response => {
          let data = response.data;
          this.$store.dispatch("setUser", data);
          localStorage.setItem("user", JSON.stringify(data));
          if (callback) callback();
        },
        () => {
          window.location.reload();
        }
      );
    },
    getSICredits(mobile, callback) {
      this.getData(
        `/${window.SETTINGS.API_SLUG}/sabong-int/account/${mobile}`,
        response => {
          if (callback) callback(response);
        }
      );
    },
    getOutlets(mode) {
      this.getData(
        `/${window.SETTINGS.API_SLUG}/wallet/${mode}/outlets`,
        response => {
          response["mode"] = mode;
          this.$store.dispatch("setOutlets", response);
        }
      );
    },
    getWalletHistory(mode, page = 1, newData = false) {
      this.getData(
        `/${window.SETTINGS.API_SLUG}/wallet/${mode}?limit=2&page=${page}`,
        response => {
          response["mode"] = mode;
          if (newData) response["new_data"] = true;
          this.$store.dispatch("setWallet", response);
        }
      );
    }
  }
};

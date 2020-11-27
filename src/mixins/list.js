import data from "./data";

export default {
  mixins: [data],
  data: () => ({
    listData: {
      data: null,
      meta: null
    },
    dataUrl: null,
    dataKey: null,
    params: "",
    limit: 20,
    listPage: 1,
    last: null
  }),
  computed: {
    hasList() {
      return this.lists && this.lists.length;
    },
    lists() {
      return this.listData ? this.listData.data : [];
    },
    page() {
      return this.lists ? this.listData.meta.current_page : 1;
    },
    hasMore() {
      return this.lists && this.listData.meta
        ? this.page < this.listData.meta.last_page
        : false;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    loadMore() {
      this.listPage++;
      this.getList(this.listPage);
    },
    getList(page = 1) {
      if (!this.dataUrl) return;
      this.getData(
        `${this.dataUrl}?page=${page}&limit=${this.limit}${this.params}`,
        response => {
          let data = null;
          let meta = null;
          if (this.dataKey) {
            data = response[this.dataKey].data;
            meta = response[this.dataKey];
          } else {
            data = response.data;
            meta = response.meta;
          }
          if (this.listData && this.listData.data && page > 1) {
            this.listData.data = [
              ...new Set([].concat(...this.listData.data, ...data))
            ];
          } else {
            this.listData.data = data;
          }
          this.listData.meta = meta;
        }
      );
    }
  },
  mounted() {
    this.getList();
  }
};

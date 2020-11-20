export default {
    computed: {
        knownRoutes() {
            return this.$store.state.knownRoutes
        },
        exemptRoutes() {
            return this.$store.state.exemptRoutes
        },
        inApp() {
            return this.knownRoutes.includes(this.$route.name)
        },
        isGame() {
            return this.$route.name === 'play'
        },
        queryString() {
            return window.location.search || ''
        },
        urlParams() {
            return this.queryString ? new URLSearchParams(this.queryString) : null
        }
    }
}

import routes from './routes'
import data from './data'
import fetchers from './fetchers'

export default {
    mixins: [routes, data, fetchers],
    data() {
        return {
            token: localStorage.getItem('token'),
            error: false,
            busy: false,
        }
    },
    computed: {
        loggedIn () {
            return !!this.token
        },
        gameStatus () {
            return this.$store.state.gameStatus
        },
        sideColors() {
            return this.$store.state.sideColors
        },
        loading () {
            return this.$store.state.loading
        },
        user () {
            return this.$store.state.user
        },
        game () {
            return this.$store.getters.game
        },
        translation () {
            return this.$store.state.translation
        },
        video () {
            return this.$store.state.video
        },
        appEvent () {
            return this.$store.state.appEvent
        }
    },
    methods: {
        setToken () {
            if (this.token) window.axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        }
    },
    beforeMount () {
        console.log('before mount')
        // if (!window.isIOS && !window.isAndroid) this.$router.push({ name: `download` })
        if (localStorage.getItem('verified') == '-' && this.$route.name !== 'verify') {
            this.$router.push({ name: `verify` })
        } else if (!this.exemptRoutes.includes(this.$route.name) && !this.loggedIn) {
            this.$router.push({ name: `login` })
        }
        this.setToken()
    }
}

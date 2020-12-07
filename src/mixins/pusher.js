export default {
    data: () => ({
        pusher: null,
        channel: {
            game: null,
            user: null
        }
    }),
    computed: {
        isGame () {
            return this.$route.name === 'play'
        },
        user () {
            return this.$store.state.user || false
        }
    },
    methods: {
        initPusher () {
            // eslint-disable-next-line no-undef
            this.pusher = new Pusher(window.SETTINGS.PUSHER_APP_KEY, {
                cluster: window.SETTINGS.PUSHER_APP_CLUSTER,
                forceTLS: true
            })

            this.pusher.connection
                .bind('connected', () => {
                   this.$store.dispatch('overlayHide')
                   console.log('pusher connected')
                })
                .bind('disconnected', () => {
                    this.disconnectOverlay()
                })
                .bind('unavailable', () => {
                    this.disconnectOverlay()
                })

            this.subscribe()
        },
        subscribe () {
            console.log('subscribe')
            this.channel.game = this.pusher.subscribe(`${window.SETTINGS.ENVIRONMENT}.games`)
                .bind('game.updated', data => {
                   console.log('game update')
                   this.$store.dispatch('setGame', data)
                   if ((data.winner || data.status === 5) && this.isGame) this.$store.dispatch('getTrends')
                   if (data.status === 4) {
                       if (localStorage.getItem('last-game') === data.game_num ||
                           localStorage.getItem('last-game-history') === data.game_num) {
                           this.$store.dispatch('getRandomHistory')
                       }
                   }
                   if (data.status === 1) this.$store.dispatch('winHide')
                })
                .bind('game.settings', data => {
                    console.log('video settings')
                    this.$store.dispatch('setVideo', data.set)
                })

            this.channel.user = this.pusher.subscribe(`${window.SETTINGS.ENVIRONMENT}.users.${this.user.id}`)
                .bind('user.updated', data => {
                    console.log('user update')
                    this.$store.dispatch('setUser', data)
                    localStorage.setItem('user', JSON.stringify(data))
                    if (this.isGame) this.$store.dispatch('getHistory')
                    if (data.message) this.$store.dispatch('prompt', { message: data.message })
                    if (data.winner) this.$store.dispatch('win', { message: data })
                })
                .bind('user.credits', data => {
                    console.log('user credits')
                    this.user.credits = data.credits
                    this.$store.dispatch('setUser', this.user)
                    if (data.message) this.$store.dispatch('prompt', { message: data.message })
                    localStorage.setItem('user', JSON.stringify(this.user))
                })
                .bind('user.notify', data => {
                    console.log('user notify')
                    this.$store.dispatch('prompt', { message: data })
                })
                .bind('bet.submitted', () => {
                    console.log('bet update')
                    if (this.isGame) this.$store.dispatch('getHistory')
                })
        },
        disconnectOverlay() {
            if (this.inApp) {
                this.$store.dispatch('overlay', {
                    message: '<strong>You are disconnected or offline</strong><br>Trying to reconnect...',
                    button: false
                })
            }
        }
    },
    watch: {
        user () {
            if (this.user && this.user.id) { 
                if (this.pusher === null) this.initPusher() 
            }
        }
    }
}
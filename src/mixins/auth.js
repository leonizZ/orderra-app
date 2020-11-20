export default {
    methods: {
        login(data) {
            this.postData(`/auth/login${this.queryString}`, data, response => {
                this.storeCredentials(response.data)
                this.setToken()
                this.$nextTick(() => {
                    if (response.data.user.mobile_verified) {
                        localStorage.setItem('verified', true)
                        this.$router.push({ name: `play` })
                    } else {
                        localStorage.setItem('verified', '-')
                        this.$router.push({ name: `verify` })
                    }
                })
            })
        },
        register(data) {
            this.postData(`/auth/register${this.queryString}`, data, response => {
                this.storeCredentials(response.data)
                localStorage.setItem('verified', '-')
                localStorage.setItem('registered', true)
                this.$router.push({ name: 'verify' })
                this.reset()
            })
        },
        verify(data) {
            this.postData(`/auth/verify`, data, () => {
                localStorage.setItem('verified', true)
                this.$router.push({ name: 'play' })
                this.reset()
            })
        },
        reSendPin(data) {
            this.postData(`/auth/verify/resend`, data, () => {
                this.$store.dispatch('snackbar', {
                    message: 'One Time Pin has been sent.',
                    color: 'primary'
                })
            })
        },
        storeCredentials(data) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('mobile', data.user.mobile)
            localStorage.setItem('user', JSON.stringify(data.user))
            if (data.user.representative) localStorage.setItem('rep', JSON.stringify(data.user.representative))
        },
    }
}
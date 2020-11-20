export default {
    methods: {
        getData(url, successCallback, errorCallback, busy = false) {
            busy ? busy(true) : this.$store.dispatch('loading', true)
            window.axios.get(`${window.SETTINGS.API_URL}${url}`)
                .then(response => {
                    successCallback(response.data || response)
                })
                .catch(error => {
                    if (errorCallback) errorCallback(error)
                })
                .finally(() => {
                    busy ? busy(false) : this.$store.dispatch('loading', false)
                })
        },
        postData(url, data, successCallback, errorCallback, method = 'POST') {
            this.busy = true
            let payload = {
                url: `${window.SETTINGS.API_URL}${url}`,
                data,
                method
            }
            window.axios
                .request(payload)
                .then(response => {
                    successCallback(response)
                })
                .catch(error => {
                    if (error && error.response) this.error = error.response.data.errors || error.response.data.message
                    if (errorCallback) errorCallback(error)
                })
                .finally(() => {
                    this.busy = false
                })
        }
    }
}
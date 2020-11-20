export default {
    data() {
        return {
            rules: {
                required: value => !!value || 'This is required',
                subMode: value => value === 0 || value === 1 || 'This is required',
                months: value => value > 0 || 'Must be 1 month or more',
                oneOrMore: value => value > 0 || 'Must be 1 or more',
                email: value => {
                    if (value) {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Please provide a valid email address'
                    }
                    return ''
                },
                password: value => {
                    if (value) return value.length > 4 || 'Must be 5 characters or more'
                    return ''
                },
                amountRule: value => {
                    if (value) return value > 0 || "Enter an amount"
                    return ''
                },
                minAmountRule: value => {
                    if (value) return value >= window.SETTINGS.MIN_BET || `Minimum amount is ${window.SETTINGS.MIN_BET}.00`
                    return ''
                },
                minWithdrawRule: value => {
                    if (value) return value >= window.SETTINGS.MIN_WITHDRAW || `Minimum amount is ${window.SETTINGS.MIN_WITHDRAW}.00`
                    return ''
                },
                phone: value => {
                    const pattern = /^09([0-9]{9})$/
                    if (value) return pattern.test(value) || 'Phone must be valid'
                    return true
                },
                withValue: value => {
                    if (value) return value > 0 || 'Please enter an amount greater than 0.00'
                    return ''
                },
                allowZero: value => {
                    return parseFloat(value) >= 0 || 'Negative value not allowed'
                }
            }
        }
    }
}

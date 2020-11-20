export default {
    methods: {
        formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
            try {
                decimalCount = Math.abs(decimalCount)
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount

                const negativeSign = amount < 0 ? "-" : ""

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString()
                let j = (i.length > 3) ? i.length % 3 : 0

                return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")
            } catch (e) {
                console.log(e)
            }
        },
        formatNumber(num) {
            return num
        },
        clean(obj) {
            for (var propName in obj) {
                if (obj[propName] === null || obj[propName] === undefined) {
                    if (propName !== 'contact_number') delete obj[propName]
                }
            }
            return obj
        },
        getUnique(arr, comp) {
            const unique = arr
                .map(e => e[comp])
                .map((e, i, final) => final.indexOf(e) === i && i)
                .filter(e => arr[e]).map(e => arr[e])
            return unique
        },
        sort(arr) {
            return arr.sort((a, b) => {
                return b.id - a.id 
            })
        }
    },
}
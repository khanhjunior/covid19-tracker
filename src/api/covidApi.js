import axiosClient from './axiosClient'

const covidApi = {
    getWorld() {
        const url = '/all'

        return axiosClient.get(url)
    },

    getCountries(params) {
        const url = '/countries'

        return axiosClient.get(url, { params: params })
    },

    getCountry(name) {
        const url = `/countries/${name}`
        
        return axiosClient.get(url)
    }
}

export default covidApi

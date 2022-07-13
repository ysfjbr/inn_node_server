import CountryRepository from "../../repositories/CountryRepository"

const PubCountriesController = {

    getAllCountries: () => {
        return CountryRepository.getAllCountries()
    },

    getCountry: (code: string) => {
        return CountryRepository.getCountry(code)
    },
}

export default PubCountriesController
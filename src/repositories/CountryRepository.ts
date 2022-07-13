import { ICountry } from "../models/Country"
import models from "../models"

const CountryRepository = {

    getAllCountries: async () => {
        let countries: ICountry[] = await models.Country.findAll()
        return countries
    },

    getCountry: async (code: string) => {
        let country: any = await models.Country.findOne({
            where: {
                code
            }
        })
        if(!country) throw new Error("Country Not Found!");
        
        return country
    },

    
}

export default CountryRepository
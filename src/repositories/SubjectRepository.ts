import { ISubject } from "../models/Subject"
import models from "../models"
import { strToSlug } from "../helpers/slug"

const SubjectRepository = {

    getAllSubjects: async () => {
        let countries: ISubject[] = await models.Subject.findAll()
        return countries
    },

    getSubject: async (code: string) => {
        let subject: any = await models.Subject.findOne({
            where: {
                code
            }
        })
        if(!subject) throw new Error("Subject Not Found!");
        
        return subject
    },

    findOrCreateSubject: async (label: string) : Promise<ISubject> => {
        let code = strToSlug(label)
        let subject: ISubject = await models.Subject.findOne({
            where: {
                code
            }
        })
        if(!subject) {
            subject = await models.Subject.create({code, label})
        }
        
        return subject
    },

    
}

export default SubjectRepository
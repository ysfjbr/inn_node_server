import SubjectRepository from "../../repositories/SubjectRepository"

const PubSubjectsController = {

    getAllSubjects: () => {
        return SubjectRepository.getAllSubjects()
    },

    getSubject: (code: string) => {
        return SubjectRepository.getSubject(code)
    },
}

export default PubSubjectsController

export default `

type School{
    id: Int
    code: String!
    label: String!
    creator: User
    country: Country
    schoolType: SchoolType!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allSchools: [School!]
    getSchool(code: String!): School!
}

`;
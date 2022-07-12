
export default `

type SchoolType{
    id: Int
    code: String!
    label: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allSchoolTypes: [SchoolType!]
    getSchoolType(code: String!): SchoolType!
}

`;
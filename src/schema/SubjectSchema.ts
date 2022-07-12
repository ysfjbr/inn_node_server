
export default `

type Subject{
    id: Int
    code: String!
    label: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allSubjects: [Subject!]
    getSubject(code: String!): Subject!
}
`;
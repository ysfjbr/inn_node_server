
export default `

type Language{
    id: Int
    code: String!
    label: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allLanguages: [Language!]
    getLanguage(code: String!): Language!
}

`;

export default `

type Country{
    id: Int
    code: String!
    label: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allCountries: [Country!]!
    getCountry(code: String!): Country!
}
`;
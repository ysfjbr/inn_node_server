
export default `

type Category{
    id: Int
    creator: User
    title: String!
    description: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allCategories: [Category!]!
    getCategory(code: String!): Category!
}
`;
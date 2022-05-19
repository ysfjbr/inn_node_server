
export default `
type Page{
    id: Int
    content: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allPages: [Page!]!
    getPage(title: String!): Page!
}

type Mutation {
    createPage(content: String!): Page
    updatePage(content: String!): Page
    deletePage(id: String!): Int!
}
`;
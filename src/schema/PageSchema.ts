
export default `
scalar Upload

type Page{
    id: Int
    content: String!
    bookId: Int!
    createdAt: String!
    updatedAt: String!
}

type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

type Query {
    allPages: [Page!]!
    getPage(title: String!): Page!
}

type Mutation {
    createPage(content: String!, bookId: Int): Page
    updatePage(content: String!): Page
    deletePage(id: String!): Int!
    uploadFile(file: Upload!): String!
}
`;
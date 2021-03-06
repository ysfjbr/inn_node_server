
export default `
scalar Upload

type Page{
    id: Int
    content: String!
    bookId: Int!
    createdAt: String!
    updatedAt: String!
}

type UploadedPage {
    status: String!
}

type Query {
    allPages: [Page!]!
    getPage(title: String!): Page!
}

type Mutation {
    createPage(content: String!, bookId: Int): Page
    updatePage(content: String!): Page
    deletePage(id: String!): Int!
    uploadFile(file: Upload!, bookId: Int): UploadedPage!
}
`;
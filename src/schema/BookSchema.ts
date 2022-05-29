
export default `
type Book{
    id: Int
    title: String!
    description: String!
    pages: String!
    allPages: [Page!]!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allBooks: [Book!]!
    getBook(id: Int!): Book!
}

type Mutation {
    createBook(title: String!, description: String!, pages: Int!): Book
    updateBook(title: String!, description: String!, pages: Int!): Book
    deleteBook(title: String!): Int!
}
`;

export default `
type Book{
    id: Int
    title: String!
    description: String!
    pages: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allBooks: [Book!]!
    getBook(title: String!): Book!
}

type Mutation {
    createBook(title: String!, description: String!, pages: Int!): Book
    updateBook(title: String!, description: String!, pages: Int!): Book
    deleteBook(title: String!): Int!
}
`;
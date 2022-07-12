
export default `
type Book{
    id: Int
    title: String!
    pages: Int!
    image: String
    createdAt: String!
    updatedAt: String!
}

type BookDetails{
    id: Int
    title: String!
    description: String!
    pages: Int!
    image: String
    allPages: [Page!]!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allBooks: [Book!]!
    getBook(id: Int!): BookDetails!
}

type Mutation {
    createBook(title: String!, description: String!, pages: Int!): Book
    updateBook(title: String!, description: String!, pages: Int!): Book
    deleteBook(title: String!): Int!
}
`;
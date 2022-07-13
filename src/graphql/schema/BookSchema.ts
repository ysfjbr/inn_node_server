
export default `
scalar Upload

type Book{
    id: Int
    title: String!
    description: String!
    pages: Int!
    image: String
    creator: User!
    school: School
    subject: Subject
    level: Level,
    language: Language   
    allPages: [Page!]!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allBooks: [Book!]!
    getBook(id: Int!): Book!
}

type Mutation {
    createBook(title: String!, description: String!, school: String, subject:String, level:String,language:String,image: Upload): Book
    updateBook(title: String!, description: String!, pages: Int!): Book
    deleteBook(title: String!): Int!
}
`;
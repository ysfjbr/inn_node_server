
export default `
type User{
    id: String!
    username: String!
    fullname:String!
    email: String!
    tokenVersion: String!
    createdAt: String!
    updatedAt: String!
}

type LoginResponse{
    user: User!
    token: String!
}

type Query {
    allUsers: [User!]!
    getUser(username: String!): User!
}

type Mutation {
    login(username: String!, password: String!): LoginResponse
    createUser(username: String!, password: String!, email: String!, fullname:String!): User
    updateUser(username: String!, password: String!): [Int!]!
    deleteUser(username: String!): Int!
}
`;
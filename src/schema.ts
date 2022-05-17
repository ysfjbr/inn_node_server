
export default `
    type User{
        id: String!
        username: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        allUsers: [User!]!
        getUser(username: String!): User
    }

    type Mutation {
        createUser(username: String!, password: String!): User
        updateUser(username: String!, password: String!): [Int!]!
        deleteUser(username: String!): Int!
    }
`;
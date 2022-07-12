
export default `

type Level{
    id: Int
    code: String!
    label: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allLevels: [Level!]!
    getLevel(code: String!): Level!
}

`;
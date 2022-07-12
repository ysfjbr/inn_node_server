
export default `

type Search{
    id: Int
    creator: User!
    searchText: String!
    searchOptions: String!
    createdAt: String!
    updatedAt: String!
}

type Query {
    allSearchs: [Search!]
    getSearch(code: String!): Search!
}

`;
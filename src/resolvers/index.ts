import UserResolver from "./UserResolver"
import BookResolver from "./BookResolver"
import PageResolver from "./PageResolver"
 
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');


const resolvers = {
  Upload: GraphQLUpload,

  Query: Object.assign({}, 
      UserResolver.Query, 
      BookResolver.Query,
      PageResolver.Query,
    ),
  Mutation: Object.assign({}, 
      UserResolver.Mutation, 
      BookResolver.Mutation,
      PageResolver.Mutation,
    )
}
  

export default resolvers;
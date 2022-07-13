import UserResolver from "./UserResolver"
import BookResolver from "./BookResolver"
import PageResolver from "./PageResolver"
import CountryResolver from "./CountryResolver";
import SubjectResolver from "./SubjectResolver";
 
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');


const resolvers = {
  Upload: GraphQLUpload,

  Query: Object.assign({}, 
      UserResolver.Query, 
      BookResolver.Query,
      PageResolver.Query,
      CountryResolver.Query,
      SubjectResolver.Query,
    ),
  Mutation: Object.assign({}, 
      UserResolver.Mutation, 
      BookResolver.Mutation,
      PageResolver.Mutation,
      CountryResolver.Mutation,
      SubjectResolver.Mutation,
    )
}
  

export default resolvers;
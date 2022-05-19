import UserResolver from "./UserResolver"
import BookResolver from "./BookResolver"
import PageResolver from "./PageResolver"

const resolvers = {
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
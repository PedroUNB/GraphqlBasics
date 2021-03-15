import startServer from './startSever'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'

startServer({ typeDefs, resolvers })
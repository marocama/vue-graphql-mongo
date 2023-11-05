import mongoose from 'mongoose'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// --- MongoDB  
const authorSchema = new mongoose.Schema({
  name: String,
  country: String,
}), postSchema = new mongoose.Schema({
  title: String,
  authorId: String,
})

const Author = mongoose.model('Author', authorSchema), Post = mongoose.model('Post', postSchema)

await mongoose.connect('mongodb://root:example@mongo:27017/')


  // --- GraphQL
const typeDefs = `#graphql
  type Post {
    title: String
    author: Author
  }
  type Author {
    name: String
    country: String
  }
  type Query {
    posts: [Post]
    authors: [Author]
  }
`
  
const resolvers = {
  Query: {
    authors: async () => await Author.find(),
    posts: async () => {
      const posts = await Post.find()
      return posts.map(async i => ({ title: i.title, author: await Author.findById(i.authorId) }))
    },
  },
}
  
const { url } = await startStandaloneServer(new ApolloServer({ typeDefs, resolvers }), { listen: { port: 4000 } })

console.log(`🚀 - ${url}`)
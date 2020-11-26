import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const TOKEN = "367b993e2faea14748ce1e56a0e5e70412b2a803"

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : null,
    }
  }
})

export default new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://api.github.com/graphql' })),
  cache: new InMemoryCache(),
})



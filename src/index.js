import ApolloClient from 'apollo-boost';
import 'cross-fetch/polyfill';
import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client'
import { getAnimeList } from './helper';

const client = new ApolloClient({ uri: 'https://graphql.anilist.co' });

const resolvers = {
  Query: {
    animes: async (parent, { currentDate }, context) => {
			return await getAnimeList({ apolloClient: client, currentDate, context });
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

const options = {
	endpoint: '/graphql',
	cors: {
		origin: '*',
		methods: 'POST',
	},
}

server.start(options, () => console.log('Server is running on http://localhost:4000'))

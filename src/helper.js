import { si, pantsu } from 'nyaapi';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import addDays from 'date-fns/addDays';
import { animesQuery } from './animesQuery';

export const getNyaaAvailability = async fullTitle => {
	try {
		const searchResult = await pantsu.search(fullTitle, 1, { c: '3_5' });

		return searchResult.length > 0;
	} catch (e) {
		console.log(e);
	}
};

const transformTitle = title => title.split(' ').map(word => word.toLowerCase()).join('-');

const parseStudios = rawStudios => rawStudios.edges.map(({ node }) => node.name);

export const getAnimeList = async ({ apolloClient, startDay, endDay, context: { prisma } }) => {
	try {
		const animes = await apolloClient.query({
			query: animesQuery,
			variables: {
				page: 1,
				perPage: 50,
				weekStart: startDay,
				weekEnd: endDay,
			},
		});
		console.log(startDay, endDay);
		const parseAnimes = await Promise.all(animes.data.Page.airingSchedules.map(async ({ episode, airingAt, media: anime }) => ({
			episode,
			airingAt,
			title: anime.title.userPreferred,
			slug: `${transformTitle(anime.title.userPreferred)}-${episode}`,
			imageURI: anime.coverImage.extraLarge,
			genres: anime.genres,
			studios: parseStudios(anime.studios),
			description: anime.description,
			published: await getNyaaAvailability(`${anime.title.userPreferred} ${episode}`),
		})));

		return parseAnimes;
	} catch(e) {
		console.log(e);
	}
};

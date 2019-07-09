import { si, pantsu } from 'nyaapi';
import parse from 'date-fns/parse';
import addDays from 'date-fns/addDays';
import { animesQuery } from './animesQuery';

export const getNyaaAvailability = async fullTitle => {
	try {
		const searchResult = await pantsu.search(fullTitle, 1, { category: '1_2' });

		return searchResult.length > 0;
	} catch (e) {
		console.log(e);
	}
};

const transformTitle = title => title.split(' ').map(word => word.toLowerCase()).join('-');

const parseStudios = rawStudios => rawStudios.edges.map(({ node }) => node.name);

export const getAnimeList = async ({ apolloClient, currentDate, context: { prisma } }) => {
	try {
		const currentDay = parse(currentDate, 'dd-MM-yyyy', new Date());
		const nextDay = addDays(currentDay, 1);
		const animes = await apolloClient.query({
			query: animesQuery,
			variables: {
				page: 1,
				perPage: 50,
				weekStart: currentDay.getTime() / 1000,
				weekEnd: nextDay.getTime() / 1000,
			},
		});
		const parseAnimes = await Promise.all(animes.data.Page.airingSchedules.map(async ({ episode, media: anime }) => ({
			episode,
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

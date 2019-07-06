import gql from 'graphql-tag';

export const animesQuery = gql`
	query ($page: Int, $perPage: Int, $weekStart: Int, $weekEnd: Int) {
		Page (page: $page, perPage: $perPage) {
			pageInfo {
				total
				currentPage
				lastPage
				hasNextPage
				perPage
			}
			airingSchedules(airingAt_greater: $weekStart, airingAt_lesser: $weekEnd) {
				airingAt
				episode
				media {
					type
					title {
						userPreferred
					}
					coverImage {
						extraLarge
					}
					genres
					description
					studios {
						edges {
							node {
								name
							}
						}
					}
				}
			}
		}
	}
`;

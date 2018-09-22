
export interface User {
	data: {
		username: string,
		total: {
			totalGamesWin: number,
			totalGamesPlayed: number
		},
		duo: {
			top5finishes: number,
			top3finishes: number,
			top1finishes: number,
			killDeathRatio: number,
			gamesWon: number,
			gamesPlayed: number
		}
	};
}
const getUserStatsLocalStorage = 'game-stats';

export default function calcWinLoss(won, gameId) {
  let exists = window.localStorage.getItem(getUserStatsLocalStorage);
  if (exists) {
    let { played, won_percentage, lost_percentage } = JSON.parse(exists);
    if (won) {
      let gamesWon = (played / 100) * won_percentage;
      played++;
      gamesWon++;
      won_percentage = (gamesWon / played) * 100;
      lost_percentage = 100 - won_percentage;
    } else {
      let gamesLost = (played / 100) * lost_percentage;
      played++;
      gamesLost++;
      lost_percentage = (gamesLost / played) * 100;
      won_percentage = 100 - lost_percentage;
    }
    let gameStats = { played, lost_percentage, won_percentage, gameId };
    window.localStorage.setItem(
      getUserStatsLocalStorage,
      JSON.stringify(gameStats)
    );
    return gameStats;
  } else {
    let gameStats = {
      played: 1,
      won_percentage: won ? 100 : 0,
      lost_percentage: won ? 0 : 100,
      gameId,
    };
    window.localStorage.setItem(
      getUserStatsLocalStorage,
      JSON.stringify(gameStats)
    );
    return gameStats;
  }
}

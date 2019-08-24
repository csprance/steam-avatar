import axios from 'axios';

export default async (steam: string): Promise<string> => {
  try {
    const { data } = await axios.get(
      'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/',
      {
        params: {
          key: process.env.STEAM_API_KEY,
          steamids: steam
        }
      }
    );
    return data.response.players[0].avatarfull;
  } catch (e) {
    throw e;
  }
};

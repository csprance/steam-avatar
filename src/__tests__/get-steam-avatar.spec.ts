import getSteamAvatar from '../get-steam-avatar';

describe('Get Steam Avatar', () => {
  it('should Fetch a Steam Avatar given a Steam ID (64)', async () => {
    const steamID = '76561198034520139';
    const results = await getSteamAvatar(steamID);
    return expect(results).toBeDefined();
  });
});

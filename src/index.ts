import { IncomingMessage, ServerResponse } from 'http';
import * as Url from 'url';

import getSteamAvatar from './get-steam-avatar';

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.url) {
    const { query } = Url.parse(req.url, true);
    return getSteamAvatar(query.steamid as string);
  }
  return 'https://placehold.it/200x200';
};

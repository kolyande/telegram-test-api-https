import { handle } from './utils';
import type { Route } from '../route';

export const getUpdates: Route = (app, telegramServer) => {
  // botsample%20token/getUpdates
  handle(app, '/bot:token/getUpdates', (req, res, _next) => {
    const botToken = req.params.token;

    if(req.body.offset) {
      const offset = Number(req.body.offset);
      const data = { ok: true, result: telegramServer.confirmUpdates(botToken, offset) };
      res.sendResult(data);
    }
    else {
      const data = { ok: true, result: telegramServer.getUpdates(botToken) };
      res.sendResult(data);
    }
  });
};

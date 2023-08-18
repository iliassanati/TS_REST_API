import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import validateResource from './middleware/validateRessource';

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => {
    res.sendStatus(200);
  });

  app.post('/api/users/', validateResource(createUserHandler));
}

export default routes;

import { UserController } from "./controllers/user-controller";
import { GithubService } from "./services/github-service";

const githubService = new GithubService();
const userController = new UserController(githubService);

import Hapi from '@hapi/hapi';

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => { return "OK"; } // @TODO put a normal healthz check
    });

    server.route({
        method: 'GET',
        path: '/users',
        handler: userController.getUsersByLanguage
    });
    

    await server.start();
    console.log('Server running on:: %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
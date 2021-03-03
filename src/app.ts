import { UserController } from "./controllers/user-controller";
import { GithubService } from "./services/github-service";

const githubService = new GithubService();
const userController = new UserController(githubService);

const Hapi = require('@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => { return "OK"; }
    });

    server.route({
        method: 'GET',
        path: '/users',
        handler: userController.getUsersByLanguage
    });
    

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
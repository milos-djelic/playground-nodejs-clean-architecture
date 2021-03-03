import {Request, ResponseToolkit, ResponseObject} from '@hapi/hapi';
import { User } from '../entities/user';
import { GithubService } from '../services/github-service';
import { GetUsersUsecase } from '../usecases/get-users-usecase';


type PresentedUser = {
    name: string,
    username: string,
    avatar: string,
    numberOfFollowers: number,
}

export class UserController {
   private getUsersUsecase: GetUsersUsecase;

   constructor(
       readonly githubService: GithubService
   ) {
        this.getUsersUsecase = new GetUsersUsecase(githubService);
   }
 
    public getUsersByLanguage = async (request: Request, responseToolkit: ResponseToolkit): Promise<ResponseObject>  => {
        const language = request.query?.language;

        if (!language) {
            throw new Error('No language passed');
        }
        
        const users = await this.getUsersUsecase.execute({language});
        // const presentedUsers = userPresenter.present(users);

        return responseToolkit.response(users).code(200);

    }
}
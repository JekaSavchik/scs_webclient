import { apiService } from '../../../shared/services';

class authService extends apiService
{
    login = (credentials) => {
        return this.sendPost('/login', credentials);
    };

    register = (credentials) => {
        return this.sendPost('/register', credentials);
    };
}

export default authService;

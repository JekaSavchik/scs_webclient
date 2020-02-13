import axios from 'axios';

class apiService {
    _headers = {
        'Accept': 'application/json'
    };

    sendPost = (path, body, isPrivate = false) => {
        let headers = this._joinContentType(this._headers);

        if(isPrivate) {
            headers = this._joinAuth(headers);
        }

        return axios.post(process.env.REACT_APP_API_HOST + path, body, {
            headers: headers
        });
    };

    sendGet = (path, isPrivate = false) => {
        let headers = this._joinContentType(this._headers);

        if(isPrivate) {
            headers = this._joinAuth(headers);
        }

        return axios.get(process.env.REACT_APP_API_HOST + path, {
            headers: headers
        });
    };

    sendPatch = (path, body, isPrivate = false) => {
        let headers = this._joinContentType(this._headers);

        if(isPrivate) {
            headers = this._joinAuth(headers);
        }

        return axios.patch(process.env.REACT_APP_API_HOST + path, body, {
            headers: headers
        });
    };

    _joinContentType = (headers) => {
        return {
            ...headers,
            'Content-Type': 'application/json'
        };
    };

    _joinAuth = (headers) => {
        const access_token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN_KEY);
        return {
            ...headers,
            'Authorization': `${access_token}`
        };
    }
}

export default apiService;

class Api {
    get (url) {
        const options = {
            method: 'post',
            headers: {'X-HTTP-Method-Override': 'GET'},
            credentials: 'include',
            mode: 'no-cors',
        };

        return fetch(url, options).then((response) => response.json());
    }

    getUserDataJson () {
        return this.get('./api/userData.json');
    }

}

export default Api;
class Api {
    get (url) {
        const options = {
            method: 'GET',
            headers: {'X-HTTP-Method-Override': 'GET'},
            credentials: 'include'
        };

        return fetch(url, options).then((response) => response.json());
    }

    getUserDataJson () {
        return this.get('./api/userData.json');
    }

    getDefaultDataJson () {
        return this.get('./api/defaultData.json');
    }

}

export default Api;
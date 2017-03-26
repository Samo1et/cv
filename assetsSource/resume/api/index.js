class Api {
    get (url) {
        const options = {
            method: 'post',
            headers: {'X-HTTP-Method-Override': 'POST'},
            credentials: 'include',
            mode: 'no-cors'
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
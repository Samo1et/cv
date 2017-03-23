class Api {
    get (url) {
        const options = {
            method: 'post',
            headers: {'X-HTTP-Method-Override': 'GET'},
            credentials: 'include',
        };

        return fetch(url, options).then((response) => response.json());
    }

    post (url, data = {}) {
        const options = {
            method: 'post',
            headers: {'X-HTTP-Method-Override': 'POST'},
            credentials: 'include',
            body: JSON.stringify(data),
        };

        return fetch(url, options).then((response) => response.json());
    }

    getNews () {
        return this.get('./api/getNewsList.json');
    }

    getSiteList () {
        return this.get('./api/getsitelist.json');
    }

}

export default Api;
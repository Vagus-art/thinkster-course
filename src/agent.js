const API_ROOT = 'https://conduit.productionready.io/api';

const responseBody = res => res.json();

const requests = {
    get:url =>
        fetch(`${API_ROOT}${url}`).then(responseBody)
};

const Articles = {
    all: page =>
        requests.get(`/articles?limit=10`)
};

export default {
    Articles
};
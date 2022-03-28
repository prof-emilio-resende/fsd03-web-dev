import "whatwg-fetch";

export default class HttpUtil {
    get(hostname, url) {
        return fetch(`${hostname}${url}`)
    }

    post(hostname, url, body) {
        const options = {
            method: 'post',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(body)
        };
        return fetch(`${hostname}${url}`, options);
    }
}
class HttpUtil {
    get(hostname, url) {
        return fetch(`${hostname}${url}`)
    }
}
const requester = async (method, token, url, data) => {
    let options = {};
    if (method != "GET") {
        options.method = method;
        options.headers = {
            "content-type": "application/json",
        };
        options.body = JSON.stringify(data);
    }
    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token,
        };
    }
    const response = await fetch(url, options);
    if (response.status === 204) {
        return {};
    }
    const result = await response.json();
    console.log(options);

    if (!response.ok) {
        throw result;
    }
    return result;
};

export const requestFactory = (token) => {
    if (!token) {
        let serializedAuth = localStorage.getItem("user");
        if (serializedAuth) {
            let auth = JSON.parse(serializedAuth);
            token = auth.accessToken;
        }
    }

    return {
        get: requester.bind(null, "GET", token),
        post: requester.bind(null, "POST", token),
        put: requester.bind(null, "PUT", token),
        remove: requester.bind(null, "DELETE", token),
    };
};

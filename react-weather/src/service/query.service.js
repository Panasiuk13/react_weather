function query(param, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(param, value);

    return params.toString()
}

export default query
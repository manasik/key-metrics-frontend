export const doFetch = async (url, options) => {
    let response = await fetch(url, options);
    return response
}

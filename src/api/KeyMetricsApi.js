import {doFetch} from "./helpers/doFetch";
export const BASE_URL = 'http://localhost:8102/api/v1'
export const GET_SERVICES = '/deploy/services'
export const GET_METRICS = '/metrics'

export const fetchServices = async () => {
    let response = await doFetch(BASE_URL, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (!response.ok) {
        throw new Error()
    }

    return await response.json()
}

export const getMetrics = async (serviceName) => {
    const url = `${BASE_URL}${GET_METRICS}?serviceName=${serviceName}`

    let response = await doFetch(url, {
        method: 'GET',
        headers: {'Accept': 'application/json',
                  'access-control-allow-origin' : '*',
            'Content-Type': 'application/json'}
    });

    console.log(">>>>>>>>>>>>>> GET " + response.body.toString())
    console.log(">>>>>>>>>>>>>> GET status" + response.status)

    if (!response.ok) {
        throw new Error()
    }

    return await response.json()
}

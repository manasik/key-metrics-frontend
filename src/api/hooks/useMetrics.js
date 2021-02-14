import {useCallback, useEffect, useState} from "react";
import {getMetrics} from "../KeyMetricsApi";

export const useMetrics = (serviceName) => {
    const [metrics, setMetrics] = useState(undefined)

    const getMetricsForService = useCallback(async () => {
        const response = await getMetrics(serviceName)
        setMetrics(response)
    }, [serviceName])

    useEffect(() => {
        getMetricsForService()
    }, [getMetricsForService])

    return metrics;
}

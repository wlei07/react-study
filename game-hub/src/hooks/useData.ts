import {useEffect, useState} from "react";
import axiosInstance from '../services/api-client';
import {AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

/**
 * @param endpoint url suffix, e.g. '/genres' or '/games'
 * @param requestConfig request configuration, e.g., query parameters.
 * @param dependencies when values change from previous page load, request should be sent again.
 */
export default function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axiosInstance.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
            .then(response => {
                setData(response.data.results);
                //putting it to finally does not work, thus duplicate in then() and catch() methods.
                setLoading(false);
            })
            .catch(error => {
                if (error instanceof CanceledError) {
                    return;
                }
                setError(error.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, dependencies ? dependencies : []);
    return {data, error, isLoading};
}

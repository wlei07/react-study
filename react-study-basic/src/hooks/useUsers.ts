import {useEffect, useState} from "react";
import userService, {User} from "../services/user-service.ts";
import {CanceledError} from "../services/api-client.ts";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    // 2nd parameter as an empty is very important, with it then page loads only once
    useEffect(() => {
        setLoading(true);
        const {request, cancel} = userService.getAll<User>();
        request.then(response => {
            setUsers(response.data);
            setLoading(false);
        }).catch(error => {
            if (error instanceof CanceledError) {
                return;
            }
            setError(error.message);
            setLoading(false);
        });
        // the finally below does now work somehow, so have to duplicate it to then() and catch() methods.
        //.finally(() => setLoading(false));
        return () => {
            cancel();
            // strict mode page is loaded twice, first time is aborted immediately, we still show loading in this case.
            setLoading(true);
        };
        // another way of writing it without then...catch...
        // get() returns promise, when resolving promise, it returns response / error
        // ends up ugly code, not preferred
        /*
        const fetchUsers = async () => {
            try {
                const response = await apiClient.get<User[]>('/users');
                setUsers(response.data);
            } catch (error) {
                setError((error as AxiosError).message);
            }
        }
        fetchUsers();
         */
    }, []);
    return {users, error, isLoading, setUsers, setError};
}
export default useUsers;

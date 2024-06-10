import './App.css';
import userService, {User} from "./services/user-service.ts";
import useUsers from "./hooks/useUsers.ts";

function App() {
    const {users, error, isLoading, setUsers, setError} = useUsers();
    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter(u => u.id !== user.id));
        userService.delete(user.id)
            .catch(error => {
                setError(error.message);
                setUsers(originalUsers);
            });
    }

    const addUser = () => {
        const originalUsers = [...users];
        const newUser = {
            id: 0,
            name: 'Mosh'
        }
        setUsers([newUser, ...users]);
        userService.create(newUser)
            .then(({data: savedUser}) => setUsers([savedUser, ...users]))
            .catch(error => {
                setError(error.message);
                setUsers(originalUsers);
            });
    }

    const updateUser = (user: User) => {
        const originalUsers = [...users];
        const updatedUser = {...user, name: user.name + '!'};
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));
        userService.update(user)
            .catch(error => {
                setError(error.message);
                setUsers(originalUsers);
            });
    }

    return (
        <>
            {isLoading && <div className="spinner-border"></div>}
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
            <ul className="list-group">
                {users.map(
                    user => <li key={user.id} className="list-group-item d-flex justify-content-between">
                        {user.name}
                        <div>
                            <button className="btn btn-outline-secondary mx-1" onClick={() => updateUser(user)}>Update
                            </button>
                            <button className="btn btn-outline-danger" onClick={() => {
                                deleteUser(user)
                            }}>Delete
                            </button>
                        </div>
                    </li>)
                }
            </ul>
        </>
    );
}

export default App;

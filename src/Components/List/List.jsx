import s from './List.module.scss';

export const List = ({user, users, setUser}) => {
    return(
        <ul>{users.map((u) => 
            <li key={u.id} onClick={() => setUser(u)}
                className={user===u?s.selected:''}>
                <img src={u.avatar_url} alt="" />{u.login}
            </li>
        )}
        </ul>
    );
}
import Link from "next/link";
import MainContainer from "../components/MainContainer";
const Users = ({users}) => {


    return (
        <MainContainer keywords={"users"}>
            <h1>Страница с пользователями</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>
                                {user.title}
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
            </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const users = await res.json()

    return {
        props: {users},
    }
}
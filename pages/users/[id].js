import {useRouter} from "next/router"
import styles from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

export default function user ({user}) {
    const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя {user.name}</div>
            </div>
        </MainContainer>
    )
}
export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}
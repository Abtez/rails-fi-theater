// import { Link } from "react-router-dom"
import Post from "./Post"

export default function Home({production, addProduction, error, deleteProduction, addToSession, user}){
    return(
        <>
        <h3>
        {
            user ? "Welcome " + user.username : "You are not logged in. "
        }
        </h3>
        <h1>production</h1>

        
        <ul>
            {
                production.map(item => {
                    return <li key={item.id}>
                    {item.title}

                    <button key={item.id} onClick={() => {deleteProduction(item)}} type="button">Delete</button>
                    <button key={item.id} onClick={() => {addToSession()}} type="button">Session</button>
                    </li>
                })
            }
        </ul>

        <br />

        <Post error={error} addProduction={addProduction} />
        </>
    )
}
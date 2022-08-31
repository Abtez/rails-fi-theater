import Post from "./Post"

export default function Home({production, addProduction, error, deleteProduction}){
    return(
        <>
        <h1>production</h1>
        <ul>
            {
                production.map(item => {
                    return <li key={item.id}>
                    {item.title}

                    <button onClick={() => {deleteProduction(item)}} type="button">Delete</button>
                    </li>
                })
            }
        </ul>

        <br />

        <Post error={error} addProduction={addProduction} />
        </>
    )
}
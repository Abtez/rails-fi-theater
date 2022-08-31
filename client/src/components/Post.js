import { useState } from "react"

export default function Post({addProduction, error}){
    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        budget: "",
        image: "",
        director: "",
        ongoing: true
    })

    

    function handleInput(e){
        const name = e.target.name
        let value = e.target.value
        
        setFormData({...formData, 
        [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        addProduction(formData)
        setFormData({
            title: "",
            genre: "",
            budget: "",
            image: "",
            director: "",
        })
    }

    return (
        <>
        <div className="post-form">
        <div>
            <h3 style={{color: 'white'}}>{error}</h3>
        </div>
        <form onSubmit={handleSubmit}>
        <div>
            <input value={formData.title} onChange={handleInput} type="text" name="title" placeholder="Title" />
        </div>

        <div>
            <input value={formData.genre} onChange={handleInput} type="text" name="genre" placeholder="Genre" />
        </div>

        <div>
            <input value={formData.budget} onChange={handleInput} min="400" max="1200" type="number" name="budget" placeholder="Budget" />
        </div>

        <div>
            <input value={formData.image} onChange={handleInput} type="url" name="image" placeholder="Image URL" />
        </div>

        <div>
            <input value={formData.director} onChange={handleInput} type="text" name="director" placeholder="Director" />
        </div>

        <div>
            <input type="submit" value="Submit Production" />
        </div>
    </form>
        </div>        
        </>
    )
}
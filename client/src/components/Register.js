import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register(){

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    function handleInput(e) {        
        const name = e.target.name
        let value = e.target.value

        setUserData({...userData,
            [name]: value}) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => {
            console.log(data)
            navigate("/login")
        })
            
    }

    return (
        <>
        <center>
        <h3>Register Account</h3>
        <br />

        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" onChange={handleInput} value={userData.username} name="username" placeholder="Username" />
            </div>

            <div>
            <input type="email" onChange={handleInput} value={userData.email} name="email" placeholder="Email" />
            </div>

            <div>
            <input type="password" onChange={handleInput} value={userData.password} name="password" placeholder="Password" />
            </div>

            <div>
            <input type="password" onChange={handleInput} value={userData.passwordConfirmation} name="passwordConfirmation" placeholder="Confirm Password" />
            </div>

            <button type="submit">Submit</button>
        </form>
        </center>
        </>
    )
}
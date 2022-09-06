import {useState} from "react"

export default function Login({ onLog }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
        .then((r) => r.json())
        .then((user) => {
          onLog(user)
        });
    }
  
    return (
      <form style={{marginTop: '10px'}} onSubmit={handleSubmit}>
        <input 
        placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
        placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
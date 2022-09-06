import {useState} from "react"

export default function Login({ onLog }) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => onLog(user));
    }
  
    return (
      <form style={{marginTop: '10px'}} onSubmit={handleSubmit}>
        <input 
        placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
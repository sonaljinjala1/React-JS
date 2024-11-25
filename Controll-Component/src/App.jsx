import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlebar = (event) => {
    event.preventDefault();//pages reload n thay te mate event. preventDefault no use karva ma ave che .
    console.log(name);
    console.log(email);
  }

  return (
    <>
      <div className="form-container">
        <h2>FORM</h2>
        <form onSubmit={handlebar}>
          <table align='center'>
            <tr>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder='Your Name'
              />
            </tr> <br></br>
            <tr>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Your Email'
              />
            </tr><br></br>
            <div className="button-container">
              <button type="submit">Submit</button>
            </div>
          </table>
        </form>
      </div>
    </>
  );
}

export default App;





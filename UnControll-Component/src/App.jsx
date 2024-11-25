import { useRef } from 'react';
import './App.css';

//input useState no upyog karine banava ma  ave tene controll component kahvay che. 
//useState no upyog karva ma  nnnn ave tene uncontroll component kahvama ave che.

function App() {
  const name = useRef(null);
  const email = useRef(null);

  const handlebar = (e) => {
    e.preventDefault(); // Prevents page not  reload

    if (!name.current.value || !email.current.value) {
      alert('Please enter a name and email');
      return;
    }

    console.log(name.current.value); // Accesses the current value of the input
    console.log(email.current.value);
  }

  return (
    <>
      <div className="form-container">
        <h2>FORM</h2>
        <form onSubmit={handlebar}>
          <table align='center'>
            <tr>
              <input
                ref={name} // Using ref to access input value
                type="text"
                placeholder='Your Name'
              />
            </tr> <br />
            <tr>
              <input
                ref={email} // Using ref to access input value
                type="email"
                placeholder='Your Email'
              />
            </tr><br />
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
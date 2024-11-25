import { startTransition } from "react";
import Header from "./Header";

function App() {
  //ane destructuring kahvay che............
  // const arr = [10, 2, 3]
  // const [x, y, z] = arr
  // console.log(x, y, z);



  let address = {
    city: 'pune',
    state: 'maharashtra',
    country: 'india',
    pincode: 4567890,
  }

  let obj = {
    name: 'sonal',
    age: 21,
    milansir: { ...address },//stri
    arr: [10, 2, 3, 4, 5, 6, 7, 8, 9],
    state: [
      { name: 'pune', value: '1' },
      { name: 'mumbai', value: '2' },
      { name: 'london', value: '3' },
      { name: 'delhi', value: '4' },
      { name: 'chennai', value: '5' },
      { name: 'banglore', value: '6' },
      { name: 'hyderabad', value: '7' },
      { name: 'kolkata', value: '8' },
      { name: 'chandigarh', value: '9' },
    ]
  }

  console.log(obj);


  return (
    <div>
      <Header/>
      {//javascript add karva mate templete no use karb=va ma ave che.

        obj.state.map((st, index) => {
          return(
            <h1>{st.name}</h1>
          )
        })

      }
    </div>
  )

}

export default App

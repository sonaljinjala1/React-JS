import { useState } from "react"

function App() {

  const [cnt, setCnt] = useState(0)
  const [users, setUser] = useState([
    {
      id: 1,
      name: 'abc',
      phone: 123443
    },
    {
      id: 2,
      name: 'def',
      phone: 1243
    },
    {
      id: 3,
      name: 'ghi',
      phone: 12443
    }
  ])

  const inc = () => {
    if (cnt < 10) {
      setCnt(cnt + 1)
    }
  }

  const dec = () => {
    setCnt(cnt - 1)
  }

  return (
    <div align="center">
      <h2>Count :- {cnt}</h2>
      <button onClick={() => inc()}>+</button>
      {
        cnt === 0 ? (
          <button disabled onClick={() => dec()}>-</button>
        ) : (
          <button onClick={() => dec()}>-</button>
        )
      }

      <div>
        <h2>Users</h2>
        {
          users.map((val, i) => {
            return(
              <div key={val.id}> 
                <span>{val.name}</span> &nbsp; &nbsp;
                <span>{val.phone}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App

import { useEffect , useState } from "react"

function App() {
  const [no, setNo] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setNo(no + 1);
    } ,2000)
  })

  return (
    <div>
      <h2>Mahadev</h2>
      <h3>{no}</h3>
    </div>
  )
}

export default App

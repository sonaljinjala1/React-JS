import { useDispatch, useSelector } from "react-redux"
import { Increment, Decrement, Reset } from "./Redux/Action/counterAction";

function App() {

  const dispatch = useDispatch()
  const no = useSelector(state => state.cnt);

  return (
    <>
      <div align="center">
        <h1>Counter-App</h1>
        <h2>Counter:{no}</h2>
        <button onClick={() => dispatch(Increment())}>+</button> &nbsp; &nbsp;
        <button onClick={() => dispatch(Decrement())}>-</button>&nbsp; &nbsp;
        <button onClick={() => dispatch(Reset())}>Reset</button>
      </div>

    </>
  )
}

export default App

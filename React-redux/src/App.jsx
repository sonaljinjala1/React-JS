import  {useDispatch, useSelector} from "react-redux"
import { Decrement , Increment } from "./redux/Action/counterAction"
function App() {
  const  dispatch = useDispatch()
  const  no = useSelector(state => state.milansir);

  return (
  <div>
     <div  align="center">
        <h1>Counter App</h1>
        <h2>Count : {no}</h2>
        <button onClick={ ()=> dispatch(Increment ())}> +</button>
        <button onClick={ ()=> dispatch(Decrement ())}> -</button>
     </div>
  </div>
  )
}
export default App

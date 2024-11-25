import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            cnt:0
        }
    }
    plus = () =>{
        this.setState({
            cnt : this.state.cnt + 1
        })
    }
    dec = () =>{
        this.setState({
            cnt : this.state.cnt - 1
        })
    }

   render(){
       return(
           <div>
               <h2>count :- {this.state.cnt}</h2>
               <button onClick={() => this.plus()}>+</button>

               {this.state.cnt == 0 ? (
                <button disabled onClick={() => this.dec()}>-</button>
               ): (

                <button onClick={() => this.dec()}>-</button>
               )}
           </div>
       );
   }
}
export default Counter;
import { Component } from "react";
class Header extends Component {

    constructor() {
        super();
        //   this.a=11;
        //   this.b=5;

        this.record = [
            { id: 1, name: 'john' },
            { id: 2, name: 'jane' },
            { id: 3, name: 'bob' },
        ]
        
        
        //... three dot ne sprad operator kayvay che. most imp
        this.arr1 = [10, 2, 3];
        this.arr2 = [10, 20, 30];
        this.arr4 = [11, 22, 33];
        this.arr3 = [...this.arr1, ...this.arr2, 200, 400, 600,800,1000, ...this.arr4];
        console.log(this.arr3);
    }

    render() {
        return (
            <div align="center">
                <h2>view user</h2>
                <table align="center" border="1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.record.map((val, index) => {
                                return (
                                    // console.log ma error n ave te mate
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{val.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Header;
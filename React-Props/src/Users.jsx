import { Component } from "react";

class Users extends Component {

    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Users</h2>
                    {
                        this.props.milansir.map((user, i) => {
                            const { id, name, age, course } = user
                            return (
                                <div>
                                    <span key={++i}></span>
                                    <span>{id}</span>   &nbsp;
                                    <span>{name}</span>   &nbsp;
                                    <span>{course.join(" , ")}</span>
                                </div>
                            );
                        })
                    }
                </div>


                <div>
                    <h2>Country</h2>
                    {
                        this.props.con.map((c) => {
                            return (
                                <h3>{c}</h3>
                            )
                        })
                    }
                </div>


                <div>
                    <h2>Color</h2>
                    {
                        this.props.color.map((c) => {
                            return (
                                <h2 style={{ color: c, fontSize: "20px" }}>{c}</h2>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Users;
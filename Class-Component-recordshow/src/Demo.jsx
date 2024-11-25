import { Component } from "react";

class Demo extends Component {
    constructor() {
        super();
        this.record = [
            {
                id: 1,
                name: "John",
                age: 25,
                city: "New York",
                course: ["html", "css", "js"],
            },
            {
                id: 2,
                name: "Mary",
                age: 22,
                city: "London",
                course: ["node js", "css", "js"],
            },
            {
                id: 3,
                name: "Peter",
                age: 20,
                city: "Berlin",
                course: ["react js", "css", "js"],
            },
        ];


        this.todo = [
            { id:1 , task :"reading" },
            { id:2 , task :"playing" },
            { id:3 , task :"coding" },
        ]
    }

    render() {
        return (
            <div align="center">
                <h1>view user</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>city</th>
                            <th>course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.record.map((val, index) => {
                            const { id, name, age, city, course } = val;
                            return (
                                <tr key={++index}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{age}</td>
                                    <td>{city}</td>
                                    <td>
                                        <table border={1}>
                                            {course.map((c) => {
                                                return (
                                                    <tr>
                                                        <td>{c}</td>
                                                    </tr>
                                                );
                                            })}
                                        </table>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


                <h2> Todo List</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>srno</th>
                            <th>Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.todo.map((t, i) => {
                                return (
                                    <tr>
                                        <td>{++i}</td>
                                        <td>{t.task}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Demo;
import Users from "./users";
function App() {

  const users = [
    { id: 1, name: "milan", age: 23, course: ["HTML", "CSS", "JS"] },
    { id: 2, name: "sachin", age: 24, course: ["HTML", "CSS", "JS"] },
    { id: 3, name: "kohli", age: 25, course: ["HTML", "CSS", "JS"] },
    { id: 4, name: "dhoni", age: 26, course: ["HTML", "CSS", "JS"] },
  ];

  const country = ["INDIA", "USA", "UK", "CANADA"];

  const color = ["RED", "GREEN", "BLUE", "YELLOW", "PINK", "ORANGE", "BROWN"];

  return (
    <div>
      <Users
        milansir={users}
        con={country}
        color={color}
      />
    </div>
  )
}

export default App

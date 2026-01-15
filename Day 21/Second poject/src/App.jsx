import ChildA from "./ChildA"


function App() {
  let a = 20;
  return (
    <div>
      Hello
      <ChildA num={a} str={"hii"} />
    </div>
  )
}

export default App
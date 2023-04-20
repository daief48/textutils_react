import logo from "./logo.svg";
import "./App.css";
let name = "Daief Sikder"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
          beatae aperiam unde vitae iusto tenetur ea ut, inventore a excepturi
          officiis. Ratione, dignissimos debitis temporibus blanditiis velit
          asperiores veniam officiis reprehenderit harum veritatis.
        </p>
      </div>
    </>
  );
}

export default App;

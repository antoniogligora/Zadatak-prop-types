import "./App.css";
import CompClassSecond from "./components/compClassSecond/CompClassSecond";
import CompFunctionFirst from "./components/compFunctionFirst/CompFunctionFirst";
import CompClassFirst from "./components/compClassFirst/CompClassFirst";
import CompFunctionSecond from "./components/compFunctionSecond/CompFunctionSecond";

function App() {
  const korisnici = [
    {
      ime: "Antonio",
      godine: 27,
    },
    {
      ime: "Marijo",
      godine: 26,
    },
    {
      ime: "Darijo",
      godine: 42,
    },
    {
      ime: "Ante",
      godine: 25,
    },
  ];

  return (
    <div className="App">
      <CompClassFirst korisnik={korisnici[0]}></CompClassFirst>
      <CompClassSecond korisnik={korisnici[1]}></CompClassSecond>
      <CompFunctionFirst korisnik={korisnici[2]}></CompFunctionFirst>
      <CompFunctionSecond korisnik={korisnici[3]}></CompFunctionSecond>
    </div>
  );
}

export default App;

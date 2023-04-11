import "./App.css";
import RunningTitle from "./components/RunningTitle/RunningTitle";
import Description from "./components/Description/Description";
// import Experince from "./components/Experince/Experince";

function App() {
  return (
    <div className="container">
      <RunningTitle />
      <Description />
      {/* <Experince /> */}
    </div>
  );
}

export default App;

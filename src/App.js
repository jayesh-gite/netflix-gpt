//import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <div className="text-3xl font-bold text-pink-300 text-fuchsia-300">
        Namaste Everyone, let's build Netflix GPT
      </div>
    </Provider>
  );
}

export default App;

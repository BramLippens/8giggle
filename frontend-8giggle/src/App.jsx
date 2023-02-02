import "./App.css";
import { CategoryList } from "./components/Category/CategoryList";
import { Feed } from "./components/Post/feed";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col items-center">
        <CategoryList />
        <Feed />
      </div>
    </div>
  );
}

export default App;

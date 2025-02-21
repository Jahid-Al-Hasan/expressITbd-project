import { Routes, Route } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    <div data-theme="light">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;

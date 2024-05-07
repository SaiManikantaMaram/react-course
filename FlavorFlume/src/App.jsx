import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <Nav />
      <Search data={data} setData={setData} />
    </>
  );
}

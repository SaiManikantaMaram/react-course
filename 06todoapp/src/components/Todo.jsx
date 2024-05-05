import { useState } from "react";
import Form from "./Form";
import FormItem from "./FormItem";
import Footer from "./Footer";
export default function Todo() {
  const [Todos, SetTodos] = useState([]);

  return (
    <>
      <Form Todos={Todos} SetTodos={SetTodos} />
      <FormItem Todos={Todos} SetTodos={SetTodos}></FormItem>
      <Footer Todos={Todos} />
    </>
  );
}

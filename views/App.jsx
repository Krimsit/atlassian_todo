import React from "react"

import { ToDoProvider } from "./context/ToDoContext"

import { Form, TodoList, Filter } from "./components/modules"

import { GlobalStyle, Head } from "./App.styles"

const App = () => {
  return <>
    <GlobalStyle />
    <ToDoProvider>
      <Head>
        <Form />
        <Filter />
      </Head>
      <TodoList />
    </ToDoProvider>
  </>
}

export default App
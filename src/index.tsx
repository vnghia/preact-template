import { Route, Router } from "preact-router"

// Code-splitting is automated for `routes` directory
import Home from "./routes/home"
import Profile from "./routes/profile"

import { Header } from "./components/header"
import "./style/index.css"

export default function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/profile/" component={Profile} user="me" />
          <Route path="/profile/:user" component={Profile} />
        </Router>
      </main>
    </div>
  )
}

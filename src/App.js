import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "components/Home"
import Login from "pages/Login"
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/dashboard/newbusiness/:id">
        
      </Route> */}
      </Switch>
    </Router>
  )
}

export default App

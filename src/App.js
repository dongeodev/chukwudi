import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DataContextProvider } from "context/DataContext"
import Home from "pages/Home"
import Login from "pages/Login"
import "./App.css"

function App() {
  return (
    <Router>
      <Switch>
        <DataContextProvider>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </DataContextProvider>
        {/* <Route path="/dashboard/newbusiness/:id">
        
      </Route> */}
      </Switch>
    </Router>
  )
}

export default App

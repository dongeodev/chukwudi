import LoginForm from "components/Login"
import React, { useContext, useEffect } from "react"
import {
  loginWithGitHub,
  loginWithGoogle,
  onAuthStateChanged,
} from "../../firebase/client"
import { useHistory } from "react-router-dom"
import DataContext from "context/DataContext"
function Login() {
  const { addedProducts, dispatchProducts, user, setUser } =
    useContext(DataContext)
  const handleGithubLogin = () => {
    loginWithGitHub()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        console.log(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  let history = useHistory()
  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [setUser])
  useEffect(() => {
    user && history.replace("/")
  }, [user])
  return (
    <LoginForm
      handleGithubLogin={handleGithubLogin}
      handleGoogleLogin={handleGoogleLogin}
    />
  )
}

export default Login

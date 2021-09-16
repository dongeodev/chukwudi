import LoginForm from "components/Login"
import React, { useEffect, useState } from "react"
import {
  loginWithGitHub,
  loginWithGoogle,
  onAuthStateChanged,
} from "../../firebase/client"
import { useHistory } from "react-router-dom"
function Login() {
  const [user, setUser] = useState(null)
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
  }, [])
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

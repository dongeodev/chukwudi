import { SMButton } from "components/widgets/SMButton"
import React from "react"
import gmail from "assets/icons/ic_gmail.svg"
import github from "assets/icons/ic_github.svg"
import { H1, Section } from "./styles"

function LoginForm({ handleGoogleLogin, handleGithubLogin }) {
  return (
    <Section>
      <H1>Login</H1>
      <SMButton
        handleClick={handleGoogleLogin}
        text="Login with Google"
        img={gmail}
      />
      <SMButton
        handleClick={handleGithubLogin}
        text="Login with GitHub"
        img={github}
        background="#000"
      />
    </Section>
  )
}

export default LoginForm

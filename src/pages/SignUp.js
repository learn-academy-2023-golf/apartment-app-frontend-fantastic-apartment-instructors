import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = ({signUp}) => {

  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    // stops default behavior of reloading form
    e.preventDefault()
    // stores the form entries into a variable
    const formData = new FormData(formRef.current)
    // creates an object from the entries
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: { email: data.email, password: data.password, password_confirmation: data.password_confirmation}
    }
    signUp(userInfo)
    navigate("/")
    e.target.reset()
  }
  return (
    <>
      <h2>Sign Up:</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email"/>
        <br/>
        Password: <input type="password" name="password" placeholder="password"/>
        <br/>
        Confirm Password: <input type="password" name="password_confirmation" placeholder="confirm password"/>
        <input type="submit" value="Submit" />
      </form>
      <div>Already registered?  
        <a href="/login"> Login here</a>
      </div>
    </>
  )
}

export default SignUp
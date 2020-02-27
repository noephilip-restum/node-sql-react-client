import React, { useState, useContext } from "react"
import { StateContext } from "context/StateContext"
import { post, get } from "utils/api"
const initialState = {
  username: "",
  password: ""
}

const initialErrorState = {
  error: false,
  errorMessage: ''
}

const LoginForm = ({ history }) => {
  const [formState, setFormState] = useState(initialState)
  const [errorState, setErrorState] = useState(initialErrorState)
  const { dispatch } = useContext(StateContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    post("/login", formState).then(result => {
      const { data } = result
      if (data.error) {
        setErrorState({
          error: true,
          errorMessage: data.message
        })
      } else {

        localStorage.setItem('token', data.token)
        history.push("/client/5")
      }

    })
      .then(() => {
        setErrorState(initialErrorState)

        setFormState(initialState)

      })
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
      className="form-container"
    >
      {
        errorState.error &&
        <div>
          <b style={{ color: "red" }}>
            {errorState.errorMessage}
          </b>
        </div>
      }
      <div>
        <label>Username</label><br />
        <input
          type="text"
          autoFocus
          value={formState.username}
          onChange={(e) => {
            setFormState({ ...formState, username: e.target.value })
          }}
        />
      </div>
      <div>
        <label>Password</label><br />
        <input
          type="password"
          value={formState.password}
          onChange={(e) => {
            setFormState({ ...formState, password: e.target.value })
          }}
        />
      </div>
      <button type="submit">
        login
      </button>
    </form>
  )

}

export default LoginForm
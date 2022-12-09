import { FC, FormEvent, useState } from 'react'
import { RegisterUser } from '../../Firebase/firebaseConfig'
import { FormWrapperRegister } from './style'

const Register:FC <{ isModalOpen: boolean; onClose: () => void }> = ({
  isModalOpen,
  onClose,
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      await RegisterUser(username, password)
      setUsername('')
      setPassword('')
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <>
    {isModalOpen && (
    <FormWrapperRegister isModalOpen={isModalOpen}>
    <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <label placeholder="Enter Username">
        Enter Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </label>
        <label placeholder="Enter Password">
          Enter Password
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <button type="submit">Register</button>
      </form>
      <button onClick={onClose}>Cancel</button>
      </FormWrapperRegister>
      )}
    </>
  )
}

export default Register;

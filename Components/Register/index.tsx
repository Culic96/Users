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
    <h2>Register User</h2>
      <form onSubmit={handleSubmit}>
        <h3>Enter Username</h3>
        <label placeholder="Enter Username">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
        </label>
        <h3>Enter Password</h3>
        <label placeholder="Enter Password">
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

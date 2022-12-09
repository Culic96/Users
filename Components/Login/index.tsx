import { FC, FormEvent, useState } from 'react'
import { LoginUser } from '../../Firebase/firebaseConfig'
import { FormWrapperLogin } from './style'

const Login: FC<{ isModalOpen: boolean; onClose: () => void }> = ({
  isModalOpen,
  onClose,
}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      await LoginUser(username, password)
      setUsername('')
      setPassword('')
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <>
      {isModalOpen && (
        <FormWrapperLogin isModalOpen={isModalOpen}>
          <h1>Login User</h1>
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
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </label>
            <button type="submit">Login</button>
          </form>
          <button onClick={onClose}>Cancel</button>
        </FormWrapperLogin>
      )}
    </>
  )
}

export default Login

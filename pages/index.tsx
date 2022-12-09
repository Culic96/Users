import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Register from '../Components/Register'
import Login from "../Components/Login";
import { useAuth } from '../Hooks/useAuth'

const Index: NextPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const { auth } = useAuth()

  useEffect(() => {
  }, [auth]);

  return (
    <>
        <button onClick={() => setIsLoginModalOpen(true)}>Login</button>
        <button onClick={() => setIsRegisterModalOpen(true)}>Register</button>
        <Register
            isModalOpen={isRegisterModalOpen}
            onClose={() => {
                setIsRegisterModalOpen(false);
            }}
         />
        <Login
            isModalOpen={isLoginModalOpen}
            onClose={() => { 
                setIsLoginModalOpen(false);
            }}
        />
    </>
  )
}

export default Index

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Register from '../Components/Register'
import Login from "../Components/Login";
import { useAuth } from '../Hooks/useAuth'
import LogoutUser from '../Components/LogoutUser';
import SecondaryBtn from '../Components/Shared/SecondaryBtn';
import { Holder } from '../Components/LogoutUser/style';
import Navigation from '../Components/Navigation';

const Index: NextPage = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const { auth } = useAuth()

  useEffect(() => {
  }, [auth]);

  return (
    <>

{!auth && (
        <>
        <Holder>
        <SecondaryBtn onClick={() => setIsLoginModalOpen(true)}>Login</SecondaryBtn>
        <SecondaryBtn onClick={() => setIsRegisterModalOpen(true)}>Register</SecondaryBtn>
        </Holder>
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
        )}
        {auth && (
            <>
            <LogoutUser/>
            <Navigation/>
            </>
        )}
    </>
  )
}

export default Index

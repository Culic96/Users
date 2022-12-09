import styled from 'styled-components';

export const FormWrapperLogin = styled.div<{isModalOpen: boolean}>({
    width: '50vw',
    height: '50vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    margin: "0 auto",
    position: 'absolute',
    left: '50%',
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: " #939597",
    textAlign: 'center',
    color: '#fff',
    h1: {
        fontSize: "2rem",
        letterSpacing: '4px',
        marginTop: '1rem'
    },
    form: {
        height: '90%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },
    label: {
        fontSize: '1.3rem',
        letterSpacing: '3px'
    },
    input: {
        outline: 0,
        border: 0,
        padding: '0.4rem 1rem',
        fontSize: '1.3rem',
        width: '80%',
        borderBottom: '2px solid red',
        backgroundColor: 'transparent',
        color: '#fff'
    },
    button: {
        fontFamily: 'inherit',
        color: '#fff',
        letterSpacing: '3px',
        border: '2px solid transparent',
        fontSize: '1.3rem',
        padding: '0.8rem 1.7rem',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        marginBottom: '1rem',
        transition: 'all 0.4s ease-in',
    "&: hover": {
        border: '2px solid red',
        color: 'red',
        backgroundColor: '#fff'
    },
 },
}, ({isModalOpen}) => ({
    ...(!isModalOpen && {
    }),
}))

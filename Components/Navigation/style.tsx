import styled from "styled-components";

export const NavigationHolder = styled.div({
    height: '94vh',
    width: '15vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems :'center',
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
})

export const NavLinks = styled.div({
    height:"40vh",
    width: '13vw',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.8rem',
    li: {
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        padding: '1rem 3rem',
        listStyle: 'none',
        color: "#939597",
        fontSize: '1.3rem',
        letterSpacing: '5px',
        transition: 'all 0.3s ease-in'
    },
    "li: hover": {
        backgroundColor: '#939597',
        color: '#fff',
        transition: 'all 0.3s ease-in',
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        cursor: 'pointer',
    },
    "li: active": {
        color: 'red'
    },
    a: {
        textDecoration: "none"
    },
})
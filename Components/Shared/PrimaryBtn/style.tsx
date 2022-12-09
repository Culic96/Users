import styled from "styled-components";

export const Primary = styled.button({
    fontFamily: 'inherit',
    color: '#fff',
    letterSpacing: '3px',
    border: '2px solid transparent',
    fontSize: '1.3rem',
    padding: '0.4rem 1.3rem',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease-in',
"&: hover": {
    border: '2px solid red',
    color: 'red',
    backgroundColor: '#fff'
},
})
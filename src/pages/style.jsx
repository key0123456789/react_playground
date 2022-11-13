import React from 'react'
import styled from 'styled-components'

// type ButtonProps = {
//   color: string,
//   backgroundColor: string
// }

const Button = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};

  font-size: 2rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 8px;
  cursor: pointer;
`

const style = () => {
  return (
    <>
      <div><Button color="#cccccc" backgroundColor="transparent">Hello</Button></div>
      <div><Button color="red" backgroundColor="transparent">Hello</Button></div>
    </>
  )
}

export default style

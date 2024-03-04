import styled from 'styled-components/native'

interface ContainerProps {
  bgColor?: string
  color?: string
}

const Container = styled.View<ContainerProps>`
flex: 1;
padding: 10px;
gap: 15px;
padding-bottom: 20%;
${(props) => props.bgColor && `background-color: ${props.bgColor}`}
${(props) => props.color && `color: ${props.color}`}
`

export default Container

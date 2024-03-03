import styled from 'styled-components/native'

interface VStackProps {
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  gap?: string
}

export const VStack = styled.View<VStackProps>`
flex-direction: column;
gap: ${(props) => (props.gap ? props.gap : '0px')};
${(props) => props.align && `align-items: ${props.align}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
`

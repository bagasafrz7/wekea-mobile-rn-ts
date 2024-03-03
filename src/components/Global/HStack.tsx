import styled from 'styled-components/native'

interface HStackProps {
  align?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  gap?: string
}

export const HStack = styled.View<HStackProps>`
flex-direction: row;
gap: ${(props) => (props.gap ? props.gap : '0px')};
${(props) => props.align && `align-items: ${props.align}`};
${(props) => props.justify && `justify-content: ${props.justify}`};
`

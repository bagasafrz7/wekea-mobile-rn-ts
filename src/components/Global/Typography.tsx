import styled from 'styled-components/native'

interface TypographyProps {
  size?: 'sm' | 'md' | 'lg' | 'title' | 'x-lg'
  color?: 'primary' | 'text' | 'white' | 'secondary'
  variant?: 'sm' | 'md' | 'lg' | 'title' | 'x-lg'
  weight?: 'bold' | 'medium' | 'normal' | 'light' | 'title'
  align?: false
  lineThrought?: any
}

const Typography = styled.Text<TypographyProps>`
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '12px'
      case 'md':
        return '16px'
      case 'lg':
        return '20px'
      case 'x-lg':
        return '24px'
      case 'title':
        return '32px'
      default:
        return '16px'
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return '#007bff'
      case 'text':
        return '#0C0D34'
      case 'white':
        return '#FFFFFF'
      case 'secondary':
        return '#6c757d'
      default:
        return '#0C0D34'
    }
  }};

  text-align: ${(props) => (props.align ? props.align : 'left')};
  line-height: ${(props) => {
    switch (props.variant) {
      case 'sm':
        return '12px'
      case 'md':
        return '16px'
      case 'lg':
        return '20px'
      case 'x-lg':
        return '90px'
      case 'title':
        return '32px'
      default:
        return 'auto'
    }
  }};

  font-weight: ${(props) => {
    switch (props.weight) {
      case 'title':
        return '700'
      case 'bold':
        return '600'
      case 'medium':
        return '500'
      case 'normal':
        return '400'
      case 'light':
        return '300'
      default:
        return '400'
    }
  }};

  ${(props) => props.lineThrought && 'text-decoration: line-through'}
`

export default Typography

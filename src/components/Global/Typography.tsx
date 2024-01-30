import styled from 'styled-components/native';

interface TypographyProps {
  size?: 'sm' | 'md' | 'lg' | 'title';
  color?: 'primary' | 'text' | 'white';
  variant?: 'title';
  weight?: 'bold' | 'medium' | 'normal' | 'light' | 'title';
  align?: false;
}

const Typography = styled.Text<TypographyProps>`
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '12px';
      case 'md':
        return '16px';
      case 'lg':
        return '20px';
      case 'title':
        return '32px';
      default:
        return '16px';
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case 'primary':
        return '#007bff';
      case 'text':
        return '#0C0D34';
      case 'white':
        return '#FFFFFF';
      default:
        return '#0C0D34';
    }
  }};

  text-align: ${(props) => (props.align ? props.align : 'left')};
  line-height: ${(props) => {
    switch (props.variant) {
      case 'title':
        return '28px';
      default:
        return '20px';
    }
  }};

  font-weight: ${(props) => {
    switch (props.weight) {
      case 'title':
        return '700';
      case 'bold':
        return '600';
      case 'medium':
        return '500';
      case 'normal':
        return '400';
      case 'light':
        return '300';
      default:
        return '400';
    }
  }};
`;

export default Typography;

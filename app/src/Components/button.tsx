import React from 'react';
interface ButtonProps {
  label: string;
}
class Button extends React.Component<ButtonProps> {
  render() {
    return <button type="submit">submit</button>;
  }
}
export default Button;

// {this.props.label}
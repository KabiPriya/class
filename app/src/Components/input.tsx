import React from "react";
interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
class Input extends React.Component<InputProps> {
  render() {
    return (
      <input
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        name={this.props.name}
      />
    );
  }
}
export default Input;
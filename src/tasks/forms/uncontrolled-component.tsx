import { useState } from "react";

interface IUncontrolled {
    defaultValue: any
    placeholder: any
}

const UncontrolledInput = ({ defaultValue, placeholder }: IUncontrolled) => {
    const [value, setValue] = useState(defaultValue);
  
    return (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    );
  };
  
export const UncontrolledComponent = () => {
    return (
      <form>
        <UncontrolledInput defaultValue="" placeholder="Email" />
        <UncontrolledInput defaultValue="" placeholder="Password" />
        <button>Submit</button>
      </form>
    );
  };
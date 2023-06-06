import { useRef } from 'react';

export const UncontrolledComponent = () => {

  const nameRef = useRef<any>("");
  const emailRef = useRef<any>("");

  const onSubmit = () => {
    alert("Hi , "+ nameRef.current.value + " and your email is : "+emailRef.current.value )
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}
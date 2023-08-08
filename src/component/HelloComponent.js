import React, { useState } from 'react';
import HelloService from '../service/HelloService';

function HelloComponent() {
  const [helloMessage, setHelloMessage] = useState("");

  const printHello = async () => {
    const helloService = new HelloService();
    const data = await helloService.getHelloMessage();
    setHelloMessage(data.message);
  };

  return (
    <div>
      <button onClick={printHello}>Print Hello</button>
      <div>{helloMessage}</div>
    </div>
  );
}

export default HelloComponent;

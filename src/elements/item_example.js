import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

var values = ["cheese 🧀", "toilet seats 🚽", "sadness 😢", "time travel ⏱️", "dinosaurs 🦖", "tennis shoes 👟", "headaches 🤯", "monkeys 🐒", "lemonade 🍋", "arm wrestling 🤼", "love 💕", "the beach 🏖️", "Hollywood 🎬"];

const Example = () => {
  const { result, dencrypt } = useDencrypt();
  var firstTime = true;
  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 4000);

    return () => clearInterval(action);
  }, []);

    return <span style={{fontFamily:`Poppins`}}>{result.length>0 ? result : 'Create a poem about athleisure 👟'}</span>;
  
};

export default Example;
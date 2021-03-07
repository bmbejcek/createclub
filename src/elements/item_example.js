import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

var values = ["cheese 🧀", "toilet seats 🚽", "sadness 😢", "time travel ⏱️", "dinosaurs 🦖", "tennis shoes 👟", "headaches 🤯", "monkeys 🐒", "lemonade 🍋", "arm wrestling 🤼", "love 💕", "the beach 🏖️", "Hollywood 🎬"];

const Example = () => {
  const [result, setResult] = useDencrypt('time travel ⏱️');

  React.useEffect(() => {
    let i = 0;
    let run = true;

    const loop = async () => {
      while (run) {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await setResult(values[i]);

        i = i === values.length - 1 ? 0 : i + 1;
      }
    };

    if (setResult) {
      loop();
    }

    return () => {
      run = false;
    };
  }, [setResult]);
  console.log(result)

    return <span style={{fontFamily:`Poppins`}}>{result}</span>;
  
};

export default Example;
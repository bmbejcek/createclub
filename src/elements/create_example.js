import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["Create a", "Make a", "Craft a"];

const Example = () => {
  const [result, setResult] = useDencrypt('Create a');

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

    return <span style={{fontFamily:`Poppins`}}>{result}</span>;
  
};
export default Example;
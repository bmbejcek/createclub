import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const verb_values = ["Create a", "Make a", "Craft a"];
const art_values = ["sculpture of", "drawing about", "dance move for", "commercial for", "poem about"];
const noun_values = ["cheese 🧀", "toilet seats 🚽", "sadness 😢", "time travel ⏱️", "dinosaurs 🦖", "tennis shoes 👟", "headaches 🤯", "monkeys 🐒", "lemonade 🍋", "arm wrestling 🤼", "love 💕", "the beach 🏖️", "Hollywood 🎬"];
var last_used_verb = verb_values[Math.floor(Math.random()*verb_values.length)]
var last_used_art = art_values[Math.floor(Math.random()*art_values.length)]
var last_used_noun = noun_values[Math.floor(Math.random()*noun_values.length)];
var new_verb, new_art, new_noun = ''
var prompt = last_used_verb + ' ' + last_used_art  + ' ' + last_used_noun
const Example = () => {
  const [result, setResult] = useDencrypt(prompt);

  React.useEffect(() => {
    let i = 0;
    let run = true;

    const loop = async () => {
      while (run) {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        new_verb = verb_values[Math.floor(Math.random()*verb_values.length)]
        new_art = art_values[Math.floor(Math.random()*art_values.length)]
        new_noun = noun_values[Math.floor(Math.random()*noun_values.length)];
        while(new_verb === last_used_verb){
          new_verb = verb_values[Math.floor(Math.random()*verb_values.length)]
        }
        while(new_art === last_used_art){
          new_art = art_values[Math.floor(Math.random()*art_values.length)]
        }
        while(new_noun === last_used_noun){
          new_noun = noun_values[Math.floor(Math.random()*noun_values.length)]
        }
        last_used_verb = new_verb
        last_used_art = new_art
        last_used_noun = new_noun
        prompt = new_verb + ' ' + new_art + ' ' + new_noun
        await setResult(prompt);
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
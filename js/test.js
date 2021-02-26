const obj = {
};

for (let i = 0; i < 3; i++) {
    const firstQ = "первый вопрос",
          firstA = "первый ответ",
          secondQ = "второй вопрос",
          secondA = "второй ответ";
    obj[firstQ] = firstA;
    obj[secondQ] = secondA;    
}

console.log(obj);
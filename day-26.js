// Sort with Arrow Functions
// https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = (people) => people.sort((a, b) => a.age - b.age); //підкажіть буь-ласка чому на кодварс назва константи написана з великої літери




// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/

const moveZeros = (arr) => {
  const result = [];
  const zeros = arr.filter((x) => x === 0);
  const otherNumbers = arr.filter((x) => x !== 0);
  result.push(...otherNumbers, ...zeros);
  return result
}

function echo(data: any) {
  return data;
}

console.log(echo("Max"));
console.log(echo(27).length);
console.log(echo({name: "Max", age: 27}));

function betterEco<T>(data: T) {
  return data;
}

console.log(betterEco("Max").length);
console.log(betterEco<number>(27));
console.log(betterEco({name: "Max", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEco;
console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string> {
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());

// Generic Class - multiple types
class SimpleMath2<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath2 = new SimpleMath2<string, number>();
simpleMath2.baseValue = "10";
simpleMath2.multiplyValue = 10;
console.log(simpleMath2.calculate());

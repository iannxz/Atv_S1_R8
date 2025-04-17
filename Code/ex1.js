let num1;
num1 = 1;

while (num1 <= 12) {
  console.log(`Numero: ${num1}`);
  num1 = num1 + 1;
}
console.log("fim1");

for (num1 = 1; num1 <= 12; num1++) {
  console.log(`"Numero:" ${num1}"`);
}
console.log("fim2");

num1 = 1;
do {
  console.log(`Numero: ${num1}`);
  num1 = num1 + 1;
} while (num1 <= 12);
console.log("Fim3");

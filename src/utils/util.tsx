export const adding = (numbers: string): number => {
  if (!numbers.trim()) return 0;

  numbers = numbers.replace(/\\n/g, "\n");

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");

    const customDelimiter = parts[0].slice(2);

    delimiter = new RegExp(customDelimiter);

    numbers = parts.slice(1).join("\n");
  }

  const numArray = numbers
    .split(delimiter)
    .map((n) => n.trim())
    .filter((n) => n !== "")
    .map(Number);

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  const validNumbers = numArray.filter((n) => !isNaN(n));

  const total = validNumbers.reduce((acc, n) => acc + n, 0);
  return total;
};

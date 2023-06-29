export function analyzeArray(arr) {
  const average = arr.reduce((sum, num) => (sum += num), 0) / arr.length;
  arr.sort((a, b) => a - b);

  return {
    average,
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length,
  };
}

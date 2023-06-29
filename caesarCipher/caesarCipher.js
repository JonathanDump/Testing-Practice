export function caesarCipher(string, key) {
  const res = [...string].map((l) => {
    let code = l.charCodeAt(0);

    if (code >= 60 && code <= 90) {
      code += key;

      if (code > 90) {
        return code - 26;
      } else if (code < 60) {
        return code + 26;
      } else {
        return code;
      }
    } else if (code >= 97 && code <= 122) {
      code += key;

      if (code > 122) {
        return code - 26;
      } else if (code < 97) {
        return code + 26;
      } else {
        return code;
      }
    } else {
      return code;
    }
  });
  return String.fromCharCode(...res);
}

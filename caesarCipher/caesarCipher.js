export function caesarCipher(string, key) {
  const res = [...string].map((l) => {
    let code = l.charCodeAt(0);

    if (code >= 60 && code <= 90) {
      code = ((((code - 65 + key) % 26) + 26) % 26) + 65;
    } else if (code >= 97 && code <= 122) {
       code = ((((code - 97 + key) % 26) + 26) % 26) + 97;
    }
    return code;
  });
  return String.fromCharCode(...res);
}

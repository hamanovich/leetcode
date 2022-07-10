export const hash = (key: string, bucketsNumber = 32): number => {
  let hashCode = 0;

  for (let i = 0; i < key.length; i += 1) hashCode += key.charCodeAt(i);

  return hashCode % bucketsNumber;
};

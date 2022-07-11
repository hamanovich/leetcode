// https://leetcode.com/problems/add-binary/

export const addBinary = (a: string, b: string): string => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);

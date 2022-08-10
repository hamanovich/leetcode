// https://leetcode.com/problems/evaluate-reverse-polish-notation/

export const evalRPN = (tokens: string[]): number => {
  const stack: Array<string | number> = [];
  const operand: Record<string, (a: number, b: number) => number> = {
    '+': (a: number, b: number): number => a + b,
    '-': (a: number, b: number): number => a - b,
    '*': (a: number, b: number): number => a * b,
    '/': (a: number, b: number): number => Math.trunc(a / b),
  };

  for (const t of tokens) {
    if (t in operand) {
      const top = stack.pop() as number;
      const second = stack.pop() as number;
      stack.push(operand[t](second, top));
    } else stack.push(Number(t));
  }

  return stack.pop() as number;
};

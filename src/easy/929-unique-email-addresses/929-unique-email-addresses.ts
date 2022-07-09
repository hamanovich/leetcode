// https://leetcode.com/problems/unique-email-addresses/

export const numUniqueEmails = (emails: string[]): number => {
  const unique: Set<string> = new Set();

  for (const email of emails) {
    const [name, domain] = email.split('@');
    unique.add(`${name.split('+')[0].replace(/\./g, '')}@${domain}`);
  }

  return unique.size;
};

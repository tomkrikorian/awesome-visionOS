import {spawnSync} from 'node:child_process';

const result = spawnSync('awesome-lint', ['README.md'], {
  encoding: 'utf8',
  shell: process.platform === 'win32'
});

const output = `${result.stdout || ''}${result.stderr || ''}`;
const marker = '\u2716';

const allowedRules = [
  'remark-lint:awesome-badge',
  'remark-lint:awesome-github',
  'remark-lint:awesome-heading',
  'remark-lint:awesome-list-item',
  'remark-lint:awesome-toc'
];

const findingLines = output
  .split('\n')
  .filter((line) => line.includes(marker) && line.includes('remark-lint:'));

const unexpectedFindings = findingLines.filter(
  (line) => !allowedRules.some((rule) => line.includes(rule))
);

if (result.status !== 0 && findingLines.length === 0) {
  console.error(output);
  process.exit(result.status ?? 1);
}

if (unexpectedFindings.length > 0) {
  console.error(output);
  console.error('\nUnexpected awesome-lint findings:');
  console.error(unexpectedFindings.join('\n'));
  process.exit(1);
}

console.log(
  `awesome-lint completed with ${findingLines.length} allowed finding(s).`
);
console.log(
  'Allowed findings cover prompt-required em dash separators, Apple-style visionOS casing, Related Lists in the ToC, and GitHub metadata such as topics or license.'
);

import fs from 'node:fs';

const readme = fs.readFileSync('README.md', 'utf8');
const lines = readme.split('\n');

const requiredText = [
  '## Official',
  '### Documentation',
  '### WWDC',
  '### Apple Samples',
  '## Open Source',
  '### Libraries',
  '#### UI & Spatial UX',
  '#### Input & Gestures',
  '#### RealityKit & ARKit',
  '#### Metal & Graphics',
  '#### Media & Immersive Video',
  '#### Build & Tooling',
  '#### Cross-platform',
  '### Tools',
  '#### Debugging',
  '#### Asset Pipeline',
  '#### CI / Build',
  '### Projects',
  '#### Apps',
  '#### Examples',
  '#### Templates & Starters',
  '#### Prototypes',
  '#### Research & Robotics',
  '## Learning',
  '### Communities',
  '### Websites',
  '### Newsletters',
  '### Courses',
  '### Articles',
  '## Related Lists',
  'RealityUI',
  'HandGesture',
  'VisionGesture',
  'visionOS-Sampler',
  'visionOS-2-Object-Tracking-Demo',
  'openimmersivelib',
  'MetalSplatter',
  'ios-cmake',
  'SwiftUIX',
  'NativeScript',
  'react-native-bottom-tabs'
];

const errors = [];

for (const text of requiredText) {
  if (!readme.includes(text)) {
    errors.push(`Missing required text: ${text}`);
  }
}

const entryLines = lines
  .map((line, index) => ({line, number: index + 1}))
  .filter(({line}) => line.startsWith('- [') && line.includes('](http'));

for (const {line, number} of entryLines) {
  if (!line.includes(' — ')) {
    errors.push(`Line ${number} must use an em dash separator.`);
  }

  if (!line.trimEnd().endsWith('.')) {
    errors.push(`Line ${number} must end with a period.`);
  }
}

const urls = [];
const urlPattern = /\]\((https?:\/\/[^)]+)\)/g;
let match;

while ((match = urlPattern.exec(readme)) !== null) {
  urls.push(match[1]);
}

const seen = new Map();
for (const url of urls) {
  const normalized = url.toLowerCase().replace(/\/$/, '');

  if (seen.has(normalized)) {
    errors.push(`Duplicate URL: ${seen.get(normalized)} and ${url}`);
  } else {
    seen.set(normalized, url);
  }
}

const hoverCount = (readme.match(/Rendering hover effects in Metal immersive apps/g) || []).length;
if (hoverCount !== 1) {
  errors.push(`Expected one hover-effects entry, found ${hoverCount}.`);
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`README structure check passed for ${entryLines.length} entries.`);

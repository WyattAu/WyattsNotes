import {compile} from '@mdx-js/mdx';
import remarkMath from 'remark-math';
import fs from 'fs';
const lines = fs.readFileSync(process.argv[2],'utf8').split('\n');
const lim = parseInt(process.argv[3] || '0');
try {
  await compile((lim?lines.slice(0,lim):lines).join('\n'), {remarkPlugins: [remarkMath]});
  console.log('OK', lim || lines.length);
} catch (e) {
  console.log('FAIL', JSON.stringify(e.place || e.position), '|', (e.message||'').slice(0,70));
}

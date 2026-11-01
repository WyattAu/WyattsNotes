import re, sys
p='docs/docs_tools/probabilisticml/1_fundamentals/2_definitions.md'
lines=open(p).read().split('\n')
toks=[]
for i,l in enumerate(lines):
    for m in re.finditer(r'\$\$', l):
        toks.append((i,m.start()))
assert len(toks)%2==0
target=int(sys.argv[1])  # 1-idx line of span opener to normalize
idx=None
for k in range(0,len(toks),2):
    if toks[k][0]+1==target:
        idx=k; break
assert idx is not None, "no span opener on that line"
(i1,c1),(i2,c2)=toks[idx],toks[idx+1]
opener=lines[i1]; closer=lines[i2]
before=opener[:c1].rstrip()
tail=opener[c1+2:].strip()
head=closer[:c2].strip()
after=closer[c2+2:].strip()
content=[]
if tail: content.append(tail)
for j in range(i1+1,i2):
    if lines[j].strip(): content.append(lines[j].rstrip())
if head: content.append(head)
new=[]
if before: new.append(before)
new.append('')
new.append('$$')
new.extend(content)
new.append('$$')
if after:
    new.append('')
    new.append(after)
lines[i1:i2+1]=new
open(p,'w').write('\n'.join(lines))
print(f"normalized span L{i1+1}->L{i2+1}")

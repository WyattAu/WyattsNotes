---
id: intro
title: intro
description: Test description
slug: /intro
sidebar_position: 1
---

## Abstract

This resource is created as a aggregation of best practices in Dart and Flutter.

<div className="godbolt-container">
  <iframe
    width="100%"
    height="800"
    src="https://godbolt.org/e#g:!((g:!((g:!((h:codeEditor,i:(filename:'1',fontScale:14,fontUsePx:'0',j:1,lang:dart,selection:(endColumn:66,endLineNumber:19,positionColumn:66,positionLineNumber:19,selectionStartColumn:66,selectionStartLineNumber:19,startColumn:66,startLineNumber:19),source:'void+main()+%7B%0A++const+w+%3D+80,+h+%3D+24,+maxIter+%3D+100%3B%0A++const+chars+%3D+%22+.:-%3D%2B*%23%25@%22%3B%0A++%0A++for+(var+y+%3D+0%3B+y+%3C+h%3B+y%2B%2B)+%7B%0A++++final+imag+%3D+1.0+-+2.0+*+y+/+h%3B%0A++++final+buffer+%3D+StringBuffer()%3B%0A++++for+(var+x+%3D+0%3B+x+%3C+w%3B+x%2B%2B)+%7B%0A++++++final+real+%3D+3.5+*+x+/+w+-+2.5%3B%0A++++++var+zr+%3D+real,+zi+%3D+imag%3B%0A++++++var+i+%3D+0%3B%0A++++++%0A++++++while+(zr+*+zr+%2B+zi+*+zi+%3C%3D+4.0+%26%26+i+%3C+maxIter)+%7B%0A++++++++final+nextR+%3D+zr+*+zr+-+zi+*+zi+%2B+real%3B%0A++++++++zi+%3D+2+*+zr+*+zi+%2B+imag%3B%0A++++++++zr+%3D+nextR%3B%0A++++++++i%2B%2B%3B%0A++++++%7D%0A++++++buffer.write(i+%3E%3D+maxIter+%3F+!'+!'+:+chars%5Bi+%25+chars.length%5D)%3B%0A++++%7D%0A++++print(buffer)%3B%0A++%7D%0A%7D%0A'),l:'5',n:'0',o:'Dart+source+%231',t:'0')),header:(),k:100,l:'4',m:47.309417040358746,n:'0',o:'',s:0,t:'0'),(g:!((h:executor,i:(argsPanelShown:'1',compilationPanelShown:'0',compiler:dart373,compilerName:'',compilerOutShown:'0',execArgs:'',execStdin:'',fontScale:14,fontUsePx:'0',j:1,lang:dart,libs:!(),options:'',overrides:!(),runtimeTools:!(),source:1,stdinPanelShown:'1',wrap:'1'),l:'5',n:'0',o:'Executor+Dart+3.7.3+(Dart,+Editor+%231)',t:'0')),header:(),l:'4',m:52.69058295964126,n:'0',o:'',s:0,t:'0')),l:'3',n:'0',o:'',t:'0')),version:4"
    title="Compiler Explorer"
    sandbox="allow-scripts allow-same-origin"
    loading="lazy"
  ></iframe>
</div>

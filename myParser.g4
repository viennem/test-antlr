grammar myParser;

file: 'hello' ID;

ID: [a-z]+;

WHITESPACE: [ \t\r\n]+    -> skip;

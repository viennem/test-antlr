grammar myParser;

ID: [a-z]+;

file: 'hello' ID;

WHITESPACE: [ \t\r\n]+    -> skip;

import antlr4 from 'antlr4';
import MyListener from './MyListener.js';
import Lexer from './myParserLexer.js';
import Parser from './myParserParser.js';

const input = 'hello hello';

const listener = new MyListener();
const stream = new antlr4.InputStream(input);
const lexer = new Lexer(stream);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new Parser(tokens);
parser.buildParseTrees = true;
const tree = parser.file();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import myParserListener from './myParserListener.js';
const serializedATN = [4,1,3,6,2,0,7,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,4,0,2,
1,0,0,0,2,3,5,1,0,0,3,4,5,2,0,0,4,1,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class myParserParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'hello'" ];
    static symbolicNames = [ null, null, "ID", "WHITESPACE" ];
    static ruleNames = [ "file" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = myParserParser.ruleNames;
        this.literalNames = myParserParser.literalNames;
        this.symbolicNames = myParserParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, myParserParser.RULE_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        this.match(myParserParser.T__0);
	        this.state = 3;
	        this.match(myParserParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

myParserParser.EOF = antlr4.Token.EOF;
myParserParser.T__0 = 1;
myParserParser.ID = 2;
myParserParser.WHITESPACE = 3;

myParserParser.RULE_file = 0;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = myParserParser.RULE_file;
    }

	ID() {
	    return this.getToken(myParserParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof myParserListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof myParserListener ) {
	        listener.exitFile(this);
		}
	}


}




myParserParser.FileContext = FileContext; 

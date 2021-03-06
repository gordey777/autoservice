//---------------------------------------//
// свг спрайт
//---------------------------------------//
;( function( window, document )
{
  'use strict';
  var file     = '/wp-content/themes/wp-autoservice/img/svg.html',
    revision = 1;
  if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
    return true;
  var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
    request,
    data,
    insertIT = function()
    {
      document.getElementById('svg-sprite-container').insertAdjacentHTML( 'afterbegin', data );
    },
    insert = function()
    {
      if( document.body ) insertIT();
      else document.addEventListener( 'DOMContentLoaded', insertIT );
    };
//  if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
//  {
//    data = localStorage.getItem( 'inlineSVGdata' );
//    if( data )
//    {
//      insert();
//      return true;
//    }
//  }
  try
  {
    request = new XMLHttpRequest();
    request.open( 'GET', file, true );
    request.onload = function()
    {
      if( request.status >= 200 && request.status < 400 )
      {
        data = request.responseText;
        insert();
        if( isLocalStorage )
        {
          localStorage.setItem( 'inlineSVGdata',  data );
          localStorage.setItem( 'inlineSVGrev',   revision );
        }
      }
    }
    request.send();
  }
  catch( e ){}
}( window, document ) );
//---------------------------------------//
// Подключаем набор плагинов ( requare/plugins.js )
//---------------------------------------//
//---------------------------------------//
// Подключаем плагины bower
//---------------------------------------//
/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {
  "use strict";
  if ( typeof module === "object" && typeof module.exports === "object" ) {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ?
      factory( global, true ) :
      function( w ) {
        if ( !w.document ) {
          throw new Error( "jQuery requires a window with a document" );
        }
        return factory( w );
      };
  } else {
    factory( global );
  }
// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";
var arr = [];
var document = window.document;
var getProto = Object.getPrototypeOf;
var slice = arr.slice;
var concat = arr.concat;
var push = arr.push;
var indexOf = arr.indexOf;
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call( Object );
var support = {};
  function DOMEval( code, doc ) {
    doc = doc || document;
    var script = doc.createElement( "script" );
    script.text = code;
    doc.head.appendChild( script ).parentNode.removeChild( script );
  }
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var
  version = "3.2.1",
  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init( selector, context );
  },
  // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([a-z])/g,
  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return letter.toUpperCase();
  };
jQuery.fn = jQuery.prototype = {
  // The current version of jQuery being used
  jquery: version,
  constructor: jQuery,
  // The default length of a jQuery object is 0
  length: 0,
  toArray: function() {
    return slice.call( this );
  },
  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {
    // Return all the elements in a clean array
    if ( num == null ) {
      return slice.call( this );
    }
    // Return just the one element from the set
    return num < 0 ? this[ num + this.length ] : this[ num ];
  },
  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems ) {
    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );
    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;
    // Return the newly-formed element set
    return ret;
  },
  // Execute a callback for every element in the matched set.
  each: function( callback ) {
    return jQuery.each( this, callback );
  },
  map: function( callback ) {
    return this.pushStack( jQuery.map( this, function( elem, i ) {
      return callback.call( elem, i, elem );
    } ) );
  },
  slice: function() {
    return this.pushStack( slice.apply( this, arguments ) );
  },
  first: function() {
    return this.eq( 0 );
  },
  last: function() {
    return this.eq( -1 );
  },
  eq: function( i ) {
    var len = this.length,
      j = +i + ( i < 0 ? len : 0 );
    return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
  },
  end: function() {
    return this.prevObject || this.constructor();
  },
  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: push,
  sort: arr.sort,
  splice: arr.splice
};
jQuery.extend = jQuery.fn.extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[ 0 ] || {},
    i = 1,
    length = arguments.length,
    deep = false;
  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    // Skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }
  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
    target = {};
  }
  // Extend jQuery itself if only one argument is passed
  if ( i === length ) {
    target = this;
    i--;
  }
  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( ( options = arguments[ i ] ) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];
        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }
        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
          ( copyIsArray = Array.isArray( copy ) ) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && Array.isArray( src ) ? src : [];
          } else {
            clone = src && jQuery.isPlainObject( src ) ? src : {};
          }
          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );
        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }
  // Return the modified object
  return target;
};
jQuery.extend( {
  // Unique for each copy of jQuery on the page
  expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
  // Assume jQuery is ready without the ready module
  isReady: true,
  error: function( msg ) {
    throw new Error( msg );
  },
  noop: function() {},
  isFunction: function( obj ) {
    return jQuery.type( obj ) === "function";
  },
  isWindow: function( obj ) {
    return obj != null && obj === obj.window;
  },
  isNumeric: function( obj ) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type( obj );
    return ( type === "number" || type === "string" ) &&
      // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN( obj - parseFloat( obj ) );
  },
  isPlainObject: function( obj ) {
    var proto, Ctor;
    // Detect obvious negatives
    // Use toString instead of jQuery.type to catch host objects
    if ( !obj || toString.call( obj ) !== "[object Object]" ) {
      return false;
    }
    proto = getProto( obj );
    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    if ( !proto ) {
      return true;
    }
    // Objects with prototype are plain iff they were constructed by a global Object function
    Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
    return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
  },
  isEmptyObject: function( obj ) {
    /* eslint-disable no-unused-vars */
    // See https://github.com/eslint/eslint/issues/6125
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  },
  type: function( obj ) {
    if ( obj == null ) {
      return obj + "";
    }
    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[ toString.call( obj ) ] || "object" :
      typeof obj;
  },
  // Evaluates a script in a global context
  globalEval: function( code ) {
    DOMEval( code );
  },
  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 13
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },
  each: function( obj, callback ) {
    var length, i = 0;
    if ( isArrayLike( obj ) ) {
      length = obj.length;
      for ( ; i < length; i++ ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    } else {
      for ( i in obj ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    }
    return obj;
  },
  // Support: Android <=4.0 only
  trim: function( text ) {
    return text == null ?
      "" :
      ( text + "" ).replace( rtrim, "" );
  },
  // results is for internal usage only
  makeArray: function( arr, results ) {
    var ret = results || [];
    if ( arr != null ) {
      if ( isArrayLike( Object( arr ) ) ) {
        jQuery.merge( ret,
          typeof arr === "string" ?
          [ arr ] : arr
        );
      } else {
        push.call( ret, arr );
      }
    }
    return ret;
  },
  inArray: function( elem, arr, i ) {
    return arr == null ? -1 : indexOf.call( arr, elem, i );
  },
  // Support: Android <=4.0 only, PhantomJS 1 only
  // push.apply(_, arraylike) throws on ancient WebKit
  merge: function( first, second ) {
    var len = +second.length,
      j = 0,
      i = first.length;
    for ( ; j < len; j++ ) {
      first[ i++ ] = second[ j ];
    }
    first.length = i;
    return first;
  },
  grep: function( elems, callback, invert ) {
    var callbackInverse,
      matches = [],
      i = 0,
      length = elems.length,
      callbackExpect = !invert;
    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      callbackInverse = !callback( elems[ i ], i );
      if ( callbackInverse !== callbackExpect ) {
        matches.push( elems[ i ] );
      }
    }
    return matches;
  },
  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var length, value,
      i = 0,
      ret = [];
    // Go through the array, translating each of the items to their new values
    if ( isArrayLike( elems ) ) {
      length = elems.length;
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );
        if ( value != null ) {
          ret.push( value );
        }
      }
    // Go through every key on the object,
    } else {
      for ( i in elems ) {
        value = callback( elems[ i ], i, arg );
        if ( value != null ) {
          ret.push( value );
        }
      }
    }
    // Flatten any nested arrays
    return concat.apply( [], ret );
  },
  // A global GUID counter for objects
  guid: 1,
  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var tmp, args, proxy;
    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }
    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }
    // Simulated bind
    args = slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
    };
    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  },
  now: Date.now,
  // jQuery.support is not used in Core but other projects attach their
  // properties to it so it needs to exist.
  support: support
} );
if ( typeof Symbol === "function" ) {
  jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );
function isArrayLike( obj ) {
  // Support: real iOS 8.2 only (not reproducible in simulator)
  // `in` check used to prevent JIT error (gh-2145)
  // hasOwn isn't used here due to false negatives
  // regarding Nodelist length in IE
  var length = !!obj && "length" in obj && obj.length,
    type = jQuery.type( obj );
  if ( type === "function" || jQuery.isWindow( obj ) ) {
    return false;
  }
  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {
var i,
  support,
  Expr,
  getText,
  isXML,
  tokenize,
  compile,
  select,
  outermostContext,
  sortInput,
  hasDuplicate,
  // Local document vars
  setDocument,
  document,
  docElem,
  documentIsHTML,
  rbuggyQSA,
  rbuggyMatches,
  matches,
  contains,
  // Instance-specific data
  expando = "sizzle" + 1 * new Date(),
  preferredDoc = window.document,
  dirruns = 0,
  done = 0,
  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),
  sortOrder = function( a, b ) {
    if ( a === b ) {
      hasDuplicate = true;
    }
    return 0;
  },
  // Instance methods
  hasOwn = ({}).hasOwnProperty,
  arr = [],
  pop = arr.pop,
  push_native = arr.push,
  push = arr.push,
  slice = arr.slice,
  // Use a stripped-down indexOf as it's faster than native
  // https://jsperf.com/thor-indexof-vs-for/5
  indexOf = function( list, elem ) {
    var i = 0,
      len = list.length;
    for ( ; i < len; i++ ) {
      if ( list[i] === elem ) {
        return i;
      }
    }
    return -1;
  },
  booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
  // Regular expressions
  // http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
  // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
  // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
    // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace +
    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
    "*\\]",
  pseudos = ":(" + identifier + ")(?:\\((" +
    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
    // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
    // 3. anything else (capture 2)
    ".*" +
    ")\\)|)",
  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rwhitespace = new RegExp( whitespace + "+", "g" ),
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
  rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
  rpseudo = new RegExp( pseudos ),
  ridentifier = new RegExp( "^" + identifier + "$" ),
  matchExpr = {
    "ID": new RegExp( "^#(" + identifier + ")" ),
    "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
    "TAG": new RegExp( "^(" + identifier + "|[*])" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
  },
  rinputs = /^(?:input|select|textarea|button)$/i,
  rheader = /^h\d$/i,
  rnative = /^[^{]+\{\s*\[native \w/,
  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
  rsibling = /[+~]/,
  // CSS escapes
  // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
  funescape = function( _, escaped, escapedWhitespace ) {
    var high = "0x" + escaped - 0x10000;
    // NaN means non-codepoint
    // Support: Firefox<24
    // Workaround erroneous numeric interpretation of +"0x"
    return high !== high || escapedWhitespace ?
      escaped :
      high < 0 ?
        // BMP codepoint
        String.fromCharCode( high + 0x10000 ) :
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
  },
  // CSS string/identifier serialization
  // https://drafts.csswg.org/cssom/#common-serializing-idioms
  rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
  fcssescape = function( ch, asCodePoint ) {
    if ( asCodePoint ) {
      // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
      if ( ch === "\0" ) {
        return "\uFFFD";
      }
      // Control characters and (dependent upon position) numbers get escaped as code points
      return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
    }
    // Other potentially-special ASCII characters get backslash-escaped
    return "\\" + ch;
  },
  // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  unloadHandler = function() {
    setDocument();
  },
  disabledAncestor = addCombinator(
    function( elem ) {
      return elem.disabled === true && ("form" in elem || "label" in elem);
    },
    { dir: "parentNode", next: "legend" }
  );
// Optimize for push.apply( _, NodeList )
try {
  push.apply(
    (arr = slice.call( preferredDoc.childNodes )),
    preferredDoc.childNodes
  );
  // Support: Android<4.0
  // Detect silently failing push.apply
  arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
  push = { apply: arr.length ?
    // Leverage slice if possible
    function( target, els ) {
      push_native.apply( target, slice.call(els) );
    } :
    // Support: IE<9
    // Otherwise append directly
    function( target, els ) {
      var j = target.length,
        i = 0;
      // Can't trust NodeList.length
      while ( (target[j++] = els[i++]) ) {}
      target.length = j - 1;
    }
  };
}
function Sizzle( selector, context, results, seed ) {
  var m, i, elem, nid, match, groups, newSelector,
    newContext = context && context.ownerDocument,
    // nodeType defaults to 9, since context defaults to document
    nodeType = context ? context.nodeType : 9;
  results = results || [];
  // Return early from calls with invalid selector or context
  if ( typeof selector !== "string" || !selector ||
    nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
    return results;
  }
  // Try to shortcut find operations (as opposed to filters) in HTML documents
  if ( !seed ) {
    if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
      setDocument( context );
    }
    context = context || document;
    if ( documentIsHTML ) {
      // If the selector is sufficiently simple, try using a "get*By*" DOM method
      // (excepting DocumentFragment context, where the methods don't exist)
      if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
        // ID selector
        if ( (m = match[1]) ) {
          // Document context
          if ( nodeType === 9 ) {
            if ( (elem = context.getElementById( m )) ) {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if ( elem.id === m ) {
                results.push( elem );
                return results;
              }
            } else {
              return results;
            }
          // Element context
          } else {
            // Support: IE, Opera, Webkit
            // TODO: identify versions
            // getElementById can match elements by name instead of ID
            if ( newContext && (elem = newContext.getElementById( m )) &&
              contains( context, elem ) &&
              elem.id === m ) {
              results.push( elem );
              return results;
            }
          }
        // Type selector
        } else if ( match[2] ) {
          push.apply( results, context.getElementsByTagName( selector ) );
          return results;
        // Class selector
        } else if ( (m = match[3]) && support.getElementsByClassName &&
          context.getElementsByClassName ) {
          push.apply( results, context.getElementsByClassName( m ) );
          return results;
        }
      }
      // Take advantage of querySelectorAll
      if ( support.qsa &&
        !compilerCache[ selector + " " ] &&
        (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
        if ( nodeType !== 1 ) {
          newContext = context;
          newSelector = selector;
        // qSA looks outside Element context, which is not what we want
        // Thanks to Andrew Dupont for this workaround technique
        // Support: IE <=8
        // Exclude object elements
        } else if ( context.nodeName.toLowerCase() !== "object" ) {
          // Capture the context ID, setting it first if necessary
          if ( (nid = context.getAttribute( "id" )) ) {
            nid = nid.replace( rcssescape, fcssescape );
          } else {
            context.setAttribute( "id", (nid = expando) );
          }
          // Prefix every selector in the list
          groups = tokenize( selector );
          i = groups.length;
          while ( i-- ) {
            groups[i] = "#" + nid + " " + toSelector( groups[i] );
          }
          newSelector = groups.join( "," );
          // Expand context for sibling selectors
          newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
            context;
        }
        if ( newSelector ) {
          try {
            push.apply( results,
              newContext.querySelectorAll( newSelector )
            );
            return results;
          } catch ( qsaError ) {
          } finally {
            if ( nid === expando ) {
              context.removeAttribute( "id" );
            }
          }
        }
      }
    }
  }
  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed );
}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  deleting the oldest entry
 */
function createCache() {
  var keys = [];
  function cache( key, value ) {
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    if ( keys.push( key + " " ) > Expr.cacheLength ) {
      // Only keep the most recent entries
      delete cache[ keys.shift() ];
    }
    return (cache[ key + " " ] = value);
  }
  return cache;
}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
  fn[ expando ] = true;
  return fn;
}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
  var el = document.createElement("fieldset");
  try {
    return !!fn( el );
  } catch (e) {
    return false;
  } finally {
    // Remove from its parent by default
    if ( el.parentNode ) {
      el.parentNode.removeChild( el );
    }
    // release memory in IE
    el = null;
  }
}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
  var arr = attrs.split("|"),
    i = arr.length;
  while ( i-- ) {
    Expr.attrHandle[ arr[i] ] = handler;
  }
}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
  var cur = b && a,
    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
      a.sourceIndex - b.sourceIndex;
  // Use IE sourceIndex if available on both nodes
  if ( diff ) {
    return diff;
  }
  // Check if b follows a
  if ( cur ) {
    while ( (cur = cur.nextSibling) ) {
      if ( cur === b ) {
        return -1;
      }
    }
  }
  return a ? 1 : -1;
}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {
  // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
  return function( elem ) {
    // Only certain elements can match :enabled or :disabled
    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
    if ( "form" in elem ) {
      // Check for inherited disabledness on relevant non-disabled elements:
      // * listed form-associated elements in a disabled fieldset
      //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
      //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
      // * option elements in a disabled optgroup
      //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
      // All such elements have a "form" property.
      if ( elem.parentNode && elem.disabled === false ) {
        // Option elements defer to a parent optgroup if present
        if ( "label" in elem ) {
          if ( "label" in elem.parentNode ) {
            return elem.parentNode.disabled === disabled;
          } else {
            return elem.disabled === disabled;
          }
        }
        // Support: IE 6 - 11
        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
        return elem.isDisabled === disabled ||
          // Where there is no isDisabled, check manually
          /* jshint -W018 */
          elem.isDisabled !== !disabled &&
            disabledAncestor( elem ) === disabled;
      }
      return elem.disabled === disabled;
    // Try to winnow out elements that can't be disabled before trusting the disabled property.
    // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
    // even exist on them, let alone have a boolean value.
    } else if ( "label" in elem ) {
      return elem.disabled === disabled;
    }
    // Remaining elements are neither :enabled nor :disabled
    return false;
  };
}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;
      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
  return context && typeof context.getElementsByTagName !== "undefined" && context;
}
// Expose support vars for convenience
support = Sizzle.support = {};
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
  var hasCompare, subWindow,
    doc = node ? node.ownerDocument || node : preferredDoc;
  // Return early if doc is invalid or already selected
  if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    return document;
  }
  // Update global variables
  document = doc;
  docElem = document.documentElement;
  documentIsHTML = !isXML( document );
  // Support: IE 9-11, Edge
  // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
  if ( preferredDoc !== document &&
    (subWindow = document.defaultView) && subWindow.top !== subWindow ) {
    // Support: IE 11, Edge
    if ( subWindow.addEventListener ) {
      subWindow.addEventListener( "unload", unloadHandler, false );
    // Support: IE 9 - 10 only
    } else if ( subWindow.attachEvent ) {
      subWindow.attachEvent( "onunload", unloadHandler );
    }
  }
  /* Attributes
  ---------------------------------------------------------------------- */
  // Support: IE<8
  // Verify that getAttribute really returns attributes and not properties
  // (excepting IE8 booleans)
  support.attributes = assert(function( el ) {
    el.className = "i";
    return !el.getAttribute("className");
  });
  /* getElement(s)By*
  ---------------------------------------------------------------------- */
  // Check if getElementsByTagName("*") returns only elements
  support.getElementsByTagName = assert(function( el ) {
    el.appendChild( document.createComment("") );
    return !el.getElementsByTagName("*").length;
  });
  // Support: IE<9
  support.getElementsByClassName = rnative.test( document.getElementsByClassName );
  // Support: IE<10
  // Check if getElementById returns elements by name
  // The broken getElementById methods don't pick up programmatically-set names,
  // so use a roundabout getElementsByName test
  support.getById = assert(function( el ) {
    docElem.appendChild( el ).id = expando;
    return !document.getElementsByName || !document.getElementsByName( expando ).length;
  });
  // ID filter and find
  if ( support.getById ) {
    Expr.filter["ID"] = function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        return elem.getAttribute("id") === attrId;
      };
    };
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
        var elem = context.getElementById( id );
        return elem ? [ elem ] : [];
      }
    };
  } else {
    Expr.filter["ID"] =  function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        var node = typeof elem.getAttributeNode !== "undefined" &&
          elem.getAttributeNode("id");
        return node && node.value === attrId;
      };
    };
    // Support: IE 6 - 7 only
    // getElementById is not reliable as a find shortcut
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
        var node, i, elems,
          elem = context.getElementById( id );
        if ( elem ) {
          // Verify the id attribute
          node = elem.getAttributeNode("id");
          if ( node && node.value === id ) {
            return [ elem ];
          }
          // Fall back on getElementsByName
          elems = context.getElementsByName( id );
          i = 0;
          while ( (elem = elems[i++]) ) {
            node = elem.getAttributeNode("id");
            if ( node && node.value === id ) {
              return [ elem ];
            }
          }
        }
        return [];
      }
    };
  }
  // Tag
  Expr.find["TAG"] = support.getElementsByTagName ?
    function( tag, context ) {
      if ( typeof context.getElementsByTagName !== "undefined" ) {
        return context.getElementsByTagName( tag );
      // DocumentFragment nodes don't have gEBTN
      } else if ( support.qsa ) {
        return context.querySelectorAll( tag );
      }
    } :
    function( tag, context ) {
      var elem,
        tmp = [],
        i = 0,
        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName( tag );
      // Filter out possible comments
      if ( tag === "*" ) {
        while ( (elem = results[i++]) ) {
          if ( elem.nodeType === 1 ) {
            tmp.push( elem );
          }
        }
        return tmp;
      }
      return results;
    };
  // Class
  Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
    if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
      return context.getElementsByClassName( className );
    }
  };
  /* QSA/matchesSelector
  ---------------------------------------------------------------------- */
  // QSA and matchesSelector support
  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
  rbuggyMatches = [];
  // qSa(:focus) reports false when true (Chrome 21)
  // We allow this because of a bug in IE8/9 that throws an error
  // whenever `document.activeElement` is accessed on an iframe
  // So, we allow :focus to pass through QSA all the time to avoid the IE error
  // See https://bugs.jquery.com/ticket/13378
  rbuggyQSA = [];
  if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( el ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explicitly
      // setting a boolean content attribute,
      // since its presence should be enough
      // https://bugs.jquery.com/ticket/12359
      docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
        "<select id='" + expando + "-\r\\' msallowcapture=''>" +
        "<option selected=''></option></select>";
      // Support: IE8, Opera 11-12.16
      // Nothing should be selected when empty strings follow ^= or $= or *=
      // The test attribute must be unknown in Opera but "safe" for WinRT
      // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
      if ( el.querySelectorAll("[msallowcapture^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
      }
      // Support: IE8
      // Boolean attributes and "value" are not treated correctly
      if ( !el.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
      }
      // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
      if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
        rbuggyQSA.push("~=");
      }
      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here and will not see later tests
      if ( !el.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }
      // Support: Safari 8+, iOS 8+
      // https://bugs.webkit.org/show_bug.cgi?id=136851
      // In-page `selector#id sibling-combinator selector` fails
      if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
        rbuggyQSA.push(".#.+[+~]");
      }
    });
    assert(function( el ) {
      el.innerHTML = "<a href='' disabled='disabled'></a>" +
        "<select disabled='disabled'><option/></select>";
      // Support: Windows 8 Native Apps
      // The type and name attributes are restricted during .innerHTML assignment
      var input = document.createElement("input");
      input.setAttribute( "type", "hidden" );
      el.appendChild( input ).setAttribute( "name", "D" );
      // Support: IE8
      // Enforce case-sensitivity of name attribute
      if ( el.querySelectorAll("[name=d]").length ) {
        rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
      }
      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here and will not see later tests
      if ( el.querySelectorAll(":enabled").length !== 2 ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }
      // Support: IE9-11+
      // IE's :disabled selector does not pick up the children of disabled fieldsets
      docElem.appendChild( el ).disabled = true;
      if ( el.querySelectorAll(":disabled").length !== 2 ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }
      // Opera 10-11 does not throw on post-comma invalid pseudos
      el.querySelectorAll("*,:x");
      rbuggyQSA.push(",.*:");
    });
  }
  if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
    docElem.webkitMatchesSelector ||
    docElem.mozMatchesSelector ||
    docElem.oMatchesSelector ||
    docElem.msMatchesSelector) )) ) {
    assert(function( el ) {
      // Check to see if it's possible to do matchesSelector
      // on a disconnected node (IE 9)
      support.disconnectedMatch = matches.call( el, "*" );
      // This should fail with an exception
      // Gecko does not error, returns false instead
      matches.call( el, "[s!='']:x" );
      rbuggyMatches.push( "!=", pseudos );
    });
  }
  rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
  rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
  /* Contains
  ---------------------------------------------------------------------- */
  hasCompare = rnative.test( docElem.compareDocumentPosition );
  // Element contains another
  // Purposefully self-exclusive
  // As in, an element does not contain itself
  contains = hasCompare || rnative.test( docElem.contains ) ?
    function( a, b ) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
        bup = b && b.parentNode;
      return a === bup || !!( bup && bup.nodeType === 1 && (
        adown.contains ?
          adown.contains( bup ) :
          a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
      ));
    } :
    function( a, b ) {
      if ( b ) {
        while ( (b = b.parentNode) ) {
          if ( b === a ) {
            return true;
          }
        }
      }
      return false;
    };
  /* Sorting
  ---------------------------------------------------------------------- */
  // Document order sorting
  sortOrder = hasCompare ?
  function( a, b ) {
    // Flag for duplicate removal
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }
    // Sort on method existence if only one input has compareDocumentPosition
    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    if ( compare ) {
      return compare;
    }
    // Calculate position if both inputs belong to the same document
    compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
      a.compareDocumentPosition( b ) :
      // Otherwise we know they are disconnected
      1;
    // Disconnected nodes
    if ( compare & 1 ||
      (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
      // Choose the first element that is related to our preferred document
      if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
        return -1;
      }
      if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
        return 1;
      }
      // Maintain original order
      return sortInput ?
        ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
        0;
    }
    return compare & 4 ? -1 : 1;
  } :
  function( a, b ) {
    // Exit early if the nodes are identical
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }
    var cur,
      i = 0,
      aup = a.parentNode,
      bup = b.parentNode,
      ap = [ a ],
      bp = [ b ];
    // Parentless nodes are either documents or disconnected
    if ( !aup || !bup ) {
      return a === document ? -1 :
        b === document ? 1 :
        aup ? -1 :
        bup ? 1 :
        sortInput ?
        ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
        0;
    // If the nodes are siblings, we can do a quick check
    } else if ( aup === bup ) {
      return siblingCheck( a, b );
    }
    // Otherwise we need full lists of their ancestors for comparison
    cur = a;
    while ( (cur = cur.parentNode) ) {
      ap.unshift( cur );
    }
    cur = b;
    while ( (cur = cur.parentNode) ) {
      bp.unshift( cur );
    }
    // Walk down the tree looking for a discrepancy
    while ( ap[i] === bp[i] ) {
      i++;
    }
    return i ?
      // Do a sibling check if the nodes have a common ancestor
      siblingCheck( ap[i], bp[i] ) :
      // Otherwise nodes in our document sort first
      ap[i] === preferredDoc ? -1 :
      bp[i] === preferredDoc ? 1 :
      0;
  };
  return document;
};
Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};
Sizzle.matchesSelector = function( elem, expr ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }
  // Make sure that attribute selectors are quoted
  expr = expr.replace( rattributeQuotes, "='$1']" );
  if ( support.matchesSelector && documentIsHTML &&
    !compilerCache[ expr + " " ] &&
    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
    try {
      var ret = matches.call( elem, expr );
      // IE 9's matchesSelector returns false on disconnected nodes
      if ( ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11 ) {
        return ret;
      }
    } catch (e) {}
  }
  return Sizzle( expr, document, null, [ elem ] ).length > 0;
};
Sizzle.contains = function( context, elem ) {
  // Set document vars if needed
  if ( ( context.ownerDocument || context ) !== document ) {
    setDocument( context );
  }
  return contains( context, elem );
};
Sizzle.attr = function( elem, name ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }
  var fn = Expr.attrHandle[ name.toLowerCase() ],
    // Don't get fooled by Object.prototype properties (jQuery #13807)
    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
      fn( elem, name, !documentIsHTML ) :
      undefined;
  return val !== undefined ?
    val :
    support.attributes || !documentIsHTML ?
      elem.getAttribute( name ) :
      (val = elem.getAttributeNode(name)) && val.specified ?
        val.value :
        null;
};
Sizzle.escape = function( sel ) {
  return (sel + "").replace( rcssescape, fcssescape );
};
Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    j = 0,
    i = 0;
  // Unless we *know* we can detect duplicates, assume their presence
  hasDuplicate = !support.detectDuplicates;
  sortInput = !support.sortStable && results.slice( 0 );
  results.sort( sortOrder );
  if ( hasDuplicate ) {
    while ( (elem = results[i++]) ) {
      if ( elem === results[ i ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }
  // Clear input after sorting to release objects
  // See https://github.com/jquery/sizzle/pull/225
  sortInput = null;
  return results;
};
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;
  if ( !nodeType ) {
    // If no nodeType, this is expected to be an array
    while ( (node = elem[i++]) ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    // Use textContent for elements
    // innerText usage removed for consistency of new lines (jQuery #11153)
    if ( typeof elem.textContent === "string" ) {
      return elem.textContent;
    } else {
      // Traverse its children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        ret += getText( elem );
      }
    }
  } else if ( nodeType === 3 || nodeType === 4 ) {
    return elem.nodeValue;
  }
  // Do not include comment or processing instruction nodes
  return ret;
};
Expr = Sizzle.selectors = {
  // Can be adjusted by the user
  cacheLength: 50,
  createPseudo: markFunction,
  match: matchExpr,
  attrHandle: {},
  find: {},
  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },
  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( runescape, funescape );
      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }
      return match.slice( 0, 4 );
    },
    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 what (child|of-type)
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        4 xn-component of xn+y argument ([+-]?\d*n|)
        5 sign of xn-component
        6 x of xn-component
        7 sign of y-component
        8 y of y-component
      */
      match[1] = match[1].toLowerCase();
      if ( match[1].slice( 0, 3 ) === "nth" ) {
        // nth-* requires argument
        if ( !match[3] ) {
          Sizzle.error( match[0] );
        }
        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
        match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
      // other types prohibit arguments
      } else if ( match[3] ) {
        Sizzle.error( match[0] );
      }
      return match;
    },
    "PSEUDO": function( match ) {
      var excess,
        unquoted = !match[6] && match[2];
      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }
      // Accept quoted arguments as-is
      if ( match[3] ) {
        match[2] = match[4] || match[5] || "";
      // Strip excess characters from unquoted arguments
      } else if ( unquoted && rpseudo.test( unquoted ) &&
        // Get excess from tokenize (recursively)
        (excess = tokenize( unquoted, true )) &&
        // advance to the next closing parenthesis
        (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
        // excess is a negative index
        match[0] = match[0].slice( 0, excess );
        match[2] = unquoted.slice( 0, excess );
      }
      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },
  filter: {
    "TAG": function( nodeNameSelector ) {
      var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
      return nodeNameSelector === "*" ?
        function() { return true; } :
        function( elem ) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
    },
    "CLASS": function( className ) {
      var pattern = classCache[ className + " " ];
      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
        });
    },
    "ATTR": function( name, operator, check ) {
      return function( elem ) {
        var result = Sizzle.attr( elem, name );
        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }
        result += "";
        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.slice( -check.length ) === check :
          operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },
    "CHILD": function( type, what, argument, first, last ) {
      var simple = type.slice( 0, 3 ) !== "nth",
        forward = type.slice( -4 ) !== "last",
        ofType = what === "of-type";
      return first === 1 && last === 0 ?
        // Shortcut for :nth-*(n)
        function( elem ) {
          return !!elem.parentNode;
        } :
        function( elem, context, xml ) {
          var cache, uniqueCache, outerCache, node, nodeIndex, start,
            dir = simple !== forward ? "nextSibling" : "previousSibling",
            parent = elem.parentNode,
            name = ofType && elem.nodeName.toLowerCase(),
            useCache = !xml && !ofType,
            diff = false;
          if ( parent ) {
            // :(first|last|only)-(child|of-type)
            if ( simple ) {
              while ( dir ) {
                node = elem;
                while ( (node = node[ dir ]) ) {
                  if ( ofType ?
                    node.nodeName.toLowerCase() === name :
                    node.nodeType === 1 ) {
                    return false;
                  }
                }
                // Reverse direction for :only-* (if we haven't yet done so)
                start = dir = type === "only" && !start && "nextSibling";
              }
              return true;
            }
            start = [ forward ? parent.firstChild : parent.lastChild ];
            // non-xml :nth-child(...) stores cache data on `parent`
            if ( forward && useCache ) {
              // Seek `elem` from a previously-cached index
              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[ expando ] || (node[ expando ] = {});
              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[ node.uniqueID ] ||
                (outerCache[ node.uniqueID ] = {});
              cache = uniqueCache[ type ] || [];
              nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
              diff = nodeIndex && cache[ 2 ];
              node = nodeIndex && parent.childNodes[ nodeIndex ];
              while ( (node = ++nodeIndex && node && node[ dir ] ||
                // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) ) {
                // When found, cache indexes on `parent` and break
                if ( node.nodeType === 1 && ++diff && node === elem ) {
                  uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                  break;
                }
              }
            } else {
              // Use previously-cached element index if available
              if ( useCache ) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[ expando ] || (node[ expando ] = {});
                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[ node.uniqueID ] ||
                  (outerCache[ node.uniqueID ] = {});
                cache = uniqueCache[ type ] || [];
                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                diff = nodeIndex;
              }
              // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
              if ( diff === false ) {
                // Use the same loop as above to seek `elem` from the start
                while ( (node = ++nodeIndex && node && node[ dir ] ||
                  (diff = nodeIndex = 0) || start.pop()) ) {
                  if ( ( ofType ?
                    node.nodeName.toLowerCase() === name :
                    node.nodeType === 1 ) &&
                    ++diff ) {
                    // Cache the index of each encountered element
                    if ( useCache ) {
                      outerCache = node[ expando ] || (node[ expando ] = {});
                      // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)
                      uniqueCache = outerCache[ node.uniqueID ] ||
                        (outerCache[ node.uniqueID ] = {});
                      uniqueCache[ type ] = [ dirruns, diff ];
                    }
                    if ( node === elem ) {
                      break;
                    }
                  }
                }
              }
            }
            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || ( diff % first === 0 && diff / first >= 0 );
          }
        };
    },
    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );
      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }
      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }
      return fn;
    }
  },
  pseudos: {
    // Potentially complex pseudos
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );
      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;
          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          // Don't keep the element (issue #299)
          input[0] = null;
          return !results.pop();
        };
    }),
    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),
    "contains": markFunction(function( text ) {
      text = text.replace( runescape, funescape );
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),
    // "Whether an element is represented by a :lang() selector
    // is based solely on the element's language value
    // being equal to the identifier C,
    // or beginning with the identifier C immediately followed by "-".
    // The matching of C against the element's language value is performed case-insensitively.
    // The identifier C does not have to be a valid language name."
    // http://www.w3.org/TR/selectors/#lang-pseudo
    "lang": markFunction( function( lang ) {
      // lang value must be a valid identifier
      if ( !ridentifier.test(lang || "") ) {
        Sizzle.error( "unsupported lang: " + lang );
      }
      lang = lang.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        var elemLang;
        do {
          if ( (elemLang = documentIsHTML ?
            elem.lang :
            elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
            elemLang = elemLang.toLowerCase();
            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
          }
        } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
        return false;
      };
    }),
    // Miscellaneous
    "target": function( elem ) {
      var hash = window.location && window.location.hash;
      return hash && hash.slice( 1 ) === elem.id;
    },
    "root": function( elem ) {
      return elem === docElem;
    },
    "focus": function( elem ) {
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },
    // Boolean properties
    "enabled": createDisabledPseudo( false ),
    "disabled": createDisabledPseudo( true ),
    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },
    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }
      return elem.selected === true;
    },
    // Contents
    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
      //   but not by others (comment: 8; processing instruction: 7; etc.)
      // nodeType < 6 works because attributes (2) do not appear as children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        if ( elem.nodeType < 6 ) {
          return false;
        }
      }
      return true;
    },
    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },
    // Element/input types
    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },
    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },
    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },
    "text": function( elem ) {
      var attr;
      return elem.nodeName.toLowerCase() === "input" &&
        elem.type === "text" &&
        // Support: IE<8
        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
    },
    // Position-in-collection
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),
    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),
    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),
    "even": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 0;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),
    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 1;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),
    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),
    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};
Expr.pseudos["nth"] = Expr.pseudos["eq"];
// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
  Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
  Expr.pseudos[ i ] = createButtonPseudo( i );
}
// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();
tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ selector + " " ];
  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }
  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;
  while ( soFar ) {
    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( (tokens = []) );
    }
    matched = false;
    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      matched = match.shift();
      tokens.push({
        value: matched,
        // Cast descendant combinators to space
        type: match[0].replace( rtrim, " " )
      });
      soFar = soFar.slice( matched.length );
    }
    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {
        matched = match.shift();
        tokens.push({
          value: matched,
          type: type,
          matches: match
        });
        soFar = soFar.slice( matched.length );
      }
    }
    if ( !matched ) {
      break;
    }
  }
  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
};
function toSelector( tokens ) {
  var i = 0,
    len = tokens.length,
    selector = "";
  for ( ; i < len; i++ ) {
    selector += tokens[i].value;
  }
  return selector;
}
function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    skip = combinator.next,
    key = skip || dir,
    checkNonElements = base && key === "parentNode",
    doneName = done++;
  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( elem.nodeType === 1 || checkNonElements ) {
          return matcher( elem, context, xml );
        }
      }
      return false;
    } :
    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      var oldCache, uniqueCache, outerCache,
        newCache = [ dirruns, doneName ];
      // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
      if ( xml ) {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            if ( matcher( elem, context, xml ) ) {
              return true;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            outerCache = elem[ expando ] || (elem[ expando ] = {});
            // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)
            uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
            if ( skip && skip === elem.nodeName.toLowerCase() ) {
              elem = elem[ dir ] || elem;
            } else if ( (oldCache = uniqueCache[ key ]) &&
              oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
              // Assign to newCache so results back-propagate to previous elements
              return (newCache[ 2 ] = oldCache[ 2 ]);
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[ key ] = newCache;
              // A match means we're done; a fail means we have to keep checking
              if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };
}
function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}
function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}
function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;
  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }
  return newUnmatched;
}
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,
      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,
      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
          // ...intermediate processing is necessary
          [] :
          // ...otherwise use results directly
          results :
        matcherIn;
    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }
    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );
      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }
    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }
        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
            seed[temp] = !(results[temp] = elem);
          }
        }
      }
    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}
function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,
    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
      // Avoid hanging onto element (issue #299)
      checkContext = null;
      return ret;
    } ];
  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && toSelector(
            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
          ).replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && toSelector( tokens )
        );
      }
      matchers.push( matcher );
    }
  }
  return elementMatcher( matchers );
}
function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  var bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, outermost ) {
      var elem, j, matcher,
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        setMatched = [],
        contextBackup = outermostContext,
        // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
        // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
        len = elems.length;
      if ( outermost ) {
        outermostContext = context === document || context || outermost;
      }
      // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
      for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          j = 0;
          if ( !context && elem.ownerDocument !== document ) {
            setDocument( elem );
            xml = !documentIsHTML;
          }
          while ( (matcher = elementMatchers[j++]) ) {
            if ( matcher( elem, context || document, xml) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
          }
        }
        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }
          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }
      // `i` is now the count of elements visited above, and adding it to `matchedCount`
      // makes the latter nonnegative.
      matchedCount += i;
      // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
      // numerically zero.
      if ( bySet && i !== matchedCount ) {
        j = 0;
        while ( (matcher = setMatchers[j++]) ) {
          matcher( unmatched, setMatched, context, xml );
        }
        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }
          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }
        // Add matches to results
        push.apply( results, setMatched );
        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {
          Sizzle.uniqueSort( results );
        }
      }
      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }
      return unmatched;
    };
  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}
compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ selector + " " ];
  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !match ) {
      match = tokenize( selector );
    }
    i = match.length;
    while ( i-- ) {
      cached = matcherFromTokens( match[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }
    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
    // Save selector and tokenization
    cached.selector = selector;
  }
  return cached;
};
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
  var i, tokens, token, type, find,
    compiled = typeof selector === "function" && selector,
    match = !seed && tokenize( (selector = compiled.selector || selector) );
  results = results || [];
  // Try to minimize operations if there is only one selector in the list and no seed
  // (the latter of which guarantees us context)
  if ( match.length === 1 ) {
    // Reduce context if the leading compound selector is an ID
    tokens = match[0] = match[0].slice( 0 );
    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
        context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {
      context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
      if ( !context ) {
        return results;
      // Precompiled matchers will still verify ancestry, so step up a level
      } else if ( compiled ) {
        context = context.parentNode;
      }
      selector = selector.slice( tokens.shift().value.length );
    }
    // Fetch a seed set for right-to-left matching
    i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
    while ( i-- ) {
      token = tokens[i];
      // Abort if we hit a combinator
      if ( Expr.relative[ (type = token.type) ] ) {
        break;
      }
      if ( (find = Expr.find[ type ]) ) {
        // Search, expanding context for leading sibling combinators
        if ( (seed = find(
          token.matches[0].replace( runescape, funescape ),
          rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
        )) ) {
          // If seed is empty or no tokens remain, we can return early
          tokens.splice( i, 1 );
          selector = seed.length && toSelector( tokens );
          if ( !selector ) {
            push.apply( results, seed );
            return results;
          }
          break;
        }
      }
    }
  }
  // Compile and execute a filtering function if one is not provided
  // Provide `match` to avoid retokenization if we modified the selector above
  ( compiled || compile( selector, match ) )(
    seed,
    context,
    !documentIsHTML,
    results,
    !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
  );
  return results;
};
// One-time assignments
// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;
// Initialize against the default document
setDocument();
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
  // Should return 1, but returns 4 (following)
  return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
  el.innerHTML = "<a href='#'></a>";
  return el.firstChild.getAttribute("href") === "#" ;
}) ) {
  addHandle( "type|href|height|width", function( elem, name, isXML ) {
    if ( !isXML ) {
      return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
    }
  });
}
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
  el.innerHTML = "<input/>";
  el.firstChild.setAttribute( "value", "" );
  return el.firstChild.getAttribute( "value" ) === "";
}) ) {
  addHandle( "value", function( elem, name, isXML ) {
    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
      return elem.defaultValue;
    }
  });
}
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
  return el.getAttribute("disabled") == null;
}) ) {
  addHandle( booleans, function( elem, name, isXML ) {
    var val;
    if ( !isXML ) {
      return elem[ name ] === true ? name.toLowerCase() :
          (val = elem.getAttributeNode( name )) && val.specified ?
          val.value :
        null;
    }
  });
}
return Sizzle;
})( window );
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;
var dir = function( elem, dir, until ) {
  var matched = [],
    truncate = until !== undefined;
  while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
    if ( elem.nodeType === 1 ) {
      if ( truncate && jQuery( elem ).is( until ) ) {
        break;
      }
      matched.push( elem );
    }
  }
  return matched;
};
var siblings = function( n, elem ) {
  var matched = [];
  for ( ; n; n = n.nextSibling ) {
    if ( n.nodeType === 1 && n !== elem ) {
      matched.push( n );
    }
  }
  return matched;
};
var rneedsContext = jQuery.expr.match.needsContext;
function nodeName( elem, name ) {
  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
var risSimple = /^.[^:#\[\.,]*$/;
// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep( elements, function( elem, i ) {
      return !!qualifier.call( elem, i, elem ) !== not;
    } );
  }
  // Single element
  if ( qualifier.nodeType ) {
    return jQuery.grep( elements, function( elem ) {
      return ( elem === qualifier ) !== not;
    } );
  }
  // Arraylike of elements (jQuery, arguments, Array)
  if ( typeof qualifier !== "string" ) {
    return jQuery.grep( elements, function( elem ) {
      return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
    } );
  }
  // Simple selector that can be filtered directly, removing non-Elements
  if ( risSimple.test( qualifier ) ) {
    return jQuery.filter( qualifier, elements, not );
  }
  // Complex selector, compare the two sets, removing non-Elements
  qualifier = jQuery.filter( qualifier, elements );
  return jQuery.grep( elements, function( elem ) {
    return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
  } );
}
jQuery.filter = function( expr, elems, not ) {
  var elem = elems[ 0 ];
  if ( not ) {
    expr = ":not(" + expr + ")";
  }
  if ( elems.length === 1 && elem.nodeType === 1 ) {
    return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
  }
  return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
    return elem.nodeType === 1;
  } ) );
};
jQuery.fn.extend( {
  find: function( selector ) {
    var i, ret,
      len = this.length,
      self = this;
    if ( typeof selector !== "string" ) {
      return this.pushStack( jQuery( selector ).filter( function() {
        for ( i = 0; i < len; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      } ) );
    }
    ret = this.pushStack( [] );
    for ( i = 0; i < len; i++ ) {
      jQuery.find( selector, self[ i ], ret );
    }
    return len > 1 ? jQuery.uniqueSort( ret ) : ret;
  },
  filter: function( selector ) {
    return this.pushStack( winnow( this, selector || [], false ) );
  },
  not: function( selector ) {
    return this.pushStack( winnow( this, selector || [], true ) );
  },
  is: function( selector ) {
    return !!winnow(
      this,
      // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test( selector ) ?
        jQuery( selector ) :
        selector || [],
      false
    ).length;
  }
} );
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,
  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  init = jQuery.fn.init = function( selector, context, root ) {
    var match, elem;
    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }
    // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery;
    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector[ 0 ] === "<" &&
        selector[ selector.length - 1 ] === ">" &&
        selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];
      } else {
        match = rquickExpr.exec( selector );
      }
      // Match html or make sure no context is specified for #id
      if ( match && ( match[ 1 ] || !context ) ) {
        // HANDLE: $(html) -> $(array)
        if ( match[ 1 ] ) {
          context = context instanceof jQuery ? context[ 0 ] : context;
          // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge( this, jQuery.parseHTML(
            match[ 1 ],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ) );
          // HANDLE: $(html, props)
          if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
            for ( match in context ) {
              // Properties of context are called as methods if possible
              if ( jQuery.isFunction( this[ match ] ) ) {
                this[ match ]( context[ match ] );
              // ...and otherwise set as attributes
              } else {
                this.attr( match, context[ match ] );
              }
            }
          }
          return this;
        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[ 2 ] );
          if ( elem ) {
            // Inject the element directly into the jQuery object
            this[ 0 ] = elem;
            this.length = 1;
          }
          return this;
        }
      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || root ).find( selector );
      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }
    // HANDLE: $(DOMElement)
    } else if ( selector.nodeType ) {
      this[ 0 ] = selector;
      this.length = 1;
      return this;
    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return root.ready !== undefined ?
        root.ready( selector ) :
        // Execute immediately if ready is not present
        selector( jQuery );
    }
    return jQuery.makeArray( selector, this );
  };
// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;
// Initialize central reference
rootjQuery = jQuery( document );
var rparentsprev = /^(?:parents|prev(?:Until|All))/,
  // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
jQuery.fn.extend( {
  has: function( target ) {
    var targets = jQuery( target, this ),
      l = targets.length;
    return this.filter( function() {
      var i = 0;
      for ( ; i < l; i++ ) {
        if ( jQuery.contains( this, targets[ i ] ) ) {
          return true;
        }
      }
    } );
  },
  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      matched = [],
      targets = typeof selectors !== "string" && jQuery( selectors );
    // Positional selectors never match, since there's no _selection_ context
    if ( !rneedsContext.test( selectors ) ) {
      for ( ; i < l; i++ ) {
        for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
          // Always skip document fragments
          if ( cur.nodeType < 11 && ( targets ?
            targets.index( cur ) > -1 :
            // Don't pass non-elements to Sizzle
            cur.nodeType === 1 &&
              jQuery.find.matchesSelector( cur, selectors ) ) ) {
            matched.push( cur );
            break;
          }
        }
      }
    }
    return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
  },
  // Determine the position of an element within the set
  index: function( elem ) {
    // No argument, return index in parent
    if ( !elem ) {
      return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
    }
    // Index in selector
    if ( typeof elem === "string" ) {
      return indexOf.call( jQuery( elem ), this[ 0 ] );
    }
    // Locate the position of the desired element
    return indexOf.call( this,
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[ 0 ] : elem
    );
  },
  add: function( selector, context ) {
    return this.pushStack(
      jQuery.uniqueSort(
        jQuery.merge( this.get(), jQuery( selector, context ) )
      )
    );
  },
  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter( selector )
    );
  }
} );
function sibling( cur, dir ) {
  while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
  return cur;
}
jQuery.each( {
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return siblings( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return siblings( elem.firstChild );
  },
  contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }
        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }
        return jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var matched = jQuery.map( this, fn, until );
    if ( name.slice( -5 ) !== "Until" ) {
      selector = until;
    }
    if ( selector && typeof selector === "string" ) {
      matched = jQuery.filter( selector, matched );
    }
    if ( this.length > 1 ) {
      // Remove duplicates
      if ( !guaranteedUnique[ name ] ) {
        jQuery.uniqueSort( matched );
      }
      // Reverse order for parents* and prev-derivatives
      if ( rparentsprev.test( name ) ) {
        matched.reverse();
      }
    }
    return this.pushStack( matched );
  };
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );
// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
  var object = {};
  jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
    object[ flag ] = true;
  } );
  return object;
}
/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {
  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    createOptions( options ) :
    jQuery.extend( {}, options );
  var // Flag to know if list is currently firing
    firing,
    // Last fire value for non-forgettable lists
    memory,
    // Flag to know if list was already fired
    fired,
    // Flag to prevent firing
    locked,
    // Actual callback list
    list = [],
    // Queue of execution data for repeatable lists
    queue = [],
    // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
    // Fire callbacks
    fire = function() {
      // Enforce single-firing
      locked = locked || options.once;
      // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes
      fired = firing = true;
      for ( ; queue.length; firingIndex = -1 ) {
        memory = queue.shift();
        while ( ++firingIndex < list.length ) {
          // Run callback and check for early termination
          if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
            options.stopOnFalse ) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      }
      // Forget the data if we're done with it
      if ( !options.memory ) {
        memory = false;
      }
      firing = false;
      // Clean up if we're done firing for good
      if ( locked ) {
        // Keep an empty list if we have data for future add calls
        if ( memory ) {
          list = [];
        // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
    // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {
          // If we have memory from a past run, we should fire after adding
          if ( memory && !firing ) {
            firingIndex = list.length - 1;
            queue.push( memory );
          }
          ( function add( args ) {
            jQuery.each( args, function( _, arg ) {
              if ( jQuery.isFunction( arg ) ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
                // Inspect recursively
                add( arg );
              }
            } );
          } )( arguments );
          if ( memory && !firing ) {
            fire();
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        jQuery.each( arguments, function( _, arg ) {
          var index;
          while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
            list.splice( index, 1 );
            // Handle firing indexes
            if ( index <= firingIndex ) {
              firingIndex--;
            }
          }
        } );
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function( fn ) {
        return fn ?
          jQuery.inArray( fn, list ) > -1 :
          list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        if ( list ) {
          list = [];
        }
        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        locked = queue = [];
        if ( !memory && !firing ) {
          list = memory = "";
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        if ( !locked ) {
          args = args || [];
          args = [ context, args.slice ? args.slice() : args ];
          queue.push( args );
          if ( !firing ) {
            fire();
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };
  return self;
};
function Identity( v ) {
  return v;
}
function Thrower( ex ) {
  throw ex;
}
function adoptValue( value, resolve, reject, noValue ) {
  var method;
  try {
    // Check for promise aspect first to privilege synchronous behavior
    if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
      method.call( value ).done( resolve ).fail( reject );
    // Other thenables
    } else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
      method.call( value, resolve, reject );
    // Other non-thenables
    } else {
      // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
      // * false: [ value ].slice( 0 ) => resolve( value )
      // * true: [ value ].slice( 1 ) => resolve()
      resolve.apply( undefined, [ value ].slice( noValue ) );
    }
  // For Promises/A+, convert exceptions into rejections
  // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
  // Deferred#then to conditionally suppress rejection.
  } catch ( value ) {
    // Support: Android 4.0 only
    // Strict mode functions invoked without .call/.apply get global-object context
    reject.apply( undefined, [ value ] );
  }
}
jQuery.extend( {
  Deferred: function( func ) {
    var tuples = [
        // action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        [ "notify", "progress", jQuery.Callbacks( "memory" ),
          jQuery.Callbacks( "memory" ), 2 ],
        [ "resolve", "done", jQuery.Callbacks( "once memory" ),
          jQuery.Callbacks( "once memory" ), 0, "resolved" ],
        [ "reject", "fail", jQuery.Callbacks( "once memory" ),
          jQuery.Callbacks( "once memory" ), 1, "rejected" ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        "catch": function( fn ) {
          return promise.then( null, fn );
        },
        // Keep pipe for back-compat
        pipe: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return jQuery.Deferred( function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
              // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })
              deferred[ tuple[ 1 ] ]( function() {
                var returned = fn && fn.apply( this, arguments );
                if ( returned && jQuery.isFunction( returned.promise ) ) {
                  returned.promise()
                    .progress( newDefer.notify )
                    .done( newDefer.resolve )
                    .fail( newDefer.reject );
                } else {
                  newDefer[ tuple[ 0 ] + "With" ](
                    this,
                    fn ? [ returned ] : arguments
                  );
                }
              } );
            } );
            fns = null;
          } ).promise();
        },
        then: function( onFulfilled, onRejected, onProgress ) {
          var maxDepth = 0;
          function resolve( depth, deferred, handler, special ) {
            return function() {
              var that = this,
                args = arguments,
                mightThrow = function() {
                  var returned, then;
                  // Support: Promises/A+ section 2.3.3.3.3
                  // https://promisesaplus.com/#point-59
                  // Ignore double-resolution attempts
                  if ( depth < maxDepth ) {
                    return;
                  }
                  returned = handler.apply( that, args );
                  // Support: Promises/A+ section 2.3.1
                  // https://promisesaplus.com/#point-48
                  if ( returned === deferred.promise() ) {
                    throw new TypeError( "Thenable self-resolution" );
                  }
                  // Support: Promises/A+ sections 2.3.3.1, 3.5
                  // https://promisesaplus.com/#point-54
                  // https://promisesaplus.com/#point-75
                  // Retrieve `then` only once
                  then = returned &&
                    // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    ( typeof returned === "object" ||
                      typeof returned === "function" ) &&
                    returned.then;
                  // Handle a returned thenable
                  if ( jQuery.isFunction( then ) ) {
                    // Special processors (notify) just wait for resolution
                    if ( special ) {
                      then.call(
                        returned,
                        resolve( maxDepth, deferred, Identity, special ),
                        resolve( maxDepth, deferred, Thrower, special )
                      );
                    // Normal processors (resolve) also hook into progress
                    } else {
                      // ...and disregard older resolution values
                      maxDepth++;
                      then.call(
                        returned,
                        resolve( maxDepth, deferred, Identity, special ),
                        resolve( maxDepth, deferred, Thrower, special ),
                        resolve( maxDepth, deferred, Identity,
                          deferred.notifyWith )
                      );
                    }
                  // Handle all other returned values
                  } else {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if ( handler !== Identity ) {
                      that = undefined;
                      args = [ returned ];
                    }
                    // Process the value(s)
                    // Default process is resolve
                    ( special || deferred.resolveWith )( that, args );
                  }
                },
                // Only normal processors (resolve) catch and reject exceptions
                process = special ?
                  mightThrow :
                  function() {
                    try {
                      mightThrow();
                    } catch ( e ) {
                      if ( jQuery.Deferred.exceptionHook ) {
                        jQuery.Deferred.exceptionHook( e,
                          process.stackTrace );
                      }
                      // Support: Promises/A+ section 2.3.3.3.4.1
                      // https://promisesaplus.com/#point-61
                      // Ignore post-resolution exceptions
                      if ( depth + 1 >= maxDepth ) {
                        // Only substitute handlers pass on context
                        // and multiple values (non-spec behavior)
                        if ( handler !== Thrower ) {
                          that = undefined;
                          args = [ e ];
                        }
                        deferred.rejectWith( that, args );
                      }
                    }
                  };
              // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors
              if ( depth ) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if ( jQuery.Deferred.getStackHook ) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }
                window.setTimeout( process );
              }
            };
          }
          return jQuery.Deferred( function( newDefer ) {
            // progress_handlers.add( ... )
            tuples[ 0 ][ 3 ].add(
              resolve(
                0,
                newDefer,
                jQuery.isFunction( onProgress ) ?
                  onProgress :
                  Identity,
                newDefer.notifyWith
              )
            );
            // fulfilled_handlers.add( ... )
            tuples[ 1 ][ 3 ].add(
              resolve(
                0,
                newDefer,
                jQuery.isFunction( onFulfilled ) ?
                  onFulfilled :
                  Identity
              )
            );
            // rejected_handlers.add( ... )
            tuples[ 2 ][ 3 ].add(
              resolve(
                0,
                newDefer,
                jQuery.isFunction( onRejected ) ?
                  onRejected :
                  Thrower
              )
            );
          } ).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};
    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 5 ];
      // promise.progress = list.add
      // promise.done = list.add
      // promise.fail = list.add
      promise[ tuple[ 1 ] ] = list.add;
      // Handle state
      if ( stateString ) {
        list.add(
          function() {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            state = stateString;
          },
          // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[ 3 - i ][ 2 ].disable,
          // progress_callbacks.lock
          tuples[ 0 ][ 2 ].lock
        );
      }
      // progress_handlers.fire
      // fulfilled_handlers.fire
      // rejected_handlers.fire
      list.add( tuple[ 3 ].fire );
      // deferred.notify = function() { deferred.notifyWith(...) }
      // deferred.resolve = function() { deferred.resolveWith(...) }
      // deferred.reject = function() { deferred.rejectWith(...) }
      deferred[ tuple[ 0 ] ] = function() {
        deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
        return this;
      };
      // deferred.notifyWith = list.fireWith
      // deferred.resolveWith = list.fireWith
      // deferred.rejectWith = list.fireWith
      deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
    } );
    // Make the deferred a promise
    promise.promise( deferred );
    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }
    // All done!
    return deferred;
  },
  // Deferred helper
  when: function( singleValue ) {
    var
      // count of uncompleted subordinates
      remaining = arguments.length,
      // count of unprocessed arguments
      i = remaining,
      // subordinate fulfillment data
      resolveContexts = Array( i ),
      resolveValues = slice.call( arguments ),
      // the master Deferred
      master = jQuery.Deferred(),
      // subordinate callback factory
      updateFunc = function( i ) {
        return function( value ) {
          resolveContexts[ i ] = this;
          resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
          if ( !( --remaining ) ) {
            master.resolveWith( resolveContexts, resolveValues );
          }
        };
      };
    // Single- and empty arguments are adopted like Promise.resolve
    if ( remaining <= 1 ) {
      adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
        !remaining );
      // Use .then() to unwrap secondary thenables (cf. gh-3000)
      if ( master.state() === "pending" ||
        jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
        return master.then();
      }
    }
    // Multiple arguments are aggregated like Promise.all array elements
    while ( i-- ) {
      adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
    }
    return master.promise();
  }
} );
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
jQuery.Deferred.exceptionHook = function( error, stack ) {
  // Support: IE 8 - 9 only
  // Console exists when dev tools are open, which can happen at any time
  if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
    window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
  }
};
jQuery.readyException = function( error ) {
  window.setTimeout( function() {
    throw error;
  } );
};
// The deferred used on DOM ready
var readyList = jQuery.Deferred();
jQuery.fn.ready = function( fn ) {
  readyList
    .then( fn )
    // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch( function( error ) {
      jQuery.readyException( error );
    } );
  return this;
};
jQuery.extend( {
  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,
  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,
  // Handle when the DOM is ready
  ready: function( wait ) {
    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }
    // Remember that the DOM is ready
    jQuery.isReady = true;
    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }
    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );
  }
} );
jQuery.ready.then = readyList.then;
// The ready event handler and self cleanup method
function completed() {
  document.removeEventListener( "DOMContentLoaded", completed );
  window.removeEventListener( "load", completed );
  jQuery.ready();
}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
  ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
  // Handle it asynchronously to allow scripts the opportunity to delay ready
  window.setTimeout( jQuery.ready );
} else {
  // Use the handy event callback
  document.addEventListener( "DOMContentLoaded", completed );
  // A fallback to window.onload, that will always work
  window.addEventListener( "load", completed );
}
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
  var i = 0,
    len = elems.length,
    bulk = key == null;
  // Sets many values
  if ( jQuery.type( key ) === "object" ) {
    chainable = true;
    for ( i in key ) {
      access( elems, fn, i, key[ i ], true, emptyGet, raw );
    }
  // Sets one value
  } else if ( value !== undefined ) {
    chainable = true;
    if ( !jQuery.isFunction( value ) ) {
      raw = true;
    }
    if ( bulk ) {
      // Bulk operations run against the entire set
      if ( raw ) {
        fn.call( elems, value );
        fn = null;
      // ...except when executing function values
      } else {
        bulk = fn;
        fn = function( elem, key, value ) {
          return bulk.call( jQuery( elem ), value );
        };
      }
    }
    if ( fn ) {
      for ( ; i < len; i++ ) {
        fn(
          elems[ i ], key, raw ?
          value :
          value.call( elems[ i ], i, fn( elems[ i ], key ) )
        );
      }
    }
  }
  if ( chainable ) {
    return elems;
  }
  // Gets
  if ( bulk ) {
    return fn.call( elems );
  }
  return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {
  // Accepts only:
  //  - Node
  //    - Node.ELEMENT_NODE
  //    - Node.DOCUMENT_NODE
  //  - Object
  //    - Any
  return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};
function Data() {
  this.expando = jQuery.expando + Data.uid++;
}
Data.uid = 1;
Data.prototype = {
  cache: function( owner ) {
    // Check if the owner object already has a cache
    var value = owner[ this.expando ];
    // If not, create one
    if ( !value ) {
      value = {};
      // We can accept data for non-element nodes in modern browsers,
      // but we should not, see #8335.
      // Always return an empty object.
      if ( acceptData( owner ) ) {
        // If it is a node unlikely to be stringify-ed or looped over
        // use plain assignment
        if ( owner.nodeType ) {
          owner[ this.expando ] = value;
        // Otherwise secure it in a non-enumerable property
        // configurable must be true to allow the property to be
        // deleted when data is removed
        } else {
          Object.defineProperty( owner, this.expando, {
            value: value,
            configurable: true
          } );
        }
      }
    }
    return value;
  },
  set: function( owner, data, value ) {
    var prop,
      cache = this.cache( owner );
    // Handle: [ owner, key, value ] args
    // Always use camelCase key (gh-2257)
    if ( typeof data === "string" ) {
      cache[ jQuery.camelCase( data ) ] = value;
    // Handle: [ owner, { properties } ] args
    } else {
      // Copy the properties one-by-one to the cache object
      for ( prop in data ) {
        cache[ jQuery.camelCase( prop ) ] = data[ prop ];
      }
    }
    return cache;
  },
  get: function( owner, key ) {
    return key === undefined ?
      this.cache( owner ) :
      // Always use camelCase key (gh-2257)
      owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
  },
  access: function( owner, key, value ) {
    // In cases where either:
    //
    //   1. No key was specified
    //   2. A string key was specified, but no value provided
    //
    // Take the "read" path and allow the get method to determine
    // which value to return, respectively either:
    //
    //   1. The entire cache object
    //   2. The data stored at the key
    //
    if ( key === undefined ||
        ( ( key && typeof key === "string" ) && value === undefined ) ) {
      return this.get( owner, key );
    }
    // When the key is not a string, or both a key and value
    // are specified, set or extend (existing objects) with either:
    //
    //   1. An object of properties
    //   2. A key and value
    //
    this.set( owner, key, value );
    // Since the "set" path can have two possible entry points
    // return the expected data based on which path was taken[*]
    return value !== undefined ? value : key;
  },
  remove: function( owner, key ) {
    var i,
      cache = owner[ this.expando ];
    if ( cache === undefined ) {
      return;
    }
    if ( key !== undefined ) {
      // Support array or space separated string of keys
      if ( Array.isArray( key ) ) {
        // If key is an array of keys...
        // We always set camelCase keys, so remove that.
        key = key.map( jQuery.camelCase );
      } else {
        key = jQuery.camelCase( key );
        // If a key with the spaces exists, use it.
        // Otherwise, create an array by matching non-whitespace
        key = key in cache ?
          [ key ] :
          ( key.match( rnothtmlwhite ) || [] );
      }
      i = key.length;
      while ( i-- ) {
        delete cache[ key[ i ] ];
      }
    }
    // Remove the expando if there's no more data
    if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
      // Support: Chrome <=35 - 45
      // Webkit & Blink performance suffers when deleting properties
      // from DOM nodes, so set to undefined instead
      // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
      if ( owner.nodeType ) {
        owner[ this.expando ] = undefined;
      } else {
        delete owner[ this.expando ];
      }
    }
  },
  hasData: function( owner ) {
    var cache = owner[ this.expando ];
    return cache !== undefined && !jQuery.isEmptyObject( cache );
  }
};
var dataPriv = new Data();
var dataUser = new Data();
//  Implementation Summary
//
//  1. Enforce API surface and semantic compatibility with 1.9.x branch
//  2. Improve the module's maintainability by reducing the storage
//    paths to a single mechanism.
//  3. Use the same single mechanism to support "private" and "user" data.
//  4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//  5. Avoid exposing implementation details on user objects (eg. expando properties)
//  6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  rmultiDash = /[A-Z]/g;
function getData( data ) {
  if ( data === "true" ) {
    return true;
  }
  if ( data === "false" ) {
    return false;
  }
  if ( data === "null" ) {
    return null;
  }
  // Only convert to a number if it doesn't change the string
  if ( data === +data + "" ) {
    return +data;
  }
  if ( rbrace.test( data ) ) {
    return JSON.parse( data );
  }
  return data;
}
function dataAttr( elem, key, data ) {
  var name;
  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {
    name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
    data = elem.getAttribute( name );
    if ( typeof data === "string" ) {
      try {
        data = getData( data );
      } catch ( e ) {}
      // Make sure we set the data so it isn't changed later
      dataUser.set( elem, key, data );
    } else {
      data = undefined;
    }
  }
  return data;
}
jQuery.extend( {
  hasData: function( elem ) {
    return dataUser.hasData( elem ) || dataPriv.hasData( elem );
  },
  data: function( elem, name, data ) {
    return dataUser.access( elem, name, data );
  },
  removeData: function( elem, name ) {
    dataUser.remove( elem, name );
  },
  // TODO: Now that all calls to _data and _removeData have been replaced
  // with direct calls to dataPriv methods, these can be deprecated.
  _data: function( elem, name, data ) {
    return dataPriv.access( elem, name, data );
  },
  _removeData: function( elem, name ) {
    dataPriv.remove( elem, name );
  }
} );
jQuery.fn.extend( {
  data: function( key, value ) {
    var i, name, data,
      elem = this[ 0 ],
      attrs = elem && elem.attributes;
    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = dataUser.get( elem );
        if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
          i = attrs.length;
          while ( i-- ) {
            // Support: IE 11 only
            // The attrs elements can be null (#14894)
            if ( attrs[ i ] ) {
              name = attrs[ i ].name;
              if ( name.indexOf( "data-" ) === 0 ) {
                name = jQuery.camelCase( name.slice( 5 ) );
                dataAttr( elem, name, data[ name ] );
              }
            }
          }
          dataPriv.set( elem, "hasDataAttrs", true );
        }
      }
      return data;
    }
    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each( function() {
        dataUser.set( this, key );
      } );
    }
    return access( this, function( value ) {
      var data;
      // The calling jQuery object (element matches) is not empty
      // (and therefore has an element appears at this[ 0 ]) and the
      // `value` parameter was not undefined. An empty jQuery object
      // will result in `undefined` for elem = this[ 0 ] which will
      // throw an exception if an attempt to read a data cache is made.
      if ( elem && value === undefined ) {
        // Attempt to get data from the cache
        // The key will always be camelCased in Data
        data = dataUser.get( elem, key );
        if ( data !== undefined ) {
          return data;
        }
        // Attempt to "discover" the data in
        // HTML5 custom data-* attrs
        data = dataAttr( elem, key );
        if ( data !== undefined ) {
          return data;
        }
        // We tried really hard, but the data doesn't exist.
        return;
      }
      // Set the data...
      this.each( function() {
        // We always store the camelCased key
        dataUser.set( this, key, value );
      } );
    }, null, value, arguments.length > 1, null, true );
  },
  removeData: function( key ) {
    return this.each( function() {
      dataUser.remove( this, key );
    } );
  }
} );
jQuery.extend( {
  queue: function( elem, type, data ) {
    var queue;
    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = dataPriv.get( elem, type );
      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || Array.isArray( data ) ) {
          queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },
  dequeue: function( elem, type ) {
    type = type || "fx";
    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };
    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }
    if ( fn ) {
      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }
      // Clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }
    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },
  // Not public - generate a queueHooks object, or return the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
      empty: jQuery.Callbacks( "once memory" ).add( function() {
        dataPriv.remove( elem, [ type + "queue", key ] );
      } )
    } );
  }
} );
jQuery.fn.extend( {
  queue: function( type, data ) {
    var setter = 2;
    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }
    if ( arguments.length < setter ) {
      return jQuery.queue( this[ 0 ], type );
    }
    return data === undefined ?
      this :
      this.each( function() {
        var queue = jQuery.queue( this, type, data );
        // Ensure a hooks for this queue
        jQuery._queueHooks( this, type );
        if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      } );
  },
  dequeue: function( type ) {
    return this.each( function() {
      jQuery.dequeue( this, type );
    } );
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },
  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };
    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";
    while ( i-- ) {
      tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
var isHiddenWithinTree = function( elem, el ) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;
    // Inline style trumps all
    return elem.style.display === "none" ||
      elem.style.display === "" &&
      // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      jQuery.contains( elem.ownerDocument, elem ) &&
      jQuery.css( elem, "display" ) === "none";
  };
var swap = function( elem, options, callback, args ) {
  var ret, name,
    old = {};
  // Remember the old values, and insert the new ones
  for ( name in options ) {
    old[ name ] = elem.style[ name ];
    elem.style[ name ] = options[ name ];
  }
  ret = callback.apply( elem, args || [] );
  // Revert the old values
  for ( name in options ) {
    elem.style[ name ] = old[ name ];
  }
  return ret;
};
function adjustCSS( elem, prop, valueParts, tween ) {
  var adjusted,
    scale = 1,
    maxIterations = 20,
    currentValue = tween ?
      function() {
        return tween.cur();
      } :
      function() {
        return jQuery.css( elem, prop, "" );
      },
    initial = currentValue(),
    unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
    // Starting value computation is required for potential unit mismatches
    initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
      rcssNum.exec( jQuery.css( elem, prop ) );
  if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
    // Trust units reported by jQuery.css
    unit = unit || initialInUnit[ 3 ];
    // Make sure we update the tween properties later on
    valueParts = valueParts || [];
    // Iteratively approximate from a nonzero starting point
    initialInUnit = +initial || 1;
    do {
      // If previous iteration zeroed out, double until we get *something*.
      // Use string for doubling so we don't accidentally see scale as unchanged below
      scale = scale || ".5";
      // Adjust and apply
      initialInUnit = initialInUnit / scale;
      jQuery.style( elem, prop, initialInUnit + unit );
    // Update scale, tolerating zero or NaN from tween.cur()
    // Break the loop if scale is unchanged or perfect, or if we've just had enough.
    } while (
      scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
    );
  }
  if ( valueParts ) {
    initialInUnit = +initialInUnit || +initial || 0;
    // Apply relative offset (+=/-=) if specified
    adjusted = valueParts[ 1 ] ?
      initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
      +valueParts[ 2 ];
    if ( tween ) {
      tween.unit = unit;
      tween.start = initialInUnit;
      tween.end = adjusted;
    }
  }
  return adjusted;
}
var defaultDisplayMap = {};
function getDefaultDisplay( elem ) {
  var temp,
    doc = elem.ownerDocument,
    nodeName = elem.nodeName,
    display = defaultDisplayMap[ nodeName ];
  if ( display ) {
    return display;
  }
  temp = doc.body.appendChild( doc.createElement( nodeName ) );
  display = jQuery.css( temp, "display" );
  temp.parentNode.removeChild( temp );
  if ( display === "none" ) {
    display = "block";
  }
  defaultDisplayMap[ nodeName ] = display;
  return display;
}
function showHide( elements, show ) {
  var display, elem,
    values = [],
    index = 0,
    length = elements.length;
  // Determine new display value for elements that need to change
  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    display = elem.style.display;
    if ( show ) {
      // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
      // check is required in this first loop unless we have a nonempty display value (either
      // inline or about-to-be-restored)
      if ( display === "none" ) {
        values[ index ] = dataPriv.get( elem, "display" ) || null;
        if ( !values[ index ] ) {
          elem.style.display = "";
        }
      }
      if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
        values[ index ] = getDefaultDisplay( elem );
      }
    } else {
      if ( display !== "none" ) {
        values[ index ] = "none";
        // Remember what we're overwriting
        dataPriv.set( elem, "display", display );
      }
    }
  }
  // Set the display of the elements in a second loop to avoid constant reflow
  for ( index = 0; index < length; index++ ) {
    if ( values[ index ] != null ) {
      elements[ index ].style.display = values[ index ];
    }
  }
  return elements;
}
jQuery.fn.extend( {
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state ) {
    if ( typeof state === "boolean" ) {
      return state ? this.show() : this.hide();
    }
    return this.each( function() {
      if ( isHiddenWithinTree( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    } );
  }
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );
var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
var rscriptType = ( /^$|\/(?:java|ecma)script/i );
// We have to close these tags to support XHTML (#13200)
var wrapMap = {
  // Support: IE <=9 only
  option: [ 1, "<select multiple='multiple'>", "</select>" ],
  // XHTML parsers do not magically insert elements in the
  // same way that tag soup parsers do. So we cannot shorten
  // this by omitting <tbody> or other required elements.
  thead: [ 1, "<table>", "</table>" ],
  col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
  tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  _default: [ 0, "", "" ]
};
// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
function getAll( context, tag ) {
  // Support: IE <=9 - 11 only
  // Use typeof to avoid zero-argument method invocation on host objects (#15151)
  var ret;
  if ( typeof context.getElementsByTagName !== "undefined" ) {
    ret = context.getElementsByTagName( tag || "*" );
  } else if ( typeof context.querySelectorAll !== "undefined" ) {
    ret = context.querySelectorAll( tag || "*" );
  } else {
    ret = [];
  }
  if ( tag === undefined || tag && nodeName( context, tag ) ) {
    return jQuery.merge( [ context ], ret );
  }
  return ret;
}
// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
  var i = 0,
    l = elems.length;
  for ( ; i < l; i++ ) {
    dataPriv.set(
      elems[ i ],
      "globalEval",
      !refElements || dataPriv.get( refElements[ i ], "globalEval" )
    );
  }
}
var rhtml = /<|&#?\w+;/;
function buildFragment( elems, context, scripts, selection, ignored ) {
  var elem, tmp, tag, wrap, contains, j,
    fragment = context.createDocumentFragment(),
    nodes = [],
    i = 0,
    l = elems.length;
  for ( ; i < l; i++ ) {
    elem = elems[ i ];
    if ( elem || elem === 0 ) {
      // Add nodes directly
      if ( jQuery.type( elem ) === "object" ) {
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
      // Convert non-html into a text node
      } else if ( !rhtml.test( elem ) ) {
        nodes.push( context.createTextNode( elem ) );
      // Convert html into DOM nodes
      } else {
        tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
        // Deserialize a standard representation
        tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
        wrap = wrapMap[ tag ] || wrapMap._default;
        tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
        // Descend through wrappers to the right content
        j = wrap[ 0 ];
        while ( j-- ) {
          tmp = tmp.lastChild;
        }
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        jQuery.merge( nodes, tmp.childNodes );
        // Remember the top-level container
        tmp = fragment.firstChild;
        // Ensure the created nodes are orphaned (#12392)
        tmp.textContent = "";
      }
    }
  }
  // Remove wrapper from fragment
  fragment.textContent = "";
  i = 0;
  while ( ( elem = nodes[ i++ ] ) ) {
    // Skip elements already in the context collection (trac-4087)
    if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
      if ( ignored ) {
        ignored.push( elem );
      }
      continue;
    }
    contains = jQuery.contains( elem.ownerDocument, elem );
    // Append to fragment
    tmp = getAll( fragment.appendChild( elem ), "script" );
    // Preserve script evaluation history
    if ( contains ) {
      setGlobalEval( tmp );
    }
    // Capture executables
    if ( scripts ) {
      j = 0;
      while ( ( elem = tmp[ j++ ] ) ) {
        if ( rscriptType.test( elem.type || "" ) ) {
          scripts.push( elem );
        }
      }
    }
  }
  return fragment;
}
( function() {
  var fragment = document.createDocumentFragment(),
    div = fragment.appendChild( document.createElement( "div" ) ),
    input = document.createElement( "input" );
  // Support: Android 4.0 - 4.3 only
  // Check state lost if the name is set (#11217)
  // Support: Windows Web Apps (WWA)
  // `name` and `type` must use .setAttribute for WWA (#14901)
  input.setAttribute( "type", "radio" );
  input.setAttribute( "checked", "checked" );
  input.setAttribute( "name", "t" );
  div.appendChild( input );
  // Support: Android <=4.1 only
  // Older WebKit doesn't clone checked state correctly in fragments
  support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
  // Support: IE <=11 only
  // Make sure textarea (and checkbox) defaultValue is properly cloned
  div.innerHTML = "<textarea>x</textarea>";
  support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;
var
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
function returnTrue() {
  return true;
}
function returnFalse() {
  return false;
}
// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
  try {
    return document.activeElement;
  } catch ( err ) { }
}
function on( elem, types, selector, data, fn, one ) {
  var origFn, type;
  // Types can be a map of types/handlers
  if ( typeof types === "object" ) {
    // ( types-Object, selector, data )
    if ( typeof selector !== "string" ) {
      // ( types-Object, data )
      data = data || selector;
      selector = undefined;
    }
    for ( type in types ) {
      on( elem, type, selector, data, types[ type ], one );
    }
    return elem;
  }
  if ( data == null && fn == null ) {
    // ( types, fn )
    fn = selector;
    data = selector = undefined;
  } else if ( fn == null ) {
    if ( typeof selector === "string" ) {
      // ( types, selector, fn )
      fn = data;
      data = undefined;
    } else {
      // ( types, data, fn )
      fn = data;
      data = selector;
      selector = undefined;
    }
  }
  if ( fn === false ) {
    fn = returnFalse;
  } else if ( !fn ) {
    return elem;
  }
  if ( one === 1 ) {
    origFn = fn;
    fn = function( event ) {
      // Can use an empty set, since event contains the info
      jQuery().off( event );
      return origFn.apply( this, arguments );
    };
    // Use same guid so caller can remove using origFn
    fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
  }
  return elem.each( function() {
    jQuery.event.add( this, types, fn, data, selector );
  } );
}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {
  global: {},
  add: function( elem, types, handler, data, selector ) {
    var handleObjIn, eventHandle, tmp,
      events, t, handleObj,
      special, handlers, type, namespaces, origType,
      elemData = dataPriv.get( elem );
    // Don't attach events to noData or text/comment nodes (but allow plain objects)
    if ( !elemData ) {
      return;
    }
    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }
    // Ensure that invalid selectors throw exceptions at attach time
    // Evaluate against documentElement in case elem is a non-element node (e.g., document)
    if ( selector ) {
      jQuery.find.matchesSelector( documentElement, selector );
    }
    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }
    // Init the element's event structure and main handler, if this is the first
    if ( !( events = elemData.events ) ) {
      events = elemData.events = {};
    }
    if ( !( eventHandle = elemData.handle ) ) {
      eventHandle = elemData.handle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
          jQuery.event.dispatch.apply( elem, arguments ) : undefined;
      };
    }
    // Handle multiple events separated by a space
    types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[ t ] ) || [];
      type = origType = tmp[ 1 ];
      namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
      // There *must* be a type, no attaching namespace-only handlers
      if ( !type ) {
        continue;
      }
      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};
      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;
      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};
      // handleObj is passed to all event handlers
      handleObj = jQuery.extend( {
        type: type,
        origType: origType,
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join( "." )
      }, handleObjIn );
      // Init the event handler queue if we're the first
      if ( !( handlers = events[ type ] ) ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;
        // Only use addEventListener if the special events handler returns false
        if ( !special.setup ||
          special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle );
          }
        }
      }
      if ( special.add ) {
        special.add.call( elem, handleObj );
        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }
      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }
      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }
  },
  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {
    var j, origCount, tmp,
      events, t, handleObj,
      special, handlers, type, namespaces, origType,
      elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
    if ( !elemData || !( events = elemData.events ) ) {
      return;
    }
    // Once for each type.namespace in types; type may be omitted
    types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[ t ] ) || [];
      type = origType = tmp[ 1 ];
      namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }
      special = jQuery.event.special[ type ] || {};
      type = ( selector ? special.delegateType : special.bindType ) || type;
      handlers = events[ type ] || [];
      tmp = tmp[ 2 ] &&
        new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
      // Remove matching events
      origCount = j = handlers.length;
      while ( j-- ) {
        handleObj = handlers[ j ];
        if ( ( mappedTypes || origType === handleObj.origType ) &&
          ( !handler || handler.guid === handleObj.guid ) &&
          ( !tmp || tmp.test( handleObj.namespace ) ) &&
          ( !selector || selector === handleObj.selector ||
            selector === "**" && handleObj.selector ) ) {
          handlers.splice( j, 1 );
          if ( handleObj.selector ) {
            handlers.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }
      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( origCount && !handlers.length ) {
        if ( !special.teardown ||
          special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
          jQuery.removeEvent( elem, type, elemData.handle );
        }
        delete events[ type ];
      }
    }
    // Remove data and the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      dataPriv.remove( elem, "handle events" );
    }
  },
  dispatch: function( nativeEvent ) {
    // Make a writable jQuery.Event from the native event object
    var event = jQuery.event.fix( nativeEvent );
    var i, j, ret, matched, handleObj, handlerQueue,
      args = new Array( arguments.length ),
      handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
      special = jQuery.event.special[ event.type ] || {};
    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[ 0 ] = event;
    for ( i = 1; i < arguments.length; i++ ) {
      args[ i ] = arguments[ i ];
    }
    event.delegateTarget = this;
    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }
    // Determine handlers
    handlerQueue = jQuery.event.handlers.call( this, event, handlers );
    // Run delegates first; they may want to stop propagation beneath us
    i = 0;
    while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
      event.currentTarget = matched.elem;
      j = 0;
      while ( ( handleObj = matched.handlers[ j++ ] ) &&
        !event.isImmediatePropagationStopped() ) {
        // Triggered event must either 1) have no namespace, or 2) have namespace(s)
        // a subset or equal to those in the bound event (both can have no namespace).
        if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
          event.handleObj = handleObj;
          event.data = handleObj.data;
          ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
            handleObj.handler ).apply( matched.elem, args );
          if ( ret !== undefined ) {
            if ( ( event.result = ret ) === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }
    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }
    return event.result;
  },
  handlers: function( event, handlers ) {
    var i, handleObj, sel, matchedHandlers, matchedSelectors,
      handlerQueue = [],
      delegateCount = handlers.delegateCount,
      cur = event.target;
    // Find delegate handlers
    if ( delegateCount &&
      // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType &&
      // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !( event.type === "click" && event.button >= 1 ) ) {
      for ( ; cur !== this; cur = cur.parentNode || this ) {
        // Don't check non-elements (#13208)
        // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
          matchedHandlers = [];
          matchedSelectors = {};
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];
            // Don't conflict with Object.prototype properties (#13203)
            sel = handleObj.selector + " ";
            if ( matchedSelectors[ sel ] === undefined ) {
              matchedSelectors[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) > -1 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( matchedSelectors[ sel ] ) {
              matchedHandlers.push( handleObj );
            }
          }
          if ( matchedHandlers.length ) {
            handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
          }
        }
      }
    }
    // Add the remaining (directly-bound) handlers
    cur = this;
    if ( delegateCount < handlers.length ) {
      handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
    }
    return handlerQueue;
  },
  addProp: function( name, hook ) {
    Object.defineProperty( jQuery.Event.prototype, name, {
      enumerable: true,
      configurable: true,
      get: jQuery.isFunction( hook ) ?
        function() {
          if ( this.originalEvent ) {
              return hook( this.originalEvent );
          }
        } :
        function() {
          if ( this.originalEvent ) {
              return this.originalEvent[ name ];
          }
        },
      set: function( value ) {
        Object.defineProperty( this, name, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: value
        } );
      }
    } );
  },
  fix: function( originalEvent ) {
    return originalEvent[ jQuery.expando ] ?
      originalEvent :
      new jQuery.Event( originalEvent );
  },
  special: {
    load: {
      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },
    focus: {
      // Fire native event if possible so blur/focus sequence is correct
      trigger: function() {
        if ( this !== safeActiveElement() && this.focus ) {
          this.focus();
          return false;
        }
      },
      delegateType: "focusin"
    },
    blur: {
      trigger: function() {
        if ( this === safeActiveElement() && this.blur ) {
          this.blur();
          return false;
        }
      },
      delegateType: "focusout"
    },
    click: {
      // For checkbox, fire native event so checked state will be right
      trigger: function() {
        if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
          this.click();
          return false;
        }
      },
      // For cross-browser consistency, don't fire native .click() on links
      _default: function( event ) {
        return nodeName( event.target, "a" );
      }
    },
    beforeunload: {
      postDispatch: function( event ) {
        // Support: Firefox 20+
        // Firefox doesn't alert if the returnValue field is not set.
        if ( event.result !== undefined && event.originalEvent ) {
          event.originalEvent.returnValue = event.result;
        }
      }
    }
  }
};
jQuery.removeEvent = function( elem, type, handle ) {
  // This "if" is needed for plain objects
  if ( elem.removeEventListener ) {
    elem.removeEventListener( type, handle );
  }
};
jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !( this instanceof jQuery.Event ) ) {
    return new jQuery.Event( src, props );
  }
  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;
    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = src.defaultPrevented ||
        src.defaultPrevented === undefined &&
        // Support: Android <=2.3 only
        src.returnValue === false ?
      returnTrue :
      returnFalse;
    // Create target properties
    // Support: Safari <=6 - 7 only
    // Target should not be a text node (#504, #13143)
    this.target = ( src.target && src.target.nodeType === 3 ) ?
      src.target.parentNode :
      src.target;
    this.currentTarget = src.currentTarget;
    this.relatedTarget = src.relatedTarget;
  // Event type
  } else {
    this.type = src;
  }
  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }
  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();
  // Mark it as fixed
  this[ jQuery.expando ] = true;
};
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  constructor: jQuery.Event,
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,
  isSimulated: false,
  preventDefault: function() {
    var e = this.originalEvent;
    this.isDefaultPrevented = returnTrue;
    if ( e && !this.isSimulated ) {
      e.preventDefault();
    }
  },
  stopPropagation: function() {
    var e = this.originalEvent;
    this.isPropagationStopped = returnTrue;
    if ( e && !this.isSimulated ) {
      e.stopPropagation();
    }
  },
  stopImmediatePropagation: function() {
    var e = this.originalEvent;
    this.isImmediatePropagationStopped = returnTrue;
    if ( e && !this.isSimulated ) {
      e.stopImmediatePropagation();
    }
    this.stopPropagation();
  }
};
// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
  altKey: true,
  bubbles: true,
  cancelable: true,
  changedTouches: true,
  ctrlKey: true,
  detail: true,
  eventPhase: true,
  metaKey: true,
  pageX: true,
  pageY: true,
  shiftKey: true,
  view: true,
  "char": true,
  charCode: true,
  key: true,
  keyCode: true,
  button: true,
  buttons: true,
  clientX: true,
  clientY: true,
  offsetX: true,
  offsetY: true,
  pointerId: true,
  pointerType: true,
  screenX: true,
  screenY: true,
  targetTouches: true,
  toElement: true,
  touches: true,
  which: function( event ) {
    var button = event.button;
    // Add which for key events
    if ( event.which == null && rkeyEvent.test( event.type ) ) {
      return event.charCode != null ? event.charCode : event.keyCode;
    }
    // Add which for click: 1 === left; 2 === middle; 3 === right
    if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
      if ( button & 1 ) {
        return 1;
      }
      if ( button & 2 ) {
        return 3;
      }
      if ( button & 4 ) {
        return 2;
      }
      return 0;
    }
    return event.which;
  }
}, jQuery.event.addProp );
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,
    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj;
      // For mouseenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
} );
jQuery.fn.extend( {
  on: function( types, selector, data, fn ) {
    return on( this, types, selector, data, fn );
  },
  one: function( types, selector, data, fn ) {
    return on( this, types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {
      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ?
          handleObj.origType + "." + handleObj.namespace :
          handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {
      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {
      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each( function() {
      jQuery.event.remove( this, types, fn, selector );
    } );
  }
} );
var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptTypeMasked = /^true\/(.*)/,
  rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
  if ( nodeName( elem, "table" ) &&
    nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
    return jQuery( ">tbody", elem )[ 0 ] || elem;
  }
  return elem;
}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
  elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
  return elem;
}
function restoreScript( elem ) {
  var match = rscriptTypeMasked.exec( elem.type );
  if ( match ) {
    elem.type = match[ 1 ];
  } else {
    elem.removeAttribute( "type" );
  }
  return elem;
}
function cloneCopyEvent( src, dest ) {
  var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
  if ( dest.nodeType !== 1 ) {
    return;
  }
  // 1. Copy private data: events, handlers, etc.
  if ( dataPriv.hasData( src ) ) {
    pdataOld = dataPriv.access( src );
    pdataCur = dataPriv.set( dest, pdataOld );
    events = pdataOld.events;
    if ( events ) {
      delete pdataCur.handle;
      pdataCur.events = {};
      for ( type in events ) {
        for ( i = 0, l = events[ type ].length; i < l; i++ ) {
          jQuery.event.add( dest, type, events[ type ][ i ] );
        }
      }
    }
  }
  // 2. Copy user data
  if ( dataUser.hasData( src ) ) {
    udataOld = dataUser.access( src );
    udataCur = jQuery.extend( {}, udataOld );
    dataUser.set( dest, udataCur );
  }
}
// Fix IE bugs, see support tests
function fixInput( src, dest ) {
  var nodeName = dest.nodeName.toLowerCase();
  // Fails to persist the checked state of a cloned checkbox or radio button.
  if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    dest.checked = src.checked;
  // Fails to return the selected option to the default selected state when cloning options
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;
  }
}
function domManip( collection, args, callback, ignored ) {
  // Flatten any nested arrays
  args = concat.apply( [], args );
  var fragment, first, scripts, hasScripts, node, doc,
    i = 0,
    l = collection.length,
    iNoClone = l - 1,
    value = args[ 0 ],
    isFunction = jQuery.isFunction( value );
  // We can't cloneNode fragments that contain checked, in WebKit
  if ( isFunction ||
      ( l > 1 && typeof value === "string" &&
        !support.checkClone && rchecked.test( value ) ) ) {
    return collection.each( function( index ) {
      var self = collection.eq( index );
      if ( isFunction ) {
        args[ 0 ] = value.call( this, index, self.html() );
      }
      domManip( self, args, callback, ignored );
    } );
  }
  if ( l ) {
    fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
    first = fragment.firstChild;
    if ( fragment.childNodes.length === 1 ) {
      fragment = first;
    }
    // Require either new content or an interest in ignored elements to invoke the callback
    if ( first || ignored ) {
      scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
      hasScripts = scripts.length;
      // Use the original fragment for the last item
      // instead of the first because it can end up
      // being emptied incorrectly in certain situations (#8070).
      for ( ; i < l; i++ ) {
        node = fragment;
        if ( i !== iNoClone ) {
          node = jQuery.clone( node, true, true );
          // Keep references to cloned scripts for later restoration
          if ( hasScripts ) {
            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            jQuery.merge( scripts, getAll( node, "script" ) );
          }
        }
        callback.call( collection[ i ], node, i );
      }
      if ( hasScripts ) {
        doc = scripts[ scripts.length - 1 ].ownerDocument;
        // Reenable scripts
        jQuery.map( scripts, restoreScript );
        // Evaluate executable scripts on first document insertion
        for ( i = 0; i < hasScripts; i++ ) {
          node = scripts[ i ];
          if ( rscriptType.test( node.type || "" ) &&
            !dataPriv.access( node, "globalEval" ) &&
            jQuery.contains( doc, node ) ) {
            if ( node.src ) {
              // Optional AJAX dependency, but won't run scripts if not present
              if ( jQuery._evalUrl ) {
                jQuery._evalUrl( node.src );
              }
            } else {
              DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
            }
          }
        }
      }
    }
  }
  return collection;
}
function remove( elem, selector, keepData ) {
  var node,
    nodes = selector ? jQuery.filter( selector, elem ) : elem,
    i = 0;
  for ( ; ( node = nodes[ i ] ) != null; i++ ) {
    if ( !keepData && node.nodeType === 1 ) {
      jQuery.cleanData( getAll( node ) );
    }
    if ( node.parentNode ) {
      if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
        setGlobalEval( getAll( node, "script" ) );
      }
      node.parentNode.removeChild( node );
    }
  }
  return elem;
}
jQuery.extend( {
  htmlPrefilter: function( html ) {
    return html.replace( rxhtmlTag, "<$1></$2>" );
  },
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var i, l, srcElements, destElements,
      clone = elem.cloneNode( true ),
      inPage = jQuery.contains( elem.ownerDocument, elem );
    // Fix IE cloning issues
    if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
        !jQuery.isXMLDoc( elem ) ) {
      // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
      destElements = getAll( clone );
      srcElements = getAll( elem );
      for ( i = 0, l = srcElements.length; i < l; i++ ) {
        fixInput( srcElements[ i ], destElements[ i ] );
      }
    }
    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      if ( deepDataAndEvents ) {
        srcElements = srcElements || getAll( elem );
        destElements = destElements || getAll( clone );
        for ( i = 0, l = srcElements.length; i < l; i++ ) {
          cloneCopyEvent( srcElements[ i ], destElements[ i ] );
        }
      } else {
        cloneCopyEvent( elem, clone );
      }
    }
    // Preserve script evaluation history
    destElements = getAll( clone, "script" );
    if ( destElements.length > 0 ) {
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    }
    // Return the cloned set
    return clone;
  },
  cleanData: function( elems ) {
    var data, elem, type,
      special = jQuery.event.special,
      i = 0;
    for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
      if ( acceptData( elem ) ) {
        if ( ( data = elem[ dataPriv.expando ] ) ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );
              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }
          // Support: Chrome <=35 - 45+
          // Assign undefined instead of using delete, see Data#remove
          elem[ dataPriv.expando ] = undefined;
        }
        if ( elem[ dataUser.expando ] ) {
          // Support: Chrome <=35 - 45+
          // Assign undefined instead of using delete, see Data#remove
          elem[ dataUser.expando ] = undefined;
        }
      }
    }
  }
} );
jQuery.fn.extend( {
  detach: function( selector ) {
    return remove( this, selector, true );
  },
  remove: function( selector ) {
    return remove( this, selector );
  },
  text: function( value ) {
    return access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().each( function() {
          if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
            this.textContent = value;
          }
        } );
    }, null, value, arguments.length );
  },
  append: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        var target = manipulationTarget( this, elem );
        target.appendChild( elem );
      }
    } );
  },
  prepend: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        var target = manipulationTarget( this, elem );
        target.insertBefore( elem, target.firstChild );
      }
    } );
  },
  before: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this );
      }
    } );
  },
  after: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
    } );
  },
  empty: function() {
    var elem,
      i = 0;
    for ( ; ( elem = this[ i ] ) != null; i++ ) {
      if ( elem.nodeType === 1 ) {
        // Prevent memory leaks
        jQuery.cleanData( getAll( elem, false ) );
        // Remove any remaining nodes
        elem.textContent = "";
      }
    }
    return this;
  },
  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
    return this.map( function() {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    } );
  },
  html: function( value ) {
    return access( this, function( value ) {
      var elem = this[ 0 ] || {},
        i = 0,
        l = this.length;
      if ( value === undefined && elem.nodeType === 1 ) {
        return elem.innerHTML;
      }
      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
        value = jQuery.htmlPrefilter( value );
        try {
          for ( ; i < l; i++ ) {
            elem = this[ i ] || {};
            // Remove element nodes and prevent memory leaks
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( getAll( elem, false ) );
              elem.innerHTML = value;
            }
          }
          elem = 0;
        // If using innerHTML throws an exception, use the fallback method
        } catch ( e ) {}
      }
      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },
  replaceWith: function() {
    var ignored = [];
    // Make the changes, replacing each non-ignored context element with the new content
    return domManip( this, arguments, function( elem ) {
      var parent = this.parentNode;
      if ( jQuery.inArray( this, ignored ) < 0 ) {
        jQuery.cleanData( getAll( this ) );
        if ( parent ) {
          parent.replaceChild( elem, this );
        }
      }
    // Force callback invocation
    }, ignored );
  }
} );
jQuery.each( {
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      ret = [],
      insert = jQuery( selector ),
      last = insert.length - 1,
      i = 0;
    for ( ; i <= last; i++ ) {
      elems = i === last ? this : this.clone( true );
      jQuery( insert[ i ] )[ original ]( elems );
      // Support: Android <=4.0 only, PhantomJS 1 only
      // .get() because push.apply(_, arraylike) throws on ancient WebKit
      push.apply( ret, elems.get() );
    }
    return this.pushStack( ret );
  };
} );
var rmargin = ( /^margin/ );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
var getStyles = function( elem ) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;
    if ( !view || !view.opener ) {
      view = window;
    }
    return view.getComputedStyle( elem );
  };
( function() {
  // Executing both pixelPosition & boxSizingReliable tests require only one layout
  // so they're executed at the same time to save the second computation.
  function computeStyleTests() {
    // This is a singleton, we need to execute it only once
    if ( !div ) {
      return;
    }
    div.style.cssText =
      "box-sizing:border-box;" +
      "position:relative;display:block;" +
      "margin:auto;border:1px;padding:1px;" +
      "top:1%;width:50%";
    div.innerHTML = "";
    documentElement.appendChild( container );
    var divStyle = window.getComputedStyle( div );
    pixelPositionVal = divStyle.top !== "1%";
    // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
    reliableMarginLeftVal = divStyle.marginLeft === "2px";
    boxSizingReliableVal = divStyle.width === "4px";
    // Support: Android 4.0 - 4.3 only
    // Some styles come back with percentage values, even though they shouldn't
    div.style.marginRight = "50%";
    pixelMarginRightVal = divStyle.marginRight === "4px";
    documentElement.removeChild( container );
    // Nullify the div so it wouldn't be stored in the memory and
    // it will also be a sign that checks already performed
    div = null;
  }
  var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
    container = document.createElement( "div" ),
    div = document.createElement( "div" );
  // Finish early in limited (non-browser) environments
  if ( !div.style ) {
    return;
  }
  // Support: IE <=9 - 11 only
  // Style of cloned element affects source element cloned (#8908)
  div.style.backgroundClip = "content-box";
  div.cloneNode( true ).style.backgroundClip = "";
  support.clearCloneStyle = div.style.backgroundClip === "content-box";
  container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
    "padding:0;margin-top:1px;position:absolute";
  container.appendChild( div );
  jQuery.extend( support, {
    pixelPosition: function() {
      computeStyleTests();
      return pixelPositionVal;
    },
    boxSizingReliable: function() {
      computeStyleTests();
      return boxSizingReliableVal;
    },
    pixelMarginRight: function() {
      computeStyleTests();
      return pixelMarginRightVal;
    },
    reliableMarginLeft: function() {
      computeStyleTests();
      return reliableMarginLeftVal;
    }
  } );
} )();
function curCSS( elem, name, computed ) {
  var width, minWidth, maxWidth, ret,
    // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
  computed = computed || getStyles( elem );
  // getPropertyValue is needed for:
  //   .css('filter') (IE 9 only, #12537)
  //   .css('--customProperty) (#3144)
  if ( computed ) {
    ret = computed.getPropertyValue( name ) || computed[ name ];
    if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
      ret = jQuery.style( elem, name );
    }
    // A tribute to the "awesome hack by Dean Edwards"
    // Android Browser returns percentage for some values,
    // but width seems to be reliably pixels.
    // This is against the CSSOM draft spec:
    // https://drafts.csswg.org/cssom/#resolved-values
    if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth;
      // Put in the new values to get a computed value out
      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width;
      // Revert the changed values
      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  }
  return ret !== undefined ?
    // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" :
    ret;
}
function addGetHookIf( conditionFn, hookFn ) {
  // Define the hook, we'll check on the first run if it's really needed.
  return {
    get: function() {
      if ( conditionFn() ) {
        // Hook not needed (or it's not possible to use it due
        // to missing dependency), remove it.
        delete this.get;
        return;
      }
      // Hook needed; redefine it so that the support test is not executed again.
      return ( this.get = hookFn ).apply( this, arguments );
    }
  };
}
var
  // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  rcustomProp = /^--/,
  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },
  cssPrefixes = [ "Webkit", "Moz", "ms" ],
  emptyStyle = document.createElement( "div" ).style;
// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {
  // Shortcut for names that are not vendor prefixed
  if ( name in emptyStyle ) {
    return name;
  }
  // Check for vendor prefixed names
  var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
    i = cssPrefixes.length;
  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in emptyStyle ) {
      return name;
    }
  }
}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
  var ret = jQuery.cssProps[ name ];
  if ( !ret ) {
    ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
  }
  return ret;
}
function setPositiveNumber( elem, value, subtract ) {
  // Any relative (+/-) values have already been
  // normalized at this point
  var matches = rcssNum.exec( value );
  return matches ?
    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
    value;
}
function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
  var i,
    val = 0;
  // If we already have the right measurement, avoid augmentation
  if ( extra === ( isBorderBox ? "border" : "content" ) ) {
    i = 4;
  // Otherwise initialize for horizontal or vertical properties
  } else {
    i = name === "width" ? 1 : 0;
  }
  for ( ; i < 4; i += 2 ) {
    // Both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
    }
    if ( isBorderBox ) {
      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      }
      // At this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    } else {
      // At this point, extra isn't content, so add padding
      val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      // At this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    }
  }
  return val;
}
function getWidthOrHeight( elem, name, extra ) {
  // Start with computed style
  var valueIsBorderBox,
    styles = getStyles( elem ),
    val = curCSS( elem, name, styles ),
    isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
  // Computed unit is not pixels. Stop here and return.
  if ( rnumnonpx.test( val ) ) {
    return val;
  }
  // Check for style in case a browser which returns unreliable values
  // for getComputedStyle silently falls back to the reliable elem.style
  valueIsBorderBox = isBorderBox &&
    ( support.boxSizingReliable() || val === elem.style[ name ] );
  // Fall back to offsetWidth/Height when value is "auto"
  // This happens for inline elements with no explicit setting (gh-3571)
  if ( val === "auto" ) {
    val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
  }
  // Normalize "", auto, and prepare for extra
  val = parseFloat( val ) || 0;
  // Use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox,
      styles
    )
  ) + "px";
}
jQuery.extend( {
  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {
          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;
        }
      }
    }
  },
  // Don't automatically add "px" to these possibly-unitless properties
  cssNumber: {
    "animationIterationCount": true,
    "columnCount": true,
    "fillOpacity": true,
    "flexGrow": true,
    "flexShrink": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "order": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },
  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    "float": "cssFloat"
  },
  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {
    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }
    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      isCustomProp = rcustomProp.test( name ),
      style = elem.style;
    // Make sure that we're working with the right name. We don't
    // want to query the value if it is a CSS custom property
    // since they are user-defined.
    if ( !isCustomProp ) {
      name = finalPropName( origName );
    }
    // Gets hook for the prefixed version, then unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;
      // Convert "+=" or "-=" to relative numbers (#7345)
      if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
        value = adjustCSS( elem, name, ret );
        // Fixes bug #9237
        type = "number";
      }
      // Make sure that null and NaN values aren't set (#7116)
      if ( value == null || value !== value ) {
        return;
      }
      // If a number was passed in, add the unit (except for certain CSS properties)
      if ( type === "number" ) {
        value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
      }
      // background-* props affect original clone's values
      if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
        style[ name ] = "inherit";
      }
      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !( "set" in hooks ) ||
        ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
        if ( isCustomProp ) {
          style.setProperty( name, value );
        } else {
          style[ name ] = value;
        }
      }
    } else {
      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks &&
        ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
        return ret;
      }
      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },
  css: function( elem, name, extra, styles ) {
    var val, num, hooks,
      origName = jQuery.camelCase( name ),
      isCustomProp = rcustomProp.test( name );
    // Make sure that we're working with the right name. We don't
    // want to modify the value if it is a CSS custom property
    // since they are user-defined.
    if ( !isCustomProp ) {
      name = finalPropName( origName );
    }
    // Try prefixed name followed by the unprefixed name
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }
    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name, styles );
    }
    // Convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }
    // Make numeric if forced or a qualifier was provided and val looks numeric
    if ( extra === "" || extra ) {
      num = parseFloat( val );
      return extra === true || isFinite( num ) ? num || 0 : val;
    }
    return val;
  }
} );
jQuery.each( [ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {
        // Certain elements can have dimension info if we invisibly show them
        // but it must have a current display style that would benefit
        return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
          // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          ( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
            swap( elem, cssShow, function() {
              return getWidthOrHeight( elem, name, extra );
            } ) :
            getWidthOrHeight( elem, name, extra );
      }
    },
    set: function( elem, value, extra ) {
      var matches,
        styles = extra && getStyles( elem ),
        subtract = extra && augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          styles
        );
      // Convert to pixels if value adjustment is needed
      if ( subtract && ( matches = rcssNum.exec( value ) ) &&
        ( matches[ 3 ] || "px" ) !== "px" ) {
        elem.style[ name ] = value;
        value = jQuery.css( elem, name );
      }
      return setPositiveNumber( elem, value, subtract );
    }
  };
} );
jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
  function( elem, computed ) {
    if ( computed ) {
      return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
        elem.getBoundingClientRect().left -
          swap( elem, { marginLeft: 0 }, function() {
            return elem.getBoundingClientRect().left;
          } )
        ) + "px";
    }
  }
);
// These hooks are used by animate to expand properties
jQuery.each( {
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i = 0,
        expanded = {},
        // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split( " " ) : [ value ];
      for ( ; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }
      return expanded;
    }
  };
  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
} );
jQuery.fn.extend( {
  css: function( name, value ) {
    return access( this, function( elem, name, value ) {
      var styles, len,
        map = {},
        i = 0;
      if ( Array.isArray( name ) ) {
        styles = getStyles( elem );
        len = name.length;
        for ( ; i < len; i++ ) {
          map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
        }
        return map;
      }
      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  }
} );
function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;
Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || jQuery.easing._default;
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];
    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];
    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;
    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }
    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};
Tween.prototype.init.prototype = Tween.prototype;
Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;
      // Use a property on the element directly when it is not a DOM element,
      // or when there is no matching style property that exists.
      if ( tween.elem.nodeType !== 1 ||
        tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
        return tween.elem[ tween.prop ];
      }
      // Passing an empty string as a 3rd parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails.
      // Simple values such as "10px" are parsed to Float;
      // complex values such as "rotate(1rad)" are returned as-is.
      result = jQuery.css( tween.elem, tween.prop, "" );
      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {
      // Use step hook for back compat.
      // Use cssHook if its there.
      // Use .style if available and use plain properties where available.
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.nodeType === 1 &&
        ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
          jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};
jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p * Math.PI ) / 2;
  },
  _default: "swing"
};
jQuery.fx = Tween.prototype.init;
// Back compat <1.8 extension point
jQuery.fx.step = {};
var
  fxNow, inProgress,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rrun = /queueHooks$/;
function schedule() {
  if ( inProgress ) {
    if ( document.hidden === false && window.requestAnimationFrame ) {
      window.requestAnimationFrame( schedule );
    } else {
      window.setTimeout( schedule, jQuery.fx.interval );
    }
    jQuery.fx.tick();
  }
}
// Animations created synchronously will run synchronously
function createFxNow() {
  window.setTimeout( function() {
    fxNow = undefined;
  } );
  return ( fxNow = jQuery.now() );
}
// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    i = 0,
    attrs = { height: type };
  // If we include width, step value is 1 to do all cssExpand values,
  // otherwise step value is 2 to skip over Left and Right
  includeWidth = includeWidth ? 1 : 0;
  for ( ; i < 4; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }
  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }
  return attrs;
}
function createTween( value, prop, animation ) {
  var tween,
    collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
    index = 0,
    length = collection.length;
  for ( ; index < length; index++ ) {
    if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
      // We're done with this property
      return tween;
    }
  }
}
function defaultPrefilter( elem, props, opts ) {
  var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
    isBox = "width" in props || "height" in props,
    anim = this,
    orig = {},
    style = elem.style,
    hidden = elem.nodeType && isHiddenWithinTree( elem ),
    dataShow = dataPriv.get( elem, "fxshow" );
  // Queue-skipping animations hijack the fx hooks
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;
    anim.always( function() {
      // Ensure the complete handler is called before this completes
      anim.always( function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      } );
    } );
  }
  // Detect show/hide animations
  for ( prop in props ) {
    value = props[ prop ];
    if ( rfxtypes.test( value ) ) {
      delete props[ prop ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {
        // Pretend to be hidden if this is a "show" and
        // there is still data from a stopped show/hide
        if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
          hidden = true;
        // Ignore all other no-op show/hide data
        } else {
          continue;
        }
      }
      orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
    }
  }
  // Bail out if this is a no-op like .hide().hide()
  propTween = !jQuery.isEmptyObject( props );
  if ( !propTween && jQuery.isEmptyObject( orig ) ) {
    return;
  }
  // Restrict "overflow" and "display" styles during box animations
  if ( isBox && elem.nodeType === 1 ) {
    // Support: IE <=9 - 11, Edge 12 - 13
    // Record all 3 overflow attributes because IE does not infer the shorthand
    // from identically-valued overflowX and overflowY
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
    // Identify a display type, preferring old show/hide data over the CSS cascade
    restoreDisplay = dataShow && dataShow.display;
    if ( restoreDisplay == null ) {
      restoreDisplay = dataPriv.get( elem, "display" );
    }
    display = jQuery.css( elem, "display" );
    if ( display === "none" ) {
      if ( restoreDisplay ) {
        display = restoreDisplay;
      } else {
        // Get nonempty value(s) by temporarily forcing visibility
        showHide( [ elem ], true );
        restoreDisplay = elem.style.display || restoreDisplay;
        display = jQuery.css( elem, "display" );
        showHide( [ elem ] );
      }
    }
    // Animate inline elements as inline-block
    if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
      if ( jQuery.css( elem, "float" ) === "none" ) {
        // Restore the original display value at the end of pure show/hide animations
        if ( !propTween ) {
          anim.done( function() {
            style.display = restoreDisplay;
          } );
          if ( restoreDisplay == null ) {
            display = style.display;
            restoreDisplay = display === "none" ? "" : display;
          }
        }
        style.display = "inline-block";
      }
    }
  }
  if ( opts.overflow ) {
    style.overflow = "hidden";
    anim.always( function() {
      style.overflow = opts.overflow[ 0 ];
      style.overflowX = opts.overflow[ 1 ];
      style.overflowY = opts.overflow[ 2 ];
    } );
  }
  // Implement show/hide animations
  propTween = false;
  for ( prop in orig ) {
    // General show/hide setup for this element animation
    if ( !propTween ) {
      if ( dataShow ) {
        if ( "hidden" in dataShow ) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
      }
      // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
      if ( toggle ) {
        dataShow.hidden = !hidden;
      }
      // Show elements before animating them
      if ( hidden ) {
        showHide( [ elem ], true );
      }
      /* eslint-disable no-loop-func */
      anim.done( function() {
      /* eslint-enable no-loop-func */
        // The final step of a "hide" animation is actually hiding the element
        if ( !hidden ) {
          showHide( [ elem ] );
        }
        dataPriv.remove( elem, "fxshow" );
        for ( prop in orig ) {
          jQuery.style( elem, prop, orig[ prop ] );
        }
      } );
    }
    // Per-property setup
    propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
    if ( !( prop in dataShow ) ) {
      dataShow[ prop ] = propTween.start;
      if ( hidden ) {
        propTween.end = propTween.start;
        propTween.start = 0;
      }
    }
  }
}
function propFilter( props, specialEasing ) {
  var index, name, easing, value, hooks;
  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( Array.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }
    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }
    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];
      // Not quite $.extend, this won't overwrite existing keys.
      // Reusing 'index' because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}
function Animation( elem, properties, options ) {
  var result,
    stopped,
    index = 0,
    length = Animation.prefilters.length,
    deferred = jQuery.Deferred().always( function() {
      // Don't match elem in the :animated selector
      delete tick.elem;
    } ),
    tick = function() {
      if ( stopped ) {
        return false;
      }
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
        // Support: Android 2.3 only
        // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;
      for ( ; index < length; index++ ) {
        animation.tweens[ index ].run( percent );
      }
      deferred.notifyWith( elem, [ animation, percent, remaining ] );
      // If there's more to do, yield
      if ( percent < 1 && length ) {
        return remaining;
      }
      // If this was an empty animation, synthesize a final progress notification
      if ( !length ) {
        deferred.notifyWith( elem, [ animation, 1, 0 ] );
      }
      // Resolve the animation and report its conclusion
      deferred.resolveWith( elem, [ animation ] );
      return false;
    },
    animation = deferred.promise( {
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,
          // If we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;
        if ( stopped ) {
          return this;
        }
        stopped = true;
        for ( ; index < length; index++ ) {
          animation.tweens[ index ].run( 1 );
        }
        // Resolve when we played the last frame; otherwise, reject
        if ( gotoEnd ) {
          deferred.notifyWith( elem, [ animation, 1, 0 ] );
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    } ),
    props = animation.props;
  propFilter( props, animation.opts.specialEasing );
  for ( ; index < length; index++ ) {
    result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      if ( jQuery.isFunction( result.stop ) ) {
        jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
          jQuery.proxy( result.stop, result );
      }
      return result;
    }
  }
  jQuery.map( props, createTween, animation );
  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }
  // Attach callbacks from options
  animation
    .progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
  jQuery.fx.timer(
    jQuery.extend( tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    } )
  );
  return animation;
}
jQuery.Animation = jQuery.extend( Animation, {
  tweeners: {
    "*": [ function( prop, value ) {
      var tween = this.createTween( prop, value );
      adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
      return tween;
    } ]
  },
  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.match( rnothtmlwhite );
    }
    var prop,
      index = 0,
      length = props.length;
    for ( ; index < length; index++ ) {
      prop = props[ index ];
      Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
      Animation.tweeners[ prop ].unshift( callback );
    }
  },
  prefilters: [ defaultPrefilter ],
  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      Animation.prefilters.unshift( callback );
    } else {
      Animation.prefilters.push( callback );
    }
  }
} );
jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };
  // Go to the end state if fx are off
  if ( jQuery.fx.off ) {
    opt.duration = 0;
  } else {
    if ( typeof opt.duration !== "number" ) {
      if ( opt.duration in jQuery.fx.speeds ) {
        opt.duration = jQuery.fx.speeds[ opt.duration ];
      } else {
        opt.duration = jQuery.fx.speeds._default;
      }
    }
  }
  // Normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }
  // Queueing
  opt.old = opt.complete;
  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }
    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };
  return opt;
};
jQuery.fn.extend( {
  fadeTo: function( speed, to, easing, callback ) {
    // Show any hidden elements after setting opacity to 0
    return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
      // Animate to the value specified
      .end().animate( { opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );
        // Empty animations, or finishing resolves immediately
        if ( empty || dataPriv.get( this, "finish" ) ) {
          anim.stop( true );
        }
      };
      doAnimation.finish = doAnimation;
    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };
    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }
    return this.each( function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = dataPriv.get( this );
      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this &&
          ( type == null || timers[ index ].queue === type ) ) {
          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }
      // Start the next in the queue if the last step wasn't forced.
      // Timers currently will call their complete callbacks, which
      // will dequeue but only if they were gotoEnd.
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    } );
  },
  finish: function( type ) {
    if ( type !== false ) {
      type = type || "fx";
    }
    return this.each( function() {
      var index,
        data = dataPriv.get( this ),
        queue = data[ type + "queue" ],
        hooks = data[ type + "queueHooks" ],
        timers = jQuery.timers,
        length = queue ? queue.length : 0;
      // Enable finishing flag on private data
      data.finish = true;
      // Empty the queue first
      jQuery.queue( this, type, [] );
      if ( hooks && hooks.stop ) {
        hooks.stop.call( this, true );
      }
      // Look for any active animations, and finish them
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
          timers[ index ].anim.stop( true );
          timers.splice( index, 1 );
        }
      }
      // Look for any animations in the old queue and finish them
      for ( index = 0; index < length; index++ ) {
        if ( queue[ index ] && queue[ index ].finish ) {
          queue[ index ].finish.call( this );
        }
      }
      // Turn off finishing flag
      delete data.finish;
    } );
  }
} );
jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
} );
// Generate shortcuts for custom animations
jQuery.each( {
  slideDown: genFx( "show" ),
  slideUp: genFx( "hide" ),
  slideToggle: genFx( "toggle" ),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
} );
jQuery.timers = [];
jQuery.fx.tick = function() {
  var timer,
    i = 0,
    timers = jQuery.timers;
  fxNow = jQuery.now();
  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];
    // Run the timer and safely remove it when done (allowing for external removal)
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }
  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};
jQuery.fx.timer = function( timer ) {
  jQuery.timers.push( timer );
  jQuery.fx.start();
};
jQuery.fx.interval = 13;
jQuery.fx.start = function() {
  if ( inProgress ) {
    return;
  }
  inProgress = true;
  schedule();
};
jQuery.fx.stop = function() {
  inProgress = null;
};
jQuery.fx.speeds = {
  slow: 600,
  fast: 200,
  // Default speed
  _default: 400
};
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
  time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
  type = type || "fx";
  return this.queue( type, function( next, hooks ) {
    var timeout = window.setTimeout( next, time );
    hooks.stop = function() {
      window.clearTimeout( timeout );
    };
  } );
};
( function() {
  var input = document.createElement( "input" ),
    select = document.createElement( "select" ),
    opt = select.appendChild( document.createElement( "option" ) );
  input.type = "checkbox";
  // Support: Android <=4.3 only
  // Default value for a checkbox should be "on"
  support.checkOn = input.value !== "";
  // Support: IE <=11 only
  // Must access selectedIndex to make default options select
  support.optSelected = opt.selected;
  // Support: IE <=11 only
  // An input loses its value after becoming a radio
  input = document.createElement( "input" );
  input.value = "t";
  input.type = "radio";
  support.radioValue = input.value === "t";
} )();
var boolHook,
  attrHandle = jQuery.expr.attrHandle;
jQuery.fn.extend( {
  attr: function( name, value ) {
    return access( this, jQuery.attr, name, value, arguments.length > 1 );
  },
  removeAttr: function( name ) {
    return this.each( function() {
      jQuery.removeAttr( this, name );
    } );
  }
} );
jQuery.extend( {
  attr: function( elem, name, value ) {
    var ret, hooks,
      nType = elem.nodeType;
    // Don't get/set attributes on text, comment and attribute nodes
    if ( nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }
    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === "undefined" ) {
      return jQuery.prop( elem, name, value );
    }
    // Attribute hooks are determined by the lowercase version
    // Grab necessary hook if one is defined
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
      hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
        ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
    }
    if ( value !== undefined ) {
      if ( value === null ) {
        jQuery.removeAttr( elem, name );
        return;
      }
      if ( hooks && "set" in hooks &&
        ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
        return ret;
      }
      elem.setAttribute( name, value + "" );
      return value;
    }
    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
      return ret;
    }
    ret = jQuery.find.attr( elem, name );
    // Non-existent attributes return null, we normalize to undefined
    return ret == null ? undefined : ret;
  },
  attrHooks: {
    type: {
      set: function( elem, value ) {
        if ( !support.radioValue && value === "radio" &&
          nodeName( elem, "input" ) ) {
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    }
  },
  removeAttr: function( elem, value ) {
    var name,
      i = 0,
      // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match( rnothtmlwhite );
    if ( attrNames && elem.nodeType === 1 ) {
      while ( ( name = attrNames[ i++ ] ) ) {
        elem.removeAttribute( name );
      }
    }
  }
} );
// Hooks for boolean attributes
boolHook = {
  set: function( elem, value, name ) {
    if ( value === false ) {
      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else {
      elem.setAttribute( name, name );
    }
    return name;
  }
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
  var getter = attrHandle[ name ] || jQuery.find.attr;
  attrHandle[ name ] = function( elem, name, isXML ) {
    var ret, handle,
      lowercaseName = name.toLowerCase();
    if ( !isXML ) {
      // Avoid an infinite loop by temporarily removing this function from the getter
      handle = attrHandle[ lowercaseName ];
      attrHandle[ lowercaseName ] = ret;
      ret = getter( elem, name, isXML ) != null ?
        lowercaseName :
        null;
      attrHandle[ lowercaseName ] = handle;
    }
    return ret;
  };
} );
var rfocusable = /^(?:input|select|textarea|button)$/i,
  rclickable = /^(?:a|area)$/i;
jQuery.fn.extend( {
  prop: function( name, value ) {
    return access( this, jQuery.prop, name, value, arguments.length > 1 );
  },
  removeProp: function( name ) {
    return this.each( function() {
      delete this[ jQuery.propFix[ name ] || name ];
    } );
  }
} );
jQuery.extend( {
  prop: function( elem, name, value ) {
    var ret, hooks,
      nType = elem.nodeType;
    // Don't get/set properties on text, comment and attribute nodes
    if ( nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }
    if ( value !== undefined ) {
      if ( hooks && "set" in hooks &&
        ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
        return ret;
      }
      return ( elem[ name ] = value );
    }
    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
      return ret;
    }
    return elem[ name ];
  },
  propHooks: {
    tabIndex: {
      get: function( elem ) {
        // Support: IE <=9 - 11 only
        // elem.tabIndex doesn't always return the
        // correct value when it hasn't been explicitly set
        // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        // Use proper attribute retrieval(#12072)
        var tabindex = jQuery.find.attr( elem, "tabindex" );
        if ( tabindex ) {
          return parseInt( tabindex, 10 );
        }
        if (
          rfocusable.test( elem.nodeName ) ||
          rclickable.test( elem.nodeName ) &&
          elem.href
        ) {
          return 0;
        }
        return -1;
      }
    }
  },
  propFix: {
    "for": "htmlFor",
    "class": "className"
  }
} );
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
  jQuery.propHooks.selected = {
    get: function( elem ) {
      /* eslint no-unused-expressions: "off" */
      var parent = elem.parentNode;
      if ( parent && parent.parentNode ) {
        parent.parentNode.selectedIndex;
      }
      return null;
    },
    set: function( elem ) {
      /* eslint no-unused-expressions: "off" */
      var parent = elem.parentNode;
      if ( parent ) {
        parent.selectedIndex;
        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
    }
  };
}
jQuery.each( [
  "tabIndex",
  "readOnly",
  "maxLength",
  "cellSpacing",
  "cellPadding",
  "rowSpan",
  "colSpan",
  "useMap",
  "frameBorder",
  "contentEditable"
], function() {
  jQuery.propFix[ this.toLowerCase() ] = this;
} );
  // Strip and collapse whitespace according to HTML spec
  // https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
  function stripAndCollapse( value ) {
    var tokens = value.match( rnothtmlwhite ) || [];
    return tokens.join( " " );
  }
function getClass( elem ) {
  return elem.getAttribute && elem.getAttribute( "class" ) || "";
}
jQuery.fn.extend( {
  addClass: function( value ) {
    var classes, elem, cur, curValue, clazz, j, finalValue,
      i = 0;
    if ( jQuery.isFunction( value ) ) {
      return this.each( function( j ) {
        jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
      } );
    }
    if ( typeof value === "string" && value ) {
      classes = value.match( rnothtmlwhite ) || [];
      while ( ( elem = this[ i++ ] ) ) {
        curValue = getClass( elem );
        cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
        if ( cur ) {
          j = 0;
          while ( ( clazz = classes[ j++ ] ) ) {
            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
              cur += clazz + " ";
            }
          }
          // Only assign if different to avoid unneeded rendering.
          finalValue = stripAndCollapse( cur );
          if ( curValue !== finalValue ) {
            elem.setAttribute( "class", finalValue );
          }
        }
      }
    }
    return this;
  },
  removeClass: function( value ) {
    var classes, elem, cur, curValue, clazz, j, finalValue,
      i = 0;
    if ( jQuery.isFunction( value ) ) {
      return this.each( function( j ) {
        jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
      } );
    }
    if ( !arguments.length ) {
      return this.attr( "class", "" );
    }
    if ( typeof value === "string" && value ) {
      classes = value.match( rnothtmlwhite ) || [];
      while ( ( elem = this[ i++ ] ) ) {
        curValue = getClass( elem );
        // This expression is here for better compressibility (see addClass)
        cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );
        if ( cur ) {
          j = 0;
          while ( ( clazz = classes[ j++ ] ) ) {
            // Remove *all* instances
            while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
              cur = cur.replace( " " + clazz + " ", " " );
            }
          }
          // Only assign if different to avoid unneeded rendering.
          finalValue = stripAndCollapse( cur );
          if ( curValue !== finalValue ) {
            elem.setAttribute( "class", finalValue );
          }
        }
      }
    }
    return this;
  },
  toggleClass: function( value, stateVal ) {
    var type = typeof value;
    if ( typeof stateVal === "boolean" && type === "string" ) {
      return stateVal ? this.addClass( value ) : this.removeClass( value );
    }
    if ( jQuery.isFunction( value ) ) {
      return this.each( function( i ) {
        jQuery( this ).toggleClass(
          value.call( this, i, getClass( this ), stateVal ),
          stateVal
        );
      } );
    }
    return this.each( function() {
      var className, i, self, classNames;
      if ( type === "string" ) {
        // Toggle individual class names
        i = 0;
        self = jQuery( this );
        classNames = value.match( rnothtmlwhite ) || [];
        while ( ( className = classNames[ i++ ] ) ) {
          // Check each className given, space separated list
          if ( self.hasClass( className ) ) {
            self.removeClass( className );
          } else {
            self.addClass( className );
          }
        }
      // Toggle whole class name
      } else if ( value === undefined || type === "boolean" ) {
        className = getClass( this );
        if ( className ) {
          // Store className if set
          dataPriv.set( this, "__className__", className );
        }
        // If the element has a class name or if we're passed `false`,
        // then remove the whole classname (if there was one, the above saved it).
        // Otherwise bring back whatever was previously saved (if anything),
        // falling back to the empty string if nothing was stored.
        if ( this.setAttribute ) {
          this.setAttribute( "class",
            className || value === false ?
            "" :
            dataPriv.get( this, "__className__" ) || ""
          );
        }
      }
    } );
  },
  hasClass: function( selector ) {
    var className, elem,
      i = 0;
    className = " " + selector + " ";
    while ( ( elem = this[ i++ ] ) ) {
      if ( elem.nodeType === 1 &&
        ( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
          return true;
      }
    }
    return false;
  }
} );
var rreturn = /\r/g;
jQuery.fn.extend( {
  val: function( value ) {
    var hooks, ret, isFunction,
      elem = this[ 0 ];
    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] ||
          jQuery.valHooks[ elem.nodeName.toLowerCase() ];
        if ( hooks &&
          "get" in hooks &&
          ( ret = hooks.get( elem, "value" ) ) !== undefined
        ) {
          return ret;
        }
        ret = elem.value;
        // Handle most common string cases
        if ( typeof ret === "string" ) {
          return ret.replace( rreturn, "" );
        }
        // Handle cases where value is null/undef or number
        return ret == null ? "" : ret;
      }
      return;
    }
    isFunction = jQuery.isFunction( value );
    return this.each( function( i ) {
      var val;
      if ( this.nodeType !== 1 ) {
        return;
      }
      if ( isFunction ) {
        val = value.call( this, i, jQuery( this ).val() );
      } else {
        val = value;
      }
      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";
      } else if ( typeof val === "number" ) {
        val += "";
      } else if ( Array.isArray( val ) ) {
        val = jQuery.map( val, function( value ) {
          return value == null ? "" : value + "";
        } );
      }
      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
      // If set returns undefined, fall back to normal setting
      if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    } );
  }
} );
jQuery.extend( {
  valHooks: {
    option: {
      get: function( elem ) {
        var val = jQuery.find.attr( elem, "value" );
        return val != null ?
          val :
          // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse( jQuery.text( elem ) );
      }
    },
    select: {
      get: function( elem ) {
        var value, option, i,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one",
          values = one ? null : [],
          max = one ? index + 1 : options.length;
        if ( index < 0 ) {
          i = max;
        } else {
          i = one ? index : 0;
        }
        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];
          // Support: IE <=9 only
          // IE8-9 doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&
              // Don't return options that are disabled or in a disabled optgroup
              !option.disabled &&
              ( !option.parentNode.disabled ||
                !nodeName( option.parentNode, "optgroup" ) ) ) {
            // Get the specific value for the option
            value = jQuery( option ).val();
            // We don't need an array for one selects
            if ( one ) {
              return value;
            }
            // Multi-Selects return an array
            values.push( value );
          }
        }
        return values;
      },
      set: function( elem, value ) {
        var optionSet, option,
          options = elem.options,
          values = jQuery.makeArray( value ),
          i = options.length;
        while ( i-- ) {
          option = options[ i ];
          /* eslint-disable no-cond-assign */
          if ( option.selected =
            jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
          ) {
            optionSet = true;
          }
          /* eslint-enable no-cond-assign */
        }
        // Force browsers to behave consistently when non-matching value is set
        if ( !optionSet ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  }
} );
// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = {
    set: function( elem, value ) {
      if ( Array.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
      }
    }
  };
  if ( !support.checkOn ) {
    jQuery.valHooks[ this ].get = function( elem ) {
      return elem.getAttribute( "value" ) === null ? "on" : elem.value;
    };
  }
} );
// Return jQuery for attributes-only inclusion
var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
jQuery.extend( jQuery.event, {
  trigger: function( event, data, elem, onlyHandlers ) {
    var i, cur, tmp, bubbleType, ontype, handle, special,
      eventPath = [ elem || document ],
      type = hasOwn.call( event, "type" ) ? event.type : event,
      namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
    cur = tmp = elem = elem || document;
    // Don't do events on text and comment nodes
    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
      return;
    }
    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }
    if ( type.indexOf( "." ) > -1 ) {
      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split( "." );
      type = namespaces.shift();
      namespaces.sort();
    }
    ontype = type.indexOf( ":" ) < 0 && "on" + type;
    // Caller can pass in a jQuery.Event object, Object, or just an event type string
    event = event[ jQuery.expando ] ?
      event :
      new jQuery.Event( type, typeof event === "object" && event );
    // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
    event.isTrigger = onlyHandlers ? 2 : 3;
    event.namespace = namespaces.join( "." );
    event.rnamespace = event.namespace ?
      new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
      null;
    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }
    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data == null ?
      [ event ] :
      jQuery.makeArray( data, [ event ] );
    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }
    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
      bubbleType = special.delegateType || type;
      if ( !rfocusMorph.test( bubbleType + type ) ) {
        cur = cur.parentNode;
      }
      for ( ; cur; cur = cur.parentNode ) {
        eventPath.push( cur );
        tmp = cur;
      }
      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( tmp === ( elem.ownerDocument || document ) ) {
        eventPath.push( tmp.defaultView || tmp.parentWindow || window );
      }
    }
    // Fire handlers on the event path
    i = 0;
    while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
      event.type = i > 1 ?
        bubbleType :
        special.bindType || type;
      // jQuery handler
      handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
        dataPriv.get( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }
      // Native handler
      handle = ontype && cur[ ontype ];
      if ( handle && handle.apply && acceptData( cur ) ) {
        event.result = handle.apply( cur, data );
        if ( event.result === false ) {
          event.preventDefault();
        }
      }
    }
    event.type = type;
    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {
      if ( ( !special._default ||
        special._default.apply( eventPath.pop(), data ) === false ) &&
        acceptData( elem ) ) {
        // Call a native DOM method on the target with the same name as the event.
        // Don't do default actions on window, that's where global variables be (#6170)
        if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
          // Don't re-trigger an onFOO event when we call its FOO() method
          tmp = elem[ ontype ];
          if ( tmp ) {
            elem[ ontype ] = null;
          }
          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          elem[ type ]();
          jQuery.event.triggered = undefined;
          if ( tmp ) {
            elem[ ontype ] = tmp;
          }
        }
      }
    }
    return event.result;
  },
  // Piggyback on a donor event to simulate a different one
  // Used only for `focus(in | out)` events
  simulate: function( type, elem, event ) {
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      {
        type: type,
        isSimulated: true
      }
    );
    jQuery.event.trigger( e, null, elem );
  }
} );
jQuery.fn.extend( {
  trigger: function( type, data ) {
    return this.each( function() {
      jQuery.event.trigger( type, data, this );
    } );
  },
  triggerHandler: function( type, data ) {
    var elem = this[ 0 ];
    if ( elem ) {
      return jQuery.event.trigger( type, data, elem, true );
    }
  }
} );
jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup contextmenu" ).split( " " ),
  function( i, name ) {
  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };
} );
jQuery.fn.extend( {
  hover: function( fnOver, fnOut ) {
    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
  }
} );
support.focusin = "onfocusin" in window;
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
  jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
    // Attach a single capturing handler on the document while someone wants focusin/focusout
    var handler = function( event ) {
      jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
    };
    jQuery.event.special[ fix ] = {
      setup: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access( doc, fix );
        if ( !attaches ) {
          doc.addEventListener( orig, handler, true );
        }
        dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
      },
      teardown: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access( doc, fix ) - 1;
        if ( !attaches ) {
          doc.removeEventListener( orig, handler, true );
          dataPriv.remove( doc, fix );
        } else {
          dataPriv.access( doc, fix, attaches );
        }
      }
    };
  } );
}
var location = window.location;
var nonce = jQuery.now();
var rquery = ( /\?/ );
// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
  var xml;
  if ( !data || typeof data !== "string" ) {
    return null;
  }
  // Support: IE 9 - 11 only
  // IE throws on parseFromString with invalid input.
  try {
    xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
  } catch ( e ) {
    xml = undefined;
  }
  if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
    jQuery.error( "Invalid XML: " + data );
  }
  return xml;
};
var
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
  rsubmittable = /^(?:input|select|textarea|keygen)/i;
function buildParams( prefix, obj, traditional, add ) {
  var name;
  if ( Array.isArray( obj ) ) {
    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {
        // Treat each array item as a scalar.
        add( prefix, v );
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(
          prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
          v,
          traditional,
          add
        );
      }
    } );
  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }
  } else {
    // Serialize scalar item.
    add( prefix, obj );
  }
}
// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, valueOrFunction ) {
      // If value is a function, invoke it and use its return value
      var value = jQuery.isFunction( valueOrFunction ) ?
        valueOrFunction() :
        valueOrFunction;
      s[ s.length ] = encodeURIComponent( key ) + "=" +
        encodeURIComponent( value == null ? "" : value );
    };
  // If an array was passed in, assume that it is an array of form elements.
  if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    } );
  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }
  // Return the resulting serialization
  return s.join( "&" );
};
jQuery.fn.extend( {
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map( function() {
      // Can add propHook for "elements" to filter or add form elements
      var elements = jQuery.prop( this, "elements" );
      return elements ? jQuery.makeArray( elements ) : this;
    } )
    .filter( function() {
      var type = this.type;
      // Use .is( ":disabled" ) so that fieldset[disabled] works
      return this.name && !jQuery( this ).is( ":disabled" ) &&
        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
        ( this.checked || !rcheckableType.test( type ) );
    } )
    .map( function( i, elem ) {
      var val = jQuery( this ).val();
      if ( val == null ) {
        return null;
      }
      if ( Array.isArray( val ) ) {
        return jQuery.map( val, function( val ) {
          return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
        } );
      }
      return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    } ).get();
  }
} );
var
  r20 = /%20/g,
  rhash = /#.*$/,
  rantiCache = /([?&])_=[^&]*/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,
  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},
  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat( "*" ),
  // Anchor tag for parsing the document origin
  originAnchor = document.createElement( "a" );
  originAnchor.href = location.href;
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {
  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {
    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }
    var dataType,
      i = 0,
      dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];
    if ( jQuery.isFunction( func ) ) {
      // For each dataType in the dataTypeExpression
      while ( ( dataType = dataTypes[ i++ ] ) ) {
        // Prepend if requested
        if ( dataType[ 0 ] === "+" ) {
          dataType = dataType.slice( 1 ) || "*";
          ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
        // Otherwise append
        } else {
          ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
        }
      }
    }
  };
}
// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
  var inspected = {},
    seekingTransport = ( structure === transports );
  function inspect( dataType ) {
    var selected;
    inspected[ dataType ] = true;
    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
      var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
      if ( typeof dataTypeOrTransport === "string" &&
        !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
        options.dataTypes.unshift( dataTypeOrTransport );
        inspect( dataTypeOrTransport );
        return false;
      } else if ( seekingTransport ) {
        return !( selected = dataTypeOrTransport );
      }
    } );
    return selected;
  }
  return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var key, deep,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};
  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }
  return target;
}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
  var ct, type, finalDataType, firstDataType,
    contents = s.contents,
    dataTypes = s.dataTypes;
  // Remove auto dataType and get content-type in the process
  while ( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
    }
  }
  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }
  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {
    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }
    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }
  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
  var conv2, current, conv, tmp, prev,
    converters = {},
    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice();
  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }
  current = dataTypes.shift();
  // Convert to each sequential dataType
  while ( current ) {
    if ( s.responseFields[ current ] ) {
      jqXHR[ s.responseFields[ current ] ] = response;
    }
    // Apply the dataFilter if provided
    if ( !prev && isSuccess && s.dataFilter ) {
      response = s.dataFilter( response, s.dataType );
    }
    prev = current;
    current = dataTypes.shift();
    if ( current ) {
      // There's only work to do if current dataType is non-auto
      if ( current === "*" ) {
        current = prev;
      // Convert response if prev dataType is non-auto and differs from current
      } else if ( prev !== "*" && prev !== current ) {
        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];
        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {
            // If conv2 outputs current
            tmp = conv2.split( " " );
            if ( tmp[ 1 ] === current ) {
              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {
                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];
                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.unshift( tmp[ 1 ] );
                }
                break;
              }
            }
          }
        }
        // Apply converter (if not an equivalence)
        if ( conv !== true ) {
          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s.throws ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return {
                state: "parsererror",
                error: conv ? e : "No conversion from " + prev + " to " + current
              };
            }
          }
        }
      }
    }
  }
  return { state: "success", data: response };
}
jQuery.extend( {
  // Counter for holding the number of active queries
  active: 0,
  // Last-Modified header cache for next request
  lastModified: {},
  etag: {},
  ajaxSettings: {
    url: location.href,
    type: "GET",
    isLocal: rlocalProtocol.test( location.protocol ),
    global: true,
    processData: true,
    async: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */
    accepts: {
      "*": allTypes,
      text: "text/plain",
      html: "text/html",
      xml: "application/xml, text/xml",
      json: "application/json, text/javascript"
    },
    contents: {
      xml: /\bxml\b/,
      html: /\bhtml/,
      json: /\bjson\b/
    },
    responseFields: {
      xml: "responseXML",
      text: "responseText",
      json: "responseJSON"
    },
    // Data converters
    // Keys separate source (or catchall "*") and destination types with a single space
    converters: {
      // Convert anything to text
      "* text": String,
      // Text to html (true = no transformation)
      "text html": true,
      // Evaluate text as a json expression
      "text json": JSON.parse,
      // Parse text as xml
      "text xml": jQuery.parseXML
    },
    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      url: true,
      context: true
    }
  },
  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    return settings ?
      // Building a settings object
      ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
      // Extending ajaxSettings
      ajaxExtend( jQuery.ajaxSettings, target );
  },
  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),
  // Main method
  ajax: function( url, options ) {
    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }
    // Force options to be an object
    options = options || {};
    var transport,
      // URL without anti-cache param
      cacheURL,
      // Response headers
      responseHeadersString,
      responseHeaders,
      // timeout handle
      timeoutTimer,
      // Url cleanup var
      urlAnchor,
      // Request state (becomes false upon send and true upon completion)
      completed,
      // To know if global events are to be dispatched
      fireGlobals,
      // Loop variable
      i,
      // uncached part of the url
      uncached,
      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),
      // Callbacks context
      callbackContext = s.context || s,
      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context &&
        ( callbackContext.nodeType || callbackContext.jquery ) ?
          jQuery( callbackContext ) :
          jQuery.event,
      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks( "once memory" ),
      // Status-dependent callbacks
      statusCode = s.statusCode || {},
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // Default abort message
      strAbort = "canceled",
      // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( completed ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function( name, value ) {
          if ( completed == null ) {
            name = requestHeadersNames[ name.toLowerCase() ] =
              requestHeadersNames[ name.toLowerCase() ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( completed == null ) {
            s.mimeType = type;
          }
          return this;
        },
        // Status-dependent callbacks
        statusCode: function( map ) {
          var code;
          if ( map ) {
            if ( completed ) {
              // Execute the appropriate callbacks
              jqXHR.always( map[ jqXHR.status ] );
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for ( code in map ) {
                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
              }
            }
          }
          return this;
        },
        // Cancel the request
        abort: function( statusText ) {
          var finalText = statusText || strAbort;
          if ( transport ) {
            transport.abort( finalText );
          }
          done( 0, finalText );
          return this;
        }
      };
    // Attach deferreds
    deferred.promise( jqXHR );
    // Add protocol if not provided (prefilters might expect it)
    // Handle falsy url in the settings object (#10093: consistency with old signature)
    // We also use the url parameter if available
    s.url = ( ( url || s.url || location.href ) + "" )
      .replace( rprotocol, location.protocol + "//" );
    // Alias method option to type as per ticket #12004
    s.type = options.method || options.type || s.method || s.type;
    // Extract dataTypes list
    s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];
    // A cross-domain request is in order when the origin doesn't match the current origin.
    if ( s.crossDomain == null ) {
      urlAnchor = document.createElement( "a" );
      // Support: IE <=8 - 11, Edge 12 - 13
      // IE throws exception on accessing the href property if url is malformed,
      // e.g. http://example.com:80x/
      try {
        urlAnchor.href = s.url;
        // Support: IE <=8 - 11 only
        // Anchor's host property isn't correctly set when s.url is relative
        urlAnchor.href = urlAnchor.href;
        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
          urlAnchor.protocol + "//" + urlAnchor.host;
      } catch ( e ) {
        // If there is an error parsing the URL, assume it is crossDomain,
        // it can be rejected by the transport if it is invalid
        s.crossDomain = true;
      }
    }
    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }
    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
    // If request was aborted inside a prefilter, stop there
    if ( completed ) {
      return jqXHR;
    }
    // We can fire global events as of now if asked to
    // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
    fireGlobals = jQuery.event && s.global;
    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger( "ajaxStart" );
    }
    // Uppercase the type
    s.type = s.type.toUpperCase();
    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );
    // Save the URL in case we're toying with the If-Modified-Since
    // and/or If-None-Match header later on
    // Remove hash to simplify url manipulation
    cacheURL = s.url.replace( rhash, "" );
    // More options handling for requests with no content
    if ( !s.hasContent ) {
      // Remember the hash so we can put it back
      uncached = s.url.slice( cacheURL.length );
      // If data is available, append data to url
      if ( s.data ) {
        cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }
      // Add or update anti-cache param if needed
      if ( s.cache === false ) {
        cacheURL = cacheURL.replace( rantiCache, "$1" );
        uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
      }
      // Put hash and anti-cache on the URL that will be requested (gh-1732)
      s.url = cacheURL + uncached;
    // Change '%20' to '+' if this is encoded form body content (gh-2658)
    } else if ( s.data && s.processData &&
      ( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
      s.data = s.data.replace( r20, "+" );
    }
    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      if ( jQuery.lastModified[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
      }
      if ( jQuery.etag[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
      }
    }
    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }
    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
        s.accepts[ s.dataTypes[ 0 ] ] +
          ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );
    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }
    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend &&
      ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
      // Abort if not done already and return
      return jqXHR.abort();
    }
    // Aborting is no longer a cancellation
    strAbort = "abort";
    // Install callbacks on deferreds
    completeDeferred.add( s.complete );
    jqXHR.done( s.success );
    jqXHR.fail( s.error );
    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;
      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }
      // If request was aborted inside ajaxSend, stop there
      if ( completed ) {
        return jqXHR;
      }
      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = window.setTimeout( function() {
          jqXHR.abort( "timeout" );
        }, s.timeout );
      }
      try {
        completed = false;
        transport.send( requestHeaders, done );
      } catch ( e ) {
        // Rethrow post-completion exceptions
        if ( completed ) {
          throw e;
        }
        // Propagate others as results
        done( -1, e );
      }
    }
    // Callback for when everything is done
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;
      // Ignore repeat invocations
      if ( completed ) {
        return;
      }
      completed = true;
      // Clear timeout if it exists
      if ( timeoutTimer ) {
        window.clearTimeout( timeoutTimer );
      }
      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;
      // Cache response headers
      responseHeadersString = headers || "";
      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;
      // Determine if successful
      isSuccess = status >= 200 && status < 300 || status === 304;
      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }
      // Convert no matter what (that way responseXXX fields are always set)
      response = ajaxConvert( s, response, jqXHR, isSuccess );
      // If successful, handle type chaining
      if ( isSuccess ) {
        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {
          modified = jqXHR.getResponseHeader( "Last-Modified" );
          if ( modified ) {
            jQuery.lastModified[ cacheURL ] = modified;
          }
          modified = jqXHR.getResponseHeader( "etag" );
          if ( modified ) {
            jQuery.etag[ cacheURL ] = modified;
          }
        }
        // if no content
        if ( status === 204 || s.type === "HEAD" ) {
          statusText = "nocontent";
        // if not modified
        } else if ( status === 304 ) {
          statusText = "notmodified";
        // If we have data, let's convert it
        } else {
          statusText = response.state;
          success = response.data;
          error = response.error;
          isSuccess = !error;
        }
      } else {
        // Extract error from statusText and normalize for non-aborts
        error = statusText;
        if ( status || !statusText ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }
      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";
      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }
      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;
      if ( fireGlobals ) {
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
          [ jqXHR, s, isSuccess ? success : error ] );
      }
      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger( "ajaxStop" );
        }
      }
    }
    return jqXHR;
  },
  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  },
  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  }
} );
jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    // Shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }
    // The url can be an options object (which then must have .url)
    return jQuery.ajax( jQuery.extend( {
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    }, jQuery.isPlainObject( url ) && url ) );
  };
} );
jQuery._evalUrl = function( url ) {
  return jQuery.ajax( {
    url: url,
    // Make this explicit, since user can override this through ajaxSetup (#11264)
    type: "GET",
    dataType: "script",
    cache: true,
    async: false,
    global: false,
    "throws": true
  } );
};
jQuery.fn.extend( {
  wrapAll: function( html ) {
    var wrap;
    if ( this[ 0 ] ) {
      if ( jQuery.isFunction( html ) ) {
        html = html.call( this[ 0 ] );
      }
      // The elements to wrap the target around
      wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
      if ( this[ 0 ].parentNode ) {
        wrap.insertBefore( this[ 0 ] );
      }
      wrap.map( function() {
        var elem = this;
        while ( elem.firstElementChild ) {
          elem = elem.firstElementChild;
        }
        return elem;
      } ).append( this );
    }
    return this;
  },
  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each( function( i ) {
        jQuery( this ).wrapInner( html.call( this, i ) );
      } );
    }
    return this.each( function() {
      var self = jQuery( this ),
        contents = self.contents();
      if ( contents.length ) {
        contents.wrapAll( html );
      } else {
        self.append( html );
      }
    } );
  },
  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );
    return this.each( function( i ) {
      jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
    } );
  },
  unwrap: function( selector ) {
    this.parent( selector ).not( "body" ).each( function() {
      jQuery( this ).replaceWith( this.childNodes );
    } );
    return this;
  }
} );
jQuery.expr.pseudos.hidden = function( elem ) {
  return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
  return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};
jQuery.ajaxSettings.xhr = function() {
  try {
    return new window.XMLHttpRequest();
  } catch ( e ) {}
};
var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
  xhrSupported = jQuery.ajaxSettings.xhr();
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;
jQuery.ajaxTransport( function( options ) {
  var callback, errorCallback;
  // Cross domain only allowed if supported through XMLHttpRequest
  if ( support.cors || xhrSupported && !options.crossDomain ) {
    return {
      send: function( headers, complete ) {
        var i,
          xhr = options.xhr();
        xhr.open(
          options.type,
          options.url,
          options.async,
          options.username,
          options.password
        );
        // Apply custom fields if provided
        if ( options.xhrFields ) {
          for ( i in options.xhrFields ) {
            xhr[ i ] = options.xhrFields[ i ];
          }
        }
        // Override mime type if needed
        if ( options.mimeType && xhr.overrideMimeType ) {
          xhr.overrideMimeType( options.mimeType );
        }
        // X-Requested-With header
        // For cross-domain requests, seeing as conditions for a preflight are
        // akin to a jigsaw puzzle, we simply never set it to be sure.
        // (it can always be set on a per-request basis or even using ajaxSetup)
        // For same-domain requests, won't change header if already provided.
        if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
          headers[ "X-Requested-With" ] = "XMLHttpRequest";
        }
        // Set headers
        for ( i in headers ) {
          xhr.setRequestHeader( i, headers[ i ] );
        }
        // Callback
        callback = function( type ) {
          return function() {
            if ( callback ) {
              callback = errorCallback = xhr.onload =
                xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
              if ( type === "abort" ) {
                xhr.abort();
              } else if ( type === "error" ) {
                // Support: IE <=9 only
                // On a manual native abort, IE9 throws
                // errors on any property access that is not readyState
                if ( typeof xhr.status !== "number" ) {
                  complete( 0, "error" );
                } else {
                  complete(
                    // File: protocol always yields status 0; see #8605, #14207
                    xhr.status,
                    xhr.statusText
                  );
                }
              } else {
                complete(
                  xhrSuccessStatus[ xhr.status ] || xhr.status,
                  xhr.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  ( xhr.responseType || "text" ) !== "text"  ||
                  typeof xhr.responseText !== "string" ?
                    { binary: xhr.response } :
                    { text: xhr.responseText },
                  xhr.getAllResponseHeaders()
                );
              }
            }
          };
        };
        // Listen to events
        xhr.onload = callback();
        errorCallback = xhr.onerror = callback( "error" );
        // Support: IE 9 only
        // Use onreadystatechange to replace onabort
        // to handle uncaught aborts
        if ( xhr.onabort !== undefined ) {
          xhr.onabort = errorCallback;
        } else {
          xhr.onreadystatechange = function() {
            // Check readyState before timeout as it changes
            if ( xhr.readyState === 4 ) {
              // Allow onerror to be called first,
              // but that will not handle a native abort
              // Also, save errorCallback to a variable
              // as xhr.onerror cannot be accessed
              window.setTimeout( function() {
                if ( callback ) {
                  errorCallback();
                }
              } );
            }
          };
        }
        // Create the abort callback
        callback = callback( "abort" );
        try {
          // Do send the request (this may raise an exception)
          xhr.send( options.hasContent && options.data || null );
        } catch ( e ) {
          // #14683: Only rethrow if this hasn't been notified as an error yet
          if ( callback ) {
            throw e;
          }
        }
      },
      abort: function() {
        if ( callback ) {
          callback();
        }
      }
    };
  }
} );
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
  if ( s.crossDomain ) {
    s.contents.script = false;
  }
} );
// Install script dataType
jQuery.ajaxSetup( {
  accepts: {
    script: "text/javascript, application/javascript, " +
      "application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /\b(?:java|ecma)script\b/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
} );
// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
  }
} );
// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {
    var script, callback;
    return {
      send: function( _, complete ) {
        script = jQuery( "<script>" ).prop( {
          charset: s.scriptCharset,
          src: s.url
        } ).on(
          "load error",
          callback = function( evt ) {
            script.remove();
            callback = null;
            if ( evt ) {
              complete( evt.type === "error" ? 404 : 200, evt.type );
            }
          }
        );
        // Use native DOM manipulation to avoid our domManip AJAX trickery
        document.head.appendChild( script[ 0 ] );
      },
      abort: function() {
        if ( callback ) {
          callback();
        }
      }
    };
  }
} );
var oldCallbacks = [],
  rjsonp = /(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
jQuery.ajaxSetup( {
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
} );
// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
  var callbackName, overwritten, responseContainer,
    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
      "url" :
      typeof s.data === "string" &&
        ( s.contentType || "" )
          .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
        rjsonp.test( s.data ) && "data"
    );
  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;
    // Insert callback into url or form data
    if ( jsonProp ) {
      s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    } else if ( s.jsonp !== false ) {
      s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }
    // Use data converter to retrieve json after script execution
    s.converters[ "script json" ] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };
    // Force json dataType
    s.dataTypes[ 0 ] = "json";
    // Install callback
    overwritten = window[ callbackName ];
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };
    // Clean-up function (fires after converters)
    jqXHR.always( function() {
      // If previous value didn't exist - remove it
      if ( overwritten === undefined ) {
        jQuery( window ).removeProp( callbackName );
      // Otherwise restore preexisting value
      } else {
        window[ callbackName ] = overwritten;
      }
      // Save back as free
      if ( s[ callbackName ] ) {
        // Make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;
        // Save the callback name for future use
        oldCallbacks.push( callbackName );
      }
      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }
      responseContainer = overwritten = undefined;
    } );
    // Delegate to script
    return "script";
  }
} );
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
  var body = document.implementation.createHTMLDocument( "" ).body;
  body.innerHTML = "<form></form><form></form>";
  return body.childNodes.length === 2;
} )();
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
  if ( typeof data !== "string" ) {
    return [];
  }
  if ( typeof context === "boolean" ) {
    keepScripts = context;
    context = false;
  }
  var base, parsed, scripts;
  if ( !context ) {
    // Stop scripts or inline event handlers from being executed immediately
    // by using document.implementation
    if ( support.createHTMLDocument ) {
      context = document.implementation.createHTMLDocument( "" );
      // Set the base href for the created document
      // so any parsed elements with URLs
      // are based on the document's URL (gh-2965)
      base = context.createElement( "base" );
      base.href = document.location.href;
      context.head.appendChild( base );
    } else {
      context = document;
    }
  }
  parsed = rsingleTag.exec( data );
  scripts = !keepScripts && [];
  // Single tag
  if ( parsed ) {
    return [ context.createElement( parsed[ 1 ] ) ];
  }
  parsed = buildFragment( [ data ], context, scripts );
  if ( scripts && scripts.length ) {
    jQuery( scripts ).remove();
  }
  return jQuery.merge( [], parsed.childNodes );
};
/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
  var selector, type, response,
    self = this,
    off = url.indexOf( " " );
  if ( off > -1 ) {
    selector = stripAndCollapse( url.slice( off ) );
    url = url.slice( 0, off );
  }
  // If it's a function
  if ( jQuery.isFunction( params ) ) {
    // We assume that it's the callback
    callback = params;
    params = undefined;
  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }
  // If we have elements to modify, make the request
  if ( self.length > 0 ) {
    jQuery.ajax( {
      url: url,
      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: type || "GET",
      dataType: "html",
      data: params
    } ).done( function( responseText ) {
      // Save response for use in complete callback
      response = arguments;
      self.html( selector ?
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
        // Otherwise use the full result
        responseText );
    // If the request succeeds, this function gets "data", "status", "jqXHR"
    // but they are ignored because response was set above.
    // If it fails, this function gets "jqXHR", "status", "error"
    } ).always( callback && function( jqXHR, status ) {
      self.each( function() {
        callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
      } );
    } );
  }
  return this;
};
// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
  "ajaxStart",
  "ajaxStop",
  "ajaxComplete",
  "ajaxError",
  "ajaxSuccess",
  "ajaxSend"
], function( i, type ) {
  jQuery.fn[ type ] = function( fn ) {
    return this.on( type, fn );
  };
} );
jQuery.expr.pseudos.animated = function( elem ) {
  return jQuery.grep( jQuery.timers, function( fn ) {
    return elem === fn.elem;
  } ).length;
};
jQuery.offset = {
  setOffset: function( elem, options, i ) {
    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
      position = jQuery.css( elem, "position" ),
      curElem = jQuery( elem ),
      props = {};
    // Set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }
    curOffset = curElem.offset();
    curCSSTop = jQuery.css( elem, "top" );
    curCSSLeft = jQuery.css( elem, "left" );
    calculatePosition = ( position === "absolute" || position === "fixed" ) &&
      ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
    // Need to be able to calculate position if either
    // top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }
    if ( jQuery.isFunction( options ) ) {
      // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
      options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
    }
    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }
    if ( "using" in options ) {
      options.using.call( elem, props );
    } else {
      curElem.css( props );
    }
  }
};
jQuery.fn.extend( {
  offset: function( options ) {
    // Preserve chaining for setter
    if ( arguments.length ) {
      return options === undefined ?
        this :
        this.each( function( i ) {
          jQuery.offset.setOffset( this, options, i );
        } );
    }
    var doc, docElem, rect, win,
      elem = this[ 0 ];
    if ( !elem ) {
      return;
    }
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if ( !elem.getClientRects().length ) {
      return { top: 0, left: 0 };
    }
    rect = elem.getBoundingClientRect();
    doc = elem.ownerDocument;
    docElem = doc.documentElement;
    win = doc.defaultView;
    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  },
  position: function() {
    if ( !this[ 0 ] ) {
      return;
    }
    var offsetParent, offset,
      elem = this[ 0 ],
      parentOffset = { top: 0, left: 0 };
    // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if ( jQuery.css( elem, "position" ) === "fixed" ) {
      // Assume getBoundingClientRect is there when computed position is fixed
      offset = elem.getBoundingClientRect();
    } else {
      // Get *real* offsetParent
      offsetParent = this.offsetParent();
      // Get correct offsets
      offset = this.offset();
      if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
        parentOffset = offsetParent.offset();
      }
      // Add offsetParent borders
      parentOffset = {
        top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
        left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
      };
    }
    // Subtract parent offsets and element margins
    return {
      top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
      left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
    };
  },
  // This method will return documentElement in the following cases:
  // 1) For the element inside the iframe without offsetParent, this method will return
  //    documentElement of the parent window
  // 2) For the hidden or detached element
  // 3) For body or html element, i.e. in case of the html node - it will return itself
  //
  // but those exceptions were never presented as a real life use-cases
  // and might be considered as more preferable results.
  //
  // This logic, however, is not guaranteed and can change at any point in the future
  offsetParent: function() {
    return this.map( function() {
      var offsetParent = this.offsetParent;
      while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || documentElement;
    } );
  }
} );
// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
  var top = "pageYOffset" === prop;
  jQuery.fn[ method ] = function( val ) {
    return access( this, function( elem, method, val ) {
      // Coalesce documents and windows
      var win;
      if ( jQuery.isWindow( elem ) ) {
        win = elem;
      } else if ( elem.nodeType === 9 ) {
        win = elem.defaultView;
      }
      if ( val === undefined ) {
        return win ? win[ prop ] : elem[ method ];
      }
      if ( win ) {
        win.scrollTo(
          !top ? val : win.pageXOffset,
          top ? val : win.pageYOffset
        );
      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length );
  };
} );
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
  jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
    function( elem, computed ) {
      if ( computed ) {
        computed = curCSS( elem, prop );
        // If curCSS returns percentage, fallback to offset
        return rnumnonpx.test( computed ) ?
          jQuery( elem ).position()[ prop ] + "px" :
          computed;
      }
    }
  );
} );
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
    function( defaultExtra, funcName ) {
    // Margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
      return access( this, function( elem, type, value ) {
        var doc;
        if ( jQuery.isWindow( elem ) ) {
          // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
          return funcName.indexOf( "outer" ) === 0 ?
            elem[ "inner" + name ] :
            elem.document.documentElement[ "client" + name ];
        }
        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;
          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
          // whichever is greatest
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }
        return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, extra ) :
          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable );
    };
  } );
} );
jQuery.fn.extend( {
  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },
  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ?
      this.off( selector, "**" ) :
      this.off( types, selector || "**", fn );
  }
} );
jQuery.holdReady = function( hold ) {
  if ( hold ) {
    jQuery.readyWait++;
  } else {
    jQuery.ready( true );
  }
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if ( typeof define === "function" && define.amd ) {
  define( "jquery", [], function() {
    return jQuery;
  } );
}
var
  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
  // Map over the $ in case of overwrite
  _$ = window.$;
jQuery.noConflict = function( deep ) {
  if ( window.$ === jQuery ) {
    window.$ = _$;
  }
  if ( deep && window.jQuery === jQuery ) {
    window.jQuery = _jQuery;
  }
  return jQuery;
};
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
  window.jQuery = window.$ = jQuery;
}
return jQuery;
} );
/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */
(function( global, factory ) {
  if ( typeof module === "object" && typeof module.exports === "object" ) {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ?
      factory( global, true ) :
      function( w ) {
        if ( !w.document ) {
          throw new Error( "jQuery requires a window with a document" );
        }
        return factory( w );
      };
  } else {
    factory( global );
  }
// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];
var document = window.document;
var slice = arr.slice;
var concat = arr.concat;
var push = arr.push;
var indexOf = arr.indexOf;
var class2type = {};
var toString = class2type.toString;
var hasOwn = class2type.hasOwnProperty;
var support = {};
var
  version = "2.2.4",
  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init( selector, context );
  },
  // Support: Android<4.1
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([\da-z])/gi,
  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return letter.toUpperCase();
  };
jQuery.fn = jQuery.prototype = {
  // The current version of jQuery being used
  jquery: version,
  constructor: jQuery,
  // Start with an empty selector
  selector: "",
  // The default length of a jQuery object is 0
  length: 0,
  toArray: function() {
    return slice.call( this );
  },
  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {
    return num != null ?
      // Return just the one element from the set
      ( num < 0 ? this[ num + this.length ] : this[ num ] ) :
      // Return all the elements in a clean array
      slice.call( this );
  },
  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems ) {
    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );
    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;
    ret.context = this.context;
    // Return the newly-formed element set
    return ret;
  },
  // Execute a callback for every element in the matched set.
  each: function( callback ) {
    return jQuery.each( this, callback );
  },
  map: function( callback ) {
    return this.pushStack( jQuery.map( this, function( elem, i ) {
      return callback.call( elem, i, elem );
    } ) );
  },
  slice: function() {
    return this.pushStack( slice.apply( this, arguments ) );
  },
  first: function() {
    return this.eq( 0 );
  },
  last: function() {
    return this.eq( -1 );
  },
  eq: function( i ) {
    var len = this.length,
      j = +i + ( i < 0 ? len : 0 );
    return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
  },
  end: function() {
    return this.prevObject || this.constructor();
  },
  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: push,
  sort: arr.sort,
  splice: arr.splice
};
jQuery.extend = jQuery.fn.extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[ 0 ] || {},
    i = 1,
    length = arguments.length,
    deep = false;
  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    // Skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }
  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
    target = {};
  }
  // Extend jQuery itself if only one argument is passed
  if ( i === length ) {
    target = this;
    i--;
  }
  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( ( options = arguments[ i ] ) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];
        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }
        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
          ( copyIsArray = jQuery.isArray( copy ) ) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && jQuery.isArray( src ) ? src : [];
          } else {
            clone = src && jQuery.isPlainObject( src ) ? src : {};
          }
          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );
        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }
  // Return the modified object
  return target;
};
jQuery.extend( {
  // Unique for each copy of jQuery on the page
  expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
  // Assume jQuery is ready without the ready module
  isReady: true,
  error: function( msg ) {
    throw new Error( msg );
  },
  noop: function() {},
  isFunction: function( obj ) {
    return jQuery.type( obj ) === "function";
  },
  isArray: Array.isArray,
  isWindow: function( obj ) {
    return obj != null && obj === obj.window;
  },
  isNumeric: function( obj ) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    var realStringObj = obj && obj.toString();
    return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
  },
  isPlainObject: function( obj ) {
    var key;
    // Not plain objects:
    // - Any object or value whose internal [[Class]] property is not "[object Object]"
    // - DOM nodes
    // - window
    if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false;
    }
    // Not own constructor property must be Object
    if ( obj.constructor &&
        !hasOwn.call( obj, "constructor" ) &&
        !hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
      return false;
    }
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own
    for ( key in obj ) {}
    return key === undefined || hasOwn.call( obj, key );
  },
  isEmptyObject: function( obj ) {
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  },
  type: function( obj ) {
    if ( obj == null ) {
      return obj + "";
    }
    // Support: Android<4.0, iOS<6 (functionish RegExp)
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[ toString.call( obj ) ] || "object" :
      typeof obj;
  },
  // Evaluates a script in a global context
  globalEval: function( code ) {
    var script,
      indirect = eval;
    code = jQuery.trim( code );
    if ( code ) {
      // If the code includes a valid, prologue position
      // strict mode pragma, execute code by injecting a
      // script tag into the document.
      if ( code.indexOf( "use strict" ) === 1 ) {
        script = document.createElement( "script" );
        script.text = code;
        document.head.appendChild( script ).parentNode.removeChild( script );
      } else {
        // Otherwise, avoid the DOM node creation, insertion
        // and removal by using an indirect global eval
        indirect( code );
      }
    }
  },
  // Convert dashed to camelCase; used by the css and data modules
  // Support: IE9-11+
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },
  nodeName: function( elem, name ) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },
  each: function( obj, callback ) {
    var length, i = 0;
    if ( isArrayLike( obj ) ) {
      length = obj.length;
      for ( ; i < length; i++ ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    } else {
      for ( i in obj ) {
        if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
          break;
        }
      }
    }
    return obj;
  },
  // Support: Android<4.1
  trim: function( text ) {
    return text == null ?
      "" :
      ( text + "" ).replace( rtrim, "" );
  },
  // results is for internal usage only
  makeArray: function( arr, results ) {
    var ret = results || [];
    if ( arr != null ) {
      if ( isArrayLike( Object( arr ) ) ) {
        jQuery.merge( ret,
          typeof arr === "string" ?
          [ arr ] : arr
        );
      } else {
        push.call( ret, arr );
      }
    }
    return ret;
  },
  inArray: function( elem, arr, i ) {
    return arr == null ? -1 : indexOf.call( arr, elem, i );
  },
  merge: function( first, second ) {
    var len = +second.length,
      j = 0,
      i = first.length;
    for ( ; j < len; j++ ) {
      first[ i++ ] = second[ j ];
    }
    first.length = i;
    return first;
  },
  grep: function( elems, callback, invert ) {
    var callbackInverse,
      matches = [],
      i = 0,
      length = elems.length,
      callbackExpect = !invert;
    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      callbackInverse = !callback( elems[ i ], i );
      if ( callbackInverse !== callbackExpect ) {
        matches.push( elems[ i ] );
      }
    }
    return matches;
  },
  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var length, value,
      i = 0,
      ret = [];
    // Go through the array, translating each of the items to their new values
    if ( isArrayLike( elems ) ) {
      length = elems.length;
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );
        if ( value != null ) {
          ret.push( value );
        }
      }
    // Go through every key on the object,
    } else {
      for ( i in elems ) {
        value = callback( elems[ i ], i, arg );
        if ( value != null ) {
          ret.push( value );
        }
      }
    }
    // Flatten any nested arrays
    return concat.apply( [], ret );
  },
  // A global GUID counter for objects
  guid: 1,
  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var tmp, args, proxy;
    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }
    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }
    // Simulated bind
    args = slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
    };
    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  },
  now: Date.now,
  // jQuery.support is not used in Core but other projects attach their
  // properties to it so it needs to exist.
  support: support
} );
// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
  jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */
// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );
function isArrayLike( obj ) {
  // Support: iOS 8.2 (not reproducible in simulator)
  // `in` check used to prevent JIT error (gh-2145)
  // hasOwn isn't used here due to false negatives
  // regarding Nodelist length in IE
  var length = !!obj && "length" in obj && obj.length,
    type = jQuery.type( obj );
  if ( type === "function" || jQuery.isWindow( obj ) ) {
    return false;
  }
  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {
var i,
  support,
  Expr,
  getText,
  isXML,
  tokenize,
  compile,
  select,
  outermostContext,
  sortInput,
  hasDuplicate,
  // Local document vars
  setDocument,
  document,
  docElem,
  documentIsHTML,
  rbuggyQSA,
  rbuggyMatches,
  matches,
  contains,
  // Instance-specific data
  expando = "sizzle" + 1 * new Date(),
  preferredDoc = window.document,
  dirruns = 0,
  done = 0,
  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),
  sortOrder = function( a, b ) {
    if ( a === b ) {
      hasDuplicate = true;
    }
    return 0;
  },
  // General-purpose constants
  MAX_NEGATIVE = 1 << 31,
  // Instance methods
  hasOwn = ({}).hasOwnProperty,
  arr = [],
  pop = arr.pop,
  push_native = arr.push,
  push = arr.push,
  slice = arr.slice,
  // Use a stripped-down indexOf as it's faster than native
  // http://jsperf.com/thor-indexof-vs-for/5
  indexOf = function( list, elem ) {
    var i = 0,
      len = list.length;
    for ( ; i < len; i++ ) {
      if ( list[i] === elem ) {
        return i;
      }
    }
    return -1;
  },
  booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
  // Regular expressions
  // http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
  // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
  // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
  attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
    // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace +
    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
    "*\\]",
  pseudos = ":(" + identifier + ")(?:\\((" +
    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
    // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
    // 3. anything else (capture 2)
    ".*" +
    ")\\)|)",
  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rwhitespace = new RegExp( whitespace + "+", "g" ),
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
  rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
  rpseudo = new RegExp( pseudos ),
  ridentifier = new RegExp( "^" + identifier + "$" ),
  matchExpr = {
    "ID": new RegExp( "^#(" + identifier + ")" ),
    "CLASS": new RegExp( "^\\.(" + identifier + ")" ),
    "TAG": new RegExp( "^(" + identifier + "|[*])" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    "bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
  },
  rinputs = /^(?:input|select|textarea|button)$/i,
  rheader = /^h\d$/i,
  rnative = /^[^{]+\{\s*\[native \w/,
  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
  rsibling = /[+~]/,
  rescape = /'|\\/g,
  // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
  funescape = function( _, escaped, escapedWhitespace ) {
    var high = "0x" + escaped - 0x10000;
    // NaN means non-codepoint
    // Support: Firefox<24
    // Workaround erroneous numeric interpretation of +"0x"
    return high !== high || escapedWhitespace ?
      escaped :
      high < 0 ?
        // BMP codepoint
        String.fromCharCode( high + 0x10000 ) :
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
  },
  // Used for iframes
  // See setDocument()
  // Removing the function wrapper causes a "Permission Denied"
  // error in IE
  unloadHandler = function() {
    setDocument();
  };
// Optimize for push.apply( _, NodeList )
try {
  push.apply(
    (arr = slice.call( preferredDoc.childNodes )),
    preferredDoc.childNodes
  );
  // Support: Android<4.0
  // Detect silently failing push.apply
  arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
  push = { apply: arr.length ?
    // Leverage slice if possible
    function( target, els ) {
      push_native.apply( target, slice.call(els) );
    } :
    // Support: IE<9
    // Otherwise append directly
    function( target, els ) {
      var j = target.length,
        i = 0;
      // Can't trust NodeList.length
      while ( (target[j++] = els[i++]) ) {}
      target.length = j - 1;
    }
  };
}
function Sizzle( selector, context, results, seed ) {
  var m, i, elem, nid, nidselect, match, groups, newSelector,
    newContext = context && context.ownerDocument,
    // nodeType defaults to 9, since context defaults to document
    nodeType = context ? context.nodeType : 9;
  results = results || [];
  // Return early from calls with invalid selector or context
  if ( typeof selector !== "string" || !selector ||
    nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
    return results;
  }
  // Try to shortcut find operations (as opposed to filters) in HTML documents
  if ( !seed ) {
    if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
      setDocument( context );
    }
    context = context || document;
    if ( documentIsHTML ) {
      // If the selector is sufficiently simple, try using a "get*By*" DOM method
      // (excepting DocumentFragment context, where the methods don't exist)
      if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
        // ID selector
        if ( (m = match[1]) ) {
          // Document context
          if ( nodeType === 9 ) {
            if ( (elem = context.getElementById( m )) ) {
              // Support: IE, Opera, Webkit
              // TODO: identify versions
              // getElementById can match elements by name instead of ID
              if ( elem.id === m ) {
                results.push( elem );
                return results;
              }
            } else {
              return results;
            }
          // Element context
          } else {
            // Support: IE, Opera, Webkit
            // TODO: identify versions
            // getElementById can match elements by name instead of ID
            if ( newContext && (elem = newContext.getElementById( m )) &&
              contains( context, elem ) &&
              elem.id === m ) {
              results.push( elem );
              return results;
            }
          }
        // Type selector
        } else if ( match[2] ) {
          push.apply( results, context.getElementsByTagName( selector ) );
          return results;
        // Class selector
        } else if ( (m = match[3]) && support.getElementsByClassName &&
          context.getElementsByClassName ) {
          push.apply( results, context.getElementsByClassName( m ) );
          return results;
        }
      }
      // Take advantage of querySelectorAll
      if ( support.qsa &&
        !compilerCache[ selector + " " ] &&
        (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
        if ( nodeType !== 1 ) {
          newContext = context;
          newSelector = selector;
        // qSA looks outside Element context, which is not what we want
        // Thanks to Andrew Dupont for this workaround technique
        // Support: IE <=8
        // Exclude object elements
        } else if ( context.nodeName.toLowerCase() !== "object" ) {
          // Capture the context ID, setting it first if necessary
          if ( (nid = context.getAttribute( "id" )) ) {
            nid = nid.replace( rescape, "\\$&" );
          } else {
            context.setAttribute( "id", (nid = expando) );
          }
          // Prefix every selector in the list
          groups = tokenize( selector );
          i = groups.length;
          nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
          while ( i-- ) {
            groups[i] = nidselect + " " + toSelector( groups[i] );
          }
          newSelector = groups.join( "," );
          // Expand context for sibling selectors
          newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
            context;
        }
        if ( newSelector ) {
          try {
            push.apply( results,
              newContext.querySelectorAll( newSelector )
            );
            return results;
          } catch ( qsaError ) {
          } finally {
            if ( nid === expando ) {
              context.removeAttribute( "id" );
            }
          }
        }
      }
    }
  }
  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed );
}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  deleting the oldest entry
 */
function createCache() {
  var keys = [];
  function cache( key, value ) {
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    if ( keys.push( key + " " ) > Expr.cacheLength ) {
      // Only keep the most recent entries
      delete cache[ keys.shift() ];
    }
    return (cache[ key + " " ] = value);
  }
  return cache;
}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
  fn[ expando ] = true;
  return fn;
}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
  var div = document.createElement("div");
  try {
    return !!fn( div );
  } catch (e) {
    return false;
  } finally {
    // Remove from its parent by default
    if ( div.parentNode ) {
      div.parentNode.removeChild( div );
    }
    // release memory in IE
    div = null;
  }
}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
  var arr = attrs.split("|"),
    i = arr.length;
  while ( i-- ) {
    Expr.attrHandle[ arr[i] ] = handler;
  }
}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
  var cur = b && a,
    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
      ( ~b.sourceIndex || MAX_NEGATIVE ) -
      ( ~a.sourceIndex || MAX_NEGATIVE );
  // Use IE sourceIndex if available on both nodes
  if ( diff ) {
    return diff;
  }
  // Check if b follows a
  if ( cur ) {
    while ( (cur = cur.nextSibling) ) {
      if ( cur === b ) {
        return -1;
      }
    }
  }
  return a ? 1 : -1;
}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;
      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
  return context && typeof context.getElementsByTagName !== "undefined" && context;
}
// Expose support vars for convenience
support = Sizzle.support = {};
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
  var hasCompare, parent,
    doc = node ? node.ownerDocument || node : preferredDoc;
  // Return early if doc is invalid or already selected
  if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    return document;
  }
  // Update global variables
  document = doc;
  docElem = document.documentElement;
  documentIsHTML = !isXML( document );
  // Support: IE 9-11, Edge
  // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
  if ( (parent = document.defaultView) && parent.top !== parent ) {
    // Support: IE 11
    if ( parent.addEventListener ) {
      parent.addEventListener( "unload", unloadHandler, false );
    // Support: IE 9 - 10 only
    } else if ( parent.attachEvent ) {
      parent.attachEvent( "onunload", unloadHandler );
    }
  }
  /* Attributes
  ---------------------------------------------------------------------- */
  // Support: IE<8
  // Verify that getAttribute really returns attributes and not properties
  // (excepting IE8 booleans)
  support.attributes = assert(function( div ) {
    div.className = "i";
    return !div.getAttribute("className");
  });
  /* getElement(s)By*
  ---------------------------------------------------------------------- */
  // Check if getElementsByTagName("*") returns only elements
  support.getElementsByTagName = assert(function( div ) {
    div.appendChild( document.createComment("") );
    return !div.getElementsByTagName("*").length;
  });
  // Support: IE<9
  support.getElementsByClassName = rnative.test( document.getElementsByClassName );
  // Support: IE<10
  // Check if getElementById returns elements by name
  // The broken getElementById methods don't pick up programatically-set names,
  // so use a roundabout getElementsByName test
  support.getById = assert(function( div ) {
    docElem.appendChild( div ).id = expando;
    return !document.getElementsByName || !document.getElementsByName( expando ).length;
  });
  // ID find and filter
  if ( support.getById ) {
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
        var m = context.getElementById( id );
        return m ? [ m ] : [];
      }
    };
    Expr.filter["ID"] = function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        return elem.getAttribute("id") === attrId;
      };
    };
  } else {
    // Support: IE6/7
    // getElementById is not reliable as a find shortcut
    delete Expr.find["ID"];
    Expr.filter["ID"] =  function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        var node = typeof elem.getAttributeNode !== "undefined" &&
          elem.getAttributeNode("id");
        return node && node.value === attrId;
      };
    };
  }
  // Tag
  Expr.find["TAG"] = support.getElementsByTagName ?
    function( tag, context ) {
      if ( typeof context.getElementsByTagName !== "undefined" ) {
        return context.getElementsByTagName( tag );
      // DocumentFragment nodes don't have gEBTN
      } else if ( support.qsa ) {
        return context.querySelectorAll( tag );
      }
    } :
    function( tag, context ) {
      var elem,
        tmp = [],
        i = 0,
        // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName( tag );
      // Filter out possible comments
      if ( tag === "*" ) {
        while ( (elem = results[i++]) ) {
          if ( elem.nodeType === 1 ) {
            tmp.push( elem );
          }
        }
        return tmp;
      }
      return results;
    };
  // Class
  Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
    if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
      return context.getElementsByClassName( className );
    }
  };
  /* QSA/matchesSelector
  ---------------------------------------------------------------------- */
  // QSA and matchesSelector support
  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
  rbuggyMatches = [];
  // qSa(:focus) reports false when true (Chrome 21)
  // We allow this because of a bug in IE8/9 that throws an error
  // whenever `document.activeElement` is accessed on an iframe
  // So, we allow :focus to pass through QSA all the time to avoid the IE error
  // See http://bugs.jquery.com/ticket/13378
  rbuggyQSA = [];
  if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( div ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explicitly
      // setting a boolean content attribute,
      // since its presence should be enough
      // http://bugs.jquery.com/ticket/12359
      docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
        "<select id='" + expando + "-\r\\' msallowcapture=''>" +
        "<option selected=''></option></select>";
      // Support: IE8, Opera 11-12.16
      // Nothing should be selected when empty strings follow ^= or $= or *=
      // The test attribute must be unknown in Opera but "safe" for WinRT
      // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
      if ( div.querySelectorAll("[msallowcapture^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
      }
      // Support: IE8
      // Boolean attributes and "value" are not treated correctly
      if ( !div.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
      }
      // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
      if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
        rbuggyQSA.push("~=");
      }
      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here and will not see later tests
      if ( !div.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }
      // Support: Safari 8+, iOS 8+
      // https://bugs.webkit.org/show_bug.cgi?id=136851
      // In-page `selector#id sibing-combinator selector` fails
      if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
        rbuggyQSA.push(".#.+[+~]");
      }
    });
    assert(function( div ) {
      // Support: Windows 8 Native Apps
      // The type and name attributes are restricted during .innerHTML assignment
      var input = document.createElement("input");
      input.setAttribute( "type", "hidden" );
      div.appendChild( input ).setAttribute( "name", "D" );
      // Support: IE8
      // Enforce case-sensitivity of name attribute
      if ( div.querySelectorAll("[name=d]").length ) {
        rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
      }
      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here and will not see later tests
      if ( !div.querySelectorAll(":enabled").length ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }
      // Opera 10-11 does not throw on post-comma invalid pseudos
      div.querySelectorAll("*,:x");
      rbuggyQSA.push(",.*:");
    });
  }
  if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
    docElem.webkitMatchesSelector ||
    docElem.mozMatchesSelector ||
    docElem.oMatchesSelector ||
    docElem.msMatchesSelector) )) ) {
    assert(function( div ) {
      // Check to see if it's possible to do matchesSelector
      // on a disconnected node (IE 9)
      support.disconnectedMatch = matches.call( div, "div" );
      // This should fail with an exception
      // Gecko does not error, returns false instead
      matches.call( div, "[s!='']:x" );
      rbuggyMatches.push( "!=", pseudos );
    });
  }
  rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
  rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
  /* Contains
  ---------------------------------------------------------------------- */
  hasCompare = rnative.test( docElem.compareDocumentPosition );
  // Element contains another
  // Purposefully self-exclusive
  // As in, an element does not contain itself
  contains = hasCompare || rnative.test( docElem.contains ) ?
    function( a, b ) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
        bup = b && b.parentNode;
      return a === bup || !!( bup && bup.nodeType === 1 && (
        adown.contains ?
          adown.contains( bup ) :
          a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
      ));
    } :
    function( a, b ) {
      if ( b ) {
        while ( (b = b.parentNode) ) {
          if ( b === a ) {
            return true;
          }
        }
      }
      return false;
    };
  /* Sorting
  ---------------------------------------------------------------------- */
  // Document order sorting
  sortOrder = hasCompare ?
  function( a, b ) {
    // Flag for duplicate removal
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }
    // Sort on method existence if only one input has compareDocumentPosition
    var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
    if ( compare ) {
      return compare;
    }
    // Calculate position if both inputs belong to the same document
    compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
      a.compareDocumentPosition( b ) :
      // Otherwise we know they are disconnected
      1;
    // Disconnected nodes
    if ( compare & 1 ||
      (!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
      // Choose the first element that is related to our preferred document
      if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
        return -1;
      }
      if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
        return 1;
      }
      // Maintain original order
      return sortInput ?
        ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
        0;
    }
    return compare & 4 ? -1 : 1;
  } :
  function( a, b ) {
    // Exit early if the nodes are identical
    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }
    var cur,
      i = 0,
      aup = a.parentNode,
      bup = b.parentNode,
      ap = [ a ],
      bp = [ b ];
    // Parentless nodes are either documents or disconnected
    if ( !aup || !bup ) {
      return a === document ? -1 :
        b === document ? 1 :
        aup ? -1 :
        bup ? 1 :
        sortInput ?
        ( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
        0;
    // If the nodes are siblings, we can do a quick check
    } else if ( aup === bup ) {
      return siblingCheck( a, b );
    }
    // Otherwise we need full lists of their ancestors for comparison
    cur = a;
    while ( (cur = cur.parentNode) ) {
      ap.unshift( cur );
    }
    cur = b;
    while ( (cur = cur.parentNode) ) {
      bp.unshift( cur );
    }
    // Walk down the tree looking for a discrepancy
    while ( ap[i] === bp[i] ) {
      i++;
    }
    return i ?
      // Do a sibling check if the nodes have a common ancestor
      siblingCheck( ap[i], bp[i] ) :
      // Otherwise nodes in our document sort first
      ap[i] === preferredDoc ? -1 :
      bp[i] === preferredDoc ? 1 :
      0;
  };
  return document;
};
Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};
Sizzle.matchesSelector = function( elem, expr ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }
  // Make sure that attribute selectors are quoted
  expr = expr.replace( rattributeQuotes, "='$1']" );
  if ( support.matchesSelector && documentIsHTML &&
    !compilerCache[ expr + " " ] &&
    ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
    ( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
    try {
      var ret = matches.call( elem, expr );
      // IE 9's matchesSelector returns false on disconnected nodes
      if ( ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11 ) {
        return ret;
      }
    } catch (e) {}
  }
  return Sizzle( expr, document, null, [ elem ] ).length > 0;
};
Sizzle.contains = function( context, elem ) {
  // Set document vars if needed
  if ( ( context.ownerDocument || context ) !== document ) {
    setDocument( context );
  }
  return contains( context, elem );
};
Sizzle.attr = function( elem, name ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }
  var fn = Expr.attrHandle[ name.toLowerCase() ],
    // Don't get fooled by Object.prototype properties (jQuery #13807)
    val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
      fn( elem, name, !documentIsHTML ) :
      undefined;
  return val !== undefined ?
    val :
    support.attributes || !documentIsHTML ?
      elem.getAttribute( name ) :
      (val = elem.getAttributeNode(name)) && val.specified ?
        val.value :
        null;
};
Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    j = 0,
    i = 0;
  // Unless we *know* we can detect duplicates, assume their presence
  hasDuplicate = !support.detectDuplicates;
  sortInput = !support.sortStable && results.slice( 0 );
  results.sort( sortOrder );
  if ( hasDuplicate ) {
    while ( (elem = results[i++]) ) {
      if ( elem === results[ i ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }
  // Clear input after sorting to release objects
  // See https://github.com/jquery/sizzle/pull/225
  sortInput = null;
  return results;
};
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;
  if ( !nodeType ) {
    // If no nodeType, this is expected to be an array
    while ( (node = elem[i++]) ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    // Use textContent for elements
    // innerText usage removed for consistency of new lines (jQuery #11153)
    if ( typeof elem.textContent === "string" ) {
      return elem.textContent;
    } else {
      // Traverse its children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        ret += getText( elem );
      }
    }
  } else if ( nodeType === 3 || nodeType === 4 ) {
    return elem.nodeValue;
  }
  // Do not include comment or processing instruction nodes
  return ret;
};
Expr = Sizzle.selectors = {
  // Can be adjusted by the user
  cacheLength: 50,
  createPseudo: markFunction,
  match: matchExpr,
  attrHandle: {},
  find: {},
  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },
  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( runescape, funescape );
      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }
      return match.slice( 0, 4 );
    },
    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 what (child|of-type)
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        4 xn-component of xn+y argument ([+-]?\d*n|)
        5 sign of xn-component
        6 x of xn-component
        7 sign of y-component
        8 y of y-component
      */
      match[1] = match[1].toLowerCase();
      if ( match[1].slice( 0, 3 ) === "nth" ) {
        // nth-* requires argument
        if ( !match[3] ) {
          Sizzle.error( match[0] );
        }
        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
        match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
      // other types prohibit arguments
      } else if ( match[3] ) {
        Sizzle.error( match[0] );
      }
      return match;
    },
    "PSEUDO": function( match ) {
      var excess,
        unquoted = !match[6] && match[2];
      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }
      // Accept quoted arguments as-is
      if ( match[3] ) {
        match[2] = match[4] || match[5] || "";
      // Strip excess characters from unquoted arguments
      } else if ( unquoted && rpseudo.test( unquoted ) &&
        // Get excess from tokenize (recursively)
        (excess = tokenize( unquoted, true )) &&
        // advance to the next closing parenthesis
        (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
        // excess is a negative index
        match[0] = match[0].slice( 0, excess );
        match[2] = unquoted.slice( 0, excess );
      }
      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },
  filter: {
    "TAG": function( nodeNameSelector ) {
      var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
      return nodeNameSelector === "*" ?
        function() { return true; } :
        function( elem ) {
          return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
        };
    },
    "CLASS": function( className ) {
      var pattern = classCache[ className + " " ];
      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
        });
    },
    "ATTR": function( name, operator, check ) {
      return function( elem ) {
        var result = Sizzle.attr( elem, name );
        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }
        result += "";
        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.slice( -check.length ) === check :
          operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },
    "CHILD": function( type, what, argument, first, last ) {
      var simple = type.slice( 0, 3 ) !== "nth",
        forward = type.slice( -4 ) !== "last",
        ofType = what === "of-type";
      return first === 1 && last === 0 ?
        // Shortcut for :nth-*(n)
        function( elem ) {
          return !!elem.parentNode;
        } :
        function( elem, context, xml ) {
          var cache, uniqueCache, outerCache, node, nodeIndex, start,
            dir = simple !== forward ? "nextSibling" : "previousSibling",
            parent = elem.parentNode,
            name = ofType && elem.nodeName.toLowerCase(),
            useCache = !xml && !ofType,
            diff = false;
          if ( parent ) {
            // :(first|last|only)-(child|of-type)
            if ( simple ) {
              while ( dir ) {
                node = elem;
                while ( (node = node[ dir ]) ) {
                  if ( ofType ?
                    node.nodeName.toLowerCase() === name :
                    node.nodeType === 1 ) {
                    return false;
                  }
                }
                // Reverse direction for :only-* (if we haven't yet done so)
                start = dir = type === "only" && !start && "nextSibling";
              }
              return true;
            }
            start = [ forward ? parent.firstChild : parent.lastChild ];
            // non-xml :nth-child(...) stores cache data on `parent`
            if ( forward && useCache ) {
              // Seek `elem` from a previously-cached index
              // ...in a gzip-friendly way
              node = parent;
              outerCache = node[ expando ] || (node[ expando ] = {});
              // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)
              uniqueCache = outerCache[ node.uniqueID ] ||
                (outerCache[ node.uniqueID ] = {});
              cache = uniqueCache[ type ] || [];
              nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
              diff = nodeIndex && cache[ 2 ];
              node = nodeIndex && parent.childNodes[ nodeIndex ];
              while ( (node = ++nodeIndex && node && node[ dir ] ||
                // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) ) {
                // When found, cache indexes on `parent` and break
                if ( node.nodeType === 1 && ++diff && node === elem ) {
                  uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
                  break;
                }
              }
            } else {
              // Use previously-cached element index if available
              if ( useCache ) {
                // ...in a gzip-friendly way
                node = elem;
                outerCache = node[ expando ] || (node[ expando ] = {});
                // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)
                uniqueCache = outerCache[ node.uniqueID ] ||
                  (outerCache[ node.uniqueID ] = {});
                cache = uniqueCache[ type ] || [];
                nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
                diff = nodeIndex;
              }
              // xml :nth-child(...)
              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
              if ( diff === false ) {
                // Use the same loop as above to seek `elem` from the start
                while ( (node = ++nodeIndex && node && node[ dir ] ||
                  (diff = nodeIndex = 0) || start.pop()) ) {
                  if ( ( ofType ?
                    node.nodeName.toLowerCase() === name :
                    node.nodeType === 1 ) &&
                    ++diff ) {
                    // Cache the index of each encountered element
                    if ( useCache ) {
                      outerCache = node[ expando ] || (node[ expando ] = {});
                      // Support: IE <9 only
                      // Defend against cloned attroperties (jQuery gh-1709)
                      uniqueCache = outerCache[ node.uniqueID ] ||
                        (outerCache[ node.uniqueID ] = {});
                      uniqueCache[ type ] = [ dirruns, diff ];
                    }
                    if ( node === elem ) {
                      break;
                    }
                  }
                }
              }
            }
            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || ( diff % first === 0 && diff / first >= 0 );
          }
        };
    },
    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );
      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }
      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }
      return fn;
    }
  },
  pseudos: {
    // Potentially complex pseudos
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );
      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;
          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          // Don't keep the element (issue #299)
          input[0] = null;
          return !results.pop();
        };
    }),
    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),
    "contains": markFunction(function( text ) {
      text = text.replace( runescape, funescape );
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),
    // "Whether an element is represented by a :lang() selector
    // is based solely on the element's language value
    // being equal to the identifier C,
    // or beginning with the identifier C immediately followed by "-".
    // The matching of C against the element's language value is performed case-insensitively.
    // The identifier C does not have to be a valid language name."
    // http://www.w3.org/TR/selectors/#lang-pseudo
    "lang": markFunction( function( lang ) {
      // lang value must be a valid identifier
      if ( !ridentifier.test(lang || "") ) {
        Sizzle.error( "unsupported lang: " + lang );
      }
      lang = lang.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        var elemLang;
        do {
          if ( (elemLang = documentIsHTML ?
            elem.lang :
            elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
            elemLang = elemLang.toLowerCase();
            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
          }
        } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
        return false;
      };
    }),
    // Miscellaneous
    "target": function( elem ) {
      var hash = window.location && window.location.hash;
      return hash && hash.slice( 1 ) === elem.id;
    },
    "root": function( elem ) {
      return elem === docElem;
    },
    "focus": function( elem ) {
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },
    // Boolean properties
    "enabled": function( elem ) {
      return elem.disabled === false;
    },
    "disabled": function( elem ) {
      return elem.disabled === true;
    },
    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },
    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }
      return elem.selected === true;
    },
    // Contents
    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
      //   but not by others (comment: 8; processing instruction: 7; etc.)
      // nodeType < 6 works because attributes (2) do not appear as children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        if ( elem.nodeType < 6 ) {
          return false;
        }
      }
      return true;
    },
    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },
    // Element/input types
    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },
    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },
    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },
    "text": function( elem ) {
      var attr;
      return elem.nodeName.toLowerCase() === "input" &&
        elem.type === "text" &&
        // Support: IE<8
        // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
    },
    // Position-in-collection
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),
    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),
    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),
    "even": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 0;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),
    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 1;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),
    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),
    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};
Expr.pseudos["nth"] = Expr.pseudos["eq"];
// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
  Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
  Expr.pseudos[ i ] = createButtonPseudo( i );
}
// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();
tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ selector + " " ];
  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }
  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;
  while ( soFar ) {
    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( (tokens = []) );
    }
    matched = false;
    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      matched = match.shift();
      tokens.push({
        value: matched,
        // Cast descendant combinators to space
        type: match[0].replace( rtrim, " " )
      });
      soFar = soFar.slice( matched.length );
    }
    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {
        matched = match.shift();
        tokens.push({
          value: matched,
          type: type,
          matches: match
        });
        soFar = soFar.slice( matched.length );
      }
    }
    if ( !matched ) {
      break;
    }
  }
  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
};
function toSelector( tokens ) {
  var i = 0,
    len = tokens.length,
    selector = "";
  for ( ; i < len; i++ ) {
    selector += tokens[i].value;
  }
  return selector;
}
function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    checkNonElements = base && dir === "parentNode",
    doneName = done++;
  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( elem.nodeType === 1 || checkNonElements ) {
          return matcher( elem, context, xml );
        }
      }
    } :
    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      var oldCache, uniqueCache, outerCache,
        newCache = [ dirruns, doneName ];
      // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
      if ( xml ) {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            if ( matcher( elem, context, xml ) ) {
              return true;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            outerCache = elem[ expando ] || (elem[ expando ] = {});
            // Support: IE <9 only
            // Defend against cloned attroperties (jQuery gh-1709)
            uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
            if ( (oldCache = uniqueCache[ dir ]) &&
              oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
              // Assign to newCache so results back-propagate to previous elements
              return (newCache[ 2 ] = oldCache[ 2 ]);
            } else {
              // Reuse newcache so results back-propagate to previous elements
              uniqueCache[ dir ] = newCache;
              // A match means we're done; a fail means we have to keep checking
              if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
                return true;
              }
            }
          }
        }
      }
    };
}
function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}
function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}
function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;
  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }
  return newUnmatched;
}
function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,
      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,
      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
          // ...intermediate processing is necessary
          [] :
          // ...otherwise use results directly
          results :
        matcherIn;
    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }
    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );
      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }
    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }
        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
            seed[temp] = !(results[temp] = elem);
          }
        }
      }
    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}
function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,
    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
      // Avoid hanging onto element (issue #299)
      checkContext = null;
      return ret;
    } ];
  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && toSelector(
            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
          ).replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && toSelector( tokens )
        );
      }
      matchers.push( matcher );
    }
  }
  return elementMatcher( matchers );
}
function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  var bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, outermost ) {
      var elem, j, matcher,
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        setMatched = [],
        contextBackup = outermostContext,
        // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
        // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
        len = elems.length;
      if ( outermost ) {
        outermostContext = context === document || context || outermost;
      }
      // Add elements passing elementMatchers directly to results
      // Support: IE<9, Safari
      // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
      for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          j = 0;
          if ( !context && elem.ownerDocument !== document ) {
            setDocument( elem );
            xml = !documentIsHTML;
          }
          while ( (matcher = elementMatchers[j++]) ) {
            if ( matcher( elem, context || document, xml) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
          }
        }
        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }
          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }
      // `i` is now the count of elements visited above, and adding it to `matchedCount`
      // makes the latter nonnegative.
      matchedCount += i;
      // Apply set filters to unmatched elements
      // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
      // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
      // no element matchers and no seed.
      // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
      // case, which will result in a "00" `matchedCount` that differs from `i` but is also
      // numerically zero.
      if ( bySet && i !== matchedCount ) {
        j = 0;
        while ( (matcher = setMatchers[j++]) ) {
          matcher( unmatched, setMatched, context, xml );
        }
        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }
          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }
        // Add matches to results
        push.apply( results, setMatched );
        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {
          Sizzle.uniqueSort( results );
        }
      }
      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }
      return unmatched;
    };
  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}
compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ selector + " " ];
  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !match ) {
      match = tokenize( selector );
    }
    i = match.length;
    while ( i-- ) {
      cached = matcherFromTokens( match[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }
    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
    // Save selector and tokenization
    cached.selector = selector;
  }
  return cached;
};
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
  var i, tokens, token, type, find,
    compiled = typeof selector === "function" && selector,
    match = !seed && tokenize( (selector = compiled.selector || selector) );
  results = results || [];
  // Try to minimize operations if there is only one selector in the list and no seed
  // (the latter of which guarantees us context)
  if ( match.length === 1 ) {
    // Reduce context if the leading compound selector is an ID
    tokens = match[0] = match[0].slice( 0 );
    if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
        support.getById && context.nodeType === 9 && documentIsHTML &&
        Expr.relative[ tokens[1].type ] ) {
      context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
      if ( !context ) {
        return results;
      // Precompiled matchers will still verify ancestry, so step up a level
      } else if ( compiled ) {
        context = context.parentNode;
      }
      selector = selector.slice( tokens.shift().value.length );
    }
    // Fetch a seed set for right-to-left matching
    i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
    while ( i-- ) {
      token = tokens[i];
      // Abort if we hit a combinator
      if ( Expr.relative[ (type = token.type) ] ) {
        break;
      }
      if ( (find = Expr.find[ type ]) ) {
        // Search, expanding context for leading sibling combinators
        if ( (seed = find(
          token.matches[0].replace( runescape, funescape ),
          rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
        )) ) {
          // If seed is empty or no tokens remain, we can return early
          tokens.splice( i, 1 );
          selector = seed.length && toSelector( tokens );
          if ( !selector ) {
            push.apply( results, seed );
            return results;
          }
          break;
        }
      }
    }
  }
  // Compile and execute a filtering function if one is not provided
  // Provide `match` to avoid retokenization if we modified the selector above
  ( compiled || compile( selector, match ) )(
    seed,
    context,
    !documentIsHTML,
    results,
    !context || rsibling.test( selector ) && testContext( context.parentNode ) || context
  );
  return results;
};
// One-time assignments
// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;
// Initialize against the default document
setDocument();
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
  // Should return 1, but returns 4 (following)
  return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
  div.innerHTML = "<a href='#'></a>";
  return div.firstChild.getAttribute("href") === "#" ;
}) ) {
  addHandle( "type|href|height|width", function( elem, name, isXML ) {
    if ( !isXML ) {
      return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
    }
  });
}
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
  div.innerHTML = "<input/>";
  div.firstChild.setAttribute( "value", "" );
  return div.firstChild.getAttribute( "value" ) === "";
}) ) {
  addHandle( "value", function( elem, name, isXML ) {
    if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
      return elem.defaultValue;
    }
  });
}
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
  return div.getAttribute("disabled") == null;
}) ) {
  addHandle( booleans, function( elem, name, isXML ) {
    var val;
    if ( !isXML ) {
      return elem[ name ] === true ? name.toLowerCase() :
          (val = elem.getAttributeNode( name )) && val.specified ?
          val.value :
        null;
    }
  });
}
return Sizzle;
})( window );
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
var dir = function( elem, dir, until ) {
  var matched = [],
    truncate = until !== undefined;
  while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
    if ( elem.nodeType === 1 ) {
      if ( truncate && jQuery( elem ).is( until ) ) {
        break;
      }
      matched.push( elem );
    }
  }
  return matched;
};
var siblings = function( n, elem ) {
  var matched = [];
  for ( ; n; n = n.nextSibling ) {
    if ( n.nodeType === 1 && n !== elem ) {
      matched.push( n );
    }
  }
  return matched;
};
var rneedsContext = jQuery.expr.match.needsContext;
var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
var risSimple = /^.[^:#\[\.,]*$/;
// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep( elements, function( elem, i ) {
      /* jshint -W018 */
      return !!qualifier.call( elem, i, elem ) !== not;
    } );
  }
  if ( qualifier.nodeType ) {
    return jQuery.grep( elements, function( elem ) {
      return ( elem === qualifier ) !== not;
    } );
  }
  if ( typeof qualifier === "string" ) {
    if ( risSimple.test( qualifier ) ) {
      return jQuery.filter( qualifier, elements, not );
    }
    qualifier = jQuery.filter( qualifier, elements );
  }
  return jQuery.grep( elements, function( elem ) {
    return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
  } );
}
jQuery.filter = function( expr, elems, not ) {
  var elem = elems[ 0 ];
  if ( not ) {
    expr = ":not(" + expr + ")";
  }
  return elems.length === 1 && elem.nodeType === 1 ?
    jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
    jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
      return elem.nodeType === 1;
    } ) );
};
jQuery.fn.extend( {
  find: function( selector ) {
    var i,
      len = this.length,
      ret = [],
      self = this;
    if ( typeof selector !== "string" ) {
      return this.pushStack( jQuery( selector ).filter( function() {
        for ( i = 0; i < len; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      } ) );
    }
    for ( i = 0; i < len; i++ ) {
      jQuery.find( selector, self[ i ], ret );
    }
    // Needed because $( selector, context ) becomes $( context ).find( selector )
    ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
    ret.selector = this.selector ? this.selector + " " + selector : selector;
    return ret;
  },
  filter: function( selector ) {
    return this.pushStack( winnow( this, selector || [], false ) );
  },
  not: function( selector ) {
    return this.pushStack( winnow( this, selector || [], true ) );
  },
  is: function( selector ) {
    return !!winnow(
      this,
      // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test( selector ) ?
        jQuery( selector ) :
        selector || [],
      false
    ).length;
  }
} );
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,
  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  init = jQuery.fn.init = function( selector, context, root ) {
    var match, elem;
    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }
    // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery;
    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector[ 0 ] === "<" &&
        selector[ selector.length - 1 ] === ">" &&
        selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];
      } else {
        match = rquickExpr.exec( selector );
      }
      // Match html or make sure no context is specified for #id
      if ( match && ( match[ 1 ] || !context ) ) {
        // HANDLE: $(html) -> $(array)
        if ( match[ 1 ] ) {
          context = context instanceof jQuery ? context[ 0 ] : context;
          // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge( this, jQuery.parseHTML(
            match[ 1 ],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ) );
          // HANDLE: $(html, props)
          if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
            for ( match in context ) {
              // Properties of context are called as methods if possible
              if ( jQuery.isFunction( this[ match ] ) ) {
                this[ match ]( context[ match ] );
              // ...and otherwise set as attributes
              } else {
                this.attr( match, context[ match ] );
              }
            }
          }
          return this;
        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[ 2 ] );
          // Support: Blackberry 4.6
          // gEBID returns nodes no longer in the document (#6963)
          if ( elem && elem.parentNode ) {
            // Inject the element directly into the jQuery object
            this.length = 1;
            this[ 0 ] = elem;
          }
          this.context = document;
          this.selector = selector;
          return this;
        }
      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || root ).find( selector );
      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }
    // HANDLE: $(DOMElement)
    } else if ( selector.nodeType ) {
      this.context = this[ 0 ] = selector;
      this.length = 1;
      return this;
    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return root.ready !== undefined ?
        root.ready( selector ) :
        // Execute immediately if ready is not present
        selector( jQuery );
    }
    if ( selector.selector !== undefined ) {
      this.selector = selector.selector;
      this.context = selector.context;
    }
    return jQuery.makeArray( selector, this );
  };
// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;
// Initialize central reference
rootjQuery = jQuery( document );
var rparentsprev = /^(?:parents|prev(?:Until|All))/,
  // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
jQuery.fn.extend( {
  has: function( target ) {
    var targets = jQuery( target, this ),
      l = targets.length;
    return this.filter( function() {
      var i = 0;
      for ( ; i < l; i++ ) {
        if ( jQuery.contains( this, targets[ i ] ) ) {
          return true;
        }
      }
    } );
  },
  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      matched = [],
      pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
        jQuery( selectors, context || this.context ) :
        0;
    for ( ; i < l; i++ ) {
      for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
        // Always skip document fragments
        if ( cur.nodeType < 11 && ( pos ?
          pos.index( cur ) > -1 :
          // Don't pass non-elements to Sizzle
          cur.nodeType === 1 &&
            jQuery.find.matchesSelector( cur, selectors ) ) ) {
          matched.push( cur );
          break;
        }
      }
    }
    return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
  },
  // Determine the position of an element within the set
  index: function( elem ) {
    // No argument, return index in parent
    if ( !elem ) {
      return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
    }
    // Index in selector
    if ( typeof elem === "string" ) {
      return indexOf.call( jQuery( elem ), this[ 0 ] );
    }
    // Locate the position of the desired element
    return indexOf.call( this,
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[ 0 ] : elem
    );
  },
  add: function( selector, context ) {
    return this.pushStack(
      jQuery.uniqueSort(
        jQuery.merge( this.get(), jQuery( selector, context ) )
      )
    );
  },
  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter( selector )
    );
  }
} );
function sibling( cur, dir ) {
  while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
  return cur;
}
jQuery.each( {
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return siblings( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return siblings( elem.firstChild );
  },
  contents: function( elem ) {
    return elem.contentDocument || jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var matched = jQuery.map( this, fn, until );
    if ( name.slice( -5 ) !== "Until" ) {
      selector = until;
    }
    if ( selector && typeof selector === "string" ) {
      matched = jQuery.filter( selector, matched );
    }
    if ( this.length > 1 ) {
      // Remove duplicates
      if ( !guaranteedUnique[ name ] ) {
        jQuery.uniqueSort( matched );
      }
      // Reverse order for parents* and prev-derivatives
      if ( rparentsprev.test( name ) ) {
        matched.reverse();
      }
    }
    return this.pushStack( matched );
  };
} );
var rnotwhite = ( /\S+/g );
// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
  var object = {};
  jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
    object[ flag ] = true;
  } );
  return object;
}
/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {
  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    createOptions( options ) :
    jQuery.extend( {}, options );
  var // Flag to know if list is currently firing
    firing,
    // Last fire value for non-forgettable lists
    memory,
    // Flag to know if list was already fired
    fired,
    // Flag to prevent firing
    locked,
    // Actual callback list
    list = [],
    // Queue of execution data for repeatable lists
    queue = [],
    // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
    // Fire callbacks
    fire = function() {
      // Enforce single-firing
      locked = options.once;
      // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes
      fired = firing = true;
      for ( ; queue.length; firingIndex = -1 ) {
        memory = queue.shift();
        while ( ++firingIndex < list.length ) {
          // Run callback and check for early termination
          if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
            options.stopOnFalse ) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      }
      // Forget the data if we're done with it
      if ( !options.memory ) {
        memory = false;
      }
      firing = false;
      // Clean up if we're done firing for good
      if ( locked ) {
        // Keep an empty list if we have data for future add calls
        if ( memory ) {
          list = [];
        // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
    // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {
          // If we have memory from a past run, we should fire after adding
          if ( memory && !firing ) {
            firingIndex = list.length - 1;
            queue.push( memory );
          }
          ( function add( args ) {
            jQuery.each( args, function( _, arg ) {
              if ( jQuery.isFunction( arg ) ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
                // Inspect recursively
                add( arg );
              }
            } );
          } )( arguments );
          if ( memory && !firing ) {
            fire();
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        jQuery.each( arguments, function( _, arg ) {
          var index;
          while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
            list.splice( index, 1 );
            // Handle firing indexes
            if ( index <= firingIndex ) {
              firingIndex--;
            }
          }
        } );
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function( fn ) {
        return fn ?
          jQuery.inArray( fn, list ) > -1 :
          list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function() {
        if ( list ) {
          list = [];
        }
        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function() {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function() {
        locked = queue = [];
        if ( !memory ) {
          list = memory = "";
        }
        return this;
      },
      locked: function() {
        return !!locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        if ( !locked ) {
          args = args || [];
          args = [ context, args.slice ? args.slice() : args ];
          queue.push( args );
          if ( !firing ) {
            fire();
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };
  return self;
};
jQuery.extend( {
  Deferred: function( func ) {
    var tuples = [
        // action, add listener, listener list, final state
        [ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
        [ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
        [ "notify", "progress", jQuery.Callbacks( "memory" ) ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        then: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return jQuery.Deferred( function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {
              var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[ tuple[ 1 ] ]( function() {
                var returned = fn && fn.apply( this, arguments );
                if ( returned && jQuery.isFunction( returned.promise ) ) {
                  returned.promise()
                    .progress( newDefer.notify )
                    .done( newDefer.resolve )
                    .fail( newDefer.reject );
                } else {
                  newDefer[ tuple[ 0 ] + "With" ](
                    this === promise ? newDefer.promise() : this,
                    fn ? [ returned ] : arguments
                  );
                }
              } );
            } );
            fns = null;
          } ).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};
    // Keep pipe for back-compat
    promise.pipe = promise.then;
    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 3 ];
      // promise[ done | fail | progress ] = list.add
      promise[ tuple[ 1 ] ] = list.add;
      // Handle state
      if ( stateString ) {
        list.add( function() {
          // state = [ resolved | rejected ]
          state = stateString;
        // [ reject_list | resolve_list ].disable; progress_list.lock
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
      }
      // deferred[ resolve | reject | notify ]
      deferred[ tuple[ 0 ] ] = function() {
        deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
        return this;
      };
      deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
    } );
    // Make the deferred a promise
    promise.promise( deferred );
    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }
    // All done!
    return deferred;
  },
  // Deferred helper
  when: function( subordinate /* , ..., subordinateN */ ) {
    var i = 0,
      resolveValues = slice.call( arguments ),
      length = resolveValues.length,
      // the count of uncompleted subordinates
      remaining = length !== 1 ||
        ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
      // the master Deferred.
      // If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
      // Update function for both resolve and progress values
      updateFunc = function( i, contexts, values ) {
        return function( value ) {
          contexts[ i ] = this;
          values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
          if ( values === progressValues ) {
            deferred.notifyWith( contexts, values );
          } else if ( !( --remaining ) ) {
            deferred.resolveWith( contexts, values );
          }
        };
      },
      progressValues, progressContexts, resolveContexts;
    // Add listeners to Deferred subordinates; treat others as resolved
    if ( length > 1 ) {
      progressValues = new Array( length );
      progressContexts = new Array( length );
      resolveContexts = new Array( length );
      for ( ; i < length; i++ ) {
        if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
          resolveValues[ i ].promise()
            .progress( updateFunc( i, progressContexts, progressValues ) )
            .done( updateFunc( i, resolveContexts, resolveValues ) )
            .fail( deferred.reject );
        } else {
          --remaining;
        }
      }
    }
    // If we're not waiting on anything, resolve the master
    if ( !remaining ) {
      deferred.resolveWith( resolveContexts, resolveValues );
    }
    return deferred.promise();
  }
} );
// The deferred used on DOM ready
var readyList;
jQuery.fn.ready = function( fn ) {
  // Add the callback
  jQuery.ready.promise().done( fn );
  return this;
};
jQuery.extend( {
  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,
  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,
  // Hold (or release) the ready event
  holdReady: function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  },
  // Handle when the DOM is ready
  ready: function( wait ) {
    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }
    // Remember that the DOM is ready
    jQuery.isReady = true;
    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }
    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );
    // Trigger any bound ready events
    if ( jQuery.fn.triggerHandler ) {
      jQuery( document ).triggerHandler( "ready" );
      jQuery( document ).off( "ready" );
    }
  }
} );
/**
 * The ready event handler and self cleanup method
 */
function completed() {
  document.removeEventListener( "DOMContentLoaded", completed );
  window.removeEventListener( "load", completed );
  jQuery.ready();
}
jQuery.ready.promise = function( obj ) {
  if ( !readyList ) {
    readyList = jQuery.Deferred();
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE9-10 only
    // Older IE sometimes signals "interactive" too soon
    if ( document.readyState === "complete" ||
      ( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      window.setTimeout( jQuery.ready );
    } else {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", completed );
      // A fallback to window.onload, that will always work
      window.addEventListener( "load", completed );
    }
  }
  return readyList.promise( obj );
};
// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
  var i = 0,
    len = elems.length,
    bulk = key == null;
  // Sets many values
  if ( jQuery.type( key ) === "object" ) {
    chainable = true;
    for ( i in key ) {
      access( elems, fn, i, key[ i ], true, emptyGet, raw );
    }
  // Sets one value
  } else if ( value !== undefined ) {
    chainable = true;
    if ( !jQuery.isFunction( value ) ) {
      raw = true;
    }
    if ( bulk ) {
      // Bulk operations run against the entire set
      if ( raw ) {
        fn.call( elems, value );
        fn = null;
      // ...except when executing function values
      } else {
        bulk = fn;
        fn = function( elem, key, value ) {
          return bulk.call( jQuery( elem ), value );
        };
      }
    }
    if ( fn ) {
      for ( ; i < len; i++ ) {
        fn(
          elems[ i ], key, raw ?
          value :
          value.call( elems[ i ], i, fn( elems[ i ], key ) )
        );
      }
    }
  }
  return chainable ?
    elems :
    // Gets
    bulk ?
      fn.call( elems ) :
      len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {
  // Accepts only:
  //  - Node
  //    - Node.ELEMENT_NODE
  //    - Node.DOCUMENT_NODE
  //  - Object
  //    - Any
  /* jshint -W018 */
  return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};
function Data() {
  this.expando = jQuery.expando + Data.uid++;
}
Data.uid = 1;
Data.prototype = {
  register: function( owner, initial ) {
    var value = initial || {};
    // If it is a node unlikely to be stringify-ed or looped over
    // use plain assignment
    if ( owner.nodeType ) {
      owner[ this.expando ] = value;
    // Otherwise secure it in a non-enumerable, non-writable property
    // configurability must be true to allow the property to be
    // deleted with the delete operator
    } else {
      Object.defineProperty( owner, this.expando, {
        value: value,
        writable: true,
        configurable: true
      } );
    }
    return owner[ this.expando ];
  },
  cache: function( owner ) {
    // We can accept data for non-element nodes in modern browsers,
    // but we should not, see #8335.
    // Always return an empty object.
    if ( !acceptData( owner ) ) {
      return {};
    }
    // Check if the owner object already has a cache
    var value = owner[ this.expando ];
    // If not, create one
    if ( !value ) {
      value = {};
      // We can accept data for non-element nodes in modern browsers,
      // but we should not, see #8335.
      // Always return an empty object.
      if ( acceptData( owner ) ) {
        // If it is a node unlikely to be stringify-ed or looped over
        // use plain assignment
        if ( owner.nodeType ) {
          owner[ this.expando ] = value;
        // Otherwise secure it in a non-enumerable property
        // configurable must be true to allow the property to be
        // deleted when data is removed
        } else {
          Object.defineProperty( owner, this.expando, {
            value: value,
            configurable: true
          } );
        }
      }
    }
    return value;
  },
  set: function( owner, data, value ) {
    var prop,
      cache = this.cache( owner );
    // Handle: [ owner, key, value ] args
    if ( typeof data === "string" ) {
      cache[ data ] = value;
    // Handle: [ owner, { properties } ] args
    } else {
      // Copy the properties one-by-one to the cache object
      for ( prop in data ) {
        cache[ prop ] = data[ prop ];
      }
    }
    return cache;
  },
  get: function( owner, key ) {
    return key === undefined ?
      this.cache( owner ) :
      owner[ this.expando ] && owner[ this.expando ][ key ];
  },
  access: function( owner, key, value ) {
    var stored;
    // In cases where either:
    //
    //   1. No key was specified
    //   2. A string key was specified, but no value provided
    //
    // Take the "read" path and allow the get method to determine
    // which value to return, respectively either:
    //
    //   1. The entire cache object
    //   2. The data stored at the key
    //
    if ( key === undefined ||
        ( ( key && typeof key === "string" ) && value === undefined ) ) {
      stored = this.get( owner, key );
      return stored !== undefined ?
        stored : this.get( owner, jQuery.camelCase( key ) );
    }
    // When the key is not a string, or both a key and value
    // are specified, set or extend (existing objects) with either:
    //
    //   1. An object of properties
    //   2. A key and value
    //
    this.set( owner, key, value );
    // Since the "set" path can have two possible entry points
    // return the expected data based on which path was taken[*]
    return value !== undefined ? value : key;
  },
  remove: function( owner, key ) {
    var i, name, camel,
      cache = owner[ this.expando ];
    if ( cache === undefined ) {
      return;
    }
    if ( key === undefined ) {
      this.register( owner );
    } else {
      // Support array or space separated string of keys
      if ( jQuery.isArray( key ) ) {
        // If "name" is an array of keys...
        // When data is initially created, via ("key", "val") signature,
        // keys will be converted to camelCase.
        // Since there is no way to tell _how_ a key was added, remove
        // both plain key and camelCase key. #12786
        // This will only penalize the array argument path.
        name = key.concat( key.map( jQuery.camelCase ) );
      } else {
        camel = jQuery.camelCase( key );
        // Try the string as a key before any manipulation
        if ( key in cache ) {
          name = [ key, camel ];
        } else {
          // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace
          name = camel;
          name = name in cache ?
            [ name ] : ( name.match( rnotwhite ) || [] );
        }
      }
      i = name.length;
      while ( i-- ) {
        delete cache[ name[ i ] ];
      }
    }
    // Remove the expando if there's no more data
    if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
      // Support: Chrome <= 35-45+
      // Webkit & Blink performance suffers when deleting properties
      // from DOM nodes, so set to undefined instead
      // https://code.google.com/p/chromium/issues/detail?id=378607
      if ( owner.nodeType ) {
        owner[ this.expando ] = undefined;
      } else {
        delete owner[ this.expando ];
      }
    }
  },
  hasData: function( owner ) {
    var cache = owner[ this.expando ];
    return cache !== undefined && !jQuery.isEmptyObject( cache );
  }
};
var dataPriv = new Data();
var dataUser = new Data();
//  Implementation Summary
//
//  1. Enforce API surface and semantic compatibility with 1.9.x branch
//  2. Improve the module's maintainability by reducing the storage
//    paths to a single mechanism.
//  3. Use the same single mechanism to support "private" and "user" data.
//  4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//  5. Avoid exposing implementation details on user objects (eg. expando properties)
//  6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  rmultiDash = /[A-Z]/g;
function dataAttr( elem, key, data ) {
  var name;
  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {
    name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
    data = elem.getAttribute( name );
    if ( typeof data === "string" ) {
      try {
        data = data === "true" ? true :
          data === "false" ? false :
          data === "null" ? null :
          // Only convert to a number if it doesn't change the string
          +data + "" === data ? +data :
          rbrace.test( data ) ? jQuery.parseJSON( data ) :
          data;
      } catch ( e ) {}
      // Make sure we set the data so it isn't changed later
      dataUser.set( elem, key, data );
    } else {
      data = undefined;
    }
  }
  return data;
}
jQuery.extend( {
  hasData: function( elem ) {
    return dataUser.hasData( elem ) || dataPriv.hasData( elem );
  },
  data: function( elem, name, data ) {
    return dataUser.access( elem, name, data );
  },
  removeData: function( elem, name ) {
    dataUser.remove( elem, name );
  },
  // TODO: Now that all calls to _data and _removeData have been replaced
  // with direct calls to dataPriv methods, these can be deprecated.
  _data: function( elem, name, data ) {
    return dataPriv.access( elem, name, data );
  },
  _removeData: function( elem, name ) {
    dataPriv.remove( elem, name );
  }
} );
jQuery.fn.extend( {
  data: function( key, value ) {
    var i, name, data,
      elem = this[ 0 ],
      attrs = elem && elem.attributes;
    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = dataUser.get( elem );
        if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
          i = attrs.length;
          while ( i-- ) {
            // Support: IE11+
            // The attrs elements can be null (#14894)
            if ( attrs[ i ] ) {
              name = attrs[ i ].name;
              if ( name.indexOf( "data-" ) === 0 ) {
                name = jQuery.camelCase( name.slice( 5 ) );
                dataAttr( elem, name, data[ name ] );
              }
            }
          }
          dataPriv.set( elem, "hasDataAttrs", true );
        }
      }
      return data;
    }
    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each( function() {
        dataUser.set( this, key );
      } );
    }
    return access( this, function( value ) {
      var data, camelKey;
      // The calling jQuery object (element matches) is not empty
      // (and therefore has an element appears at this[ 0 ]) and the
      // `value` parameter was not undefined. An empty jQuery object
      // will result in `undefined` for elem = this[ 0 ] which will
      // throw an exception if an attempt to read a data cache is made.
      if ( elem && value === undefined ) {
        // Attempt to get data from the cache
        // with the key as-is
        data = dataUser.get( elem, key ) ||
          // Try to find dashed key if it exists (gh-2779)
          // This is for 2.2.x only
          dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );
        if ( data !== undefined ) {
          return data;
        }
        camelKey = jQuery.camelCase( key );
        // Attempt to get data from the cache
        // with the key camelized
        data = dataUser.get( elem, camelKey );
        if ( data !== undefined ) {
          return data;
        }
        // Attempt to "discover" the data in
        // HTML5 custom data-* attrs
        data = dataAttr( elem, camelKey, undefined );
        if ( data !== undefined ) {
          return data;
        }
        // We tried really hard, but the data doesn't exist.
        return;
      }
      // Set the data...
      camelKey = jQuery.camelCase( key );
      this.each( function() {
        // First, attempt to store a copy or reference of any
        // data that might've been store with a camelCased key.
        var data = dataUser.get( this, camelKey );
        // For HTML5 data-* attribute interop, we have to
        // store property names with dashes in a camelCase form.
        // This might not apply to all properties...*
        dataUser.set( this, camelKey, value );
        // *... In the case of properties that might _actually_
        // have dashes, we need to also store a copy of that
        // unchanged property.
        if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
          dataUser.set( this, key, value );
        }
      } );
    }, null, value, arguments.length > 1, null, true );
  },
  removeData: function( key ) {
    return this.each( function() {
      dataUser.remove( this, key );
    } );
  }
} );
jQuery.extend( {
  queue: function( elem, type, data ) {
    var queue;
    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = dataPriv.get( elem, type );
      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || jQuery.isArray( data ) ) {
          queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },
  dequeue: function( elem, type ) {
    type = type || "fx";
    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };
    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }
    if ( fn ) {
      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }
      // Clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }
    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },
  // Not public - generate a queueHooks object, or return the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
      empty: jQuery.Callbacks( "once memory" ).add( function() {
        dataPriv.remove( elem, [ type + "queue", key ] );
      } )
    } );
  }
} );
jQuery.fn.extend( {
  queue: function( type, data ) {
    var setter = 2;
    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }
    if ( arguments.length < setter ) {
      return jQuery.queue( this[ 0 ], type );
    }
    return data === undefined ?
      this :
      this.each( function() {
        var queue = jQuery.queue( this, type, data );
        // Ensure a hooks for this queue
        jQuery._queueHooks( this, type );
        if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      } );
  },
  dequeue: function( type ) {
    return this.each( function() {
      jQuery.dequeue( this, type );
    } );
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },
  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };
    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";
    while ( i-- ) {
      tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
var isHidden = function( elem, el ) {
    // isHidden might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;
    return jQuery.css( elem, "display" ) === "none" ||
      !jQuery.contains( elem.ownerDocument, elem );
  };
function adjustCSS( elem, prop, valueParts, tween ) {
  var adjusted,
    scale = 1,
    maxIterations = 20,
    currentValue = tween ?
      function() { return tween.cur(); } :
      function() { return jQuery.css( elem, prop, "" ); },
    initial = currentValue(),
    unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
    // Starting value computation is required for potential unit mismatches
    initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
      rcssNum.exec( jQuery.css( elem, prop ) );
  if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
    // Trust units reported by jQuery.css
    unit = unit || initialInUnit[ 3 ];
    // Make sure we update the tween properties later on
    valueParts = valueParts || [];
    // Iteratively approximate from a nonzero starting point
    initialInUnit = +initial || 1;
    do {
      // If previous iteration zeroed out, double until we get *something*.
      // Use string for doubling so we don't accidentally see scale as unchanged below
      scale = scale || ".5";
      // Adjust and apply
      initialInUnit = initialInUnit / scale;
      jQuery.style( elem, prop, initialInUnit + unit );
    // Update scale, tolerating zero or NaN from tween.cur()
    // Break the loop if scale is unchanged or perfect, or if we've just had enough.
    } while (
      scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
    );
  }
  if ( valueParts ) {
    initialInUnit = +initialInUnit || +initial || 0;
    // Apply relative offset (+=/-=) if specified
    adjusted = valueParts[ 1 ] ?
      initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
      +valueParts[ 2 ];
    if ( tween ) {
      tween.unit = unit;
      tween.start = initialInUnit;
      tween.end = adjusted;
    }
  }
  return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );
var rtagName = ( /<([\w:-]+)/ );
var rscriptType = ( /^$|\/(?:java|ecma)script/i );
// We have to close these tags to support XHTML (#13200)
var wrapMap = {
  // Support: IE9
  option: [ 1, "<select multiple='multiple'>", "</select>" ],
  // XHTML parsers do not magically insert elements in the
  // same way that tag soup parsers do. So we cannot shorten
  // this by omitting <tbody> or other required elements.
  thead: [ 1, "<table>", "</table>" ],
  col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
  tr: [ 2, "<table><tbody>", "</tbody></table>" ],
  td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
  _default: [ 0, "", "" ]
};
// Support: IE9
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
function getAll( context, tag ) {
  // Support: IE9-11+
  // Use typeof to avoid zero-argument method invocation on host objects (#15151)
  var ret = typeof context.getElementsByTagName !== "undefined" ?
      context.getElementsByTagName( tag || "*" ) :
      typeof context.querySelectorAll !== "undefined" ?
        context.querySelectorAll( tag || "*" ) :
      [];
  return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
    jQuery.merge( [ context ], ret ) :
    ret;
}
// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
  var i = 0,
    l = elems.length;
  for ( ; i < l; i++ ) {
    dataPriv.set(
      elems[ i ],
      "globalEval",
      !refElements || dataPriv.get( refElements[ i ], "globalEval" )
    );
  }
}
var rhtml = /<|&#?\w+;/;
function buildFragment( elems, context, scripts, selection, ignored ) {
  var elem, tmp, tag, wrap, contains, j,
    fragment = context.createDocumentFragment(),
    nodes = [],
    i = 0,
    l = elems.length;
  for ( ; i < l; i++ ) {
    elem = elems[ i ];
    if ( elem || elem === 0 ) {
      // Add nodes directly
      if ( jQuery.type( elem ) === "object" ) {
        // Support: Android<4.1, PhantomJS<2
        // push.apply(_, arraylike) throws on ancient WebKit
        jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
      // Convert non-html into a text node
      } else if ( !rhtml.test( elem ) ) {
        nodes.push( context.createTextNode( elem ) );
      // Convert html into DOM nodes
      } else {
        tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
        // Deserialize a standard representation
        tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
        wrap = wrapMap[ tag ] || wrapMap._default;
        tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
        // Descend through wrappers to the right content
        j = wrap[ 0 ];
        while ( j-- ) {
          tmp = tmp.lastChild;
        }
        // Support: Android<4.1, PhantomJS<2
        // push.apply(_, arraylike) throws on ancient WebKit
        jQuery.merge( nodes, tmp.childNodes );
        // Remember the top-level container
        tmp = fragment.firstChild;
        // Ensure the created nodes are orphaned (#12392)
        tmp.textContent = "";
      }
    }
  }
  // Remove wrapper from fragment
  fragment.textContent = "";
  i = 0;
  while ( ( elem = nodes[ i++ ] ) ) {
    // Skip elements already in the context collection (trac-4087)
    if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
      if ( ignored ) {
        ignored.push( elem );
      }
      continue;
    }
    contains = jQuery.contains( elem.ownerDocument, elem );
    // Append to fragment
    tmp = getAll( fragment.appendChild( elem ), "script" );
    // Preserve script evaluation history
    if ( contains ) {
      setGlobalEval( tmp );
    }
    // Capture executables
    if ( scripts ) {
      j = 0;
      while ( ( elem = tmp[ j++ ] ) ) {
        if ( rscriptType.test( elem.type || "" ) ) {
          scripts.push( elem );
        }
      }
    }
  }
  return fragment;
}
( function() {
  var fragment = document.createDocumentFragment(),
    div = fragment.appendChild( document.createElement( "div" ) ),
    input = document.createElement( "input" );
  // Support: Android 4.0-4.3, Safari<=5.1
  // Check state lost if the name is set (#11217)
  // Support: Windows Web Apps (WWA)
  // `name` and `type` must use .setAttribute for WWA (#14901)
  input.setAttribute( "type", "radio" );
  input.setAttribute( "checked", "checked" );
  input.setAttribute( "name", "t" );
  div.appendChild( input );
  // Support: Safari<=5.1, Android<4.2
  // Older WebKit doesn't clone checked state correctly in fragments
  support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
  // Support: IE<=11+
  // Make sure textarea (and checkbox) defaultValue is properly cloned
  div.innerHTML = "<textarea>x</textarea>";
  support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
function returnTrue() {
  return true;
}
function returnFalse() {
  return false;
}
// Support: IE9
// See #13393 for more info
function safeActiveElement() {
  try {
    return document.activeElement;
  } catch ( err ) { }
}
function on( elem, types, selector, data, fn, one ) {
  var origFn, type;
  // Types can be a map of types/handlers
  if ( typeof types === "object" ) {
    // ( types-Object, selector, data )
    if ( typeof selector !== "string" ) {
      // ( types-Object, data )
      data = data || selector;
      selector = undefined;
    }
    for ( type in types ) {
      on( elem, type, selector, data, types[ type ], one );
    }
    return elem;
  }
  if ( data == null && fn == null ) {
    // ( types, fn )
    fn = selector;
    data = selector = undefined;
  } else if ( fn == null ) {
    if ( typeof selector === "string" ) {
      // ( types, selector, fn )
      fn = data;
      data = undefined;
    } else {
      // ( types, data, fn )
      fn = data;
      data = selector;
      selector = undefined;
    }
  }
  if ( fn === false ) {
    fn = returnFalse;
  } else if ( !fn ) {
    return elem;
  }
  if ( one === 1 ) {
    origFn = fn;
    fn = function( event ) {
      // Can use an empty set, since event contains the info
      jQuery().off( event );
      return origFn.apply( this, arguments );
    };
    // Use same guid so caller can remove using origFn
    fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
  }
  return elem.each( function() {
    jQuery.event.add( this, types, fn, data, selector );
  } );
}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {
  global: {},
  add: function( elem, types, handler, data, selector ) {
    var handleObjIn, eventHandle, tmp,
      events, t, handleObj,
      special, handlers, type, namespaces, origType,
      elemData = dataPriv.get( elem );
    // Don't attach events to noData or text/comment nodes (but allow plain objects)
    if ( !elemData ) {
      return;
    }
    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }
    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }
    // Init the element's event structure and main handler, if this is the first
    if ( !( events = elemData.events ) ) {
      events = elemData.events = {};
    }
    if ( !( eventHandle = elemData.handle ) ) {
      eventHandle = elemData.handle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
          jQuery.event.dispatch.apply( elem, arguments ) : undefined;
      };
    }
    // Handle multiple events separated by a space
    types = ( types || "" ).match( rnotwhite ) || [ "" ];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[ t ] ) || [];
      type = origType = tmp[ 1 ];
      namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
      // There *must* be a type, no attaching namespace-only handlers
      if ( !type ) {
        continue;
      }
      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};
      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;
      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};
      // handleObj is passed to all event handlers
      handleObj = jQuery.extend( {
        type: type,
        origType: origType,
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join( "." )
      }, handleObjIn );
      // Init the event handler queue if we're the first
      if ( !( handlers = events[ type ] ) ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;
        // Only use addEventListener if the special events handler returns false
        if ( !special.setup ||
          special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle );
          }
        }
      }
      if ( special.add ) {
        special.add.call( elem, handleObj );
        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }
      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }
      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }
  },
  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {
    var j, origCount, tmp,
      events, t, handleObj,
      special, handlers, type, namespaces, origType,
      elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
    if ( !elemData || !( events = elemData.events ) ) {
      return;
    }
    // Once for each type.namespace in types; type may be omitted
    types = ( types || "" ).match( rnotwhite ) || [ "" ];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[ t ] ) || [];
      type = origType = tmp[ 1 ];
      namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }
      special = jQuery.event.special[ type ] || {};
      type = ( selector ? special.delegateType : special.bindType ) || type;
      handlers = events[ type ] || [];
      tmp = tmp[ 2 ] &&
        new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
      // Remove matching events
      origCount = j = handlers.length;
      while ( j-- ) {
        handleObj = handlers[ j ];
        if ( ( mappedTypes || origType === handleObj.origType ) &&
          ( !handler || handler.guid === handleObj.guid ) &&
          ( !tmp || tmp.test( handleObj.namespace ) ) &&
          ( !selector || selector === handleObj.selector ||
            selector === "**" && handleObj.selector ) ) {
          handlers.splice( j, 1 );
          if ( handleObj.selector ) {
            handlers.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }
      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( origCount && !handlers.length ) {
        if ( !special.teardown ||
          special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
          jQuery.removeEvent( elem, type, elemData.handle );
        }
        delete events[ type ];
      }
    }
    // Remove data and the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      dataPriv.remove( elem, "handle events" );
    }
  },
  dispatch: function( event ) {
    // Make a writable jQuery.Event from the native event object
    event = jQuery.event.fix( event );
    var i, j, ret, matched, handleObj,
      handlerQueue = [],
      args = slice.call( arguments ),
      handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
      special = jQuery.event.special[ event.type ] || {};
    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[ 0 ] = event;
    event.delegateTarget = this;
    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }
    // Determine handlers
    handlerQueue = jQuery.event.handlers.call( this, event, handlers );
    // Run delegates first; they may want to stop propagation beneath us
    i = 0;
    while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
      event.currentTarget = matched.elem;
      j = 0;
      while ( ( handleObj = matched.handlers[ j++ ] ) &&
        !event.isImmediatePropagationStopped() ) {
        // Triggered event must either 1) have no namespace, or 2) have namespace(s)
        // a subset or equal to those in the bound event (both can have no namespace).
        if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
          event.handleObj = handleObj;
          event.data = handleObj.data;
          ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
            handleObj.handler ).apply( matched.elem, args );
          if ( ret !== undefined ) {
            if ( ( event.result = ret ) === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }
    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }
    return event.result;
  },
  handlers: function( event, handlers ) {
    var i, matches, sel, handleObj,
      handlerQueue = [],
      delegateCount = handlers.delegateCount,
      cur = event.target;
    // Support (at least): Chrome, IE9
    // Find delegate handlers
    // Black-hole SVG <use> instance trees (#13180)
    //
    // Support: Firefox<=42+
    // Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
    if ( delegateCount && cur.nodeType &&
      ( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
      for ( ; cur !== this; cur = cur.parentNode || this ) {
        // Don't check non-elements (#13208)
        // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
          matches = [];
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];
            // Don't conflict with Object.prototype properties (#13203)
            sel = handleObj.selector + " ";
            if ( matches[ sel ] === undefined ) {
              matches[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) > -1 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( matches[ sel ] ) {
              matches.push( handleObj );
            }
          }
          if ( matches.length ) {
            handlerQueue.push( { elem: cur, handlers: matches } );
          }
        }
      }
    }
    // Add the remaining (directly-bound) handlers
    if ( delegateCount < handlers.length ) {
      handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
    }
    return handlerQueue;
  },
  // Includes some event props shared by KeyEvent and MouseEvent
  props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
    "metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
  fixHooks: {},
  keyHooks: {
    props: "char charCode key keyCode".split( " " ),
    filter: function( event, original ) {
      // Add which for key events
      if ( event.which == null ) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
      }
      return event;
    }
  },
  mouseHooks: {
    props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
      "screenX screenY toElement" ).split( " " ),
    filter: function( event, original ) {
      var eventDoc, doc, body,
        button = original.button;
      // Calculate pageX/Y if missing and clientX/Y available
      if ( event.pageX == null && original.clientX != null ) {
        eventDoc = event.target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;
        event.pageX = original.clientX +
          ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
          ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY +
          ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
          ( doc && doc.clientTop  || body && body.clientTop  || 0 );
      }
      // Add which for click: 1 === left; 2 === middle; 3 === right
      // Note: button is not normalized, so don't use it
      if ( !event.which && button !== undefined ) {
        event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
      }
      return event;
    }
  },
  fix: function( event ) {
    if ( event[ jQuery.expando ] ) {
      return event;
    }
    // Create a writable copy of the event object and normalize some properties
    var i, prop, copy,
      type = event.type,
      originalEvent = event,
      fixHook = this.fixHooks[ type ];
    if ( !fixHook ) {
      this.fixHooks[ type ] = fixHook =
        rmouseEvent.test( type ) ? this.mouseHooks :
        rkeyEvent.test( type ) ? this.keyHooks :
        {};
    }
    copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
    event = new jQuery.Event( originalEvent );
    i = copy.length;
    while ( i-- ) {
      prop = copy[ i ];
      event[ prop ] = originalEvent[ prop ];
    }
    // Support: Cordova 2.5 (WebKit) (#13255)
    // All events should have a target; Cordova deviceready doesn't
    if ( !event.target ) {
      event.target = document;
    }
    // Support: Safari 6.0+, Chrome<28
    // Target should not be a text node (#504, #13143)
    if ( event.target.nodeType === 3 ) {
      event.target = event.target.parentNode;
    }
    return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
  },
  special: {
    load: {
      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },
    focus: {
      // Fire native event if possible so blur/focus sequence is correct
      trigger: function() {
        if ( this !== safeActiveElement() && this.focus ) {
          this.focus();
          return false;
        }
      },
      delegateType: "focusin"
    },
    blur: {
      trigger: function() {
        if ( this === safeActiveElement() && this.blur ) {
          this.blur();
          return false;
        }
      },
      delegateType: "focusout"
    },
    click: {
      // For checkbox, fire native event so checked state will be right
      trigger: function() {
        if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
          this.click();
          return false;
        }
      },
      // For cross-browser consistency, don't fire native .click() on links
      _default: function( event ) {
        return jQuery.nodeName( event.target, "a" );
      }
    },
    beforeunload: {
      postDispatch: function( event ) {
        // Support: Firefox 20+
        // Firefox doesn't alert if the returnValue field is not set.
        if ( event.result !== undefined && event.originalEvent ) {
          event.originalEvent.returnValue = event.result;
        }
      }
    }
  }
};
jQuery.removeEvent = function( elem, type, handle ) {
  // This "if" is needed for plain objects
  if ( elem.removeEventListener ) {
    elem.removeEventListener( type, handle );
  }
};
jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !( this instanceof jQuery.Event ) ) {
    return new jQuery.Event( src, props );
  }
  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;
    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = src.defaultPrevented ||
        src.defaultPrevented === undefined &&
        // Support: Android<4.0
        src.returnValue === false ?
      returnTrue :
      returnFalse;
  // Event type
  } else {
    this.type = src;
  }
  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }
  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();
  // Mark it as fixed
  this[ jQuery.expando ] = true;
};
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  constructor: jQuery.Event,
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,
  isSimulated: false,
  preventDefault: function() {
    var e = this.originalEvent;
    this.isDefaultPrevented = returnTrue;
    if ( e && !this.isSimulated ) {
      e.preventDefault();
    }
  },
  stopPropagation: function() {
    var e = this.originalEvent;
    this.isPropagationStopped = returnTrue;
    if ( e && !this.isSimulated ) {
      e.stopPropagation();
    }
  },
  stopImmediatePropagation: function() {
    var e = this.originalEvent;
    this.isImmediatePropagationStopped = returnTrue;
    if ( e && !this.isSimulated ) {
      e.stopImmediatePropagation();
    }
    this.stopPropagation();
  }
};
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
  mouseenter: "mouseover",
  mouseleave: "mouseout",
  pointerenter: "pointerover",
  pointerleave: "pointerout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,
    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj;
      // For mouseenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
} );
jQuery.fn.extend( {
  on: function( types, selector, data, fn ) {
    return on( this, types, selector, data, fn );
  },
  one: function( types, selector, data, fn ) {
    return on( this, types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {
      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ?
          handleObj.origType + "." + handleObj.namespace :
          handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {
      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {
      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each( function() {
      jQuery.event.remove( this, types, fn, selector );
    } );
  }
} );
var
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
  // Support: IE 10-11, Edge 10240+
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptTypeMasked = /^true\/(.*)/,
  rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
  return jQuery.nodeName( elem, "table" ) &&
    jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
    elem.getElementsByTagName( "tbody" )[ 0 ] ||
      elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
    elem;
}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
  elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
  return elem;
}
function restoreScript( elem ) {
  var match = rscriptTypeMasked.exec( elem.type );
  if ( match ) {
    elem.type = match[ 1 ];
  } else {
    elem.removeAttribute( "type" );
  }
  return elem;
}
function cloneCopyEvent( src, dest ) {
  var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
  if ( dest.nodeType !== 1 ) {
    return;
  }
  // 1. Copy private data: events, handlers, etc.
  if ( dataPriv.hasData( src ) ) {
    pdataOld = dataPriv.access( src );
    pdataCur = dataPriv.set( dest, pdataOld );
    events = pdataOld.events;
    if ( events ) {
      delete pdataCur.handle;
      pdataCur.events = {};
      for ( type in events ) {
        for ( i = 0, l = events[ type ].length; i < l; i++ ) {
          jQuery.event.add( dest, type, events[ type ][ i ] );
        }
      }
    }
  }
  // 2. Copy user data
  if ( dataUser.hasData( src ) ) {
    udataOld = dataUser.access( src );
    udataCur = jQuery.extend( {}, udataOld );
    dataUser.set( dest, udataCur );
  }
}
// Fix IE bugs, see support tests
function fixInput( src, dest ) {
  var nodeName = dest.nodeName.toLowerCase();
  // Fails to persist the checked state of a cloned checkbox or radio button.
  if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
    dest.checked = src.checked;
  // Fails to return the selected option to the default selected state when cloning options
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;
  }
}
function domManip( collection, args, callback, ignored ) {
  // Flatten any nested arrays
  args = concat.apply( [], args );
  var fragment, first, scripts, hasScripts, node, doc,
    i = 0,
    l = collection.length,
    iNoClone = l - 1,
    value = args[ 0 ],
    isFunction = jQuery.isFunction( value );
  // We can't cloneNode fragments that contain checked, in WebKit
  if ( isFunction ||
      ( l > 1 && typeof value === "string" &&
        !support.checkClone && rchecked.test( value ) ) ) {
    return collection.each( function( index ) {
      var self = collection.eq( index );
      if ( isFunction ) {
        args[ 0 ] = value.call( this, index, self.html() );
      }
      domManip( self, args, callback, ignored );
    } );
  }
  if ( l ) {
    fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
    first = fragment.firstChild;
    if ( fragment.childNodes.length === 1 ) {
      fragment = first;
    }
    // Require either new content or an interest in ignored elements to invoke the callback
    if ( first || ignored ) {
      scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
      hasScripts = scripts.length;
      // Use the original fragment for the last item
      // instead of the first because it can end up
      // being emptied incorrectly in certain situations (#8070).
      for ( ; i < l; i++ ) {
        node = fragment;
        if ( i !== iNoClone ) {
          node = jQuery.clone( node, true, true );
          // Keep references to cloned scripts for later restoration
          if ( hasScripts ) {
            // Support: Android<4.1, PhantomJS<2
            // push.apply(_, arraylike) throws on ancient WebKit
            jQuery.merge( scripts, getAll( node, "script" ) );
          }
        }
        callback.call( collection[ i ], node, i );
      }
      if ( hasScripts ) {
        doc = scripts[ scripts.length - 1 ].ownerDocument;
        // Reenable scripts
        jQuery.map( scripts, restoreScript );
        // Evaluate executable scripts on first document insertion
        for ( i = 0; i < hasScripts; i++ ) {
          node = scripts[ i ];
          if ( rscriptType.test( node.type || "" ) &&
            !dataPriv.access( node, "globalEval" ) &&
            jQuery.contains( doc, node ) ) {
            if ( node.src ) {
              // Optional AJAX dependency, but won't run scripts if not present
              if ( jQuery._evalUrl ) {
                jQuery._evalUrl( node.src );
              }
            } else {
              jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
            }
          }
        }
      }
    }
  }
  return collection;
}
function remove( elem, selector, keepData ) {
  var node,
    nodes = selector ? jQuery.filter( selector, elem ) : elem,
    i = 0;
  for ( ; ( node = nodes[ i ] ) != null; i++ ) {
    if ( !keepData && node.nodeType === 1 ) {
      jQuery.cleanData( getAll( node ) );
    }
    if ( node.parentNode ) {
      if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
        setGlobalEval( getAll( node, "script" ) );
      }
      node.parentNode.removeChild( node );
    }
  }
  return elem;
}
jQuery.extend( {
  htmlPrefilter: function( html ) {
    return html.replace( rxhtmlTag, "<$1></$2>" );
  },
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var i, l, srcElements, destElements,
      clone = elem.cloneNode( true ),
      inPage = jQuery.contains( elem.ownerDocument, elem );
    // Fix IE cloning issues
    if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
        !jQuery.isXMLDoc( elem ) ) {
      // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
      destElements = getAll( clone );
      srcElements = getAll( elem );
      for ( i = 0, l = srcElements.length; i < l; i++ ) {
        fixInput( srcElements[ i ], destElements[ i ] );
      }
    }
    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      if ( deepDataAndEvents ) {
        srcElements = srcElements || getAll( elem );
        destElements = destElements || getAll( clone );
        for ( i = 0, l = srcElements.length; i < l; i++ ) {
          cloneCopyEvent( srcElements[ i ], destElements[ i ] );
        }
      } else {
        cloneCopyEvent( elem, clone );
      }
    }
    // Preserve script evaluation history
    destElements = getAll( clone, "script" );
    if ( destElements.length > 0 ) {
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    }
    // Return the cloned set
    return clone;
  },
  cleanData: function( elems ) {
    var data, elem, type,
      special = jQuery.event.special,
      i = 0;
    for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
      if ( acceptData( elem ) ) {
        if ( ( data = elem[ dataPriv.expando ] ) ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );
              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }
          // Support: Chrome <= 35-45+
          // Assign undefined instead of using delete, see Data#remove
          elem[ dataPriv.expando ] = undefined;
        }
        if ( elem[ dataUser.expando ] ) {
          // Support: Chrome <= 35-45+
          // Assign undefined instead of using delete, see Data#remove
          elem[ dataUser.expando ] = undefined;
        }
      }
    }
  }
} );
jQuery.fn.extend( {
  // Keep domManip exposed until 3.0 (gh-2225)
  domManip: domManip,
  detach: function( selector ) {
    return remove( this, selector, true );
  },
  remove: function( selector ) {
    return remove( this, selector );
  },
  text: function( value ) {
    return access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().each( function() {
          if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
            this.textContent = value;
          }
        } );
    }, null, value, arguments.length );
  },
  append: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        var target = manipulationTarget( this, elem );
        target.appendChild( elem );
      }
    } );
  },
  prepend: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        var target = manipulationTarget( this, elem );
        target.insertBefore( elem, target.firstChild );
      }
    } );
  },
  before: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this );
      }
    } );
  },
  after: function() {
    return domManip( this, arguments, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
    } );
  },
  empty: function() {
    var elem,
      i = 0;
    for ( ; ( elem = this[ i ] ) != null; i++ ) {
      if ( elem.nodeType === 1 ) {
        // Prevent memory leaks
        jQuery.cleanData( getAll( elem, false ) );
        // Remove any remaining nodes
        elem.textContent = "";
      }
    }
    return this;
  },
  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
    return this.map( function() {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    } );
  },
  html: function( value ) {
    return access( this, function( value ) {
      var elem = this[ 0 ] || {},
        i = 0,
        l = this.length;
      if ( value === undefined && elem.nodeType === 1 ) {
        return elem.innerHTML;
      }
      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        !wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
        value = jQuery.htmlPrefilter( value );
        try {
          for ( ; i < l; i++ ) {
            elem = this[ i ] || {};
            // Remove element nodes and prevent memory leaks
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( getAll( elem, false ) );
              elem.innerHTML = value;
            }
          }
          elem = 0;
        // If using innerHTML throws an exception, use the fallback method
        } catch ( e ) {}
      }
      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },
  replaceWith: function() {
    var ignored = [];
    // Make the changes, replacing each non-ignored context element with the new content
    return domManip( this, arguments, function( elem ) {
      var parent = this.parentNode;
      if ( jQuery.inArray( this, ignored ) < 0 ) {
        jQuery.cleanData( getAll( this ) );
        if ( parent ) {
          parent.replaceChild( elem, this );
        }
      }
    // Force callback invocation
    }, ignored );
  }
} );
jQuery.each( {
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      ret = [],
      insert = jQuery( selector ),
      last = insert.length - 1,
      i = 0;
    for ( ; i <= last; i++ ) {
      elems = i === last ? this : this.clone( true );
      jQuery( insert[ i ] )[ original ]( elems );
      // Support: QtWebKit
      // .get() because push.apply(_, arraylike) throws
      push.apply( ret, elems.get() );
    }
    return this.pushStack( ret );
  };
} );
var iframe,
  elemdisplay = {
    // Support: Firefox
    // We have to pre-define these values for FF (#10227)
    HTML: "block",
    BODY: "block"
  };
/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
  var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
    display = jQuery.css( elem[ 0 ], "display" );
  // We don't have any data stored on the element,
  // so use "detach" method as fast way to get rid of the element
  elem.detach();
  return display;
}
/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
  var doc = document,
    display = elemdisplay[ nodeName ];
  if ( !display ) {
    display = actualDisplay( nodeName, doc );
    // If the simple way fails, read from inside an iframe
    if ( display === "none" || !display ) {
      // Use the already-created iframe if possible
      iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
        .appendTo( doc.documentElement );
      // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
      doc = iframe[ 0 ].contentDocument;
      // Support: IE
      doc.write();
      doc.close();
      display = actualDisplay( nodeName, doc );
      iframe.detach();
    }
    // Store the correct default display
    elemdisplay[ nodeName ] = display;
  }
  return display;
}
var rmargin = ( /^margin/ );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
var getStyles = function( elem ) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;
    if ( !view || !view.opener ) {
      view = window;
    }
    return view.getComputedStyle( elem );
  };
var swap = function( elem, options, callback, args ) {
  var ret, name,
    old = {};
  // Remember the old values, and insert the new ones
  for ( name in options ) {
    old[ name ] = elem.style[ name ];
    elem.style[ name ] = options[ name ];
  }
  ret = callback.apply( elem, args || [] );
  // Revert the old values
  for ( name in options ) {
    elem.style[ name ] = old[ name ];
  }
  return ret;
};
var documentElement = document.documentElement;
( function() {
  var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
    container = document.createElement( "div" ),
    div = document.createElement( "div" );
  // Finish early in limited (non-browser) environments
  if ( !div.style ) {
    return;
  }
  // Support: IE9-11+
  // Style of cloned element affects source element cloned (#8908)
  div.style.backgroundClip = "content-box";
  div.cloneNode( true ).style.backgroundClip = "";
  support.clearCloneStyle = div.style.backgroundClip === "content-box";
  container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
    "padding:0;margin-top:1px;position:absolute";
  container.appendChild( div );
  // Executing both pixelPosition & boxSizingReliable tests require only one layout
  // so they're executed at the same time to save the second computation.
  function computeStyleTests() {
    div.style.cssText =
      // Support: Firefox<29, Android 2.3
      // Vendor-prefix box-sizing
      "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
      "position:relative;display:block;" +
      "margin:auto;border:1px;padding:1px;" +
      "top:1%;width:50%";
    div.innerHTML = "";
    documentElement.appendChild( container );
    var divStyle = window.getComputedStyle( div );
    pixelPositionVal = divStyle.top !== "1%";
    reliableMarginLeftVal = divStyle.marginLeft === "2px";
    boxSizingReliableVal = divStyle.width === "4px";
    // Support: Android 4.0 - 4.3 only
    // Some styles come back with percentage values, even though they shouldn't
    div.style.marginRight = "50%";
    pixelMarginRightVal = divStyle.marginRight === "4px";
    documentElement.removeChild( container );
  }
  jQuery.extend( support, {
    pixelPosition: function() {
      // This test is executed only once but we still do memoizing
      // since we can use the boxSizingReliable pre-computing.
      // No need to check if the test was already performed, though.
      computeStyleTests();
      return pixelPositionVal;
    },
    boxSizingReliable: function() {
      if ( boxSizingReliableVal == null ) {
        computeStyleTests();
      }
      return boxSizingReliableVal;
    },
    pixelMarginRight: function() {
      // Support: Android 4.0-4.3
      // We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
      // since that compresses better and they're computed together anyway.
      if ( boxSizingReliableVal == null ) {
        computeStyleTests();
      }
      return pixelMarginRightVal;
    },
    reliableMarginLeft: function() {
      // Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
      if ( boxSizingReliableVal == null ) {
        computeStyleTests();
      }
      return reliableMarginLeftVal;
    },
    reliableMarginRight: function() {
      // Support: Android 2.3
      // Check if div with explicit width and no margin-right incorrectly
      // gets computed margin-right based on width of container. (#3333)
      // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
      // This support function is only executed once so no memoizing is needed.
      var ret,
        marginDiv = div.appendChild( document.createElement( "div" ) );
      // Reset CSS: box-sizing; display; margin; border; padding
      marginDiv.style.cssText = div.style.cssText =
        // Support: Android 2.3
        // Vendor-prefix box-sizing
        "-webkit-box-sizing:content-box;box-sizing:content-box;" +
        "display:block;margin:0;border:0;padding:0";
      marginDiv.style.marginRight = marginDiv.style.width = "0";
      div.style.width = "1px";
      documentElement.appendChild( container );
      ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );
      documentElement.removeChild( container );
      div.removeChild( marginDiv );
      return ret;
    }
  } );
} )();
function curCSS( elem, name, computed ) {
  var width, minWidth, maxWidth, ret,
    style = elem.style;
  computed = computed || getStyles( elem );
  ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
  // Support: Opera 12.1x only
  // Fall back to style even without computed
  // computed is undefined for elems on document fragments
  if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
    ret = jQuery.style( elem, name );
  }
  // Support: IE9
  // getPropertyValue is only needed for .css('filter') (#12537)
  if ( computed ) {
    // A tribute to the "awesome hack by Dean Edwards"
    // Android Browser returns percentage for some values,
    // but width seems to be reliably pixels.
    // This is against the CSSOM draft spec:
    // http://dev.w3.org/csswg/cssom/#resolved-values
    if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
      // Remember the original values
      width = style.width;
      minWidth = style.minWidth;
      maxWidth = style.maxWidth;
      // Put in the new values to get a computed value out
      style.minWidth = style.maxWidth = style.width = ret;
      ret = computed.width;
      // Revert the changed values
      style.width = width;
      style.minWidth = minWidth;
      style.maxWidth = maxWidth;
    }
  }
  return ret !== undefined ?
    // Support: IE9-11+
    // IE returns zIndex value as an integer.
    ret + "" :
    ret;
}
function addGetHookIf( conditionFn, hookFn ) {
  // Define the hook, we'll check on the first run if it's really needed.
  return {
    get: function() {
      if ( conditionFn() ) {
        // Hook not needed (or it's not possible to use it due
        // to missing dependency), remove it.
        delete this.get;
        return;
      }
      // Hook needed; redefine it so that the support test is not executed again.
      return ( this.get = hookFn ).apply( this, arguments );
    }
  };
}
var
  // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  },
  cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
  emptyStyle = document.createElement( "div" ).style;
// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {
  // Shortcut for names that are not vendor prefixed
  if ( name in emptyStyle ) {
    return name;
  }
  // Check for vendor prefixed names
  var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
    i = cssPrefixes.length;
  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in emptyStyle ) {
      return name;
    }
  }
}
function setPositiveNumber( elem, value, subtract ) {
  // Any relative (+/-) values have already been
  // normalized at this point
  var matches = rcssNum.exec( value );
  return matches ?
    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
    value;
}
function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
  var i = extra === ( isBorderBox ? "border" : "content" ) ?
    // If we already have the right measurement, avoid augmentation
    4 :
    // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,
    val = 0;
  for ( ; i < 4; i += 2 ) {
    // Both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
    }
    if ( isBorderBox ) {
      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      }
      // At this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    } else {
      // At this point, extra isn't content, so add padding
      val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      // At this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    }
  }
  return val;
}
function getWidthOrHeight( elem, name, extra ) {
  // Start with offset property, which is equivalent to the border-box value
  var valueIsBorderBox = true,
    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
    styles = getStyles( elem ),
    isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
  // Some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  if ( val <= 0 || val == null ) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS( elem, name, styles );
    if ( val < 0 || val == null ) {
      val = elem.style[ name ];
    }
    // Computed unit is not pixels. Stop here and return.
    if ( rnumnonpx.test( val ) ) {
      return val;
    }
    // Check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = isBorderBox &&
      ( support.boxSizingReliable() || val === elem.style[ name ] );
    // Normalize "", auto, and prepare for extra
    val = parseFloat( val ) || 0;
  }
  // Use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox,
      styles
    )
  ) + "px";
}
function showHide( elements, show ) {
  var display, elem, hidden,
    values = [],
    index = 0,
    length = elements.length;
  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    values[ index ] = dataPriv.get( elem, "olddisplay" );
    display = elem.style.display;
    if ( show ) {
      // Reset the inline display of this element to learn if it is
      // being hidden by cascaded rules or not
      if ( !values[ index ] && display === "none" ) {
        elem.style.display = "";
      }
      // Set elements which have been overridden with display: none
      // in a stylesheet to whatever the default browser style is
      // for such an element
      if ( elem.style.display === "" && isHidden( elem ) ) {
        values[ index ] = dataPriv.access(
          elem,
          "olddisplay",
          defaultDisplay( elem.nodeName )
        );
      }
    } else {
      hidden = isHidden( elem );
      if ( display !== "none" || !hidden ) {
        dataPriv.set(
          elem,
          "olddisplay",
          hidden ? display : jQuery.css( elem, "display" )
        );
      }
    }
  }
  // Set the display of most of the elements in a second loop
  // to avoid the constant reflow
  for ( index = 0; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
      elem.style.display = show ? values[ index ] || "" : "none";
    }
  }
  return elements;
}
jQuery.extend( {
  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {
          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;
        }
      }
    }
  },
  // Don't automatically add "px" to these possibly-unitless properties
  cssNumber: {
    "animationIterationCount": true,
    "columnCount": true,
    "fillOpacity": true,
    "flexGrow": true,
    "flexShrink": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "order": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },
  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    "float": "cssFloat"
  },
  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {
    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }
    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      style = elem.style;
    name = jQuery.cssProps[ origName ] ||
      ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
    // Gets hook for the prefixed version, then unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;
      // Convert "+=" or "-=" to relative numbers (#7345)
      if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
        value = adjustCSS( elem, name, ret );
        // Fixes bug #9237
        type = "number";
      }
      // Make sure that null and NaN values aren't set (#7116)
      if ( value == null || value !== value ) {
        return;
      }
      // If a number was passed in, add the unit (except for certain CSS properties)
      if ( type === "number" ) {
        value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
      }
      // Support: IE9-11+
      // background-* props affect original clone's values
      if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
        style[ name ] = "inherit";
      }
      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !( "set" in hooks ) ||
        ( value = hooks.set( elem, value, extra ) ) !== undefined ) {
        style[ name ] = value;
      }
    } else {
      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks &&
        ( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
        return ret;
      }
      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },
  css: function( elem, name, extra, styles ) {
    var val, num, hooks,
      origName = jQuery.camelCase( name );
    // Make sure that we're working with the right name
    name = jQuery.cssProps[ origName ] ||
      ( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
    // Try prefixed name followed by the unprefixed name
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }
    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name, styles );
    }
    // Convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }
    // Make numeric if forced or a qualifier was provided and val looks numeric
    if ( extra === "" || extra ) {
      num = parseFloat( val );
      return extra === true || isFinite( num ) ? num || 0 : val;
    }
    return val;
  }
} );
jQuery.each( [ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {
        // Certain elements can have dimension info if we invisibly show them
        // but it must have a current display style that would benefit
        return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
          elem.offsetWidth === 0 ?
            swap( elem, cssShow, function() {
              return getWidthOrHeight( elem, name, extra );
            } ) :
            getWidthOrHeight( elem, name, extra );
      }
    },
    set: function( elem, value, extra ) {
      var matches,
        styles = extra && getStyles( elem ),
        subtract = extra && augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          styles
        );
      // Convert to pixels if value adjustment is needed
      if ( subtract && ( matches = rcssNum.exec( value ) ) &&
        ( matches[ 3 ] || "px" ) !== "px" ) {
        elem.style[ name ] = value;
        value = jQuery.css( elem, name );
      }
      return setPositiveNumber( elem, value, subtract );
    }
  };
} );
jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
  function( elem, computed ) {
    if ( computed ) {
      return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
        elem.getBoundingClientRect().left -
          swap( elem, { marginLeft: 0 }, function() {
            return elem.getBoundingClientRect().left;
          } )
        ) + "px";
    }
  }
);
// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
  function( elem, computed ) {
    if ( computed ) {
      return swap( elem, { "display": "inline-block" },
        curCSS, [ elem, "marginRight" ] );
    }
  }
);
// These hooks are used by animate to expand properties
jQuery.each( {
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i = 0,
        expanded = {},
        // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split( " " ) : [ value ];
      for ( ; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }
      return expanded;
    }
  };
  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
} );
jQuery.fn.extend( {
  css: function( name, value ) {
    return access( this, function( elem, name, value ) {
      var styles, len,
        map = {},
        i = 0;
      if ( jQuery.isArray( name ) ) {
        styles = getStyles( elem );
        len = name.length;
        for ( ; i < len; i++ ) {
          map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
        }
        return map;
      }
      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  },
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state ) {
    if ( typeof state === "boolean" ) {
      return state ? this.show() : this.hide();
    }
    return this.each( function() {
      if ( isHidden( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    } );
  }
} );
function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;
Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || jQuery.easing._default;
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];
    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];
    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;
    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }
    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};
Tween.prototype.init.prototype = Tween.prototype;
Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;
      // Use a property on the element directly when it is not a DOM element,
      // or when there is no matching style property that exists.
      if ( tween.elem.nodeType !== 1 ||
        tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
        return tween.elem[ tween.prop ];
      }
      // Passing an empty string as a 3rd parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails.
      // Simple values such as "10px" are parsed to Float;
      // complex values such as "rotate(1rad)" are returned as-is.
      result = jQuery.css( tween.elem, tween.prop, "" );
      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {
      // Use step hook for back compat.
      // Use cssHook if its there.
      // Use .style if available and use plain properties where available.
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.nodeType === 1 &&
        ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
          jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};
// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};
jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p * Math.PI ) / 2;
  },
  _default: "swing"
};
jQuery.fx = Tween.prototype.init;
// Back Compat <1.8 extension point
jQuery.fx.step = {};
var
  fxNow, timerId,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rrun = /queueHooks$/;
// Animations created synchronously will run synchronously
function createFxNow() {
  window.setTimeout( function() {
    fxNow = undefined;
  } );
  return ( fxNow = jQuery.now() );
}
// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    i = 0,
    attrs = { height: type };
  // If we include width, step value is 1 to do all cssExpand values,
  // otherwise step value is 2 to skip over Left and Right
  includeWidth = includeWidth ? 1 : 0;
  for ( ; i < 4 ; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }
  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }
  return attrs;
}
function createTween( value, prop, animation ) {
  var tween,
    collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
    index = 0,
    length = collection.length;
  for ( ; index < length; index++ ) {
    if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
      // We're done with this property
      return tween;
    }
  }
}
function defaultPrefilter( elem, props, opts ) {
  /* jshint validthis: true */
  var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
    anim = this,
    orig = {},
    style = elem.style,
    hidden = elem.nodeType && isHidden( elem ),
    dataShow = dataPriv.get( elem, "fxshow" );
  // Handle queue: false promises
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;
    anim.always( function() {
      // Ensure the complete handler is called before this completes
      anim.always( function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      } );
    } );
  }
  // Height/width overflow pass
  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
    // Make sure that nothing sneaks out
    // Record all 3 overflow attributes because IE9-10 do not
    // change the overflow attribute when overflowX and
    // overflowY are set to the same value
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
    // Set display property to inline-block for height/width
    // animations on inline elements that are having width/height animated
    display = jQuery.css( elem, "display" );
    // Test default display if display is currently "none"
    checkDisplay = display === "none" ?
      dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
    if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
      style.display = "inline-block";
    }
  }
  if ( opts.overflow ) {
    style.overflow = "hidden";
    anim.always( function() {
      style.overflow = opts.overflow[ 0 ];
      style.overflowX = opts.overflow[ 1 ];
      style.overflowY = opts.overflow[ 2 ];
    } );
  }
  // show/hide pass
  for ( prop in props ) {
    value = props[ prop ];
    if ( rfxtypes.exec( value ) ) {
      delete props[ prop ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {
        // If there is dataShow left over from a stopped hide or show
        // and we are going to proceed with show, we should pretend to be hidden
        if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
          hidden = true;
        } else {
          continue;
        }
      }
      orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
    // Any non-fx value stops us from restoring the original display value
    } else {
      display = undefined;
    }
  }
  if ( !jQuery.isEmptyObject( orig ) ) {
    if ( dataShow ) {
      if ( "hidden" in dataShow ) {
        hidden = dataShow.hidden;
      }
    } else {
      dataShow = dataPriv.access( elem, "fxshow", {} );
    }
    // Store state if its toggle - enables .stop().toggle() to "reverse"
    if ( toggle ) {
      dataShow.hidden = !hidden;
    }
    if ( hidden ) {
      jQuery( elem ).show();
    } else {
      anim.done( function() {
        jQuery( elem ).hide();
      } );
    }
    anim.done( function() {
      var prop;
      dataPriv.remove( elem, "fxshow" );
      for ( prop in orig ) {
        jQuery.style( elem, prop, orig[ prop ] );
      }
    } );
    for ( prop in orig ) {
      tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
      if ( !( prop in dataShow ) ) {
        dataShow[ prop ] = tween.start;
        if ( hidden ) {
          tween.end = tween.start;
          tween.start = prop === "width" || prop === "height" ? 1 : 0;
        }
      }
    }
  // If this is a noop like .hide().hide(), restore an overwritten display value
  } else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
    style.display = display;
  }
}
function propFilter( props, specialEasing ) {
  var index, name, easing, value, hooks;
  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( jQuery.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }
    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }
    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];
      // Not quite $.extend, this won't overwrite existing keys.
      // Reusing 'index' because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}
function Animation( elem, properties, options ) {
  var result,
    stopped,
    index = 0,
    length = Animation.prefilters.length,
    deferred = jQuery.Deferred().always( function() {
      // Don't match elem in the :animated selector
      delete tick.elem;
    } ),
    tick = function() {
      if ( stopped ) {
        return false;
      }
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
        // Support: Android 2.3
        // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;
      for ( ; index < length ; index++ ) {
        animation.tweens[ index ].run( percent );
      }
      deferred.notifyWith( elem, [ animation, percent, remaining ] );
      if ( percent < 1 && length ) {
        return remaining;
      } else {
        deferred.resolveWith( elem, [ animation ] );
        return false;
      }
    },
    animation = deferred.promise( {
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,
          // If we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;
        if ( stopped ) {
          return this;
        }
        stopped = true;
        for ( ; index < length ; index++ ) {
          animation.tweens[ index ].run( 1 );
        }
        // Resolve when we played the last frame; otherwise, reject
        if ( gotoEnd ) {
          deferred.notifyWith( elem, [ animation, 1, 0 ] );
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    } ),
    props = animation.props;
  propFilter( props, animation.opts.specialEasing );
  for ( ; index < length ; index++ ) {
    result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      if ( jQuery.isFunction( result.stop ) ) {
        jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
          jQuery.proxy( result.stop, result );
      }
      return result;
    }
  }
  jQuery.map( props, createTween, animation );
  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }
  jQuery.fx.timer(
    jQuery.extend( tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    } )
  );
  // attach callbacks from options
  return animation.progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
}
jQuery.Animation = jQuery.extend( Animation, {
  tweeners: {
    "*": [ function( prop, value ) {
      var tween = this.createTween( prop, value );
      adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
      return tween;
    } ]
  },
  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.match( rnotwhite );
    }
    var prop,
      index = 0,
      length = props.length;
    for ( ; index < length ; index++ ) {
      prop = props[ index ];
      Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
      Animation.tweeners[ prop ].unshift( callback );
    }
  },
  prefilters: [ defaultPrefilter ],
  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      Animation.prefilters.unshift( callback );
    } else {
      Animation.prefilters.push( callback );
    }
  }
} );
jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };
  opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
    opt.duration : opt.duration in jQuery.fx.speeds ?
      jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
  // Normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }
  // Queueing
  opt.old = opt.complete;
  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }
    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };
  return opt;
};
jQuery.fn.extend( {
  fadeTo: function( speed, to, easing, callback ) {
    // Show any hidden elements after setting opacity to 0
    return this.filter( isHidden ).css( "opacity", 0 ).show()
      // Animate to the value specified
      .end().animate( { opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );
        // Empty animations, or finishing resolves immediately
        if ( empty || dataPriv.get( this, "finish" ) ) {
          anim.stop( true );
        }
      };
      doAnimation.finish = doAnimation;
    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };
    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }
    return this.each( function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = dataPriv.get( this );
      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this &&
          ( type == null || timers[ index ].queue === type ) ) {
          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }
      // Start the next in the queue if the last step wasn't forced.
      // Timers currently will call their complete callbacks, which
      // will dequeue but only if they were gotoEnd.
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    } );
  },
  finish: function( type ) {
    if ( type !== false ) {
      type = type || "fx";
    }
    return this.each( function() {
      var index,
        data = dataPriv.get( this ),
        queue = data[ type + "queue" ],
        hooks = data[ type + "queueHooks" ],
        timers = jQuery.timers,
        length = queue ? queue.length : 0;
      // Enable finishing flag on private data
      data.finish = true;
      // Empty the queue first
      jQuery.queue( this, type, [] );
      if ( hooks && hooks.stop ) {
        hooks.stop.call( this, true );
      }
      // Look for any active animations, and finish them
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
          timers[ index ].anim.stop( true );
          timers.splice( index, 1 );
        }
      }
      // Look for any animations in the old queue and finish them
      for ( index = 0; index < length; index++ ) {
        if ( queue[ index ] && queue[ index ].finish ) {
          queue[ index ].finish.call( this );
        }
      }
      // Turn off finishing flag
      delete data.finish;
    } );
  }
} );
jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
} );
// Generate shortcuts for custom animations
jQuery.each( {
  slideDown: genFx( "show" ),
  slideUp: genFx( "hide" ),
  slideToggle: genFx( "toggle" ),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
} );
jQuery.timers = [];
jQuery.fx.tick = function() {
  var timer,
    i = 0,
    timers = jQuery.timers;
  fxNow = jQuery.now();
  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];
    // Checks the timer has not already been removed
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }
  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};
jQuery.fx.timer = function( timer ) {
  jQuery.timers.push( timer );
  if ( timer() ) {
    jQuery.fx.start();
  } else {
    jQuery.timers.pop();
  }
};
jQuery.fx.interval = 13;
jQuery.fx.start = function() {
  if ( !timerId ) {
    timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
  }
};
jQuery.fx.stop = function() {
  window.clearInterval( timerId );
  timerId = null;
};
jQuery.fx.speeds = {
  slow: 600,
  fast: 200,
  // Default speed
  _default: 400
};
// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
  time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
  type = type || "fx";
  return this.queue( type, function( next, hooks ) {
    var timeout = window.setTimeout( next, time );
    hooks.stop = function() {
      window.clearTimeout( timeout );
    };
  } );
};
( function() {
  var input = document.createElement( "input" ),
    select = document.createElement( "select" ),
    opt = select.appendChild( document.createElement( "option" ) );
  input.type = "checkbox";
  // Support: iOS<=5.1, Android<=4.2+
  // Default value for a checkbox should be "on"
  support.checkOn = input.value !== "";
  // Support: IE<=11+
  // Must access selectedIndex to make default options select
  support.optSelected = opt.selected;
  // Support: Android<=2.3
  // Options inside disabled selects are incorrectly marked as disabled
  select.disabled = true;
  support.optDisabled = !opt.disabled;
  // Support: IE<=11+
  // An input loses its value after becoming a radio
  input = document.createElement( "input" );
  input.value = "t";
  input.type = "radio";
  support.radioValue = input.value === "t";
} )();
var boolHook,
  attrHandle = jQuery.expr.attrHandle;
jQuery.fn.extend( {
  attr: function( name, value ) {
    return access( this, jQuery.attr, name, value, arguments.length > 1 );
  },
  removeAttr: function( name ) {
    return this.each( function() {
      jQuery.removeAttr( this, name );
    } );
  }
} );
jQuery.extend( {
  attr: function( elem, name, value ) {
    var ret, hooks,
      nType = elem.nodeType;
    // Don't get/set attributes on text, comment and attribute nodes
    if ( nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }
    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === "undefined" ) {
      return jQuery.prop( elem, name, value );
    }
    // All attributes are lowercase
    // Grab necessary hook if one is defined
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
      name = name.toLowerCase();
      hooks = jQuery.attrHooks[ name ] ||
        ( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
    }
    if ( value !== undefined ) {
      if ( value === null ) {
        jQuery.removeAttr( elem, name );
        return;
      }
      if ( hooks && "set" in hooks &&
        ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
        return ret;
      }
      elem.setAttribute( name, value + "" );
      return value;
    }
    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
      return ret;
    }
    ret = jQuery.find.attr( elem, name );
    // Non-existent attributes return null, we normalize to undefined
    return ret == null ? undefined : ret;
  },
  attrHooks: {
    type: {
      set: function( elem, value ) {
        if ( !support.radioValue && value === "radio" &&
          jQuery.nodeName( elem, "input" ) ) {
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    }
  },
  removeAttr: function( elem, value ) {
    var name, propName,
      i = 0,
      attrNames = value && value.match( rnotwhite );
    if ( attrNames && elem.nodeType === 1 ) {
      while ( ( name = attrNames[ i++ ] ) ) {
        propName = jQuery.propFix[ name ] || name;
        // Boolean attributes get special treatment (#10870)
        if ( jQuery.expr.match.bool.test( name ) ) {
          // Set corresponding property to false
          elem[ propName ] = false;
        }
        elem.removeAttribute( name );
      }
    }
  }
} );
// Hooks for boolean attributes
boolHook = {
  set: function( elem, value, name ) {
    if ( value === false ) {
      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else {
      elem.setAttribute( name, name );
    }
    return name;
  }
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
  var getter = attrHandle[ name ] || jQuery.find.attr;
  attrHandle[ name ] = function( elem, name, isXML ) {
    var ret, handle;
    if ( !isXML ) {
      // Avoid an infinite loop by temporarily removing this function from the getter
      handle = attrHandle[ name ];
      attrHandle[ name ] = ret;
      ret = getter( elem, name, isXML ) != null ?
        name.toLowerCase() :
        null;
      attrHandle[ name ] = handle;
    }
    return ret;
  };
} );
var rfocusable = /^(?:input|select|textarea|button)$/i,
  rclickable = /^(?:a|area)$/i;
jQuery.fn.extend( {
  prop: function( name, value ) {
    return access( this, jQuery.prop, name, value, arguments.length > 1 );
  },
  removeProp: function( name ) {
    return this.each( function() {
      delete this[ jQuery.propFix[ name ] || name ];
    } );
  }
} );
jQuery.extend( {
  prop: function( elem, name, value ) {
    var ret, hooks,
      nType = elem.nodeType;
    // Don't get/set properties on text, comment and attribute nodes
    if ( nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }
    if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }
    if ( value !== undefined ) {
      if ( hooks && "set" in hooks &&
        ( ret = hooks.set( elem, value, name ) ) !== undefined ) {
        return ret;
      }
      return ( elem[ name ] = value );
    }
    if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
      return ret;
    }
    return elem[ name ];
  },
  propHooks: {
    tabIndex: {
      get: function( elem ) {
        // elem.tabIndex doesn't always return the
        // correct value when it hasn't been explicitly set
        // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        // Use proper attribute retrieval(#12072)
        var tabindex = jQuery.find.attr( elem, "tabindex" );
        return tabindex ?
          parseInt( tabindex, 10 ) :
          rfocusable.test( elem.nodeName ) ||
            rclickable.test( elem.nodeName ) && elem.href ?
              0 :
              -1;
      }
    }
  },
  propFix: {
    "for": "htmlFor",
    "class": "className"
  }
} );
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
  jQuery.propHooks.selected = {
    get: function( elem ) {
      var parent = elem.parentNode;
      if ( parent && parent.parentNode ) {
        parent.parentNode.selectedIndex;
      }
      return null;
    },
    set: function( elem ) {
      var parent = elem.parentNode;
      if ( parent ) {
        parent.selectedIndex;
        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
    }
  };
}
jQuery.each( [
  "tabIndex",
  "readOnly",
  "maxLength",
  "cellSpacing",
  "cellPadding",
  "rowSpan",
  "colSpan",
  "useMap",
  "frameBorder",
  "contentEditable"
], function() {
  jQuery.propFix[ this.toLowerCase() ] = this;
} );
var rclass = /[\t\r\n\f]/g;
function getClass( elem ) {
  return elem.getAttribute && elem.getAttribute( "class" ) || "";
}
jQuery.fn.extend( {
  addClass: function( value ) {
    var classes, elem, cur, curValue, clazz, j, finalValue,
      i = 0;
    if ( jQuery.isFunction( value ) ) {
      return this.each( function( j ) {
        jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
      } );
    }
    if ( typeof value === "string" && value ) {
      classes = value.match( rnotwhite ) || [];
      while ( ( elem = this[ i++ ] ) ) {
        curValue = getClass( elem );
        cur = elem.nodeType === 1 &&
          ( " " + curValue + " " ).replace( rclass, " " );
        if ( cur ) {
          j = 0;
          while ( ( clazz = classes[ j++ ] ) ) {
            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
              cur += clazz + " ";
            }
          }
          // Only assign if different to avoid unneeded rendering.
          finalValue = jQuery.trim( cur );
          if ( curValue !== finalValue ) {
            elem.setAttribute( "class", finalValue );
          }
        }
      }
    }
    return this;
  },
  removeClass: function( value ) {
    var classes, elem, cur, curValue, clazz, j, finalValue,
      i = 0;
    if ( jQuery.isFunction( value ) ) {
      return this.each( function( j ) {
        jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
      } );
    }
    if ( !arguments.length ) {
      return this.attr( "class", "" );
    }
    if ( typeof value === "string" && value ) {
      classes = value.match( rnotwhite ) || [];
      while ( ( elem = this[ i++ ] ) ) {
        curValue = getClass( elem );
        // This expression is here for better compressibility (see addClass)
        cur = elem.nodeType === 1 &&
          ( " " + curValue + " " ).replace( rclass, " " );
        if ( cur ) {
          j = 0;
          while ( ( clazz = classes[ j++ ] ) ) {
            // Remove *all* instances
            while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
              cur = cur.replace( " " + clazz + " ", " " );
            }
          }
          // Only assign if different to avoid unneeded rendering.
          finalValue = jQuery.trim( cur );
          if ( curValue !== finalValue ) {
            elem.setAttribute( "class", finalValue );
          }
        }
      }
    }
    return this;
  },
  toggleClass: function( value, stateVal ) {
    var type = typeof value;
    if ( typeof stateVal === "boolean" && type === "string" ) {
      return stateVal ? this.addClass( value ) : this.removeClass( value );
    }
    if ( jQuery.isFunction( value ) ) {
      return this.each( function( i ) {
        jQuery( this ).toggleClass(
          value.call( this, i, getClass( this ), stateVal ),
          stateVal
        );
      } );
    }
    return this.each( function() {
      var className, i, self, classNames;
      if ( type === "string" ) {
        // Toggle individual class names
        i = 0;
        self = jQuery( this );
        classNames = value.match( rnotwhite ) || [];
        while ( ( className = classNames[ i++ ] ) ) {
          // Check each className given, space separated list
          if ( self.hasClass( className ) ) {
            self.removeClass( className );
          } else {
            self.addClass( className );
          }
        }
      // Toggle whole class name
      } else if ( value === undefined || type === "boolean" ) {
        className = getClass( this );
        if ( className ) {
          // Store className if set
          dataPriv.set( this, "__className__", className );
        }
        // If the element has a class name or if we're passed `false`,
        // then remove the whole classname (if there was one, the above saved it).
        // Otherwise bring back whatever was previously saved (if anything),
        // falling back to the empty string if nothing was stored.
        if ( this.setAttribute ) {
          this.setAttribute( "class",
            className || value === false ?
            "" :
            dataPriv.get( this, "__className__" ) || ""
          );
        }
      }
    } );
  },
  hasClass: function( selector ) {
    var className, elem,
      i = 0;
    className = " " + selector + " ";
    while ( ( elem = this[ i++ ] ) ) {
      if ( elem.nodeType === 1 &&
        ( " " + getClass( elem ) + " " ).replace( rclass, " " )
          .indexOf( className ) > -1
      ) {
        return true;
      }
    }
    return false;
  }
} );
var rreturn = /\r/g,
  rspaces = /[\x20\t\r\n\f]+/g;
jQuery.fn.extend( {
  val: function( value ) {
    var hooks, ret, isFunction,
      elem = this[ 0 ];
    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] ||
          jQuery.valHooks[ elem.nodeName.toLowerCase() ];
        if ( hooks &&
          "get" in hooks &&
          ( ret = hooks.get( elem, "value" ) ) !== undefined
        ) {
          return ret;
        }
        ret = elem.value;
        return typeof ret === "string" ?
          // Handle most common string cases
          ret.replace( rreturn, "" ) :
          // Handle cases where value is null/undef or number
          ret == null ? "" : ret;
      }
      return;
    }
    isFunction = jQuery.isFunction( value );
    return this.each( function( i ) {
      var val;
      if ( this.nodeType !== 1 ) {
        return;
      }
      if ( isFunction ) {
        val = value.call( this, i, jQuery( this ).val() );
      } else {
        val = value;
      }
      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";
      } else if ( typeof val === "number" ) {
        val += "";
      } else if ( jQuery.isArray( val ) ) {
        val = jQuery.map( val, function( value ) {
          return value == null ? "" : value + "";
        } );
      }
      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
      // If set returns undefined, fall back to normal setting
      if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    } );
  }
} );
jQuery.extend( {
  valHooks: {
    option: {
      get: function( elem ) {
        var val = jQuery.find.attr( elem, "value" );
        return val != null ?
          val :
          // Support: IE10-11+
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
      }
    },
    select: {
      get: function( elem ) {
        var value, option,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one" || index < 0,
          values = one ? null : [],
          max = one ? index + 1 : options.length,
          i = index < 0 ?
            max :
            one ? index : 0;
        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];
          // IE8-9 doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&
              // Don't return options that are disabled or in a disabled optgroup
              ( support.optDisabled ?
                !option.disabled : option.getAttribute( "disabled" ) === null ) &&
              ( !option.parentNode.disabled ||
                !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
            // Get the specific value for the option
            value = jQuery( option ).val();
            // We don't need an array for one selects
            if ( one ) {
              return value;
            }
            // Multi-Selects return an array
            values.push( value );
          }
        }
        return values;
      },
      set: function( elem, value ) {
        var optionSet, option,
          options = elem.options,
          values = jQuery.makeArray( value ),
          i = options.length;
        while ( i-- ) {
          option = options[ i ];
          if ( option.selected =
            jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
          ) {
            optionSet = true;
          }
        }
        // Force browsers to behave consistently when non-matching value is set
        if ( !optionSet ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  }
} );
// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = {
    set: function( elem, value ) {
      if ( jQuery.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
      }
    }
  };
  if ( !support.checkOn ) {
    jQuery.valHooks[ this ].get = function( elem ) {
      return elem.getAttribute( "value" ) === null ? "on" : elem.value;
    };
  }
} );
// Return jQuery for attributes-only inclusion
var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
jQuery.extend( jQuery.event, {
  trigger: function( event, data, elem, onlyHandlers ) {
    var i, cur, tmp, bubbleType, ontype, handle, special,
      eventPath = [ elem || document ],
      type = hasOwn.call( event, "type" ) ? event.type : event,
      namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
    cur = tmp = elem = elem || document;
    // Don't do events on text and comment nodes
    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
      return;
    }
    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }
    if ( type.indexOf( "." ) > -1 ) {
      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split( "." );
      type = namespaces.shift();
      namespaces.sort();
    }
    ontype = type.indexOf( ":" ) < 0 && "on" + type;
    // Caller can pass in a jQuery.Event object, Object, or just an event type string
    event = event[ jQuery.expando ] ?
      event :
      new jQuery.Event( type, typeof event === "object" && event );
    // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
    event.isTrigger = onlyHandlers ? 2 : 3;
    event.namespace = namespaces.join( "." );
    event.rnamespace = event.namespace ?
      new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
      null;
    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }
    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data == null ?
      [ event ] :
      jQuery.makeArray( data, [ event ] );
    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }
    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
      bubbleType = special.delegateType || type;
      if ( !rfocusMorph.test( bubbleType + type ) ) {
        cur = cur.parentNode;
      }
      for ( ; cur; cur = cur.parentNode ) {
        eventPath.push( cur );
        tmp = cur;
      }
      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( tmp === ( elem.ownerDocument || document ) ) {
        eventPath.push( tmp.defaultView || tmp.parentWindow || window );
      }
    }
    // Fire handlers on the event path
    i = 0;
    while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
      event.type = i > 1 ?
        bubbleType :
        special.bindType || type;
      // jQuery handler
      handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
        dataPriv.get( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }
      // Native handler
      handle = ontype && cur[ ontype ];
      if ( handle && handle.apply && acceptData( cur ) ) {
        event.result = handle.apply( cur, data );
        if ( event.result === false ) {
          event.preventDefault();
        }
      }
    }
    event.type = type;
    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {
      if ( ( !special._default ||
        special._default.apply( eventPath.pop(), data ) === false ) &&
        acceptData( elem ) ) {
        // Call a native DOM method on the target with the same name name as the event.
        // Don't do default actions on window, that's where global variables be (#6170)
        if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
          // Don't re-trigger an onFOO event when we call its FOO() method
          tmp = elem[ ontype ];
          if ( tmp ) {
            elem[ ontype ] = null;
          }
          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          elem[ type ]();
          jQuery.event.triggered = undefined;
          if ( tmp ) {
            elem[ ontype ] = tmp;
          }
        }
      }
    }
    return event.result;
  },
  // Piggyback on a donor event to simulate a different one
  // Used only for `focus(in | out)` events
  simulate: function( type, elem, event ) {
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      {
        type: type,
        isSimulated: true
      }
    );
    jQuery.event.trigger( e, null, elem );
  }
} );
jQuery.fn.extend( {
  trigger: function( type, data ) {
    return this.each( function() {
      jQuery.event.trigger( type, data, this );
    } );
  },
  triggerHandler: function( type, data ) {
    var elem = this[ 0 ];
    if ( elem ) {
      return jQuery.event.trigger( type, data, elem, true );
    }
  }
} );
jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup error contextmenu" ).split( " " ),
  function( i, name ) {
  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };
} );
jQuery.fn.extend( {
  hover: function( fnOver, fnOut ) {
    return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
  }
} );
support.focusin = "onfocusin" in window;
// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
  jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
    // Attach a single capturing handler on the document while someone wants focusin/focusout
    var handler = function( event ) {
      jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
    };
    jQuery.event.special[ fix ] = {
      setup: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access( doc, fix );
        if ( !attaches ) {
          doc.addEventListener( orig, handler, true );
        }
        dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
      },
      teardown: function() {
        var doc = this.ownerDocument || this,
          attaches = dataPriv.access( doc, fix ) - 1;
        if ( !attaches ) {
          doc.removeEventListener( orig, handler, true );
          dataPriv.remove( doc, fix );
        } else {
          dataPriv.access( doc, fix, attaches );
        }
      }
    };
  } );
}
var location = window.location;
var nonce = jQuery.now();
var rquery = ( /\?/ );
// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
  return JSON.parse( data + "" );
};
// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
  var xml;
  if ( !data || typeof data !== "string" ) {
    return null;
  }
  // Support: IE9
  try {
    xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
  } catch ( e ) {
    xml = undefined;
  }
  if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
    jQuery.error( "Invalid XML: " + data );
  }
  return xml;
};
var
  rhash = /#.*$/,
  rts = /([?&])_=[^&]*/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,
  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},
  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat( "*" ),
  // Anchor tag for parsing the document origin
  originAnchor = document.createElement( "a" );
  originAnchor.href = location.href;
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {
  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {
    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }
    var dataType,
      i = 0,
      dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
    if ( jQuery.isFunction( func ) ) {
      // For each dataType in the dataTypeExpression
      while ( ( dataType = dataTypes[ i++ ] ) ) {
        // Prepend if requested
        if ( dataType[ 0 ] === "+" ) {
          dataType = dataType.slice( 1 ) || "*";
          ( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
        // Otherwise append
        } else {
          ( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
        }
      }
    }
  };
}
// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
  var inspected = {},
    seekingTransport = ( structure === transports );
  function inspect( dataType ) {
    var selected;
    inspected[ dataType ] = true;
    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
      var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
      if ( typeof dataTypeOrTransport === "string" &&
        !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
        options.dataTypes.unshift( dataTypeOrTransport );
        inspect( dataTypeOrTransport );
        return false;
      } else if ( seekingTransport ) {
        return !( selected = dataTypeOrTransport );
      }
    } );
    return selected;
  }
  return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var key, deep,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};
  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }
  return target;
}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
  var ct, type, finalDataType, firstDataType,
    contents = s.contents,
    dataTypes = s.dataTypes;
  // Remove auto dataType and get content-type in the process
  while ( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
    }
  }
  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }
  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {
    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }
    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }
  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
  var conv2, current, conv, tmp, prev,
    converters = {},
    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice();
  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }
  current = dataTypes.shift();
  // Convert to each sequential dataType
  while ( current ) {
    if ( s.responseFields[ current ] ) {
      jqXHR[ s.responseFields[ current ] ] = response;
    }
    // Apply the dataFilter if provided
    if ( !prev && isSuccess && s.dataFilter ) {
      response = s.dataFilter( response, s.dataType );
    }
    prev = current;
    current = dataTypes.shift();
    if ( current ) {
    // There's only work to do if current dataType is non-auto
      if ( current === "*" ) {
        current = prev;
      // Convert response if prev dataType is non-auto and differs from current
      } else if ( prev !== "*" && prev !== current ) {
        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];
        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {
            // If conv2 outputs current
            tmp = conv2.split( " " );
            if ( tmp[ 1 ] === current ) {
              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {
                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];
                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.unshift( tmp[ 1 ] );
                }
                break;
              }
            }
          }
        }
        // Apply converter (if not an equivalence)
        if ( conv !== true ) {
          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s.throws ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return {
                state: "parsererror",
                error: conv ? e : "No conversion from " + prev + " to " + current
              };
            }
          }
        }
      }
    }
  }
  return { state: "success", data: response };
}
jQuery.extend( {
  // Counter for holding the number of active queries
  active: 0,
  // Last-Modified header cache for next request
  lastModified: {},
  etag: {},
  ajaxSettings: {
    url: location.href,
    type: "GET",
    isLocal: rlocalProtocol.test( location.protocol ),
    global: true,
    processData: true,
    async: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */
    accepts: {
      "*": allTypes,
      text: "text/plain",
      html: "text/html",
      xml: "application/xml, text/xml",
      json: "application/json, text/javascript"
    },
    contents: {
      xml: /\bxml\b/,
      html: /\bhtml/,
      json: /\bjson\b/
    },
    responseFields: {
      xml: "responseXML",
      text: "responseText",
      json: "responseJSON"
    },
    // Data converters
    // Keys separate source (or catchall "*") and destination types with a single space
    converters: {
      // Convert anything to text
      "* text": String,
      // Text to html (true = no transformation)
      "text html": true,
      // Evaluate text as a json expression
      "text json": jQuery.parseJSON,
      // Parse text as xml
      "text xml": jQuery.parseXML
    },
    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      url: true,
      context: true
    }
  },
  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    return settings ?
      // Building a settings object
      ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
      // Extending ajaxSettings
      ajaxExtend( jQuery.ajaxSettings, target );
  },
  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),
  // Main method
  ajax: function( url, options ) {
    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }
    // Force options to be an object
    options = options || {};
    var transport,
      // URL without anti-cache param
      cacheURL,
      // Response headers
      responseHeadersString,
      responseHeaders,
      // timeout handle
      timeoutTimer,
      // Url cleanup var
      urlAnchor,
      // To know if global events are to be dispatched
      fireGlobals,
      // Loop variable
      i,
      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),
      // Callbacks context
      callbackContext = s.context || s,
      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context &&
        ( callbackContext.nodeType || callbackContext.jquery ) ?
          jQuery( callbackContext ) :
          jQuery.event,
      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks( "once memory" ),
      // Status-dependent callbacks
      statusCode = s.statusCode || {},
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // The jqXHR state
      state = 0,
      // Default abort message
      strAbort = "canceled",
      // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( state === 2 ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
                responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match == null ? null : match;
        },
        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function( name, value ) {
          var lname = name.toLowerCase();
          if ( !state ) {
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( !state ) {
            s.mimeType = type;
          }
          return this;
        },
        // Status-dependent callbacks
        statusCode: function( map ) {
          var code;
          if ( map ) {
            if ( state < 2 ) {
              for ( code in map ) {
                // Lazy-add the new callback in a way that preserves old ones
                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
              }
            } else {
              // Execute the appropriate callbacks
              jqXHR.always( map[ jqXHR.status ] );
            }
          }
          return this;
        },
        // Cancel the request
        abort: function( statusText ) {
          var finalText = statusText || strAbort;
          if ( transport ) {
            transport.abort( finalText );
          }
          done( 0, finalText );
          return this;
        }
      };
    // Attach deferreds
    deferred.promise( jqXHR ).complete = completeDeferred.add;
    jqXHR.success = jqXHR.done;
    jqXHR.error = jqXHR.fail;
    // Remove hash character (#7531: and string promotion)
    // Add protocol if not provided (prefilters might expect it)
    // Handle falsy url in the settings object (#10093: consistency with old signature)
    // We also use the url parameter if available
    s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
      .replace( rprotocol, location.protocol + "//" );
    // Alias method option to type as per ticket #12004
    s.type = options.method || options.type || s.method || s.type;
    // Extract dataTypes list
    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
    // A cross-domain request is in order when the origin doesn't match the current origin.
    if ( s.crossDomain == null ) {
      urlAnchor = document.createElement( "a" );
      // Support: IE8-11+
      // IE throws exception if url is malformed, e.g. http://example.com:80x/
      try {
        urlAnchor.href = s.url;
        // Support: IE8-11+
        // Anchor's host property isn't correctly set when s.url is relative
        urlAnchor.href = urlAnchor.href;
        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
          urlAnchor.protocol + "//" + urlAnchor.host;
      } catch ( e ) {
        // If there is an error parsing the URL, assume it is crossDomain,
        // it can be rejected by the transport if it is invalid
        s.crossDomain = true;
      }
    }
    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }
    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
    // If request was aborted inside a prefilter, stop there
    if ( state === 2 ) {
      return jqXHR;
    }
    // We can fire global events as of now if asked to
    // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
    fireGlobals = jQuery.event && s.global;
    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger( "ajaxStart" );
    }
    // Uppercase the type
    s.type = s.type.toUpperCase();
    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );
    // Save the URL in case we're toying with the If-Modified-Since
    // and/or If-None-Match header later on
    cacheURL = s.url;
    // More options handling for requests with no content
    if ( !s.hasContent ) {
      // If data is available, append data to url
      if ( s.data ) {
        cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }
      // Add anti-cache in url if needed
      if ( s.cache === false ) {
        s.url = rts.test( cacheURL ) ?
          // If there is already a '_' parameter, set its value
          cacheURL.replace( rts, "$1_=" + nonce++ ) :
          // Otherwise add one to the end
          cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
      }
    }
    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      if ( jQuery.lastModified[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
      }
      if ( jQuery.etag[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
      }
    }
    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }
    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
        s.accepts[ s.dataTypes[ 0 ] ] +
          ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );
    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }
    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend &&
      ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
      // Abort if not done already and return
      return jqXHR.abort();
    }
    // Aborting is no longer a cancellation
    strAbort = "abort";
    // Install callbacks on deferreds
    for ( i in { success: 1, error: 1, complete: 1 } ) {
      jqXHR[ i ]( s[ i ] );
    }
    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;
      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }
      // If request was aborted inside ajaxSend, stop there
      if ( state === 2 ) {
        return jqXHR;
      }
      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = window.setTimeout( function() {
          jqXHR.abort( "timeout" );
        }, s.timeout );
      }
      try {
        state = 1;
        transport.send( requestHeaders, done );
      } catch ( e ) {
        // Propagate exception as error if not done
        if ( state < 2 ) {
          done( -1, e );
        // Simply rethrow otherwise
        } else {
          throw e;
        }
      }
    }
    // Callback for when everything is done
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;
      // Called once
      if ( state === 2 ) {
        return;
      }
      // State is "done" now
      state = 2;
      // Clear timeout if it exists
      if ( timeoutTimer ) {
        window.clearTimeout( timeoutTimer );
      }
      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;
      // Cache response headers
      responseHeadersString = headers || "";
      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;
      // Determine if successful
      isSuccess = status >= 200 && status < 300 || status === 304;
      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }
      // Convert no matter what (that way responseXXX fields are always set)
      response = ajaxConvert( s, response, jqXHR, isSuccess );
      // If successful, handle type chaining
      if ( isSuccess ) {
        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {
          modified = jqXHR.getResponseHeader( "Last-Modified" );
          if ( modified ) {
            jQuery.lastModified[ cacheURL ] = modified;
          }
          modified = jqXHR.getResponseHeader( "etag" );
          if ( modified ) {
            jQuery.etag[ cacheURL ] = modified;
          }
        }
        // if no content
        if ( status === 204 || s.type === "HEAD" ) {
          statusText = "nocontent";
        // if not modified
        } else if ( status === 304 ) {
          statusText = "notmodified";
        // If we have data, let's convert it
        } else {
          statusText = response.state;
          success = response.data;
          error = response.error;
          isSuccess = !error;
        }
      } else {
        // Extract error from statusText and normalize for non-aborts
        error = statusText;
        if ( status || !statusText ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }
      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";
      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }
      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;
      if ( fireGlobals ) {
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
          [ jqXHR, s, isSuccess ? success : error ] );
      }
      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger( "ajaxStop" );
        }
      }
    }
    return jqXHR;
  },
  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  },
  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  }
} );
jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    // Shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }
    // The url can be an options object (which then must have .url)
    return jQuery.ajax( jQuery.extend( {
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    }, jQuery.isPlainObject( url ) && url ) );
  };
} );
jQuery._evalUrl = function( url ) {
  return jQuery.ajax( {
    url: url,
    // Make this explicit, since user can override this through ajaxSetup (#11264)
    type: "GET",
    dataType: "script",
    async: false,
    global: false,
    "throws": true
  } );
};
jQuery.fn.extend( {
  wrapAll: function( html ) {
    var wrap;
    if ( jQuery.isFunction( html ) ) {
      return this.each( function( i ) {
        jQuery( this ).wrapAll( html.call( this, i ) );
      } );
    }
    if ( this[ 0 ] ) {
      // The elements to wrap the target around
      wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
      if ( this[ 0 ].parentNode ) {
        wrap.insertBefore( this[ 0 ] );
      }
      wrap.map( function() {
        var elem = this;
        while ( elem.firstElementChild ) {
          elem = elem.firstElementChild;
        }
        return elem;
      } ).append( this );
    }
    return this;
  },
  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each( function( i ) {
        jQuery( this ).wrapInner( html.call( this, i ) );
      } );
    }
    return this.each( function() {
      var self = jQuery( this ),
        contents = self.contents();
      if ( contents.length ) {
        contents.wrapAll( html );
      } else {
        self.append( html );
      }
    } );
  },
  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );
    return this.each( function( i ) {
      jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
    } );
  },
  unwrap: function() {
    return this.parent().each( function() {
      if ( !jQuery.nodeName( this, "body" ) ) {
        jQuery( this ).replaceWith( this.childNodes );
      }
    } ).end();
  }
} );
jQuery.expr.filters.hidden = function( elem ) {
  return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {
  // Support: Opera <= 12.12
  // Opera reports offsetWidths and offsetHeights less than zero on some elements
  // Use OR instead of AND as the element is not visible if either is true
  // See tickets #10406 and #13132
  return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};
var r20 = /%20/g,
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
  rsubmittable = /^(?:input|select|textarea|keygen)/i;
function buildParams( prefix, obj, traditional, add ) {
  var name;
  if ( jQuery.isArray( obj ) ) {
    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {
        // Treat each array item as a scalar.
        add( prefix, v );
      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams(
          prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
          v,
          traditional,
          add
        );
      }
    } );
  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }
  } else {
    // Serialize scalar item.
    add( prefix, obj );
  }
}
// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, value ) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
      s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
    };
  // Set traditional to true for jQuery <= 1.3.2 behavior.
  if ( traditional === undefined ) {
    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
  }
  // If an array was passed in, assume that it is an array of form elements.
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    } );
  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }
  // Return the resulting serialization
  return s.join( "&" ).replace( r20, "+" );
};
jQuery.fn.extend( {
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map( function() {
      // Can add propHook for "elements" to filter or add form elements
      var elements = jQuery.prop( this, "elements" );
      return elements ? jQuery.makeArray( elements ) : this;
    } )
    .filter( function() {
      var type = this.type;
      // Use .is( ":disabled" ) so that fieldset[disabled] works
      return this.name && !jQuery( this ).is( ":disabled" ) &&
        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
        ( this.checked || !rcheckableType.test( type ) );
    } )
    .map( function( i, elem ) {
      var val = jQuery( this ).val();
      return val == null ?
        null :
        jQuery.isArray( val ) ?
          jQuery.map( val, function( val ) {
            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          } ) :
          { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    } ).get();
  }
} );
jQuery.ajaxSettings.xhr = function() {
  try {
    return new window.XMLHttpRequest();
  } catch ( e ) {}
};
var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE9
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
  xhrSupported = jQuery.ajaxSettings.xhr();
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;
jQuery.ajaxTransport( function( options ) {
  var callback, errorCallback;
  // Cross domain only allowed if supported through XMLHttpRequest
  if ( support.cors || xhrSupported && !options.crossDomain ) {
    return {
      send: function( headers, complete ) {
        var i,
          xhr = options.xhr();
        xhr.open(
          options.type,
          options.url,
          options.async,
          options.username,
          options.password
        );
        // Apply custom fields if provided
        if ( options.xhrFields ) {
          for ( i in options.xhrFields ) {
            xhr[ i ] = options.xhrFields[ i ];
          }
        }
        // Override mime type if needed
        if ( options.mimeType && xhr.overrideMimeType ) {
          xhr.overrideMimeType( options.mimeType );
        }
        // X-Requested-With header
        // For cross-domain requests, seeing as conditions for a preflight are
        // akin to a jigsaw puzzle, we simply never set it to be sure.
        // (it can always be set on a per-request basis or even using ajaxSetup)
        // For same-domain requests, won't change header if already provided.
        if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
          headers[ "X-Requested-With" ] = "XMLHttpRequest";
        }
        // Set headers
        for ( i in headers ) {
          xhr.setRequestHeader( i, headers[ i ] );
        }
        // Callback
        callback = function( type ) {
          return function() {
            if ( callback ) {
              callback = errorCallback = xhr.onload =
                xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
              if ( type === "abort" ) {
                xhr.abort();
              } else if ( type === "error" ) {
                // Support: IE9
                // On a manual native abort, IE9 throws
                // errors on any property access that is not readyState
                if ( typeof xhr.status !== "number" ) {
                  complete( 0, "error" );
                } else {
                  complete(
                    // File: protocol always yields status 0; see #8605, #14207
                    xhr.status,
                    xhr.statusText
                  );
                }
              } else {
                complete(
                  xhrSuccessStatus[ xhr.status ] || xhr.status,
                  xhr.statusText,
                  // Support: IE9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  ( xhr.responseType || "text" ) !== "text"  ||
                  typeof xhr.responseText !== "string" ?
                    { binary: xhr.response } :
                    { text: xhr.responseText },
                  xhr.getAllResponseHeaders()
                );
              }
            }
          };
        };
        // Listen to events
        xhr.onload = callback();
        errorCallback = xhr.onerror = callback( "error" );
        // Support: IE9
        // Use onreadystatechange to replace onabort
        // to handle uncaught aborts
        if ( xhr.onabort !== undefined ) {
          xhr.onabort = errorCallback;
        } else {
          xhr.onreadystatechange = function() {
            // Check readyState before timeout as it changes
            if ( xhr.readyState === 4 ) {
              // Allow onerror to be called first,
              // but that will not handle a native abort
              // Also, save errorCallback to a variable
              // as xhr.onerror cannot be accessed
              window.setTimeout( function() {
                if ( callback ) {
                  errorCallback();
                }
              } );
            }
          };
        }
        // Create the abort callback
        callback = callback( "abort" );
        try {
          // Do send the request (this may raise an exception)
          xhr.send( options.hasContent && options.data || null );
        } catch ( e ) {
          // #14683: Only rethrow if this hasn't been notified as an error yet
          if ( callback ) {
            throw e;
          }
        }
      },
      abort: function() {
        if ( callback ) {
          callback();
        }
      }
    };
  }
} );
// Install script dataType
jQuery.ajaxSetup( {
  accepts: {
    script: "text/javascript, application/javascript, " +
      "application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /\b(?:java|ecma)script\b/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
} );
// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
  }
} );
// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {
    var script, callback;
    return {
      send: function( _, complete ) {
        script = jQuery( "<script>" ).prop( {
          charset: s.scriptCharset,
          src: s.url
        } ).on(
          "load error",
          callback = function( evt ) {
            script.remove();
            callback = null;
            if ( evt ) {
              complete( evt.type === "error" ? 404 : 200, evt.type );
            }
          }
        );
        // Use native DOM manipulation to avoid our domManip AJAX trickery
        document.head.appendChild( script[ 0 ] );
      },
      abort: function() {
        if ( callback ) {
          callback();
        }
      }
    };
  }
} );
var oldCallbacks = [],
  rjsonp = /(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
jQuery.ajaxSetup( {
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
} );
// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
  var callbackName, overwritten, responseContainer,
    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
      "url" :
      typeof s.data === "string" &&
        ( s.contentType || "" )
          .indexOf( "application/x-www-form-urlencoded" ) === 0 &&
        rjsonp.test( s.data ) && "data"
    );
  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;
    // Insert callback into url or form data
    if ( jsonProp ) {
      s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    } else if ( s.jsonp !== false ) {
      s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }
    // Use data converter to retrieve json after script execution
    s.converters[ "script json" ] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };
    // Force json dataType
    s.dataTypes[ 0 ] = "json";
    // Install callback
    overwritten = window[ callbackName ];
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };
    // Clean-up function (fires after converters)
    jqXHR.always( function() {
      // If previous value didn't exist - remove it
      if ( overwritten === undefined ) {
        jQuery( window ).removeProp( callbackName );
      // Otherwise restore preexisting value
      } else {
        window[ callbackName ] = overwritten;
      }
      // Save back as free
      if ( s[ callbackName ] ) {
        // Make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;
        // Save the callback name for future use
        oldCallbacks.push( callbackName );
      }
      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }
      responseContainer = overwritten = undefined;
    } );
    // Delegate to script
    return "script";
  }
} );
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
  if ( !data || typeof data !== "string" ) {
    return null;
  }
  if ( typeof context === "boolean" ) {
    keepScripts = context;
    context = false;
  }
  context = context || document;
  var parsed = rsingleTag.exec( data ),
    scripts = !keepScripts && [];
  // Single tag
  if ( parsed ) {
    return [ context.createElement( parsed[ 1 ] ) ];
  }
  parsed = buildFragment( [ data ], context, scripts );
  if ( scripts && scripts.length ) {
    jQuery( scripts ).remove();
  }
  return jQuery.merge( [], parsed.childNodes );
};
// Keep a copy of the old load method
var _load = jQuery.fn.load;
/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
  if ( typeof url !== "string" && _load ) {
    return _load.apply( this, arguments );
  }
  var selector, type, response,
    self = this,
    off = url.indexOf( " " );
  if ( off > -1 ) {
    selector = jQuery.trim( url.slice( off ) );
    url = url.slice( 0, off );
  }
  // If it's a function
  if ( jQuery.isFunction( params ) ) {
    // We assume that it's the callback
    callback = params;
    params = undefined;
  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }
  // If we have elements to modify, make the request
  if ( self.length > 0 ) {
    jQuery.ajax( {
      url: url,
      // If "type" variable is undefined, then "GET" method will be used.
      // Make value of this field explicit since
      // user can override it through ajaxSetup method
      type: type || "GET",
      dataType: "html",
      data: params
    } ).done( function( responseText ) {
      // Save response for use in complete callback
      response = arguments;
      self.html( selector ?
        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
        // Otherwise use the full result
        responseText );
    // If the request succeeds, this function gets "data", "status", "jqXHR"
    // but they are ignored because response was set above.
    // If it fails, this function gets "jqXHR", "status", "error"
    } ).always( callback && function( jqXHR, status ) {
      self.each( function() {
        callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
      } );
    } );
  }
  return this;
};
// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
  "ajaxStart",
  "ajaxStop",
  "ajaxComplete",
  "ajaxError",
  "ajaxSuccess",
  "ajaxSend"
], function( i, type ) {
  jQuery.fn[ type ] = function( fn ) {
    return this.on( type, fn );
  };
} );
jQuery.expr.filters.animated = function( elem ) {
  return jQuery.grep( jQuery.timers, function( fn ) {
    return elem === fn.elem;
  } ).length;
};
/**
 * Gets a window from an element
 */
function getWindow( elem ) {
  return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}
jQuery.offset = {
  setOffset: function( elem, options, i ) {
    var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
      position = jQuery.css( elem, "position" ),
      curElem = jQuery( elem ),
      props = {};
    // Set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }
    curOffset = curElem.offset();
    curCSSTop = jQuery.css( elem, "top" );
    curCSSLeft = jQuery.css( elem, "left" );
    calculatePosition = ( position === "absolute" || position === "fixed" ) &&
      ( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
    // Need to be able to calculate position if either
    // top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }
    if ( jQuery.isFunction( options ) ) {
      // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
      options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
    }
    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }
    if ( "using" in options ) {
      options.using.call( elem, props );
    } else {
      curElem.css( props );
    }
  }
};
jQuery.fn.extend( {
  offset: function( options ) {
    if ( arguments.length ) {
      return options === undefined ?
        this :
        this.each( function( i ) {
          jQuery.offset.setOffset( this, options, i );
        } );
    }
    var docElem, win,
      elem = this[ 0 ],
      box = { top: 0, left: 0 },
      doc = elem && elem.ownerDocument;
    if ( !doc ) {
      return;
    }
    docElem = doc.documentElement;
    // Make sure it's not a disconnected DOM node
    if ( !jQuery.contains( docElem, elem ) ) {
      return box;
    }
    box = elem.getBoundingClientRect();
    win = getWindow( doc );
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  },
  position: function() {
    if ( !this[ 0 ] ) {
      return;
    }
    var offsetParent, offset,
      elem = this[ 0 ],
      parentOffset = { top: 0, left: 0 };
    // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if ( jQuery.css( elem, "position" ) === "fixed" ) {
      // Assume getBoundingClientRect is there when computed position is fixed
      offset = elem.getBoundingClientRect();
    } else {
      // Get *real* offsetParent
      offsetParent = this.offsetParent();
      // Get correct offsets
      offset = this.offset();
      if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
        parentOffset = offsetParent.offset();
      }
      // Add offsetParent borders
      parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
      parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
    }
    // Subtract parent offsets and element margins
    return {
      top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
      left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
    };
  },
  // This method will return documentElement in the following cases:
  // 1) For the element inside the iframe without offsetParent, this method will return
  //    documentElement of the parent window
  // 2) For the hidden or detached element
  // 3) For body or html element, i.e. in case of the html node - it will return itself
  //
  // but those exceptions were never presented as a real life use-cases
  // and might be considered as more preferable results.
  //
  // This logic, however, is not guaranteed and can change at any point in the future
  offsetParent: function() {
    return this.map( function() {
      var offsetParent = this.offsetParent;
      while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || documentElement;
    } );
  }
} );
// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
  var top = "pageYOffset" === prop;
  jQuery.fn[ method ] = function( val ) {
    return access( this, function( elem, method, val ) {
      var win = getWindow( elem );
      if ( val === undefined ) {
        return win ? win[ prop ] : elem[ method ];
      }
      if ( win ) {
        win.scrollTo(
          !top ? val : win.pageXOffset,
          top ? val : win.pageYOffset
        );
      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length );
  };
} );
// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
  jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
    function( elem, computed ) {
      if ( computed ) {
        computed = curCSS( elem, prop );
        // If curCSS returns percentage, fallback to offset
        return rnumnonpx.test( computed ) ?
          jQuery( elem ).position()[ prop ] + "px" :
          computed;
      }
    }
  );
} );
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
    function( defaultExtra, funcName ) {
    // Margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
      return access( this, function( elem, type, value ) {
        var doc;
        if ( jQuery.isWindow( elem ) ) {
          // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
          // isn't a whole lot we can do. See pull request at this URL for discussion:
          // https://github.com/jquery/jquery/pull/764
          return elem.document.documentElement[ "client" + name ];
        }
        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;
          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
          // whichever is greatest
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }
        return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, extra ) :
          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable, null );
    };
  } );
} );
jQuery.fn.extend( {
  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },
  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ?
      this.off( selector, "**" ) :
      this.off( types, selector || "**", fn );
  },
  size: function() {
    return this.length;
  }
} );
jQuery.fn.andSelf = jQuery.fn.addBack;
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if ( typeof define === "function" && define.amd ) {
  define( "jquery", [], function() {
    return jQuery;
  } );
}
var
  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
  // Map over the $ in case of overwrite
  _$ = window.$;
jQuery.noConflict = function( deep ) {
  if ( window.$ === jQuery ) {
    window.$ = _$;
  }
  if ( deep && window.jQuery === jQuery ) {
    window.jQuery = _jQuery;
  }
  return jQuery;
};
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
  window.jQuery = window.$ = jQuery;
}
return jQuery;
}));
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*  jQuery.flexMenu 1.4.2
  https://github.com/352Media/flexMenu
  Description: If a list is too long for all items to fit on one line, display a popup menu instead.
  Dependencies: jQuery, Modernizr (optional). Without Modernizr, the menu can only be shown on click (not hover). */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function f(){a(window).width()===b&&a(window).height()===c||(a(d).each(function(){a(this).flexMenu({undo:!0}).flexMenu(this.options)}),b=a(window).width(),c=a(window).height())}function g(b){var c,d;c=a("li.flexMenu-viewMore.active"),d=c.not(b),d.removeClass("active").find("> ul").hide()}var e,b=a(window).width(),c=a(window).height(),d=[];a(window).resize(function(){clearTimeout(e),e=setTimeout(function(){f()},200)}),a.fn.flexMenu=function(b){var c,e=a.extend({threshold:2,cutoff:2,linkText:"More",linkTitle:"View More",linkTextAll:"Menu",linkTitleAll:"Open/Close Menu",showOnHover:!0,popupAbsolute:!0,popupClass:"",undo:!1},b);return this.options=e,c=a.inArray(this,d),c>=0?d.splice(c,1):d.push(this),this.each(function(){function s(a){var b=Math.ceil(a.offset().top)>=i+j;return b}var k,l,m,n,o,q,r,b=a(this),c=b.find("> li"),d=c.first(),f=c.last(),h=b.find("li").length,i=Math.floor(d.offset().top),j=Math.floor(d.outerHeight(!0)),p=!1;if(s(f)&&h>e.threshold&&!e.undo&&b.is(":visible")){var t=a('<ul class="flexMenu-popup" style="display:none;'+(e.popupAbsolute?" position: absolute;":"")+'"></ul>');for(t.addClass(e.popupClass),r=h;r>1;r--){if(k=b.find("> li:last-child"),l=s(k),r-1<=e.cutoff){a(b.children().get().reverse()).appendTo(t),p=!0;break}if(!l)break;k.appendTo(t)}p?b.append('<li class="flexMenu-viewMore flexMenu-allInPopup"><a href="#" title="'+e.linkTitleAll+'">'+e.linkTextAll+"</a></li>"):b.append('<li class="flexMenu-viewMore"><a href="#" title="'+e.linkTitle+'">'+e.linkText+"</a></li>"),m=b.find("> li.flexMenu-viewMore"),s(m)&&b.find("> li:nth-last-child(2)").appendTo(t),t.children().each(function(a,b){t.prepend(b)}),m.append(t),n=b.find("> li.flexMenu-viewMore > a"),n.click(function(a){g(m),t.toggle(),m.toggleClass("active"),a.preventDefault()}),e.showOnHover&&"undefined"!=typeof Modernizr&&!Modernizr.touch&&m.hover(function(){t.show(),a(this).addClass("active")},function(){t.hide(),a(this).removeClass("active")})}else if(e.undo&&b.find("ul.flexMenu-popup")){for(q=b.find("ul.flexMenu-popup"),o=q.find("li").length,r=1;r<=o;r++)q.find("> li:first-child").appendTo(b);q.remove(),b.find("> li.flexMenu-viewMore").remove()}})}});
//= require flexmenu/flexmenu.min.js
// ==================================================
// fancyBox v3.1.20
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t){var e=t.currentTarget,o=t.data?t.data.options:{},i=t.data?t.data.items:[],a=n(e).attr("data-fancybox")||"",s=0;t.preventDefault(),t.stopPropagation(),a?(i=i.length?i.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),s=i.index(e),s<0&&(s=0)):i=[e],n.fancybox.open(i,o,s)}if(n){if(n.fn.fancybox)return void n.error("fancyBox already initialized");var a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!1,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","close"],idleTime:4,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'},parentEl:"body",autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t]}(),f=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,o,i){var s=this;s.opts=n.extend(!0,{index:i},a,o||{}),o&&n.isArray(o.buttons)&&(s.opts.buttons=o.buttons),s.id=s.opts.id||++c,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init(t))};n.extend(h.prototype,{init:function(){var t,e,o,i=this,a=i.group[i.currIndex].opts;i.scrollTop=r.scrollTop(),i.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||n.fancybox.isMobile||"hidden"===n("body").css("overflow")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),t=n("body").width()-t,t>1&&n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: '+t+"px; }</style>")),o="",n.each(a.buttons,function(t,e){o+=a.btnTpl[e]||""}),e=n(i.translate(i,a.baseTpl.replace("{{BUTTONS}}",o))).addClass("fancybox-is-hidden").attr("id","fancybox-container-"+i.id).addClass(a.baseClass).data("FancyBox",i).prependTo(a.parentEl),i.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption"].forEach(function(t){i.$refs[t]=e.find(".fancybox-"+t)}),(!a.arrows||i.group.length<2)&&e.find(".fancybox-navigation").remove(),a.infobar||i.$refs.infobar.remove(),a.toolbar||i.$refs.toolbar.remove(),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var a,s,r,c,l={},u={},d=[];n.isPlainObject(i)?(l=i,u=i.opts||i):"object"===n.type(i)&&n(i).length?(a=n(i),d=a.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.src="src"in d?d.src:u.src||a.attr("href"),["width","height","thumb","type","filter"].forEach(function(t){t in d&&(u[t]=d[t])}),"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=a,l.type||l.src||(l.type="inline",l.src=i)):l={type:"html",src:i+""},l.opts=n.extend(!0,{},e.opts,u),n.fancybox.isMobile&&(l.opts=n.extend(!0,{},l.opts,l.opts.mobile)),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),l.type=s,l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in d&&(l.opts.caption=d.caption),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},500))}),r.on("focusin.fb",function(t){var i=n.fancybox?n.fancybox.getInstance():null;i.isClosing||!i.current||!i.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||i&&"fixed"!==n(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,u,d,h=this,p=h.group.length;if(!(h.isSliding||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=p))return!1;if(a=h.firstRun=null===h.firstRun,!(p<2&&!a&&h.isSliding)){if(c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),p>1&&((s||r.index>0)&&h.createSlide(t-1),(s||r.index<p-1)&&h.createSlide(t+1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.removeClass("fancybox-is-hidden"),f(h.$refs.container),h.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),h.loadSlide(r),void h.preload();n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(h.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&(r.isMoved=!1,h.complete())})})):h.$refs.stage.children().removeAttr("style"),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,u=this,d=u.current,f=d.$content,h=parseInt(d.$slide.width(),10),p=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*p:e,a=n.fancybox.getTranslate(f),c=g/a.width,l=b/a.height,s=.5*h-.5*g,r=.5*p-.5*b,g>h&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<h-g&&(s=h-g)),b>p&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<p-b&&(r=p-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;"image"!=i.type||i.hasError||!a||o.isAnimating||(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,r,c=this,l=t.$content,u=t.width,d=t.height,f=t.opts.margin;return!(!l||!l.length||!u&&!d)&&("number"===n.type(f)&&(f=[f,f]),2==f.length&&(f=[f[0],f[1],f[0],f[1]]),s.width()<800&&(f=[0,0,0,0]),e=parseInt(c.$refs.stage.width(),10)-(f[1]+f[3]),o=parseInt(c.$refs.stage.height(),10)-(f[0]+f[2]),i=Math.min(1,e/u,o/d),a=Math.floor(i*u),r=Math.floor(i*d),{top:Math.floor(.5*(o-r))+f[0],left:Math.floor(.5*(e-a))+f[3],width:a,height:r})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,i=this,a=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current&&!i.isClosing&&(i.isZoomable()?(a.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown(),n?a.addClass("fancybox-can-zoomIn"):i.current.opts.touch?a.addClass("fancybox-can-drag"):a.addClass("fancybox-can-zoomOut")):i.current.opts.touch&&a.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,i=!1;return o&&(i=n.fancybox.getTranslate(o),i=i.width<e.width||i.height<e.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r=this,c=e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),i.sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=a){o=u;break}}!o&&i.length&&(o=i[i.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&(a.css.width===o||a.css.height===o)&&(s=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(i.outerWidth(!0)+(l.width()-s)),c=Math.ceil(i.outerHeight(!0)),l.css({width:a.css.width===o?r+(l.outerWidth()-l.innerWidth()):a.css.width,height:a.css.height===o?c+(l.outerHeight()-l.innerHeight()):a.css.height})),l.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(o.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&a||(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=Math.round(r.width/u.width*100)/100,r.scaleY=Math.round(r.height/u.height*100)/100,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,a,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(i=a.$refs.stage.offset(),s={top:l.top-i.top+parseFloat(c.css("border-top-width")||0),left:l.left-i.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.unbind().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(t=e&&e.isComplete?e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first"):null,t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l=this,f=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),f.timouts&&clearTimeout(f.timouts),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),f.$slide.siblings().trigger("onReset").remove(),i&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(f),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===f.type&&!f.hasError&&(c=l.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),r=n.fancybox.getTranslate(a),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=f.opts.zoomOpacity,"auto"==s&&(s=Math.abs(f.width/f.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(f.$content,r),n.fancybox.animate(f.$content,c,i,h),!0):(o&&i?t===!0?setTimeout(h,i):n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,h):h(),!0)))},cleanUp:function(t){var e,o=this;o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&!o.current.focusBack&&o.$lastFocus.focus(),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("html").removeClass("fancybox-enabled"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"===t?r.trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},updateControls:function(t){var e=this,o=e.current,i=o.index,a=o.opts,s=a.caption,r=e.$refs.caption;o.$slide.trigger("refresh"),e.$caption=s&&s.length?r.html(s):null,e.isHiddenControls||e.showControls(),n("[data-fancybox-count]").html(e.group.length),n("[data-fancybox-index]").html(i+1),n("[data-fancybox-prev]").prop("disabled",!a.loop&&i<=0),n("[data-fancybox-next]").prop("disabled",!a.loop&&i>=e.group.length-1)},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.1.20",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=d||"transitionend";n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(r,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(t.off(r),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration","0ms"),e.width=t.width()*e.scaleX,e.height=t.height()*e.scaleY,e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(d)}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{items:n(e),options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i)}}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}};t(document).on("onInit.fb",function(o,i){t.each(i.group,function(o,i){var a,s,r,c,l,u,d,f=i.src||"",h=!1;i.type||(a=t.extend(!0,{},n,i.opts.media),t.each(a,function(n,o){if(r=f.match(o.matcher),u={},d=n,r){if(h=o.type,o.paramPlace&&r[o.paramPlace]){l=r[o.paramPlace],"?"==l[0]&&(l=l.substring(1)),l=l.split("&");for(var a=0;a<l.length;++a){var p=l[a].split("=",2);2==p.length&&(u[p[0]]=decodeURIComponent(p[1].replace(/\+/g," ")))}}return c=t.extend(!0,{},o.params,i.opts[n],u),f="function"===t.type(o.url)?o.url.call(this,r,c,i):e(o.url,r,c),s="function"===t.type(o.thumb)?o.thumb.call(this,r,c,i):e(o.thumb,r),"vimeo"===d&&(f=f.replace("&%23","#")),!1}}),h?(i.src=f,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=s),"iframe"===h&&(t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=d,i.opts.slideClass+=" fancybox-slide--"+("google_maps"==d?"map":"video"))):i.type="image")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){
return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is("a,button,input,select,textarea")||n.isFunction(t.get(0).onclick))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var i=this,c=n(o.target),u=i.instance,d=u.current,f=d.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),!d||i.instance.isAnimating||i.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(i.startPoints=a(o),i.startPoints&&!(i.startPoints.length>1&&u.isSliding))){if(i.$target=c,i.$content=f,i.canTap=!0,n(e).off(".fb.touch"),n(e).on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")),n(e).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),o.stopPropagation(),!u.current.opts.touch&&!u.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());n.fancybox.isMobile&&(l(i.$target)||l(i.$target.parent()))||o.preventDefault(),i.canvasWidth=Math.round(d.$slide[0].clientWidth),i.canvasHeight=Math.round(d.$slide[0].clientHeight),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.sliderStartPos=i.sliderLastPos||{top:0,left:0},i.contentStartPos=n.fancybox.getTranslate(i.$content),i.contentLastPos=null,1!==i.startPoints.length||i.isZooming||(i.canTap=!u.isSliding,"image"===d.type&&(i.contentStartPos.width>i.canvasWidth+1||i.contentStartPos.height>i.canvasHeight+1)?(n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2!==i.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(i.isZooming=!0,i.isSwiping=!1,i.isPanning=!1,n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=a(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.instance.current.opts.touch||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,a=this,s=a.isSwiping,r=a.sliderStartPos.left||0;s===!0?Math.abs(a.distance)>10&&(a.canTap=!1,a.instance.group.length<2&&a.instance.opts.touch.vertical?a.isSwiping="y":a.instance.isSliding||a.instance.opts.touch.vertical===!1||"auto"===a.instance.opts.touch.vertical&&n(t).width()>800?a.isSwiping="x":(e=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=e>45&&e<135?"y":"x"),a.instance.isSliding=a.isSwiping,a.startPoints=a.newPoints,n.each(a.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===a.instance.current.pos&&(a.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),a.instance.SlideShow&&a.instance.SlideShow.isActive&&a.instance.SlideShow.stop()):("x"==s&&(a.distanceX>0&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?r+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?r-=Math.pow(-a.distanceX,.8):r+=a.distanceX),a.sliderLastPos={top:"x"==s?0:a.sliderStartPos.top+a.distanceY,left:r},a.requestId&&(i(a.requestId),a.requestId=null),a.requestId=o(function(){a.sliderLastPos&&(n.each(a.instance.slides,function(t,e){var o=e.pos-a.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+o*a.canvasWidth+o*e.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,a,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,a=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),a.scaleX=s.contentStartPos.scaleX,a.scaleY=s.contentStartPos.scaleY,s.contentLastPos=a,s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var i,a,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,h=c.distanceX,p=c.distanceY;return i=Math.max(0,.5*l-.5*n),a=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>i&&(t=i-1+Math.pow(-i+d+h,.8)||0),h<0&&t<s&&(t=s+1-Math.pow(s-d-h,.8)||0)),o>u&&(p>0&&e>a&&(e=a-1+Math.pow(-a+f+p,.8)||0),p<0&&e<r&&(e=r+1-Math.pow(r-f-p,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,a=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(a*d),h=Math.floor(r*d),p=(a-f)*e.percentageOfImageAtPinchPointX,g=(r-h)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(p+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=h,e.contentLastPos=$,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.instance.current.opts.touch.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,i=n(t.target),s=o.instance,r=s.current,c=t&&a(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var i=r.opts[e];if(n.isFunction(i)&&(i=i.apply(s,[r,t])),i)switch(i){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>i[0].clientWidth+i.offset().left)){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):(t.stop(),t.instance.idleSecondsCounter=0,t.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;t.instance&&e&&(e.opts.loop||e.index<t.instance.group.length-1)&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),e.isComplete&&t.set())},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a={};for(n=0;n<i.length;n++)if(e=i[n],e&&e[1]in t){for(o=0;o<e.length;o++)a[i[0][o]]=e[o];return a}return!1}();if(!n)return void(e.fancybox.defaults.btnTpl.fullScreen=!1);var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,e){var n,i=e.$refs.toolbar.find("[data-fancybox-fullscreen]");e&&!e.FullScreen&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):i.hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance();t.current&&"image"===t.current.type&&t.isAnimating&&(t.current.$content.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance.group[0],n=t.instance.group[1];t.$button=t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),t.instance.group.length>1&&t.instance.group[t.instance.currIndex].opts.thumbs&&("image"==e.type||e.opts.thumb||e.opts.$thumb)&&("image"==n.type||n.opts.thumb||n.opts.$thumb)?(t.$button.on("click",function(){t.toggle()}),t.isActive=!0):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,i,a=e(this).parent().removeClass("fancybox-thumbs-loading"),s=a.outerWidth(),r=a.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,i=n/r,o>=1&&i>=1&&(o>i?(t/=i,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*s-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus()):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&(e.Thumbs=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;if(i&&i.isActive){if(n.modal)return i.$button.hide(),void i.hide();o&&e.opts.thumbs.autoStart===!0&&i.show(),i.isVisible&&i.focus()}},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&e.opts.thumbs.hideOnClose!==!1&&n.close()}})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length?e.trigger("click"):n("#"+n.escapeSelector(t.gallery)).trigger("click"))}function a(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=null,r=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,c){var l;i.opts.hash!==!1&&(l=a(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),s=l+(o.group.length>1?"-"+(i.index+1):""),"replaceState"in e.history?(r&&clearTimeout(r),r=setTimeout(function(){e.history[c?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+s),r=null},300)):e.location.hash=s))},"beforeClose.fb":function(o,i,c){var l,u;r&&clearTimeout(r),c.opts.hash!==!1&&(l=a(i),u=i&&i.opts.origHash?i.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),s=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!s||s===t.gallery+"-"+t.index||1===t.index&&s==t.gallery||(s=null,n.fancybox.close()):""!==t.gallery&&i(t)}),n(e).one("unload.fb popstate.fb",function(){n.fancybox.getInstance("close",!0,0)}),i(o()))},50)})}(document,window,window.jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
//---------------------------------------//
// Подключаем плагины npm
//---------------------------------------//
//---------------------------------------//
// Подключаем плагины, которые в папке ( plugins )
//---------------------------------------//
/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});
/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
// UMD factory - https://github.com/umdjs/umd/blob/d31bb6ee7098715e019f52bdfe27b3e4bfd2b97e/templates/jqueryPlugin.js
// Uses AMD, CommonJS or browser globals to create a jQuery plugin.
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD - register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    var $ = require('jquery');
    factory($);
    module.exports = $;
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function($) {
  /**
   * Inner implementation of the circle progress bar.
   * The class is not exposed _yet_ but you can create an instance through jQuery method call.
   *
   * @param {object} config - You can customize any class member (property or method).
   * @class
   * @alias CircleProgress
   */
  function CircleProgress(config) {
    this.init(config);
  }
  CircleProgress.prototype = {
    //--------------------------------------- public options ---------------------------------------
    /**
     * This is the only required option. It should be from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    value: 0.0,
    /**
     * Size of the canvas in pixels.
     * It's a square so we need only one dimension.
     * @type {number}
     * @default 100.0
     */
    size: 100.0,
    /**
     * Initial angle for `0.0` value in radians.
     * @type {number}
     * @default -Math.PI
     */
    startAngle: -Math.PI,
    /**
     * Width of the arc in pixels.
     * If it's `'auto'` - the value is calculated as `[this.size]{@link CircleProgress#size} / 14`.
     * @type {number|string}
     * @default 'auto'
     */
    thickness: 'auto',
    /**
     * Fill of the arc. You may set it to:
     *
     *   - solid color:
     *     - `'#3aeabb'`
     *     - `{ color: '#3aeabb' }`
     *     - `{ color: 'rgba(255, 255, 255, .3)' }`
     *   - linear gradient _(left to right)_:
     *     - `{ gradient: ['#3aeabb', '#fdd250'], gradientAngle: Math.PI / 4 }`
     *     - `{ gradient: ['red', 'green', 'blue'], gradientDirection: [x0, y0, x1, y1] }`
     *     - `{ gradient: [["red", .2], ["green", .3], ["blue", .8]] }`
     *   - image:
     *     - `{ image: 'http://i.imgur.com/pT0i89v.png' }`
     *     - `{ image: imageObject }`
     *     - `{ color: 'lime', image: 'http://i.imgur.com/pT0i89v.png' }` -
     *       color displayed until the image is loaded
     *
     * @default {gradient: ['#3aeabb', '#fdd250']}
     */
    fill: {
      gradient: ['#3aeabb', '#fdd250']
    },
    /**
     * Color of the "empty" arc. Only a color fill supported by now.
     * @type {string}
     * @default 'rgba(0, 0, 0, .1)'
     */
    emptyFill: 'rgba(0, 0, 0, .1)',
    /**
     * jQuery Animation config.
     * You can pass `false` to disable the animation.
     * @see http://api.jquery.com/animate/
     * @type {object|boolean}
     * @default {duration: 1200, easing: 'circleProgressEasing'}
     */
    animation: {
      duration: 1200,
      easing: 'circleProgressEasing'
    },
    /**
     * Default animation starts at `0.0` and ends at specified `value`. Let's call this _direct animation_.
     * If you want to make _reversed animation_ - set `animationStartValue: 1.0`.
     * Also you may specify any other value from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    animationStartValue: 0.0,
    /**
     * Reverse animation and arc draw.
     * By default, the arc is filled from `0.0` to `value`, _clockwise_.
     * With `reverse: true` the arc is filled from `1.0` to `value`, _counter-clockwise_.
     * @type {boolean}
     * @default false
     */
    reverse: false,
    /**
     * Arc line cap: `'butt'`, `'round'` or `'square'` -
     * [read more]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.lineCap}.
     * @type {string}
     * @default 'butt'
     */
    lineCap: 'butt',
    /**
     * Canvas insertion mode: append or prepend it into the parent element?
     * @type {string}
     * @default 'prepend'
     */
    insertMode: 'prepend',
    //------------------------------ protected properties and methods ------------------------------
    /**
     * Link to {@link CircleProgress} constructor.
     * @protected
     */
    constructor: CircleProgress,
    /**
     * Container element. Should be passed into constructor config.
     * @protected
     * @type {jQuery}
     */
    el: null,
    /**
     * Canvas element. Automatically generated and prepended to [this.el]{@link CircleProgress#el}.
     * @protected
     * @type {HTMLCanvasElement}
     */
    canvas: null,
    /**
     * 2D-context of [this.canvas]{@link CircleProgress#canvas}.
     * @protected
     * @type {CanvasRenderingContext2D}
     */
    ctx: null,
    /**
     * Radius of the outer circle. Automatically calculated as `[this.size]{@link CircleProgress#size} / 2`.
     * @protected
     * @type {number}
     */
    radius: 0.0,
    /**
     * Fill of the main arc. Automatically calculated, depending on [this.fill]{@link CircleProgress#fill} option.
     * @protected
     * @type {string|CanvasGradient|CanvasPattern}
     */
    arcFill: null,
    /**
     * Last rendered frame value.
     * @protected
     * @type {number}
     */
    lastFrameValue: 0.0,
    /**
     * Init/re-init the widget.
     *
     * Throws a jQuery event:
     *
     * - `circle-inited(jqEvent)`
     *
     * @param {object} config - You can customize any class member (property or method).
     */
    init: function(config) {
      $.extend(this, config);
      this.radius = this.size / 2;
      this.initWidget();
      this.initFill();
      this.draw();
      this.el.trigger('circle-inited');
    },
    /**
     * Initialize `<canvas>`.
     * @protected
     */
    initWidget: function() {
      if (!this.canvas)
        this.canvas = $('<canvas>')[this.insertMode == 'prepend' ? 'prependTo' : 'appendTo'](this.el)[0];
      var canvas = this.canvas;
      canvas.width = this.size;
      canvas.height = this.size;
      this.ctx = canvas.getContext('2d');
      if (window.devicePixelRatio > 1) {
        var scaleBy = window.devicePixelRatio;
        canvas.style.width = canvas.style.height = this.size + 'px';
        canvas.width = canvas.height = this.size * scaleBy;
        this.ctx.scale(scaleBy, scaleBy);
      }
    },
    /**
     * This method sets [this.arcFill]{@link CircleProgress#arcFill}.
     * It could do this async (on image load).
     * @protected
     */
    initFill: function() {
      var self = this,
        fill = this.fill,
        ctx = this.ctx,
        size = this.size;
      if (!fill)
        throw Error("The fill is not specified!");
      if (typeof fill == 'string')
        fill = {color: fill};
      if (fill.color)
        this.arcFill = fill.color;
      if (fill.gradient) {
        var gr = fill.gradient;
        if (gr.length == 1) {
          this.arcFill = gr[0];
        } else if (gr.length > 1) {
          var ga = fill.gradientAngle || 0, // gradient direction angle; 0 by default
            gd = fill.gradientDirection || [
                size / 2 * (1 - Math.cos(ga)), // x0
                size / 2 * (1 + Math.sin(ga)), // y0
                size / 2 * (1 + Math.cos(ga)), // x1
                size / 2 * (1 - Math.sin(ga))  // y1
              ];
          var lg = ctx.createLinearGradient.apply(ctx, gd);
          for (var i = 0; i < gr.length; i++) {
            var color = gr[i],
              pos = i / (gr.length - 1);
            if ($.isArray(color)) {
              pos = color[1];
              color = color[0];
            }
            lg.addColorStop(pos, color);
          }
          this.arcFill = lg;
        }
      }
      if (fill.image) {
        var img;
        if (fill.image instanceof Image) {
          img = fill.image;
        } else {
          img = new Image();
          img.src = fill.image;
        }
        if (img.complete)
          setImageFill();
        else
          img.onload = setImageFill;
      }
      function setImageFill() {
        var bg = $('<canvas>')[0];
        bg.width = self.size;
        bg.height = self.size;
        bg.getContext('2d').drawImage(img, 0, 0, size, size);
        self.arcFill = self.ctx.createPattern(bg, 'no-repeat');
        self.drawFrame(self.lastFrameValue);
      }
    },
    /**
     * Draw the circle.
     * @protected
     */
    draw: function() {
      if (this.animation)
        this.drawAnimated(this.value);
      else
        this.drawFrame(this.value);
    },
    /**
     * Draw a single animation frame.
     * @protected
     * @param {number} v - Frame value.
     */
    drawFrame: function(v) {
      this.lastFrameValue = v;
      this.ctx.clearRect(0, 0, this.size, this.size);
      this.drawEmptyArc(v);
      this.drawArc(v);
    },
    /**
     * Draw the arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawArc: function(v) {
      if (v === 0)
        return;
      var ctx = this.ctx,
        r = this.radius,
        t = this.getThickness(),
        a = this.startAngle;
      ctx.save();
      ctx.beginPath();
      if (!this.reverse) {
        ctx.arc(r, r, r - t / 2, a, a + Math.PI * 2 * v);
      } else {
        ctx.arc(r, r, r - t / 2, a - Math.PI * 2 * v, a);
      }
      ctx.lineWidth = t;
      ctx.lineCap = this.lineCap;
      ctx.strokeStyle = this.arcFill;
      ctx.stroke();
      ctx.restore();
    },
    /**
     * Draw the _empty (background)_ arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawEmptyArc: function(v) {
      var ctx = this.ctx,
        r = this.radius,
        t = this.getThickness(),
        a = this.startAngle;
      if (v < 1) {
        ctx.save();
        ctx.beginPath();
        if (v <= 0) {
          ctx.arc(r, r, r - t / 2, 0, Math.PI * 2);
        } else {
          if (!this.reverse) {
            ctx.arc(r, r, r - t / 2, a + Math.PI * 2 * v, a);
          } else {
            ctx.arc(r, r, r - t / 2, a, a - Math.PI * 2 * v);
          }
        }
        ctx.lineWidth = t;
        ctx.strokeStyle = this.emptyFill;
        ctx.stroke();
        ctx.restore();
      }
    },
    /**
     * Animate the progress bar.
     *
     * Throws 3 jQuery events:
     *
     * - `circle-animation-start(jqEvent)`
     * - `circle-animation-progress(jqEvent, animationProgress, stepValue)` - multiple event
     *   animationProgress: from `0.0` to `1.0`; stepValue: from `0.0` to `value`
     * - `circle-animation-end(jqEvent)`
     *
     * @protected
     * @param {number} v - Final value.
     */
    drawAnimated: function(v) {
      var self = this,
        el = this.el,
        canvas = $(this.canvas);
      // stop previous animation before new "start" event is triggered
      canvas.stop(true, false);
      el.trigger('circle-animation-start');
      canvas
        .css({animationProgress: 0})
        .animate({animationProgress: 1}, $.extend({}, this.animation, {
          step: function(animationProgress) {
            var stepValue = self.animationStartValue * (1 - animationProgress) + v * animationProgress;
            self.drawFrame(stepValue);
            el.trigger('circle-animation-progress', [animationProgress, stepValue]);
          }
        }))
        .promise()
        .always(function() {
          // trigger on both successful & failure animation end
          el.trigger('circle-animation-end');
        });
    },
    /**
     * Get the circle thickness.
     * @see CircleProgress#thickness
     * @protected
     * @returns {number}
     */
    getThickness: function() {
      return $.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },
    /**
     * Get current value.
     * @protected
     * @return {number}
     */
    getValue: function() {
      return this.value;
    },
    /**
     * Set current value (with smooth animation transition).
     * @protected
     * @param {number} newValue
     */
    setValue: function(newValue) {
      if (this.animation)
        this.animationStartValue = this.lastFrameValue;
      this.value = newValue;
      this.draw();
    }
  };
  //----------------------------------- Initiating jQuery plugin -----------------------------------
  $.circleProgress = {
    // Default options (you may override them)
    defaults: CircleProgress.prototype
  };
  // ease-in-out-cubic
  $.easing.circleProgressEasing = function(x) {
    if (x < 0.5) {
      x = 2 * x;
      return 0.5 * x * x * x;
    } else {
      x = 2 - 2 * x;
      return 1 - 0.5 * x * x * x;
    }
  };
  /**
   * Creates an instance of {@link CircleProgress}.
   * Produces [init event]{@link CircleProgress#init} and [animation events]{@link CircleProgress#drawAnimated}.
   *
   * @param {object} [configOrCommand] - Config object or command name.
   *
   * Config example (you can specify any {@link CircleProgress} property):
   *
   * ```js
   * { value: 0.75, size: 50, animation: false }
   * ```
   *
   * Commands:
   *
   * ```js
   * el.circleProgress('widget'); // get the <canvas>
   * el.circleProgress('value'); // get the value
   * el.circleProgress('value', newValue); // update the value
   * el.circleProgress('redraw'); // redraw the circle
   * el.circleProgress(); // the same as 'redraw'
   * ```
   *
   * @param {string} [commandArgument] - Some commands (like `'value'`) may require an argument.
   * @see CircleProgress
   * @alias "$(...).circleProgress"
   */
  $.fn.circleProgress = function(configOrCommand, commandArgument) {
    var dataName = 'circle-progress',
      firstInstance = this.data(dataName);
    if (configOrCommand == 'widget') {
      if (!firstInstance)
        throw Error('Calling "widget" method on not initialized instance is forbidden');
      return firstInstance.canvas;
    }
    if (configOrCommand == 'value') {
      if (!firstInstance)
        throw Error('Calling "value" method on not initialized instance is forbidden');
      if (typeof commandArgument == 'undefined') {
        return firstInstance.getValue();
      } else {
        var newValue = arguments[1];
        return this.each(function() {
          $(this).data(dataName).setValue(newValue);
        });
      }
    }
    return this.each(function() {
      var el = $(this),
        instance = el.data(dataName),
        config = $.isPlainObject(configOrCommand) ? configOrCommand : {};
      if (instance) {
        instance.init(config);
      } else {
        var initialConfig = $.extend({}, el.data());
        if (typeof initialConfig.fill == 'string')
          initialConfig.fill = JSON.parse(initialConfig.fill);
        if (typeof initialConfig.animation == 'string')
          initialConfig.animation = JSON.parse(initialConfig.animation);
        config = $.extend(initialConfig, config);
        config.el = el;
        instance = new CircleProgress(config);
        el.data(dataName, instance);
      }
    });
  };
});

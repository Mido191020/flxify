/**
  {
    "api": 1,
    "name": "Unescape Line Feeds",
    "description": "Converts literal \\n and \\r\\n sequences to actual newlines",
    "author": "Flxify",
    "icon": "term",
    "tags": "newline,linefeed,unescape,\\n,\\r\\n,convert,line break"
  }
**/

function main(state) {
  state.text = state.text.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n');
}

/**
  {
    "api": 1,
    "name": "Escape Line Feeds",
    "description": "Converts actual newlines to literal \\n sequences",
    "author": "Flxify",
    "icon": "term",
    "tags": "newline,linefeed,escape,\\n,convert,line break"
  }
**/

function main(state) {
  state.text = state.text.replace(/\r\n/g, '\\n').replace(/\n/g, '\\n');
}

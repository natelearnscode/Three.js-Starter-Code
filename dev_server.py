'''
This is a python script that creates a local server running on port 1337.
It will serve the contents of the directory it's located at,
and it can be used for local three.js development.

To run, type command 'python dev_server.py' in a terminal.
Then go to http://localhost:1337/ to view page.

'''
import http.server
import socketserver

PORT = 1337

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
      ".js": "application/javascript",
});

httpd = socketserver.TCPServer(("", PORT), Handler)
print ("Serving at port", PORT)
httpd.serve_forever()
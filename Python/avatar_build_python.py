import BaseHTTPServer, SimpleHTTPServer


httpd = BaseHTTPServer.HTTPServer(('localhost', 5000), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.serve_forever()
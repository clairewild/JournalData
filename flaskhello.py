from flask import Flask

app = Flask(__name__)

@app.route("/") # kind of like the router, runs this code at this route
def hello():
  return "Hello, World!" # this is where we render a template or HTML

if __name__ == "__main__":
  app.run() # see line 3

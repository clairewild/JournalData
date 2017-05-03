from flask import Flask, render_template

app = Flask(__name__)

@app.route("/") # kind of like the router, runs this code at this route
def show_index():
  # return "Hello, World!" # this is where we render a template or HTML
  return render_template("index.html")

if __name__ == "__main__":
  app.run()

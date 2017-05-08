from flask import Flask, render_template, jsonify

from test import test_function

app = Flask(__name__)

@app.route("/") # kind of like the router, runs this code at this route
def show_index():
  # return "Hello, World!" # this is where we render a template or HTML
  return render_template("index.html")


@app.route('/test', methods=['GET'])
def test():
    value = test_function()
    return jsonify(value)

if __name__ == "__main__":
  app.run()

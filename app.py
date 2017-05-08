from flask import Flask, render_template, jsonify

from time_orientation import time_orientation_fn

app = Flask(__name__)

@app.route("/") # kind of like the router, runs this code at this route
def show_index():
  # return "Hello, World!" # this is where we render a template or HTML
  return render_template("index.html")


@app.route('/time-orient', methods=['GET'])
def time_orient():
    data = time_orientation_fn()
    return jsonify(data)

if __name__ == "__main__":
  app.run()

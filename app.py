from flask import Flask, render_template, jsonify
app = Flask(__name__)

from backend.analyze import analyze_json

@app.route("/")
def show_index():
  return render_template("index.html")

@app.route("/data", methods=['GET'])
def data():
    data = analyze_json()
    return jsonify(data)

if __name__ == "__main__":
  app.run()

import os
from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify
app = Flask(__name__)

from backend.analyze import analyze_json

app.config['UPLOAD_FOLDER'] = "uploads/"
app.config['ALLOWED_EXTENSIONS'] = set(["json"])

def allowed_file(filename):
    return "." in filename and filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']

@app.route("/")
def show_index():
    return render_template("index.html", font_url = "https://fonts.googleapis.com/css?family=Open+Sans|Roboto")

@app.route("/upload", methods=['POST'])
def upload():
    file = request.files["file"]
    if file and allowed_file(file.filename):
        filename = "diary.json"
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return redirect(url_for('uploaded_file', filename=filename))

@app.route("/uploads/<filename>")
def uploaded_file(filename):
    return render_template("index.html", font_url = "https://fonts.googleapis.com/css?family=Open+Sans|Roboto")
    # return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route("/data", methods=['GET'])
def data():
    data = analyze_json()
    return jsonify(data)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)

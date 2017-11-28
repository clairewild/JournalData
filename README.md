# JournalData

JournalData is a full stack web application that uses natural language processing to chart journal entry analytics over time. It was largely inspired by 750 Words, an online journaling app that displays sentiment analysis data, but only for one entry at a time. JournalData allows users to upload an entire digital diary, exported from Day One in JSON format. They can then view charts plotting time orientation (past, present, future tense), pronoun frequency, words written per day and time of day, and also a dynamic word cloud displaying the relative frequencies of all words or just proper nouns.

![wireframes](http://res.cloudinary.com/oblaka/image/upload/v1496626405/journal-data_seiz82.jpg)

## Inspiration

- [750 Words][750words]
- [Trump Data][trumpdata]

[750words]: http://750words.com/
[trumpdata]: http://www.trumpdata.org/

## Instructions

```bash
# Clone the repo
git clone https://github.com/clairewild/JournalData.git

# Make sure python3 is installed
python -V

# If not then download it here https://www.python.org/downloads/

# Copy keys_template.py to a file called keys.py, and fill in ToneAnalyzer and Cloudinary API credentials

# Navigate to the root direcotry and install python dependencies
pip3 install -r requirements.txt

# Install the English data and models needed for NLP
python3 -m spacy download en

# Install npm packages
npm install

# Run webpack
webpack --watch

# In a different window, start the python server and visit the site on localhost
python3 app.py
```

## Technologies

This project is built using React.js on the frontend and Flask on the backend. We used the Python NLP library spaCy, and several different React libraries, including Victory for charts and React-D3 for the word cloud.

## Future Features

- Positivity / negativity charts
- Drag and drop upload
- Support for journaling apps besides Day One

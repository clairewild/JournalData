# JournalData

JournalData is a full stack web application that uses natural language processing to chart journal entry analytics over time. It was largely inspired by 750 Words, an online journaling app that displays sentiment analysis data, but only for one entry at a time. JournalData allows users to upload an entire digital diary, exported from Day One in JSON format. They can then view charts plotting time orientation (past, present, future tense), pronoun frequency, words written per day and time of day, and also a dynamic word cloud displaying the relative frequencies of all words or just proper nouns.

![wireframes](http://res.cloudinary.com/dq5kxnx9d/image/upload/c_crop,h_960/v1495669787/18644319_3116832968050_565214547_n_y1yhnw.jpg)

## Inspiration

- [750 Words][750words]
- [Trump Data][trumpdata]

[750words]: http://750words.com/
[trumpdata]: http://www.trumpdata.org/

## Instructions

```bash
# Clone the repo
git clone https://github.com/clairewild/JournalData.git

# Make sure python3 installed
python -V

# If not then download it here https://www.python.org/downloads/
# Also install flask, spacy, and the English data and models needed for NLP
pip3 install flask --user
sudo pip3 install -U spacy
sudo python3 -m spacy.en.download all

# Navigate to the root directory and install npm packages
npm install

# Run webpack and in a different window start the server on localhost
webpack --watch
python3 app.py
```

## Technologies

This project is built using React.js on the frontend and Flask on the backend. We used the Python NLP library spaCy, and several different React libraries, including Victory for charts and React-D3 for the word cloud.

## Future Features

- Positivity / negativity charts
- Drag and drop upload
- Support for journaling apps besides Day One

# JournalData

JournalData is a full stack web application that uses natural language processing to chart sentiment analysis data from journal entries over time.  It was largely inspired by 750 Words, an online journaling app that displays sentiment analysis data, but only for one entry at a time.  JournalData allows users to upload an entire digital diary, exported from Day One in JSON format. They can then view charts plotting time orientation (past, present, future tense), pronoun frequency, words written per day and time of day, and also a dynamic word cloud displaying the relative frequencies of all words or just proper nouns.  

## Inspiration

- [750 Words][750words]
- [Trump Data][trumpdata]

[750words]: http://750words.com/
[trumpdata]: http://www.trumpdata.org/

## Instructions

-

## Technologies

This project is built using React.js on the frontend and Flask on the backend.  We used the Python NLP library spaCy, and several different React libraries, including Victory for charts and react-d3 for the word cloud.

## Future Features

- Positivity / negativity
- Drag and drop upload
- Support for journaling apps besides DayOne

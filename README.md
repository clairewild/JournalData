# Journal Data

## Background

## Inspiration

- [750 Words][750words]
- [Trump Data][trumpdata]

[750words]: http://750words.com/
[trumpdata]: http://www.trumpdata.org/

## Functionality MVPs

Users will be able to sign into their Dropbox account, and the app will find text files synced from DayOne, and analyze their writing.  It will display various charts/graphs to visualize the data, including:

- words per day
- time orientation
- positivity vs. negativity
- sentiment analysis
- subjects / pronoun usage (I / you / we / they / he-she-proper)
- pie chart topics for day/month/year

## Design Docs

## Architecture and Technologies

- React
- Flask
- spaCy (python library)
- Victory (React chart library)
- SQL Alchemy?? (ORM)

## Implementation Priorities

- Before next meeting:
  + Claire
    - Pronouns chart
  + Austin
    - Word cloud select all/entities
    - CSS
- This weekend
  + Make plot pretty
  + Refactor so that pronouns.py and word_cloud.py only iterate over tokens once
  + Parse entire diary for sample data
  + Corpora download
  + JSON file uploads
  + Sentiment analysis

## Set Up

- python -V --> you'll probably get 2.7
- install python3 --> https://www.python.org/downloads/ (just click the button)
- sudo easy_install pip --> the python package installer, might not need to run this command b/c should come with python
- pip3 install flask --user
- npm install
- python3 app.py --> to run project on localhost

This article is helpful for setting up Flask: https://www.codementor.io/garethdwyer/flask-vs-django-why-flask-might-be-better-4xs7mdf8v

- sudo pip3 install -U spacy
- sudo python3 -m spacy.en.download all --> downloads English data and models, it's 1G

## Links

- http://textminingonline.com/getting-started-with-spacy
- http://textminingonline.com/getting-started-with-textblob

- https://nicschrading.com/project/Intro-to-NLP-with-spaCy
- http://www.ef.edu/english-resources/english-grammar/determiners/ (see determiners.png)
- http://stackoverflow.com/questions/40288323/what-do-spacys-part-of-speech-and-dependency-tags-mean
- https://people.eecs.berkeley.edu/~klein/cs294-19/SP08%20cs294%20lecture%207%20--%20POS%20tagging%20(6PP).pdf

# Journal Data

## Background

## Inspiration

- [750 Words][750words]
- [Trump Data][trumpdata]

[750words]: http://750words.com/
[trumpdata]: http://www.trumpdata.org/

## Functionality MVPs

- words per day
- time orientation
- positivity vs. negativity
- sentiment / mood analysis
- subjects / pronoun usage (I / you / we / they / he-she-proper)
- pie chart topics for day/month/year

## Design Docs

## Architecture and Technologies

- React
- Flask
- spaCy (python library)
- SQL Alchemy?? (ORM)

## Implementation Timeline

Phase 1:
- Dropbox API
- Sentiment analysis

Phase 2:

## Bonus Features

-

## Set Up

- python -V --> you'll probably get 2.7
- install python3 --> https://www.python.org/downloads/ (just click the button)
- sudo easy_install pip --> the python package installer, might not need to run this command b/c should come with python
- pip3 install flask --user
- `npm install`
- python3 app.py --> to run project on localhost

This article is helpful for setting up Flask: https://www.codementor.io/garethdwyer/flask-vs-django-why-flask-might-be-better-4xs7mdf8v

- sudo pip3 install -U spacy
- sudo python3 -m spacy.en.download all --> downloads English data and models, it's 1G


## Links

- http://textminingonline.com/getting-started-with-spacy
- https://nicschrading.com/project/Intro-to-NLP-with-spaCy/
- https://github.com/nosovsh/motoparking
- http://www.ef.edu/english-resources/english-grammar/determiners/ (see determiners.png)
- http://stackoverflow.com/questions/40288323/what-do-spacys-part-of-speech-and-dependency-tags-mean
- https://people.eecs.berkeley.edu/~klein/cs294-19/SP08%20cs294%20lecture%207%20--%20POS%20tagging%20(6PP).pdf

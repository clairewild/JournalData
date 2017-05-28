# Journal Data

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

## Architecture and Technologies

- React
- Flask
- spaCy (python library)
- Victory (React chart library)

## Implementation Priorities

- v1 (Target: Sunday, May 28)
  + Make plots pretty
  + Style entire page
  + Word count
    - Total word count
    - Average words per day
    - Plot days vs time of day with colored dots for word count
  + Github chart
  + Parse entire diary for sample data
  + Production README
  + Python word cloud: https://github.com/amueller/word_cloud
- v2
  + Corpora download
  + Sentiment analysis
  + Refactor so that backend files only iterate over tokens once
  + Host on Heroku
  + JSON file uploads

## Links
- http://textminingonline.com/getting-started-with-spacy
- http://textminingonline.com/getting-started-with-textblob
- https://nicschrading.com/project/Intro-to-NLP-with-spaCy
- http://www.ef.edu/english-resources/english-grammar/determiners/ (see determiners.png)
- http://stackoverflow.com/questions/40288323/what-do-spacys-part-of-speech-and-dependency-tags-mean
- https://people.eecs.berkeley.edu/~klein/cs294-19/SP08%20cs294%20lecture%207%20--%20POS%20tagging%20(6PP).pdf

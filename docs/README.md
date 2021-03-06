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
- pie chart topics for day / month / year

## Architecture and Technologies

- React
- Flask
- spaCy (python NLP library)
- Watson API
- Victory (React chart library)

## Implementation Priorities

- v2
  + Tone analysis chart over time
  + Tone analysis summary chart
  + Github chart: https://github.com/DKirwan/calendar-heatmap
  + Python word cloud: https://github.com/amueller/word_cloud

- v3
  + Parse entire diary for sample data
  + Overall positivity / negativity
  + Word count
    - Total word count
    - Average words per day
    - Plot days vs time of day with colored dots for word count
  + Refactor so that backend files only iterate over tokens once
  + Loading bar
  + Topics???

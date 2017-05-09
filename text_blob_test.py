from textblob import TextBlob
import nltk
nltk.data.path.append("/Users/austinwood/Code/JournalData/nltk_data")

# str = open('./corpus/entry1.txt', 'r').read()
str = "Hi my name is Claire and I really hope this works."
blob = TextBlob(str)

positive_count = 0
negative_count = 0

print(blob.tags)

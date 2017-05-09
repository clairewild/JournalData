from textblob import TextBlob

# str = open('./corpus/entry1.txt', 'r').read()
str = "Hi my name is Claire and I really hope this works."
blob = TextBlob(str)

positive_count = 0
negative_count = 0

print(blob.tags)

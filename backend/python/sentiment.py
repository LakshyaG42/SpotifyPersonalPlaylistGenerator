from nltk.sentiment.vader import SentimentIntensityAnalyzer
import sys
import json

def perform_sentiment_analysis(lyrics):
    return
if __name__ == "__main__":
    lyrics = json.loads(sys.argv[1])
    sentiment_scores = perform_sentiment_analysis(lyrics)
    
    print(json.dumps(sentiment_scores))

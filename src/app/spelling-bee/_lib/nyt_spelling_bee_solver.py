import sys
import json

if len(sys.argv) < 3:
    print ("Usage: " + sys.argv[0] + " <letters> <center> <optional:wordlist>")
    sys.exit(0)



def wordContainsCenter(word, center):
    if (center in set(word)):
        return True
    return False

def wordContainsOnly(word, letters):
    #print ('Checking if ' + word + ' contains only ' + letters)
    for letter in set(word):
        if letter not in letters:
            #print (letter + ' was not found in given letters: ' + letters)
            return False
    return True

def isPangram(word,letters):
    if set(word) == set(letters):
        return True
    return False



letters = sys.argv[1]
center  = sys.argv[2]
if len(sys.argv) == 4:
    words_file = sys.argv[3]
else:
    words_file = "../../_resources/wordlist.txt"

min_length = 4

with open(words_file) as f:
    words = f.read().splitlines()

valid_words = {
    "pangrams": [],
    "non-pangrams": []
}
for word in words:
    word = word.lower()
    if wordContainsCenter(word,center) and wordContainsOnly(word,letters):
        if len(word) >= min_length:
            if isPangram(word, letters):
                valid_words['pangrams'].append(word)
            else: 
                valid_words['non-pangrams'].append(word)


print (json.dumps(valid_words))

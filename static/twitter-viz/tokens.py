from collections import Counter

tokens = []
for txt in en_text.values:
    tokens.extend([t.lower().strip(":,.") for t in txt.split()])
    
tokens_counter = Counter(tokens)
tokens_counter.most_common(50)
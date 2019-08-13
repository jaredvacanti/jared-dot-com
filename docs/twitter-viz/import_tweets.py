import os
import pandas as pd

mydir = os.path.dirname(os.path.realpath(__file__))
DATA_FILE = os.path.join(mydir, 'streaming1.json')
data = "[{0}]".format(",".join([l for l in open(DATA_FILE).readlines()]))
df = pd.read_json(data, orient='records')

print "Successfully imported", len(df), "tweets"
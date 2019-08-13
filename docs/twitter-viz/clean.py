import datetime
import json
import csv
files = ['theory', 'imitation', 'sniper', 'budapest', 'boyhood', 'birdman', 'whiplash', 'selma']

for filename in files:

    json_data=open('/Users/jaredvacanti/twitter/json/'+filename+'.json')
    # data = "{}".format(",".join([l for l in open(DATA_FILE).readlines()]))

    d = json.load(json_data)
    times = []

    for l in d:
        times.append(l['created_at'])

    times.sort()

    i = 0
    ## start the first 'bin'
    time = datetime.datetime.strptime('2015-02-23 04:46:00', '%Y-%m-%d %H:%M:%S')
    count = [['time', filename]]
    count.append([time.strftime("%Y-%m-%d %H:%M:%S"),0])

    for l in times:
        if datetime.datetime.strptime(l, '%a %b %d %H:%M:%S +0000 %Y') < time:
            count[i][1] = count[i][1] + 1
        else:
            time = time + datetime.timedelta(minutes=1)
            count.append([time.strftime("%Y-%m-%d %H:%M:%S"),0])
            i = i + 1

    with open("csv/"+filename+".csv", "wb") as f:
        writer = csv.writer(f)
        writer.writerows(count)

    print count
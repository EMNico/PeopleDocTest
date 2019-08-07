#!/usr/bin/env python
# -*- encoding: utf8 -*-
import argparse
import requests
from datetime import date

URL = "https://www.metaweather.com/api"

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Is tomorrow rainy?')
    parser.add_argument('city', nargs=1)
    args = parser.parse_args()
    city = args.city[0]
    locations = requests.get("{api_url}/location/search/?query={city}".format(api_url=URL, city=city)).json()
    woeid = locations[0]['woeid']
    weather_request = requests.get("{api_url}/location/{woeid}/{date}".format(api_url=URL, woeid=woeid, date=date.today().strftime("%Y/%m/%d"))).json()

    if any(w['weather_state_abbr'] in ['lr', 'hr', 's'] for w in weather):
        print("Take an umbrella :)")
    else:
        print("All clear !")
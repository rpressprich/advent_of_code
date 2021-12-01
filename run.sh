#!/bin/bash

DEFAULT_YEAR=2021

[[ -n "$1" ]] && day=$1 || read -r -p 'Please enter day: ' day
[[ -n "$2" ]] && year=$2 || year=$DEFAULT_YEAR
node "src/$year/day$day.js"

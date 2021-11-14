#!/bin/bash

git init
git add -A
git commit -m "Starting work on UX/UI"
git branch -M master
git remote add origin git@github.com:djr303/perslib.git
git push -u origin master

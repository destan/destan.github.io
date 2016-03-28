#!/bin/bash

git checkout jekyll
jekyll build
cp .gitignore ../static/
git checkout master
# remove all files and directories except .git.
# tail removes '.' which cannot be removed and crashes the script
find . | grep -v "\.git" | tail -n +2 | xargs rm -rf
cp -r ../static/* ./
rm -rfv .sass-cache/ _site/
rm -v publi.sh _config.dev.yml
git add . --all
git commit -m "${1:-update}"
#git push

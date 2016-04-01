#!/bin/bash

STATIC_DIR="../static/"

if [ -d "$STATIC_DIR" ]; then
  echo "$STATIC_DIR already exists, aborting to prevent data loss."
  exit 1
fi

git checkout jekyll
jekyll build
cp .gitignore $STATIC_DIR
git checkout master
# remove all files and directories except .git.
# tail removes '.' which cannot be removed and crashes the script
find . | grep -v "\.git" | tail -n +2 | xargs rm -rf
cp -r ../static/* ./
rm -v publi.sh _config.dev.yml
git add . --all
git commit -m "${1:-update}"
git push origin master

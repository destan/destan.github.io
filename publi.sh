git checkout jekyll
jekyll build
cp .gitignore ../static/
git checkout master
# remove all files and directories except .git
find . | grep -v ".git" | xargs rm -rf
cp -r ../static/* ./
rm -rf .sass-cache/
rm -rf _site/
rm publi.sh
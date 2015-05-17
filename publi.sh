git checkout jekyll
rm _config.yml
cp _config.yml.prod _config.yml 
jekyll build
cp .gitignore ../static/
git checkout master
# remove all files and directories except .git.
# tail removes '.' which cannot be removed and crashes the script
find . | grep -v "\.git" | tail -n +2 | xargs rm -rf
cp -r ../static/* ./
rm -rf .sass-cache/
rm -rf _site/
rm publi.sh
git add . --all
git commit -am 'update'
git push
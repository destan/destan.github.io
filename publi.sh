git checkout jekyll
jekyll build
cp .gitignore ../static/
git checkout master
cp -r ../static/* ./
rm -rf .sass-cache/
rm -rf _site/

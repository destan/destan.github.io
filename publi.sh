git checkout jekyll
jekyll build
git checkout master
cp -r ../static/* ./
rm .sass-cache/
rm _site/

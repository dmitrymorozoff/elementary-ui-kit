git checkout master
git checkout -b tmp-gh-pages
rimraf .gitignore

npm install
npm run build:docs

git add --all docs/
git commit -am 'update docs'

git subtree split --prefix docs -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout master
git branch -D tmp-gh-pages
git branch -D gh-pages

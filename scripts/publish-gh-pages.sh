# git checkout master
git checkout -b tmp-gh-pages

npm prune
npm install
npm run build:docs
npm run copy:docs

git add --all docs/
git commit -am 'update docs'

git subtree split --prefix docs -b gh-pages
git push -f origin gh-pages:gh-pages
git checkout develop
git branch -D tmp-gh-pages
git branch -D gh-pages

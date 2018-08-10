set -e
set -x

yarn run build

rm -rf /tmp/publish
git clone --branch gh-pages git@github.com:Khan/free-response-report.git /tmp/publish
mkdir -p /tmp/publish/open-ended
rsync -rv --exclude=.git ./build/ /tmp/publish/open-ended

cd /tmp/publish

git add -f .
git commit --allow-empty -m "Publish"
git push origin gh-pages

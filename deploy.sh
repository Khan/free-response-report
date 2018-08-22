#!/bin/bash

set -e
set -x

yarn run build

rm -rf /tmp/publish
git clone --branch gh-pages https://github.com/Khan/free-response-report.git /tmp/publish
mkdir -p /tmp/publish/open-ended
rsync -rv --exclude=.git ./build/ /tmp/publish/open-ended

echo "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><title>Early Product Development</title><meta http-equiv=\"refresh\" content=\"0;URL='/open-ended'\" /></head><body></body></html>" > /tmp/publish/index.html

cd /tmp/publish

git add -f .
git commit --allow-empty -m "Publish"
git push origin gh-pages

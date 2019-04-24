#!/bin/bash
# ng build --prod
if [ $1 = 'build' ]; then
    ng build --prod
else
    echo Remember to run ng build --prod before
    echo Or run with parameter 'build' to run building as well
fi
pushd dist/pwademo; python -m SimpleHTTPServer; popd

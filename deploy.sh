#!/bin/bash
ver=version4
ng build --base-href=https://tools.adfc-hamburg.de/t30-paten/${ver}/ --prod --deploy-url=https://tools.adfc-hamburg.de/t30-paten/${ver}/ &&
    sed -i -e 's/\(data-base-url="\)."/\1\/t30-paten\/'${ver}'"/' dist/t30-paten/index.html &&
    rsync -r --delete -v dist/t30-paten/ root@tools:/var/www/html/t30-paten/${ver}

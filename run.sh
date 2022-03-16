#!/bin/bash
# Init yandex console
if ! command -v yc &> /dev/null
then
	curl https://storage.yandexcloud.net/yandexcloud-yc/install.sh | bash
        source ~/.bashrc
	yc init
	yc config profile create adminprofile
fi
# Create api key
yc iam key create --folder-id b1goiou8tkto0joul46k --service-account-name ivanadmin --output globalkey.json
yc config set service-account-key globalkey.json
rm -rf globalkey.json
yc iam create-token > key.json
# Run django
if [[ -f "venv" ]]
then
	. ./venv/bin/activate
else
	python3 -m venv venv
	. ./venv/bin/activate
	python3 -m pip install django djangorestframework djangorestframework-simplejwt django-cors-headers
fi
python3 django/manage.py runserver &
# Run vue frontend
npm run serve

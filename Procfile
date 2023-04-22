release: python server/manage.py migrate
web: gunicorn server.server.wsgi --preload --log-file -
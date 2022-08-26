<p align="center">
	<img src="https://github.com/puravparab/whatanimal/blob/82e5081aef808f121e9ee56a369da2bd803d20d1/public/static/favicon-32x32.png"/>
</p>

<p align="center">
	<h1 align="center">
		WHATANIMAL
	</h1>
	<p align="center">
	    Post an image of an animal and the whatanmal will predict its name
	</p
</p>

<p align="center">
	<a target="_blank" href="https://www.python.org/downloads/" title="Python version"><img src="https://img.shields.io/badge/python-%3E=_3.10-green.svg"></a>
	<a target="_blank" href="LICENSE" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

<p align="center">
	<a href="#Installation">INSTALLATION</a>
	&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#License">LICENSE</a>
</p>

# Installation:

Clone the respository
```
$ git clone https://github.com/puravparab/whatanimal.git
```
Change the working directory to Chattrr
```
$ cd whatanimal
```
Install pipenv to your machine
```
$ pip install --user pipenv
```
Install dependencies from Pipfile
```
$ pipenv install
```
Run the virtual environment
```
$ pipenv shell
```
Create  a file called .env and copy contents from .envtemplate into it.
<br>
Update the entries in the .env file.
```
SECRET_KEY= <create a secret key>
DEBUG=True
DJANGO_SETTINGS_MODULE=server.settings.dev
ALLOWED_HOSTS=localhost 127.0.0.1

<Add your AWS keys>
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_STORAGE_BUCKET_NAME=
AWS_S3_FILE_OVERWRITE=False
```
Run the following commands
```
$ python server/manage.py migrate
$ python server/manage.py collectstatic
```
This completes the backend/server configuration.

---

For the next steps make sure node.js is and npm is installed.
<br>
You should have at least the following versions if node and npm ae installed.
```
$ node -v
v16.13.1

$ npm -v
v8.1.2
```
Install dependencies from package.json
```
$ npm install
```
Run the following command to create a production build
```
$ npm run build
```
This completes the frontend/client configuration.

---

Add a superuser to Django Admin
```
$ python server/manage.py createsuperuser
```
Run the server at http://127.0.0.1:8000 or http://localhost:3000
```
$ python server/manage.py runserver
```

---
Create a default entry in the PredictionRequests model thorugh the admin panel admin panel
Go to the following url:
http://192.168.1.103:8000/admin/model/predictionrequests/add/
```
Add the following into the form:
User Token = default
Image = <upload image loacted at 'src/assets/images/default_cat.jpg'>
```

---

# LICENSE

MIT License

Copyright (c) 2022 WHATANIMAL

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Original Creator - [Purav Parab](https://github.com/puravparab)
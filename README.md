<p align="center">
	<img src="https://github.com/puravparab/whatanimal/blob/82e5081aef808f121e9ee56a369da2bd803d20d1/public/static/favicon-32x32.png"/>
</p>

<p align="center">
	<h1 align="center">
		WHATANIMAL
	</h1>
	<p align="center">
		Image recognition web app that guesses animals from uploaded images using CNNs
	</p
</p>

<p align="center">
	<a target="_blank" href="https://www.python.org/downloads/" title="Python version"><img src="https://img.shields.io/badge/python-%3E=_3.10-green.svg"></a>
	<a target="_blank" href="LICENSE" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
</p>

<p align="center">
	<a href="#Requirements">REQUIREMENTS</a>
	&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#Installation">INSTALLATION</a>
	&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#License">LICENSE</a>
	&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="https://github.com/puravparab/animal_classifier">Model</a>
</p>

# Requirements:

- `python 3.10`
- `node v18.16.0`
- `npm 9.5.1`
- `tensorflow`
- `AWS S3`

---

# Installation:

Clone the respository
```
git clone https://github.com/puravparab/whatanimal.git
cd whatanimal
```

## Using Docker Compose
Run docker compose to run the application
```
docker compose up --build
// or run in detached mode
docker compose up --build -d
```
Stop running application
```
docker compose down
```

---

## Without Docker Compose

### 1. API only
#### - (Without Docker):

Run virtual environment using pipenv
```
cd api
pip install --user pipenv
pipenv shell
pipenv sync
```
Rename .env.template to .env and enter your credentials

Run the following commands
(You might have to restart the virtual environment to load the env variables)
```
python manage.py collectstatic
python manage.py migrate
```
Run the server at http://127.0.0.1:8000 or http://localhost:8000
```
python manage.py runserver 0.0.0.0:8000
```

#### - (With Docker):

Create Image
```
cd api
docker build -t whatanimal-api .
```
Create and run container
```
docker run --env-file .env -p 8000:8000 whatanimal-api
```

---

### 2. Client only
#### - (Without Docker):

Install dependencies
```
cd client
npm ci
```
Run client
```
npm run dev
```

#### - (With Docker):

Create Image
```
cd api
docker build -t whatanimal-api .
```
Create and run container
```
docker run --env-file .env -p 8000:8000 whatanimal-api
```


---

# LICENSE

MIT License

Copyright (c) 2023 WHATANIMAL

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
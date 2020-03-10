## Reproduction steps

Checkout this branch, install deps, start server w/ nodemon:

```shell
git clone --single-branch --branch cors/187 https://github.com/jonchurch/express-issues.git

cd express-issues
npm i
npx nodemon
```

Visit [www.google.com](https://www.google.com) and paste the following fetch request into the browser console:

```javascript
fetch("http://localhost:8000/data/del", { method: "DELETE", body: "{}" })
  .then(res => res.text())
  .then(console.log)
  .catch(console.log);
```

You should see in the console where the server is running the two requests, their methods, and their path:

```shell
OPTIONS /data/del
DELETE /data/del
```

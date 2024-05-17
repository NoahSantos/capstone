# Veterinary Animal Info Site Project

This project is a web server built to help our CTE program's veterinary branch with presenting info to adoptees and staff on events and animals.

## Authors

-   [RenLevingar](https://github.com/RenLevingar)
-   [MercutioG](https://github.com/MercutioG)
-   [dakotarobot213](https://github.com/dakotarobot213)
-   [Noah Santos](https://github.com/NoahSantos/capstone/commits?author=NoahSantos)

## Dependencies

### Root

-   [concurrently](https://github.com/open-cli-tools/concurrently#readme)
-   [dotenv](https://github.com/motdotla/dotenv)
-   [nodemon](https://nodemon.io/)

### Client Specific

-   [@emotion/react](https://github.com/emotion-js/emotion/tree/main#readme)
-   [@emotion/styled](https://github.com/emotion-js/emotion/tree/main#readme)
-   [@mui/material](https://mui.com/material-ui/)
-   [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
-   [concurrently](https://github.com/open-cli-tools/concurrently#readme)
-   [dotenv](https://github.com/motdotla/dotenv#readme)
-   [jose](https://github.com/panva/jose)
-   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
-   [mongoose](https://mongoosejs.com/)
-   [next](https://nextjs.org/)
-   [next-auth](https://next-auth.js.org/)
-   [nodemon](https://nodemon.io/)
-   [react](https://react.dev/)
-   [react-dom](https://react.dev/)
-   [sass](https://github.com/sass/dart-sass)

### Server Specific

-   [axios](https://axios-http.com/)
-   [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
-   [connect-flash](https://github.com/jaredhanson/connect-flash#readme)
-   [dotenv](https://github.com/motdotla/dotenv#readme)
-   [ejs](https://github.com/mde/ejs)
-   [express](https://expressjs.com/)
-   [express-ejs-layouts](https://github.com/Soarez/express-ejs-layouts#readme)
-   [express-session](https://github.com/expressjs/session#readme)
-   [jose](https://github.com/panva/jose)
-   [jquery](https://jquery.com/)
-   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
-   [mongo](https://www.npmjs.com/package/mongo) // No idea what this is
-   [mongodb](https://www.npmjs.com/package/mongodb)
-   [mongoose](https://mongoosejs.com/)
-   [morgan](https://github.com/expressjs/morgan#readme)
-   [node](https://github.com/aredridel/node-bin-gen#readme)
-   [nodemon](https://nodemon.io/)
-   [passport](https://www.passportjs.org/)
-   [passport-local](https://github.com/jaredhanson/passport-local#readme)
-   [session](https://www.npmjs.com/package/session) // Disappeared off the face of the planet, switch to node-session?

## Environmental Variables

This project requires two .env files in the client and server folders in root (bottom of the project folder)

### Client variables

```ini
; Don't put lines starting with ";" in your .env
; Anything in a [] is to be replaced by whatever is specified within, otherise copy the example variable lines
GOOGLE_CLIENT_ID = "[]"
GOOGLE_CLIENT_SECRET = "[Insert random string here]"
NEXTAUTH_URL = "http://localhost:3000/"
NEXTAUTH_SECRET = "[Insert different random string here]"
MONGODB_URI = "[Insert a VSCode format MongoDB connection URI here to your Mongo collection]"
```

### Server variables

```ini
; Don't put lines starting with ";" in your .env
; Anything in a [] is to be replaced by whatever is specified within, otherise copy the example variable lines
MONGO_URI = "[Insert a VSCode format MongoDB connection URI here to your Mongo collection, this should be the same one within your client]"
SESSION_SECRET = "[Insert a different random string here]"
PORT = 7000
```

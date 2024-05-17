# Veterinary Animal Info Site Project

This project is a web server built to help our CTE program's veterinary branch with presenting info to adoptees and staff on events and animals.

## Authors

-   [RenLevingar](https://github.com/RenLevingar)
-   [MercutioG](https://github.com/MercutioG)
-   [dakotarobot213](https://github.com/dakotarobot213)
-   [Noah Santos](https://github.com/NoahSantos/capstone/commits?author=NoahSantos)

## Dependencies

Along with the code dependencies below, this project also relies on Google Workspace for OAuth functionality and MongoDB for data persistence.

### Root

-   [concurrently](https://github.com/open-cli-tools/concurrently#readme)
-   [dotenv](https://github.com/motdotla/dotenv)
-   [nodemon](https://nodemon.io/)

### Client Specific

-   [@emotion/react](https://github.com/emotion-js/emotion/tree/main#readme)
-   [@emotion/styled](https://github.com/emotion-js/emotion/tree/main#readme)
-   [@mui/icons-material](https://mui.com/material-ui/material-icons/)
-   [@mui/material](https://mui.com/material-ui/)
-   [dotenv](https://github.com/motdotla/dotenv#readme)
-   [emotion](https://emotion.sh/docs/introduction)
-   [next](https://nextjs.org/)
-   [next-auth](https://next-auth.js.org/)
-   [nodemailer](https://nodemailer.com/)
-   [nodemon](https://nodemon.io/)
-   [react](https://react.dev/)
-   [react-dom](https://react.dev/)
-   [sass](https://github.com/sass/dart-sass)

### Server Specific

-   [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
-   [dotenv](https://github.com/motdotla/dotenv#readme)
-   [express](https://expressjs.com/)
-   [express-session](https://github.com/expressjs/session#readme)
-   [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
-   [mongodb](https://www.npmjs.com/package/mongodb)
-   [mongoose](https://mongoosejs.com/)
-   [morgan](https://github.com/expressjs/morgan#readme)
-   [node](https://github.com/aredridel/node-bin-gen#readme)
-   [nodemon](https://nodemon.io/)
-   [passport](https://www.passportjs.org/)
-   [passport-local](https://github.com/jaredhanson/passport-local#readme)

## Environmental Variables

This project requires two .env files in the client and server folders in root (bottom of the project folder)

### Client variables

```ini
; Don't put lines starting with ";" in your .env
; Anything in a [] is to be replaced by whatever is specified within, otherise copy the example variable lines
; The GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET are given through creating a workspace in Google Workspace
GOOGLE_CLIENT_ID = "[This enables google oauth accounts for this project]"
GOOGLE_CLIENT_SECRET = "[Enter your google_client_secret here]"
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

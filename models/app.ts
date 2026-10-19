import express from 'express';
import session from 'express-session';

const app = express();
const PORT = 3000;

app.use(session({
  secret: 'alga agridoce',
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set(express.static('public'))

function init(): void {
    app.listen(PORT, 
        console.log("Aberto na porta", PORT, "(http://localhost:" + PORT + "/)" )
    );
}

export {init, app};
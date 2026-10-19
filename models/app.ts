import express from 'express';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set(express.static('public'));
app.use(express.urlencoded({ extended: true }));

function init(): void {
    app.listen(PORT, 
        console.log("Aberto na porta", PORT, "(http://localhost:" + PORT + "/)" )
    );
}

export {init, app};
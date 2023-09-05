import express from "express"

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(200).send('API-TRIP')
});

app.listen(3000, () => {
    console.log('api running on port 3000!')
})


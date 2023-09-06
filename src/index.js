import express from "express"
import StatusCodes from "http-status-codes"


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json('API-TRIP')
});

app.listen(3000, () => {
    console.log('api running on port 3000!')
})


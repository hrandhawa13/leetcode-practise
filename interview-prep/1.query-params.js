import express from 'express';
const app = express();
app.use(express.json());

const donorsList = [];
app.get('/api/donors', (req, res) =>{
    //extract req query param , header
    const donorNumFromBody = req.body.donorNumber;
    const pageNumFromQuery = req.query.pageNum;
    const token = req.headers['authentication-header']

    const donors = donorsList.filter(donor => donor.donorNumber === donorNumFromBody)
    return res.status(200).json({donors});

});

app.listen(3000, ()=> console.log("Server running on 3000"));
const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors())
app.use(express.json());

//user: dbuser1
//password: z8RhBkCDNnyMweXy



const uri = "mongodb+srv://dbuser1:z8RhBkCDNnyMweXy@cluster0.ecrrwxp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");
        app.post('/user', (req, res) => {

        })
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('Running my node crud server')
});



app.listen(port, () => {
    console.log('crud server is running')
})

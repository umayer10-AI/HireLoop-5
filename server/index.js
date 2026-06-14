require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
// const dotenv = require('dotenv')
const port = 5000 || process.env.PORT
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { createRemoteJWKSet, jwtVerify } = require('jose-cjs')
// dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.NEXT_URL

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const JWKS = createRemoteJWKSet(
    new URL(`${process.env.NEXT}/api/auth/jwks`)
)

const verify = async (req,res,next) => {
    const header = req?.headers?.authorization
    if(!header){
        return res.status(401).json({message: 'Unauthorized'})
    }
    const token = header?.split(' ')[1]
    console.log(token)
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }

    try{
        const { payload } = await jwtVerify(token, JWKS)
        console.log(payload)
        // req.user = payload;
        next()
    }
    catch(error){
        return res.status(403).json({message: 'Forbidden'})
    }
    
}

const run = async () => {
    try {
        await client.connect();

        const db = client.db('authHire')
        const userCollection = db.collection('allData')
        const companyCollection = db.collection('companies')
        const jobsCollection = db.collection('jobs')
        const applicationsCollection = db.collection('applications')
        const subscriptionCollection = db.collection('subscription')

        app.get('/user',verify, async (req,res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        app.get('/user/jobs', async (req,res) => {
            const query = {}
            if(req.query.companyId){
                query.companyId = req.query.companyId
            }
            if(req.query.status){
                query.status = req.query.status
            }
            // console.log(query.companyId,query.status)
            const result = await userCollection.find(query).toArray()
            res.send(result)
        })

        app.get('/api/applications', async (req,res) => {
            const query = {}
            if(req.query.jobId){
                query.jobId = req.query.jobId
            }
            if(req.query.applicantId){
                query.applicantId = req.query.applicantId
            }
            // if(req.query.applicantId){
            //     query.jobId = req.query.applicantId
            // }
            // console.log(query.jobId,query.applicantId)
            console.log(query.jobId,query.applicantId)
            const result = await applicationsCollection.find(query).toArray()
            res.send(result)
            // console.log(result)
        })

        app.post('/user', async (req,res) => {
            const newUser = req.body
            const newJob = {
                ...newUser,
                createAt: new Date()
            }
            const result = await userCollection.insertOne(newJob)
            res.send(result)
        })

        // companies

        app.post('/api/companies',verify, async(req,res) => {
            const newUser = req.body
            const newCompany = {
                ...newUser,
                createAt: new Date()
            }
            const result = await companyCollection.insertOne(newCompany)
            res.send(result)
        })

        app.get('/api/companies', async(req,res) => {
            const result = await companyCollection.find().toArray()
            res.send(result)
        })

        app.patch('/api/companies/:id', async (req,res) => {
            const {id} = req.params
            const filter = {
                _id: new ObjectId(id)
            }
            const m = req.body
            const updated = {
                $set: {
                    status: m.status
                }
            }
            const result = await companyCollection.updateOne(filter,updated)
            res.send(result)
        })

        //aplications

        app.post('/api/applications', async(req,res) => {
            const n = req.body
            const newApplication = {
                ...n,
                createdAt: new Date()
            }
            const result = await applicationsCollection.insertOne(newApplication)
            res.send(result)
        })

        app.post('/api/subscriptions', async (req,res) => {
            const newUser = req.body
            const subsInfo = {
                ...newUser,
                createdAt: new Date()
            }
            const result = await userCollection.insertOne(subsInfo)
            res.send(result)
        })

        app.get('/user/jobs/browser', async (req,res) => {

            if(req.query){
                const { search, jobType, category, isRemote } = req.query;

                const query = {};
                if(jobType) {
                query.jobType = jobType;
                }
                if(category) {
                query.jobCategory = category;
                }
                if (isRemote !== undefined) {
                query.isRemote = isRemote === "true";
                }
                if(search) {
                    query.$or = [
                        {
                            jobTitle: {
                            $regex: search,
                            $options: "i",
                            },
                        },
                        {
                            responsibilities: {
                            $regex: search,
                            $options: "i",
                            },
                        },
                        {
                            requirements: {
                            $regex: search,
                            $options: "i",
                            },
                        },
                        {
                            companyName: {
                            $regex: search,
                            $options: "i",
                            },
                        },
                    ];
                }

                if(req.query.page){
                    const page = req.query.page
                    const perPage = req.query.perPage || 5
                    const skipItems = (page-1) * perPage

                    const jobs = await jobsCollection.find(query).skip(skipItems).limit(perPage).toArray();
                    return res.send(jobs);
                }

                console.log(query);

                const result = await jobsCollection.find(query).toArray();
                res.send(result);
            }
            else{
                const result = await jobsCollection.find().toArray();
                res.send(result);
            }
        })

        // app.get('/user/jobs/browser', async (req,res) => {

        //     const query = req.params
        //     console.log(query)

        //     const jobs = await jobsCollection.find().toArray();
        //     for (const job of jobs) {
        //         job.applications =
        //             await applicationsCollection.countDocuments({
        //                 jobId: job._id.toString()
        //             });
        //     }
        //     res.send(jobs);
        // });

        app.get('/user/jobs/browser2', async (req,res) => {
            const jobs = [
                {
                    $skip: 2
                }
            ]
            const result = await applicationsCollection.aggregate(jobs).toArray();
            res.send(result);
        });

        app.get('/user/jobs/browser/:id', async (req,res) => {
            const {id} = req.params
            const query = {
                _id: new ObjectId(id)
            }
            const result = await jobsCollection.findOne(query)
            res.send(result)
        })

        app.get('/api/stats', async (req,res) => {
            const pipeline = [
                {
                    $group: {
                        _id: '$jobType',
                        count: { $sum: 1}
                    }
                },
                {
                    $sort: {count: -1}
                },
                {
                    $project: {
                        jobType: '$_id',
                        count: 1,
                        _id: 0
                    }
                }
            ]
            const result = await jobsCollection.aggregate(pipeline).toArray()
            res.send(result)
        })

        app.get('/api/my/companies', async(req,res) => {
            const query = {}
            // console.log(req.query)
            if(req.query.reqruiterId){
                query.reqruiterId = req.query.reqruiterId
            }
            const result = await companyCollection.findOne(query)
            // console.log(result)
            return res.send(result || {})
        })
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } 
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Umayer Ahmad Server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
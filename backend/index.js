const express=require('express');
const app=express()
const port=process.env.PORT || 5000
const cors =require('cors')
app.use(cors());
app.use(express.json());
app.get('/' , (req,res)=>{
    res.send("hello world!")
})
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://roshnimadhu07:Rosevino123@cluster0.gxi0xwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const WtopsCollections=client.db("SouledStore").collection("Womentops");
    const WjeansCollections=client.db("SouledStore").collection("Womenjeans");
    const WsetsCollections=client.db("SouledStore").collection("Womensets");
    const WsneakersCollections=client.db("SouledStore").collection("Womensneakers");
    const MtshirtsCollections=client.db("SouledStore").collection("MenTshirts");
    const MjoggersCollections=client.db("SouledStore").collection("MenJoggers");
    const MsneakersCollections=client.db("SouledStore").collection("MenSneakers");
    const MshirtsCollections=client.db("SouledStore").collection("MenShirts");
    const KGirlstCollections=client.db("SouledStore").collection("GirlsTshirt");
    const KGirlsdCollections=client.db("SouledStore").collection("BoysTshirt");
    const KBoystCollections=client.db("SouledStore").collection("GirlsDresses");
    const KBoyspCollections=client.db("SouledStore").collection("BoysPolo");
//Wtops
    app.post("/upload.Wtops",async (req,res)=>{
        const data=req.body;
        const result = await WtopsCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallWtops",async (req,res)=>{
        const summer=await WtopsCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallWtops/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WtopsCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateWtops/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await WtopsCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteWtops/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WtopsCollections.deleteOne(filter);
        res.send(result);
    });

    //Wjeans

    app.post("/upload.Wjeans",async (req,res)=>{
        const data=req.body;
        const result = await WjeansCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallWjeans",async (req,res)=>{
        const summer=await WjeansCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallWjeans/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WjeansCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateWjeans/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await WjeansCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteWjeans/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WjeansCollections.deleteOne(filter);
        res.send(result);
    });


    //Wsets

    app.post("/upload.Wsets",async (req,res)=>{
        const data=req.body;
        const result = await WsetsCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallWsets",async (req,res)=>{
        const summer=await WsetsCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallWsets/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WsetsCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateWsets/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await WsetsCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteWsets/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WsetsCollections.deleteOne(filter);
        res.send(result);
    });


    //Wsneakers

    app.post("/upload.Wsneakers",async (req,res)=>{
        const data=req.body;
        const result = await WsneakersCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallWsneakers",async (req,res)=>{
        const summer=await WsneakersCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallWsneakers/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WsneakersCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateWsneakers/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await WsneakersCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteWsneakers/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await WsneakersCollections.deleteOne(filter);
        res.send(result);
    });

    //MOver

    app.post("/upload.Mtshirts",async (req,res)=>{
        const data=req.body;
        const result = await MtshirtsCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallMtshirts",async (req,res)=>{
        const summer=await MtshirtsCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallMtshirts/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MtshirtsCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateMtshirts/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await MtshirtsCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteMtshirts/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MtshirtsCollections.deleteOne(filter);
        res.send(result);
    });

    //MJoggers


    app.post("/upload.Mjoggers",async (req,res)=>{
        const data=req.body;
        const result = await MjoggersCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallMjoggers",async (req,res)=>{
        const summer=await MjoggersCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallMjoggers/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MjoggersCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateMjoggers/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await MjoggersCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteMjoggers/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MjoggersCollections.deleteOne(filter);
        res.send(result);
    });


    //MSneakers

    app.post("/upload.Msneakers",async (req,res)=>{
        const data=req.body;
        const result = await MsneakersCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallMsneakers",async (req,res)=>{
        const summer=await MsneakersCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallMsneakers/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MsneakersCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateMsneakers/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await MsneakersCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteMsneakers/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MsneakersCollections.deleteOne(filter);
        res.send(result);
    });

    //MShirts

    app.post("/upload.Mshirts",async (req,res)=>{
        const data=req.body;
        const result = await MshirtsCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallMshirts",async (req,res)=>{
        const summer=await MshirtsCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallMshirts/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MshirtsCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateMshirts/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await MshirtsCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteMshirts/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await MshirtsCollections.deleteOne(filter);
        res.send(result);
    });


    //KGirlt

    app.post("/upload.Gt",async (req,res)=>{
        const data=req.body;
        const result = await KGirlstCollections.insertOne(data);
        res.send(result);
    });

    app.get("/getallGt",async (req,res)=>{
        const summer=await KGirlstCollections.find().toArray();
        res.send(summer);
    });
    app.get("/getallGt/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await KGirlstCollections.findOne(filter);
        res.send(result);
    });
    app.patch('/updateGt/:id' , async (req,res)=>{
        const id=req.params.id;
        const updateClothData=req.body;
        const filter ={_id: new ObjectId(id)};
        const updateDoc = {
            $set: {
                ...updateClothData
            },
        };
        const options = {upsert: true };
        const result = await KGirlstCollections.updateOne(filter,updateDoc,options);
        res.send(result);
    });
    app.delete("/deleteGt/:id", async (req, res)=>{
        const id=req.params.id;
        const filter ={_id: new ObjectId(id)};
        const result = await KGirlstCollections.deleteOne(filter);
        res.send(result);
    });

//KBoyt

app.post("/upload.Bt",async (req,res)=>{
    const data=req.body;
    const result = await KBoystCollections.insertOne(data);
    res.send(result);
});

app.get("/getallBt",async (req,res)=>{
    const summer=await KBoystCollections.find().toArray();
    res.send(summer);
});
app.get("/getallBt/:id", async (req, res)=>{
    const id=req.params.id;
    const filter ={_id: new ObjectId(id)};
    const result = await KBoystCollections.findOne(filter);
    res.send(result);
});
app.patch('/updateBt/:id' , async (req,res)=>{
    const id=req.params.id;
    const updateClothData=req.body;
    const filter ={_id: new ObjectId(id)};
    const updateDoc = {
        $set: {
            ...updateClothData
        },
    };
    const options = {upsert: true };
    const result = await KBoystCollections.updateOne(filter,updateDoc,options);
    res.send(result);
});
app.delete("/deleteBt/:id", async (req, res)=>{
    const id=req.params.id;
    const filter ={_id: new ObjectId(id)};
    const result = await KBoystCollections.deleteOne(filter);
    res.send(result);
});

//KGirld

app.post("/upload.Gd",async (req,res)=>{
    const data=req.body;
    const result = await KGirlsdCollections.insertOne(data);
    res.send(result);
});

app.get("/getallGd",async (req,res)=>{
    const summer=await KGirlsdCollections.find().toArray();
    res.send(summer);
});
app.get("/getallGd/:id", async (req, res)=>{
    const id=req.params.id;
    const filter ={_id: new ObjectId(id)};
    const result = await KGirlsdCollections.findOne(filter);
    res.send(result);
});
app.patch('/updateGd/:id' , async (req,res)=>{
    const id=req.params.id;
    const updateClothData=req.body;
    const filter ={_id: new ObjectId(id)};
    const updateDoc = {
        $set: {
            ...updateClothData
        },
    };
    const options = {upsert: true };
    const result = await KGirlsdCollections.updateOne(filter,updateDoc,options);
    res.send(result);
});
app.delete("/deleteGd/:id", async (req, res)=>{
    const id=req.params.id;
    const filter ={_id: new ObjectId(id)};
    const result = await KGirlsdCollections.deleteOne(filter);
    res.send(result);
});

//KBoyp

app.post("/upload.Bp",async (req,res)=>{
    const data=req.body;
    const result = await KBoyspCollections.insertOne(data);
    res.send(result);
});

app.get("/getallBp",async (req,res)=>{
    const summer=await KBoyspCollections.find().toArray();
    res.send(summer);
});
app.get("/getallBp/:id", async (req, res)=>{
    const id=req.params.id;
    const filter ={_id: new ObjectId(id)};
    const result = await KBoyspCollections.findOne(filter);
    res.send(result);
});
app.patch('/updateBp/:id' , async (req,res)=>{
    const id=req.params.id;
    const updateClothData=req.body;
    const filter ={_id: new ObjectId(id)};
    const updateDoc = {
        $set: {
            ...updateClothData
        },
    };
    const options = {upsert: true };
    const result = await KBoyspCollections.updateOne(filter,updateDoc,options);
    res.send(result);
});
app.delete("/deleteBp/:id", async (req, res)=>{
    const id=req.params.id;
    const filter ={_id: new ObjectId(id)};
    const result = await KBoyspCollections.deleteOne(filter);
    res.send(result);
});

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

import {NextRequest, NextResponse} from "next/server";
import { MongoClient } from "mongodb"

let client =null;
let database=null;
let collection =null;

const DBURI='mongodb+srv://dbuser:4NR6bc8vhMXCYSxP@bugdb.ahrf5dw.mongodb.net/?retryWrites=true&w=majority&appName=BugDBzzzzz'

function generateBugId() {
    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    // Combine the prefix with the random number
    const bugId = `BUG-${randomNumber}`;
    return bugId;
}

const connectDB=async()=>{
    try{
        if(client == null){
            client= new MongoClient(DBURI);
            await client.connect();
            console.log("Mongoose client connected")
        }
        if(database == null){
            database = client.db("btg-db");
        }
        if(collection == null){
            collection = database.collection("bugs");
        }
        return true

    }catch(e){
        console.error("error connecting database")
        console.error(e.message)
        return false;
    }
    
}


export async function GET (request){
  
   let dbConnected=await connectDB();
     if(!dbConnected) return NextResponse.json({"message":"Something Went Wrong"}).status(400)  

    const data= await collection.find({}).toArray();
    let response=[]
    if(data.length >0){
        response=data.map(bug=>{
            
            return {
                id: bug?.bugId ?? "BUG-123",
                title: bug?.title ?? "",
                description: bug?.description ?? "",
                status: bug?.status ?? "Open",
            }

        })
    }

    return NextResponse.json({
    "data":response
    })
}

export async function POST(request){
  
     let dbConnected=await connectDB();
     if(!dbConnected) return NextResponse.json({"message":"Something Went Wrong"}).status(400)   
    const data=await request.json();
    data.bugId=generateBugId()
    const res=  await collection.insertMany([data])
    
    console.log('res',res)
    console.log("data",data)
    return NextResponse.json(data);
}
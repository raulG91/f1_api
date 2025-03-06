
import { MongoClient, ServerApiVersion } from 'mongodb';
//const uri = "mongodb+srv://raulgarciapedrosa:Pvae2ybCgdlDRe4W@clusterf1.mpewy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterF1";
const uri = process.env.MONGODB_URI

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
    console.log("URL: ",uri)
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

export class SeasonModel {

  static async getSeasons() {
    try {
      await client.connect()
      const seasons = await client.db("F1").collection("seasons").find({}).toArray()
      return Promise.resolve(seasons)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
  static async getSeasonsByYear(year) {
    try {
      await client.connect()
      const season = await client.db("F1").collection("seasons").findOne({ year: parseInt(year) })
      return Promise.resolve(season)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
  static async getWorldChampionByYear(year) {

    try {
      await client.connect()
      const season = await client.db("F1").collection("seasons").findOne({ year: parseInt(year) })
      if (season) {
        return Promise.resolve(season.worldChampion)
      }
      else {
        return Promise.resolve(null)
      }
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
  static async getConstructorChampionByYear(year) {
    try {
      await client.connect()
      const season = await client.db("F1").collection("seasons").findOne({ year: parseInt(year) })
      if (season) {
        return Promise.resolve(season.teamChampion)
      }
      else {
        return Promise.resolve(null)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  static async getTeamsByYear(year) {
    try {
      await client.connect()
      const season = await client.db("F1").collection("seasons").findOne({ year: parseInt(year) })
      if (season) {
        return Promise.resolve(season.teams.map(function (team) {
          return { "name": team.name, "points": team.points, "engine": team.engine }
        }))
      }
      else {
        return Promise.resolve(null)
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
  static async getDriversByYear(year) {
    try {
      await client.connect()
      const season = await client.db("F1").collection("seasons").findOne({ year: parseInt(year) })
      if (season) {
        let drivers_list = []
        for (let i = 0; i < season.teams.length; i++) {
          let team = season.teams[i].name
          for (let j = 0; j < season.teams[i].drivers.length; j++) {
            let driver = season.teams[i].drivers[j]
            drivers_list.push({ "name": driver.name, "team": team, "points": driver.points, "fastestLaps": driver.fastestLaps, "podiums": driver.podiums, "wins": driver.wins })
          }
        }
        return Promise.resolve(drivers_list)
      } else {
        return Promise.resolve(null)
      }

    } catch (error) {
      return Promise.reject(error)
    }
  }
  static async addSeason(season) {
    try{
      await client.connect()
      const result = await client.db("F1").collection("seasons").insertOne(season)
      return Promise.resolve(result.insertedId)

    }catch(error){
      return Promise.reject(error)
    }
  }
  static async updateSeason(year,season){
  
    //Set filter to find object to be replaced
    await client.connect()
    const filter = {year: parseInt(year)}
    try{
      const result = await client.db("F1").collection("seasons").updateOne(filter,{ $set:season })
      console.log(result)
      if(result.matchedCount > 0 ){
        return Promise.resolve(result.modifiedCount)
      }
      else{
        //No records found in the database
         return Promise.resolve(null)
      }
      
    }catch(error){
      return Promise.reject(error)
    }
    
  }
  static async deleteSeason(year){
    await client.connect()
    const filter = {year: parseInt(year)}
    try{
      const result = await client.db("F1").collection("seasons").deleteOne(filter)
      if(result.deletedCount > 0){
        return Promise.resolve(result.deletedCount)
      }
      else{
        return Promise.resolve(null)
      }
    }catch(error){
      return Promise.reject(error)
    }
  }



}
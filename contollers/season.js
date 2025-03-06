//import { SeasonModel } from "../models/season.js";
import { SeasonModel } from "../models/seasons_db.js";
import { validateSeason } from "../schemas/schema.js";

export class SeasonsController {

    static async getSeasons(req, res) {

        try {
            const seasons = await SeasonModel.getSeasons();
            res.status(200).json(seasons);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    static async getSeasonByYear(req, res) {
        
        // Get year from the inbound request
        const year = req.params.year;        
        try{
            const season = await SeasonModel.getSeasonsByYear(year);
            if(season){
                res.status(200).json(season)
            }
            else{
                res.status(404).json({message: `Season for year ${year} not found`})
            }    
        }catch(error){
            res.status(500).json({message: error.message})
        }  
    }
    static async getWorldCahmpionByYear(req, res) {

        const {year} = req.params

        try{
            const champion = await SeasonModel.getWorldChampionByYear(year)
            if(champion){
                res.status(200).json({"worldChampion": champion})
            }
            else{
                res.status(404).json({message: `World champion for year ${year} not found`})
            }
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
    static async getConstructorChampionByYear(req,res){

        const {year} = req.params
        try{
            const teamChampion = await SeasonModel.getConstructorChampionByYear(year)
            if(teamChampion){
                res.status(200).json({"constructorChampion": teamChampion})
            }
            else{
                res.status(404).json({message: `Constructor champion for year ${year} not found`})
            }
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
    static async getTeamsByYear(req,res){
        const {year} = req.params
        try{

            const teams = await SeasonModel.getTeamsByYear(year)

            if(teams){
                res.status(200).json(teams)
            }
            else{
                res.status(404).json({message: `Teams for year ${year} not found`})
            }

        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
    static async getDriversByYear(req,res){
        const {year} = req.params

        try{
            const drivers = await SeasonModel.getDriversByYear(year)

            if(drivers){
                res.status(200).json(drivers)
            }
            else{
                res.status(404).json({message: `Drivers for year ${year} not found`})
            }
        }catch(error){ 
            res.status(500).json({message: error.message})
        }
    }
    static async addSeason(req,res){
        const season = req.body
        const result = validateSeason(season)
        if(result.success){ 
            try{
                const new_season = await SeasonModel.addSeason(season)
                res.status(201).json({"_id":new_season})
            }catch(error){
                res.status(500).json({message: error.message})
            }
        }
        else if(!result.success){
            res.status(400).json({message: result.error})
        }

    }
    static async updateSeason(req,res){
        const year = req.params.year
        const season = req.body
        const result = validateSeason(season)
        if(result.success){
            try{
                const updated_season = await SeasonModel.updateSeason(year,season)
                if(updated_season){
                    res.status(200).json({message: `Season for year ${year} updated`})
                }
                else{
                    res.status(404).json({message: `Season for year ${year} not found`})
                }

            }catch(error){
                res.status(500).json({message: error.message})
            }
        }
        else if(!result.success){
            res.status(400).json({message: result.error})
        }
    }
    static async deleteSeason(req,res){
        const year = req.params.year
        try{
            const deleted_season = await SeasonModel.deleteSeason(year)
            if(deleted_season){
                res.status(200).json({message: `Season for year ${year} deleted`})
            }
            else{
                res.status(404).json({message: `Season for year ${year} not found`})
            }
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
}
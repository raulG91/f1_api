import { Router } from "express";
import { SeasonsController } from "../contollers/season.js";
import {validateYear} from "../middleware/validateYear.js"


export const seasonRouter = Router();

//GET methods
seasonRouter.get("/", SeasonsController.getSeasons);
seasonRouter.get("/:year", validateYear,SeasonsController.getSeasonByYear);
seasonRouter.get("/:year/worldChampion",validateYear,SeasonsController.getWorldCahmpionByYear);
seasonRouter.get("/:year/constructorChampion",validateYear,SeasonsController.getConstructorChampionByYear);
seasonRouter.get("/:year/teams",validateYear,SeasonsController.getTeamsByYear);
seasonRouter.get("/:year/drivers",validateYear,SeasonsController.getDriversByYear);
//Post methods
seasonRouter.post("/", SeasonsController.addSeason);

//Put methods 
seasonRouter.put("/:year",validateYear,SeasonsController.updateSeason);

//Delete methods
seasonRouter.delete("/:year",validateYear,SeasonsController.deleteSeason);

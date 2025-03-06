import {readFile} from 'fs/promises';

const file = await readFile('./seasons.json', 'utf-8');
const seasons = JSON.parse(file);


export class SeasonModel{

    static async getSeasons(){
        return seasons;
    }

    static async getSeasonsByYear(year){

        const season = seasons.find(season => season.year == year)
        return season;
    }

    static async getWorldChampionByYear(year){
        const season = seasons.find(season => season.year == year)
        if(!season){
            return null;
        }
        else{
            return season.worldChampion;
        }
    }
    static async getConstructorChampionByYear(year){
        const season = seasons.find(season => season.year == year)
        if(!season){
            return null;
        }
        else{
            return season.teamChampion;
        }
    }
    static async getTeamsByYear(year){
        const season = seasons.find(season => season.year == year)
        if(!season){
            return null;
        }
        else{
            return season.teams.map(function (team){
                return {"name":team.name,"points":team.points,"engine":team.engine}
            })
        }
    }
    static async getDriversByYear(year){

        const season = seasons.find(season => season.year == year);

        if(!season){
            return null;
        }
        else{
           let drivers_list = []

           for(let i=0;i<season.teams.length;i++){
                let team = season.teams[i].name
                for(let j=0;j<season.teams[i].drivers.length;j++){
                    let driver = season.teams[i].drivers[j]
                    drivers_list.push({"name":driver.name,"team":team,"points":driver.points,"fastestLaps":driver.fastestLaps,"podiums":driver.podiums,"wins":driver.wins})
                }
           }
           return drivers_list
        }
    }
}
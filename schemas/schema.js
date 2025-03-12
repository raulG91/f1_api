import z from 'zod';

const seasonSchema = z.object({
    year: z.number().int().min(2000).max(2030),
    worldChampion: z.string({
        required_error: "World champion is required",
        invalid_type_error: "World champion must be a string"
    }),
    teamChampion: z.string({
        required_error: "Team champion is required",
        invalid_type_error: "Team champion must be a string"
    }),
    teams: z.array(z.object({
        name: z.string({
            required_error: "Team name is required",
            invalid_type_error: "Team name must be a string"
        }),
        points: z.number().nonnegative(),
        engine: z.string({
            required_error: "Engine is required",
            invalid_type_error: "Engine must be a string"
        }),
        drivers: z.array(z.object({
            name:z.string({
                required_error: "Driver name is required",
                invalid_type_error: "Driver name must be a string"
            }),
            nationality:z.string({
                required_error: "Nationality is required",
                invalid_type_error:"Nationality must be a string"
            }),
            points: z.number().nonnegative(),
            fastestLaps:z.number().int().min(0),
            podiums: z.number().int().min(0),
            wins: z.number().int().min(0)
        }))
    }))
})

export function validateSeason(season){
    return seasonSchema.safeParse(season)
}
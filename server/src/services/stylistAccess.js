import "dotenv/config";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client.ts"; // Or "@prisma/client" depending on your schema's output path
import stylists from "../data/stylists.js";


//Prisma instance with our prismaURL
const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL,
});

//Psisma instance that will connect to our specific database
const prisma = new PrismaClient({ adapter });



//Resets the list to the 5 base stylists
export async function reset() {
    await prisma.stylists.deleteMany();
    await prisma.stylists.createMany({data: stylists});
}

//Lists all of the stylists
export async function listStylists() {
    return prisma.stylists.findMany({orderBy: {id: "asc"}});
}

//Gets the stylist with the specific id.
export async function getStylist(id){
    if (id === null) return null;
    return prisma.stylists.findUnique({where: {id}});
}

//Creates a new stylist within the database
export async function createStylist(name, location, specialties, bio){
    return prisma.stylists.create({data: {name, location, specialties, bio}});
}

//Deletes an existing profile from the database
export async function deleteStylist(id){
    if (!(await getStylist(id))) return false; //If stylist doesn't exist
    await prisma.stylists.delete({where: { id }});
    return true;
}
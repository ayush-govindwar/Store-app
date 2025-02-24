import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
//This setup prevents multiple PrismaClient instances from being created
//PrismaClient is the Main Tool for Running Queries
//PrismaClient is the main gateway that allows you to interact with your database.
//All database queries (like findMany, create, update, delete, etc.) must be run through PrismaClient.
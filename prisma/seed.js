const { PrismaClient } = require('@prisma/client'); // Import Prisma Client
const products = require('./products.json'); // Load product data from a JSON file
const prisma = new PrismaClient(); // Create a Prisma Client instance

async function main() {
  for (const product of products) { // Loop through each product in products.json
    await prisma.product.create({
      data: product, // Insert product into the database
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect(); // Disconnect Prisma client after seeding
  })
  .catch(async (e) => {
    console.error(e); // Log errors if any
    await prisma.$disconnect(); // Ensure Prisma disconnects even if an error occurs
    process.exit(1); // Exit the process with error status
  });

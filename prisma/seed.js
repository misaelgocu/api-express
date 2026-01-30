const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Limpiamos la base de datos antes de empezar (Opcional pero recomendado en seeds)
//   await prisma.user.deleteMany();

//   const demoUsers = [
//     { name: 'Juan Pérez', email: 'juan.perez@example.com', password: 'password123' },
//     { name: 'María López', email: 'maria.lopez@example.com', password: 'password123' },
//     { name: 'Carlos García', email: 'carlos.garcia@example.com', password: 'password123' }
//   ];

//   console.log('Sembrando datos...');

//   for (const user of demoUsers) {
//     await prisma.user.create({
//       data: user
//     });
//   }

//   console.log('✅ Usuarios de demostración creados con éxito');
    await prisma.user.deleteMany();
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  
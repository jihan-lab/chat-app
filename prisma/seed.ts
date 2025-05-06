import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const user1 = await prisma.user.upsert({
    where: { username: 'alice' },
    update: {},
    create: {
      username: 'alice',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'bob' },
    update: {},
    create: {
      username: 'bob',
    },
  });

  console.log({ user1, user2 });
};

main()
  .catch((e) => {
    console.log({ e });
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

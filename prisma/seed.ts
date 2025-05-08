import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const user1 = await prisma.user.upsert({
    where: { username: 'alice' },
    update: {},
    create: {
      username: 'alice',
      email: 'alice@gmail.com',
      password: '1234',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: 'bob' },
    update: {},
    create: {
      username: 'bob',
      email: 'bob@gmail.com',
      password: '1234',
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

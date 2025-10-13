import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function main() {
 
  const user: Prisma.UserCreateInput[] = [
    {
      name: 'jason',
      email: 'jason@gmail.co.uk',
      password: 'jason',
      newsArticle: ['224839780', '224936214']
    },
       {
      name: 'james',
      email: 'james@gmail.co.uk',
      password: 'james',
      newsArticle: ['224956968', '224957034']
    },
    {
      name: 'ali',
      email: 'ali@gmail.com',
      password: 'ali',
      newsArticle: ['224961802', '225109966']
    },
    {
      name: 'laura',
      email: 'laura@gmail.com',
      password: 'laura',
      newsArticle: ['225118304', '225119550']
    }
  ]
  await prisma.user.createMany({
    data: user
  });
  
}

main();
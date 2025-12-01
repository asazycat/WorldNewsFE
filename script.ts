
import { Prisma } from './generated/prisma/client';
import {prisma} from './prisma'



export async function main() {
 
  const user: Prisma.UserCreateInput[] = [
    {
      name: 'Demo',
      email: 'demo@gmail.co.uk',
      image:'https://www.pngarts.com/files/3/Avatar-Free-PNG-Image.png',
      password: 'demo',
      newsArticle: ['224839780', '224936214']
    },
    {
      name: 'jason',
      email: 'jason@gmail.co.uk',
      image:'https://img.freepik.com/premium-vector/flat-illustration-men-wearing-jacket-brown-black-color-combination_981536-1552.jpg?semt=ais_hybrid&w=740&q=80',
      password: 'jason',
      newsArticle: ['224839780', '224936214']
    },
       {
      name: 'james',
      email: 'james@gmail.co.uk',
      image:'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg',
      password: 'james',
      newsArticle: ['224956968', '224957034']
    },
    {
      name: 'ali',
      email: 'ali@gmail.com',
      image:'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg',
      password: 'ali',
      newsArticle: ['224961802', '225109966']
    },
    {
      name: 'laura',
      email: 'laura@gmail.com',
      image:'https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg?w=360',
      password: 'laura',
      newsArticle: ['225118304', '225119550']
    }
  ]

  await prisma.user.createMany({
    data: user
  });
  
}

main();
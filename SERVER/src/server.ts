import Fastfy from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastfy()
const prisma = new PrismaClient()

app.register(cors) //se fossemos colocar em produção precisaríamos limitar o cors

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP server runing!')
})
// these imports prisma types created by the prisma schema so we dont have to manually create new types every time the shcema changes
import { User as UserPrismaGeneratedType, Item as ItemPrismaGeneratedType, Transaction as TransactionPrismaGeneratedType, Prisma } from "@prisma/client";
//create a default Tool type
export type Item = ItemPrismaGeneratedType

export type User = UserPrismaGeneratedType

export type Transaction = TransactionPrismaGeneratedType

// prisma helper function that creates and validates a joined type
const itemWithImages = Prisma.validator<Prisma.ItemDefaultArgs>()({
  include: { images: true, Transaction: true }
})

// create a type with another prisma helper function to create a join type for itemsWithImages
export type ItemWithImages = Prisma.ItemGetPayload<typeof itemWithImages>;
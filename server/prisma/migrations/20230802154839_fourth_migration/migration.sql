/*
 Warnings:
 
 - You are about to drop the column `discount` on the `User` table. All the data in the column will be lost.
 - Added the required column `categoryId` to the `Item` table without a default value. This is not possible if the table is not empty.
 - Added the required column `discount` to the `Item` table without a default value. This is not possible if the table is not empty.
 
 */
-- AlterTable
ALTER TABLE "Item"
ADD COLUMN "categoryId" INTEGER NOT NULL,
  ADD COLUMN "discount" INTEGER NOT NULL;
-- AlterTable
ALTER TABLE "User" DROP COLUMN "discount";
-- CreateTable
CREATE TABLE "Category" (
  "id" SERIAL NOT NULL,
  "name" TEXT NOT NULL,
  CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
-- AddForeignKey
ALTER TABLE "Item"
ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
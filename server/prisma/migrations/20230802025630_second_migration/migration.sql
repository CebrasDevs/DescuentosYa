/*
  Warnings:

  - Added the required column `url_image` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "url_image" TEXT NOT NULL;

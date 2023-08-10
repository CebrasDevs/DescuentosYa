/*
  Warnings:

  - You are about to drop the column `url_image` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_Item` on the `Item_Shopping` table. All the data in the column will be lost.
  - You are about to drop the column `url_PDF` on the `Shopping` table. All the data in the column will be lost.
  - You are about to drop the column `way_to_pay` on the `Shopping` table. All the data in the column will be lost.
  - You are about to drop the column `company_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cuit` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dni` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_payment` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `url_image` on the `User` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantityItem` to the `Item_Shopping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfUrl` to the `Shopping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wayToPay` to the `Shopping` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Voucher` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "WayToPay" AS ENUM ('CASH', 'CARD');

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "url_image",
ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item_Shopping" DROP COLUMN "quantity_Item",
ADD COLUMN     "quantityItem" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Shopping" DROP COLUMN "url_PDF",
DROP COLUMN "way_to_pay",
ADD COLUMN     "pdfUrl" TEXT NOT NULL,
ADD COLUMN     "wayToPay" "WayToPay" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "company_name",
DROP COLUMN "cuit",
DROP COLUMN "dni",
DROP COLUMN "last_payment",
DROP COLUMN "phone",
DROP COLUMN "url_image",
ADD COLUMN     "dni_cuit" TEXT,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "lastPayment" TIMESTAMP(3),
ADD COLUMN     "phoneNumber" TEXT;

-- AlterTable
ALTER TABLE "Voucher" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "Way_To_Pay";

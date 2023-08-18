-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "comment" TEXT,
    "star1" BOOLEAN NOT NULL DEFAULT false,
    "star2" BOOLEAN NOT NULL DEFAULT false,
    "star3" BOOLEAN NOT NULL DEFAULT false,
    "star4" BOOLEAN NOT NULL DEFAULT false,
    "star5" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

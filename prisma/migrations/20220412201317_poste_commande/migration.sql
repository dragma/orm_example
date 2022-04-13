/*
  Warnings:

  - Added the required column `name` to the `Ballon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ballon" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "posteCommandeId" INTEGER;

-- CreateTable
CREATE TABLE "PosteCommande" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PosteCommande_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ballon" ADD CONSTRAINT "Ballon_posteCommandeId_fkey" FOREIGN KEY ("posteCommandeId") REFERENCES "PosteCommande"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Mesure" (
    "id" SERIAL NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "pression" INTEGER NOT NULL,
    "altitude" INTEGER NOT NULL,
    "taux_humidite" DOUBLE PRECISION NOT NULL,
    "latitide" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "date_mesure" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_reception" TIMESTAMP(3) NOT NULL,
    "ballonId" INTEGER,

    CONSTRAINT "Mesure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ballon" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Ballon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mesure" ADD CONSTRAINT "Mesure_ballonId_fkey" FOREIGN KEY ("ballonId") REFERENCES "Ballon"("id") ON DELETE SET NULL ON UPDATE CASCADE;

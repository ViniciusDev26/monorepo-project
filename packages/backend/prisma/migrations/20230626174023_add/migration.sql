-- CreateTable
CREATE TABLE "combos_by_products" (
    "productId" TEXT NOT NULL,
    "comboId" TEXT NOT NULL,

    PRIMARY KEY ("productId", "comboId"),
    CONSTRAINT "combos_by_products_comboId_fkey" FOREIGN KEY ("comboId") REFERENCES "combos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "combos_by_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "combos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);

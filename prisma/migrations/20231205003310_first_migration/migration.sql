-- CreateTable
CREATE TABLE "Empleo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vacante" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "conocimiento" TEXT NOT NULL,
    "experiencia" TEXT NOT NULL,
    "nivelAcademico" TEXT NOT NULL,
    "edadGenero" TEXT NOT NULL,
    "lugar" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "horarios" TEXT NOT NULL,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

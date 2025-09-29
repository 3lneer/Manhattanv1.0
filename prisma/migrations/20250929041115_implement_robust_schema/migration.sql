/*
  Warnings:

  - The primary key for the `Assignment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `courseId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `grade` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Assignment` table. All the data in the column will be lost.
  - The primary key for the `CalendarEvent` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `CalendarEvent` table. All the data in the column will be lost.
  - You are about to drop the column `endTime` on the `CalendarEvent` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `CalendarEvent` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `CalendarEvent` table. All the data in the column will be lost.
  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `badge` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `schedule` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Course` table. All the data in the column will be lost.
  - The `status` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `_StudentCourses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `course_id` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_time` to the `CalendarEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `CalendarEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."StudentStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'GRADUATE');

-- CreateEnum
CREATE TYPE "public"."TeacherStatus" AS ENUM ('ACTIVE', 'PART_TIME', 'ON_LEAVE');

-- CreateEnum
CREATE TYPE "public"."CourseStatus" AS ENUM ('UPCOMING', 'ACTIVE', 'COMPLETE');

-- CreateEnum
CREATE TYPE "public"."AssignmentDifficulty" AS ENUM ('FACIL', 'INTERMEDIO', 'DIFICIL');

-- DropForeignKey
ALTER TABLE "public"."Assignment" DROP CONSTRAINT "Assignment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Assignment" DROP CONSTRAINT "Assignment_studentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Course" DROP CONSTRAINT "Course_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_StudentCourses" DROP CONSTRAINT "_StudentCourses_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_StudentCourses" DROP CONSTRAINT "_StudentCourses_B_fkey";

-- AlterTable
ALTER TABLE "public"."Assignment" DROP CONSTRAINT "Assignment_pkey",
DROP COLUMN "courseId",
DROP COLUMN "createdAt",
DROP COLUMN "dueDate",
DROP COLUMN "grade",
DROP COLUMN "studentId",
DROP COLUMN "updatedAt",
ADD COLUMN     "course_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "difficulty" "public"."AssignmentDifficulty" NOT NULL DEFAULT 'INTERMEDIO',
ADD COLUMN     "due_date" TIMESTAMP(3),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Assignment_id_seq";

-- AlterTable
ALTER TABLE "public"."CalendarEvent" DROP CONSTRAINT "CalendarEvent_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "endTime",
DROP COLUMN "startTime",
DROP COLUMN "updatedAt",
ADD COLUMN     "course_id" TEXT,
ADD COLUMN     "end_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "CalendarEvent_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "CalendarEvent_id_seq";

-- AlterTable
ALTER TABLE "public"."Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "badge",
DROP COLUMN "createdAt",
DROP COLUMN "image",
DROP COLUMN "schedule",
DROP COLUMN "teacherId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "start_date" TIMESTAMP(3),
ADD COLUMN     "teacher_id" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "public"."CourseStatus" NOT NULL DEFAULT 'UPCOMING',
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Course_id_seq";

-- AlterTable
ALTER TABLE "public"."User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "name",
DROP COLUMN "updatedAt",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "password_hash" TEXT NOT NULL,
ADD COLUMN     "profile_picture_url" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "role",
ADD COLUMN     "role" "public"."UserRole" NOT NULL DEFAULT 'STUDENT',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- DropTable
DROP TABLE "public"."_StudentCourses";

-- DropEnum
DROP TYPE "public"."Role";

-- CreateTable
CREATE TABLE "public"."StudentProfile" (
    "user_id" TEXT NOT NULL,
    "status" "public"."StudentStatus" NOT NULL DEFAULT 'ACTIVE',
    "student_id_number" TEXT,

    CONSTRAINT "StudentProfile_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."TeacherProfile" (
    "user_id" TEXT NOT NULL,
    "status" "public"."TeacherStatus" NOT NULL DEFAULT 'ACTIVE',
    "department" TEXT,

    CONSTRAINT "TeacherProfile_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."UserSettings" (
    "user_id" TEXT NOT NULL,
    "email_notifications_enabled" BOOLEAN NOT NULL DEFAULT true,
    "theme" TEXT NOT NULL DEFAULT 'light',

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "public"."Enrollment" (
    "student_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,
    "enrollment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progress" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("student_id","course_id")
);

-- CreateTable
CREATE TABLE "public"."Submission" (
    "id" TEXT NOT NULL,
    "assignment_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "submission_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "grade" DOUBLE PRECISION,
    "feedback" TEXT,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentProfile_student_id_number_key" ON "public"."StudentProfile"("student_id_number");

-- CreateIndex
CREATE UNIQUE INDEX "Submission_assignment_id_student_id_key" ON "public"."Submission"("assignment_id", "student_id");

-- AddForeignKey
ALTER TABLE "public"."StudentProfile" ADD CONSTRAINT "StudentProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TeacherProfile" ADD CONSTRAINT "TeacherProfile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserSettings" ADD CONSTRAINT "UserSettings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Course" ADD CONSTRAINT "Course_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Enrollment" ADD CONSTRAINT "Enrollment_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Enrollment" ADD CONSTRAINT "Enrollment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Assignment" ADD CONSTRAINT "Assignment_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Submission" ADD CONSTRAINT "Submission_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "public"."Assignment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Submission" ADD CONSTRAINT "Submission_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CalendarEvent" ADD CONSTRAINT "CalendarEvent_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CalendarEvent" ADD CONSTRAINT "CalendarEvent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

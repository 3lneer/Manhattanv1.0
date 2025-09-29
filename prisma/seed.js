const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Hash a common password
  const saltRounds = 10;
  const password = 'password123';
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // Create Teacher User (Gabriel Cerdio)
  const gabriel = await prisma.user.create({
    data: {
      email: 'gabriel.cerdio@example.com',
      firstName: 'Gabriel',
      lastName: 'Cerdio',
      passwordHash: passwordHash,
      role: 'ADMIN', // Or TEACHER, based on your preference
      teacherProfile: {
        create: {
          status: 'ACTIVE',
          department: 'History & Philosophy'
        }
      }
    },
    include: {
      teacherProfile: true,
    },
  });
  console.log(`Created admin/teacher: ${gabriel.email}`);

  // Create Students
  const studentsData = [
    { firstName: 'Aurelia', lastName: 'Nova', email: 'aurelia.nova@email.com', status: 'ACTIVE' },
    { firstName: 'Brutus', lastName: 'Magnus', email: 'brutus.magnus@email.com', status: 'ACTIVE' },
    { firstName: 'Cassia', lastName: 'Luna', email: 'cassia.luna@email.com', status: 'INACTIVE' },
    { firstName: 'Decimus', lastName: 'Rex', email: 'decimus.rex@email.com', status: 'ACTIVE' },
    { firstName: 'Flavia', lastName: 'Sol', email: 'flavia.sol@email.com', status: 'GRADUATE' },
    { firstName: 'Gaius', lastName: 'Leo', email: 'gaius.leo@email.com', status: 'ACTIVE' },
  ];

  const createdStudents = [];
  for (const studentData of studentsData) {
    const student = await prisma.user.create({
      data: {
        email: studentData.email,
        firstName: studentData.firstName,
        lastName: studentData.lastName,
        passwordHash: passwordHash,
        role: 'STUDENT',
        studentProfile: {
          create: {
            status: studentData.status,
            studentIdNumber: `SID-${Math.floor(10000 + Math.random() * 90000)}`
          }
        }
      },
      include: {
        studentProfile: true,
      },
    });
    createdStudents.push(student);
    console.log(`Created student: ${student.email} with status ${student.studentProfile.status}`);
  }

  // Create Courses taught by Gabriel Cerdio
  const historiaAntigua = await prisma.course.create({
    data: {
      title: 'Historia Antigua',
      description: 'Un viaje a través de las civilizaciones antiguas.',
      teacherId: gabriel.id,
      status: 'ACTIVE',
    },
  });

  const literaturaLatina = await prisma.course.create({
    data: {
      title: 'Literatura Latina',
      description: 'Explorando los clásicos de la literatura romana.',
      teacherId: gabriel.id,
      status: 'ACTIVE',
    },
  });

  const filosofiaRomana = await prisma.course.create({
    data: {
      title: 'Filosofía Romana',
      description: 'Principios y pensadores de la filosofía en Roma.',
      teacherId: gabriel.id,
      status: 'UPCOMING',
    },
  });
  console.log('Created courses');

  // Enroll students in courses
  await prisma.enrollment.create({
    data: { studentId: createdStudents[0].id, courseId: historiaAntigua.id, progress: 80.5 },
  });
  await prisma.enrollment.create({
    data: { studentId: createdStudents[1].id, courseId: historiaAntigua.id, progress: 65.0 },
  });
  await prisma.enrollment.create({
    data: { studentId: createdStudents[2].id, courseId: literaturaLatina.id, progress: 45.2 },
  });
  await prisma.enrollment.create({
    data: { studentId: createdStudents[3].id, courseId: literaturaLatina.id, progress: 25.0 },
  });
  await prisma.enrollment.create({
    data: { studentId: createdStudents[4].id, courseId: filosofiaRomana.id, progress: 10.0 },
  });
   await prisma.enrollment.create({
    data: { studentId: createdStudents[5].id, courseId: filosofiaRomana.id, progress: 95.0 },
  });

  console.log('Enrolled students in courses');

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
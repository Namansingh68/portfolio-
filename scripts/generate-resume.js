const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

function generateResume() {
  const outputPath = path.join(__dirname, '..', 'public', 'Naman_Kumar_Resume.pdf');
  
  // A4 dimensions: 595.28 x 841.89 points
  // Margins: 32pt (top/bottom/left/right) -> available width: 531.28pt, height: 777.89pt
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 30, bottom: 30, left: 34, right: 34 },
    autoFirstPage: true
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const primaryColor = '#0369a1'; // Deep Electric Blue / Navy
  const textColor = '#0f172a';    // Dark Slate
  const mutedColor = '#475569';   // Slate 600
  const lineColor = '#cbd5e1';    // Slate 300

  // 1. Header
  doc.fontSize(19).font('Helvetica-Bold').fillColor(primaryColor).text('NAMAN KUMAR', { align: 'center' });
  doc.moveDown(0.15);
  doc.fontSize(10).font('Helvetica-Bold').fillColor(textColor).text('Full Stack Developer  |  Computer Science Undergraduate', { align: 'center' });
  doc.moveDown(0.2);
  
  doc.fontSize(8.5).font('Helvetica').fillColor(mutedColor).text(
    'Jaipur, Rajasthan, India   •   +91 8825254012   •   mrnaman.68@gmail.com',
    { align: 'center' }
  );
  doc.moveDown(0.15);
  doc.fontSize(8.5).font('Helvetica').fillColor(primaryColor).text(
    'GitHub: github.com/Namansingh68   •   LinkedIn: linkedin.com/in/naman-singh-bab34b319',
    { align: 'center' }
  );

  doc.moveDown(0.4);

  // Helper for Section Headings
  function addSectionHeading(title) {
    doc.moveDown(0.2);
    doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text(title.toUpperCase());
    const y = doc.y + 1;
    doc.strokeColor(primaryColor).lineWidth(1).moveTo(34, y).lineTo(561, y).stroke();
    doc.y = y + 4;
  }

  // 2. Education
  addSectionHeading('Education');
  doc.fontSize(9).font('Helvetica-Bold').fillColor(textColor).text('Birla Institute of Technology, Mesra – Jaipur Campus', 34, doc.y, { continued: true });
  doc.font('Helvetica').fillColor(mutedColor).text('   Expected Graduation: 2028', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(textColor).text('Bachelor of Technology in Computer Science & Engineering');
  doc.fontSize(8).font('Helvetica').fillColor(mutedColor).text(
    'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Operating Systems, DBMS.'
  );

  // 3. Technical Skills
  addSectionHeading('Technical Skills');
  const skills = [
    { cat: 'Languages', list: 'Java (Java 17), C, C++, JavaScript (ES6+)' },
    { cat: 'Frontend', list: 'React.js, Tailwind CSS, HTML5, CSS3, Vite, Framer Motion' },
    { cat: 'Backend & APIs', list: 'Java 17, Spring Boot, Spring Security (JWT), RESTful APIs, BCrypt Hashing' },
    { cat: 'Databases & ORM', list: 'PostgreSQL, Spring Data JPA, Hibernate, H2 Database' },
    { cat: 'DevOps & Tools', list: 'Git, GitHub, Docker, Maven, Swagger / OpenAPI, Axios, Vercel, Render, Supabase' },
    { cat: 'AI Productivity', list: 'ChatGPT, Claude, GitHub Copilot (Workflow Acceleration & Code Reviews)' }
  ];

  skills.forEach(s => {
    doc.fontSize(8.2).font('Helvetica-Bold').fillColor(textColor).text(`${s.cat}: `, { continued: true });
    doc.font('Helvetica').fillColor(mutedColor).text(s.list);
  });

  // 4. Projects
  addSectionHeading('Projects');
  
  // Project 1: CloudVault
  doc.fontSize(9).font('Helvetica-Bold').fillColor(textColor).text('CloudVault – Secure Cloud Storage & Document Management System', { continued: true });
  doc.font('Helvetica').fillColor(primaryColor).text('   [Live Demo | GitHub]', { align: 'right' });
  doc.fontSize(8).font('Helvetica-Bold').fillColor(primaryColor).text(
    'Tech Stack: React, Vite, Tailwind CSS, Java 17, Spring Boot, PostgreSQL, Spring Security, JWT, BCrypt'
  );
  doc.fontSize(8).font('Helvetica').fillColor(textColor);
  const cvBullets = [
    'Architected decoupled full-stack platform featuring stateless JWT authentication, BCrypt hashing, and role-based access control (RBAC).',
    'Engineered multipart file upload pipeline supporting 50MB file limits, MIME-type classification, and in-browser previews.',
    'Implemented recursive hierarchical directory structures, time-bound secure sharing URLs, storage quota meters, and trash recovery.'
  ];
  cvBullets.forEach(b => {
    doc.text(`•  ${b}`, { indent: 8, lineGap: 1 });
  });

  doc.moveDown(0.25);

  // Project 2: Online Voting System
  doc.fontSize(9).font('Helvetica-Bold').fillColor(textColor).text('Online Voting System – CLI Security & Integrity Verification', { continued: true });
  doc.font('Helvetica').fillColor(primaryColor).text('   [GitHub Repository]', { align: 'right' });
  doc.fontSize(8).font('Helvetica-Bold').fillColor(primaryColor).text(
    'Tech Stack: Pure C, Low-Level I/O, Dynamic Memory Allocation, Cryptographic Hashing'
  );
  doc.fontSize(8).font('Helvetica').fillColor(textColor);
  const ovBullets = [
    'Engineered command-line electronic voting system in C with role separation between Election Administrators and Voters.',
    'Implemented tamper-evident cryptographic ballot hashing, persistent file records, and real-time candidate tallying algorithms.'
  ];
  ovBullets.forEach(b => {
    doc.text(`•  ${b}`, { indent: 8, lineGap: 1 });
  });

  // 5. Work Experience
  addSectionHeading('Experience');
  doc.fontSize(9).font('Helvetica-Bold').fillColor(textColor).text('Web Development Intern  —  LaunchED Global', { continued: true });
  doc.font('Helvetica').fillColor(mutedColor).text('   June 2025 – July 2025', { align: 'right' });
  doc.fontSize(8).font('Helvetica').fillColor(textColor);
  const expBullets = [
    'Engineered responsive, accessible user interfaces using React and modern CSS component architectures.',
    'Integrated RESTful APIs, optimized cross-browser rendering, and participated in Git-based code reviews and sprints.'
  ];
  expBullets.forEach(b => {
    doc.text(`•  ${b}`, { indent: 8, lineGap: 1 });
  });

  // 6. Achievements
  addSectionHeading('Achievements & Honors');
  doc.fontSize(9).font('Helvetica-Bold').fillColor(textColor).text('Hackathon 2024 Finalist (Ranked 4th / 35 Teams)', { continued: true });
  doc.font('Helvetica').fillColor(mutedColor).text('   2024', { align: 'right' });
  doc.fontSize(8).font('Helvetica').fillColor(textColor).text(
    '•  Project: Real-Time Monitoring of Water Bodies in Delhi to Avoid Flooding and River Overflow.', { indent: 8 }
  );
  doc.fontSize(8).font('Helvetica').fillColor(mutedColor).text(
    '   Developed IoT/telemetry threshold trigger logic to predict rising water levels and provide early civic overflow warnings.', { indent: 8 }
  );

  doc.end();

  stream.on('finish', () => {
    console.log('Successfully generated Naman_Kumar_Resume.pdf (Strictly 1 Page)!');
  });
}

generateResume();

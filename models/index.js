const sequelize = require('../database'); // The sequelize instance
const Company = require('./Company');
const Job = require('./Job');
const Student = require('./Student');
const Recruiter = require('./Recruiter');
const Application = require('./Application');

// A Company has many Jobs
Company.hasMany(Job, { foreignKey: 'CompanyID' });
// A Job belongs to one Company
Job.belongsTo(Company, { foreignKey: 'CompanyID' });

// A Student has many Applications
Student.hasMany(Application, { foreignKey: 'StudentID' });
// An Application belongs to one Student
Application.belongsTo(Student, { foreignKey: 'StudentID' });

// A Recruiter has many Applications
Recruiter.hasMany(Application, { foreignKey: 'RecruiterID' });
// An Application belongs to one Recruiter, but it can be null
Application.belongsTo(Recruiter, { foreignKey: 'RecruiterID', allowNull: true });

// A Job has many Applications
Job.hasMany(Application, { foreignKey: 'JobID' });
// An Application belongs to one Job
Application.belongsTo(Job, { foreignKey: 'JobID' });

// Sync all models with the database
sequelize.sync();

module.exports = {
  sequelize,
  Company,
  Job,
  Student,
  Recruiter,
  Application
};


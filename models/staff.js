const staffs = [
  {
    name: 'Josh Cooper',
    joinDate: '01/20/1990',
    favoriteFood: 'Pizza',
    favoriteGame: 'Valorant',
    jobTitle: 'Co-Founder',
  },
  {
    name: 'Mamadou Magassa',
    joinDate: '01/20/1990',
    favoriteFood: 'Plantains',
    favoriteGame: 'Pokemon',
    jobTitle: 'Co-Founder',
  },
  {
    name: 'Mark',
    joinDate: '03/23/1993',
    favoriteFood: 'Tacos',
    favoriteGame: 'Call of Duty: Black Ops',
    jobTitle: 'Senior Production Manager',
  },
  {
    name: 'June',
    joinDate: '08/10/2008',
    favoriteFood: 'Ramen',
    favoriteGame: 'Fat Princess',
    jobTitle: 'Engine Specialist',
  },
];

module.exports = {
  getAll,
  // getOne,
};

function getAll() {
  return staffs;
}

// function getOne(id) {
//   //url parans are strings - convert to a number
//   id = parseInt(id);
//   //the Array.prototype.find iterator method is
//   //ideal for finding objs within an array
//   return staffs.find((staff) => staff.id === id);
// }

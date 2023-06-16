const links = [
  {
    name: 'YouTube Video Game Design',
    address: 'https://www.youtube.com/watch?v=PMXf0e8n2Oc',
    icon: 'images/play-btn-fill.svg',
  },
  {
    name: 'Job Postings',
    address: 'https://www.indeed.com/',
    icon: 'images/briefcase-fill.svg',
  },
  {
    name: 'Background Music',
    address: 'https://www.youtube.com/watch?v=P3n8vT49ueg',
    icon: 'images/music-note.svg',
  },
];

module.exports = {
  getAll,
  // getOne,
};

function getAll() {
  return links;
}

// function getOne(id) {
//   //url parans are strings - convert to a number
//   id = parseInt(id);
//   //the Array.prototype.find iterator method is
//   //ideal for finding objs within an array
//   return staffs.find((staff) => staff.id === id);
// }

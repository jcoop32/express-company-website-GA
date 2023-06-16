const pastWorks = [
  {
    id: 125223,
    title: 'Storm Dragon II',
    dateCompleted: '10/19/2022',
    description: `Storm Dragon 2, completed by Pixelverse Games in 2022, is an iconic RPG that pushed the boundaries of the genre. Set in a captivating fantasy realm, players embarked on an epic quest, assembling a band of diverse allies to face darkness. With meticulously crafted pixel art, immersive storytelling, and strategic combat, Storm Dragon 2 quickly became a modern classic, solidifying Pixelverse Games' reputation as a studio dedicated to creating unforgettable RPG experiences.`,
    image:
      'https://i.pinimg.com/originals/5c/75/df/5c75df65d476cfc040562771652cdedc.jpg',
      revenue: '$10,427,236.01'
  },
  {
    id: 127904,
    title: `Space Odyssey: Josh's Journey`,
    dateCompleted: '06/16/2020',
    description: `Embark on an extraordinary cosmic adventure with Space Odyssey: Josh's Journey, a captivating past project by Pixelverse Games. In this epic sci-fi RPG, players joined Josh, a fearless explorer, on a quest spanning the vast reaches of the universe. Collecting gear, armament, and leveling up, players guided Josh to become a formidable force, accumulating knowledge and skill points along the way. Space Odyssey enchanted players with its immersive universe, empowering them to shape Josh's destiny amidst the wonders and perils of space.`,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPyHx6SLzkHHxTxxuryFfL8t7mPdsKjjYsA&usqp=CAU',
      revenue: '$12,530,628.53'
  },
  {
    id: 139608,
    title: 'Matrix: Beyond the Vail',
    dateCompleted: '03/31/1999',
    description:
      'Unleash your curiosity and dive into a mind-bending reality with Matrix: Beyond the Veil, an enthralling video game project by Pixelverse Games. Step into the shoes of a courageous protagonist, delving deep into the enigmatic Matrix, where the line between what is real and what is an illusion becomes blurred. With each decision, players embark on a thrilling journey of self-discovery, unraveling the secrets of their existence while navigating a world teeming with uncertainty. Matrix: Beyond the Veil challenges players to discern their own reality, offering a gripping and thought-provoking experience that transcends the boundaries of conventional gaming.',
    image:
      'https://i.pinimg.com/originals/96/ed/21/96ed217c7786c60cc2860cdda755aeb7.jpg',
      revenue: '$125,564,824.42'
  },
];

module.exports = {
  getAll,
  getOne,
};

function getAll() {
  return pastWorks;
}

function getOne(id) {
  //url parans are strings - convert to a number
  id = parseInt(id);
  //the Array.prototype.find iterator method is
  //ideal for finding objs within an array
  return pastWorks.find((pastWork) => pastWork.id === id);
}

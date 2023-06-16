const pastWorks = [
    {id: 125223, title: '', dateCompleted: '', description: '', image: ''},
    {id: 127904, title: '', dateCompleted: '', description: '', image: ''},
    {id: 139608, title: '', dateCompleted: '', description: '', image: ''},
  ];
	
  module.exports = {
    getAll,
    // getOne,
  };
	
  function getAll() {
    return pastWorks
  };

//   function getOne(id){
//     //url parans are strings - convert to a number
//     id = parseInt(id)
//     //the Array.prototype.find iterator method is 
//     //ideal for finding objs within an array
//     return pastWorks.find(pastWork => pastWork.id === id)
//   }

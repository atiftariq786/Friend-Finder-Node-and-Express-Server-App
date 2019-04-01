// All data store in userData array below three array object as a default
var userData = [
    {
      name: "Ahmed",
      photo: "https://s3-us-west-1.amazonaws.com/co-directory-images/randyrosso.jpg",
      scores: ["5","1","4","4","5","1","2","5","4","1"]
     
    },

    {
      name: "John",
      photo: "https://peopledotcom.files.wordpress.com/2018/11/john-mayer-complex-1.jpg",
      scores: ["4","2","4","3","5","2","2","5","4","5"]
     
    },
    {
      name: "Robert",
      photo: "https://www.cl.cam.ac.uk/~rnw24/RobertWatson-thumbnail.jpg",
      scores: ["1","2","2","3","3","4","4","5","5","5"]
     
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userData;
  
  
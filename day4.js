      ///question 1///
//How to compare two JSON have the same properties without order?

//a.var obj1 = { name: "Person 1", age:5};

//b. var obj2 = { age:5, name: "Person 1" };

var obj1 = { name: "Person 1", age:5};
var obj2 = { age:5, name: "Person 1" };
JSON.stringify(obj1) === JSON.stringify(obj2);

////      question 2 ////

/////    display all the country flags //////


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
var result=JSON.parse (request.response);
for (var i=0;i<result.length;i++){
    console.log(result[i].flags)
    
}

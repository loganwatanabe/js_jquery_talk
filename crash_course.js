// Introduction to JavaScript and jQuery session for Crash Course
//Logan Watanabe


//JAVASCRIPT EXAMPLES
//adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

//to test these, try using Chrome, go to about:blank in a tab
//hit alt+ctrl+i  or  right click, bring up Inspect Element
//go to "Console"

//SYNTAX
//instantiate variables with "var"
//semicolons end lines
var a = 12;
var b =14;
a = a + b; 


//MATH
//has all your basic math things
var rad = 2;
rad * Math.PI;
var c = 12 % 3;
Math.floor(Math.random()*10);

//STRINGS
//single or double quotes
alert("Hello World");
console.log("I'm in the console");
//string methods can be found at http://www.w3schools.com/jsref/jsref_obj_string.asp
var cats = "cats";
cats.length;
cats.toUpperCase();
cats.match('[regex]');  //checks against regex

//Boolean
false == 0;
false == "";

false != undefined;
false != null;
false != NaN;
//but
Boolean(undefined);
Boolean(null);
Boolean(NaN);

//TYPECASTING
//to typecast, just call the name of the type you want to convert to
var index=Number("four");
var phone = String(4125551234);
Boolean("");
Boolean(null);

//NaN == not a Number
Number("I am not a number");

//null is not equal to anything, but if put in a condition it is false
Boolean(null);

//undefined is given to a var with unassigned value.
var b;
b;



//  OTHER OBJECTS are defined in the Javascript library:
//	Date
//	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//	Arrays
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



//STRUCTURES
var a = 5;

//if  else if   else
if(a<10){
	return "low";
}else if(a>=10 && a<15){
	return "medium";
}else{
	return "high";
}

//loops
while(a<10){
	a+=1;
}

do{
	a+=1
}while(a<10)

for (var i = 0; i < 5; i++){
	a+=i;
}

//switch
var text = "option1"
switch(text){
case 'option1':
	return "one"
	break;
case 'same as option2':
case 'option2':
	return "two";
	break;
default:
	return "other";
}




//FUNCTIONS
var something = function(params){
	//do something, or
	return 'something' + params;
};


//scope of vars are containted within their parents only
var optional = function(){
	var ret;
	if(arguments[0]){
		ret = arguments[0];
	}else{
		ret = "nothing passed in"
	}
	return ret;
}
 ret; //this will get a reference error since it was instantiated within the function





//ARRAYS
//	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var arr = [0, 'one'];
//or
var arr=[];
arr[0] = 0;
arr[1] = 'one';


arr.length;
arr.push('two');//appends to the end of the array






//OBJECTS
//Set of key:value pairs
var joe = {
	name: 'Joe',
	age: 20
};

joe.name;
joe.age;
joe['name'];

joe.pets = [{name:'Spot', type:'dog'}, {name:'Goldie', type:'fish'}];
joe.pets[0].name;

var person = {};
person.school = "CMU";
person["age"] = 20;
person.skills = { javascript: "Advanced", stats:"OK", english:"good"};
person.skills.javascript



//"CLASSES"
//they are just functions that define objects,
//and new instances of the class all call on the same constructor function
function Person(first, last){
    this.first = first;
    this.last = last;
}
var s = new Person("Simon", "Willison");

//methods can either be defined within the Person Object itself
Person.get_name = function(){
	return this.first + ' ' + this.last;
}

//or to the prototype, which is the preferred way to do it
Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};















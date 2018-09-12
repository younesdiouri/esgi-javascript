var test = "i find your lack of faith disturbing";
var phrase = "may the force be with you";
var obj = new Object();
var prop = "luke vador";
var input = "i've got a bad feeling about this";
var clef = "feeling";


console.log(ucfirst(test));
console.log(capitalize(phrase));
console.log(camelCase(test));
console.log(snake_case(phrase));
console.log(leet(test));
console.log(prop_access(obj,prop));
console.log(verlan(test));
console.log(yoda(test));
console.log(vig(input, clef));


function ucfirst(str) {
  if (str.length > 0) {
    return str[0].toUpperCase() + str.substring(1);
  } else {
    return str;
  }
}

function capitalize(sentence){
   var words = sentence.toLowerCase().split(' ');
   for (var i = 0; i < words.length; i++) {
    words[i] = ucfirst(words[i]);    
   }
     return words.join(' '); 
}

function camelCase(str){
    
   return capitalize(str).replace(/ /g, '');
}

function snake_case(sentence){

     return sentence.toLowerCase().replace(/ /g, '_');	
}


function leet(str){

   let leetSpeak = '';

   for (var i = 0; i < str.length; i++) {
       var currentChar = str[i].toLowerCase();
       if (currentChar === "i") {
            leetSpeak += "1"; 
	        }
       else if (currentChar === "e") {
            leetSpeak += "3"; 
	        }
       else if (currentChar === "a") { 
            leetSpeak += "4"; 
	       }
       else if (currentChar === "o") { 
            leetSpeak += "0"; 
	       }
       else if (currentChar === "u") {
            leetSpeak += "(_)"; 
	       }
       else if (currentChar === "y") {
            leetSpeak += "7";
	         }
       else { 
            leetSpeak += currentChar; 
	       }
   }

   return leetSpeak;
}

function prop_access(obj,prop){
	
    var object = obj;
    var obj_class = object.constructor.name;
    var prop = prop.split(' ');
    var tab = [];
    for (var i = 0; i < prop.length ; i++) {
        object = object[prop[i]];
        tab[i] = prop[i];
        if (typeof object === "undefined") {
            return obj_class + "." + tab.join('.');
        }
    }
    return object;
}

function verlan(str){
   return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

function yoda(str){
   return str.split(' ').reverse().join(' ');
}

function vig(input, clef)
{
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    input = input.toUpperCase();

    if (clef == null)
        clef = "";
    clef = clef.toUpperCase();
    var clef_long = clef.length;
    var clef_correcte = "";
    for (var i = 0; i < clef_long; i ++)
    {
        var clef_char = alphabet.indexOf (clef.charAt (i));
        if (clef_char>-1) {clef_correcte += alphabet.charAt (clef_char)};
    }
    clef = clef_correcte;
    clef_long = clef.length;
    if (clef_long == 0)
    {
        clef = "a";
        clef_long = 1;
    }

    output = "";
    var clef_index = 0;
    var n=0;
    for (i=0; i< input.length; i ++)
    {
       var input_char = input.charAt (i);
       var input_char_value = alphabet.indexOf(input_char);
       if (input_char_value>-1)
        {
        
            input_char_value += alphabet.indexOf(clef.charAt(clef_index));
            input_char_value += 26;
            input_char_value %= 26;
              if ((n%5==0) && (n>0)) {output+=" "};
             n++;
            output += alphabet.charAt(input_char_value);
            clef_index = (clef_index+1) % clef_long;
        }
    }
    return output;
}


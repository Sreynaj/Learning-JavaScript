//#1
let love = "Love is the best thing in this world. Some found their love and some are still looking for thir love."
let love1 = /love/gi
console.log(love.match(love1).length)

//#2
let because = 'You cannot end a sentence with because because because is a conjunction'
let because1 = /because/gi
console.log(because.match(because1).length)

//#3
//clean the followwing text 
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let Er = /[%$@&#;]/gi;
let cleanSentence = sentence.replace(Er, '')
console.log(cleanSentence)

//find the most frequency words 

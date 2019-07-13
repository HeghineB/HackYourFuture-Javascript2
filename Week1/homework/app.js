var books = ["they_say_you_are_crazy", "we_refugees", "the_second_sex", "gender_trouble", "excitable_speech", "sister_outsider","the_will_to_change", "trauma_and_recovery", "ceremony", "women_who_run_with_the _wolves"];

for(var i=0; i<books.length; i++)
console.log(books[i]);


function book_title() 
{
var ul=document.createElement('ul');

for(var i=0;i<books.length;i++)
{
   var li=document.createElement('li');
   li.innerHTML=books[i];
   ul.appendChild(li);
}

document.getElementById('a').appendChild(ul);
}

book_title();


var book_object=
{
"they_say_you_are_crazy":
{
title:"They Say You're Crazy:How The World's Most Powerful Psychiatrists Decide Who's Normal",
language:"English",
author:"Paula Caplan",

},
"we_refugees":
{
title:"We Refugees",
language:"English",
author:"Hannah Arendt",

},
"the_second_sex":
{
title:"The Second Sex",
language:"English",
author:"Simone de Beauvoir",

},
"gender_trouble":
{
title:"Gender Trouble",
language:"English",
author:"Judith Butler",

},
"excitable_speech":
{
title:"Excitable Speech: A Politics of the Performative",
language:"English",
author:"Judith Butler",

},
"sister_outsider":
{
title:"Sister Outsider",
language:"English",
author:"Audre Lorde",

},
"the_will_to_change":
{
title:"The Will to Change: Men, Masculinity, and Love",
language:"English",
author:"Bell Hooks",

},
"trauma_and_recovery":
{
title:"Trauma and Recovery: The Aftermath of Violence From Domestic Abuse to Political Terror ",
language:"English",
author:"Judith L. Herman ",

},
"ceremony":
{
title:"Ceremony",
language:"English",
author:"Leslie Marmon Silko",

},
"women_who_run_with_the _wolves":
{
title:"Women Who Run With the Wolves: Myths and Stories of the Wild Woman Archetype",
language:"English",
author:" Clarissa Pinkola Estés",

}

}




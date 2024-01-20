function generate(){
    var quotes = {
       "Steve": '"Maybe life is random, but I doubt it."',
       "Tyler": '"Fake it until you make it"',
       "Ruth":'"Just do it"',
       "Nike":'"Amul Butter is the best"',
       "Jack":'“Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.”',
       "Micahel Scott":'"Im not superstitious,just a little stitious"',
       "Dr. Rumack": '“I am serious. And don’t call me Shirley”',
       "Dr Sheldon Cooper":'“I’m not insane. My mother had me tested.”',
       "Ace Ventura":'“If I’m not back in five minutes, just wait longer.”',
       "Anon":'“I’m at a place in my life when errands are starting to count as going out.”'
    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

}
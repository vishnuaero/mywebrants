function generate(){
    var quotes = {
       "Steve": '"Maybe life is random, but I doubt it."',
       "Tyler": '"Fake it until you make it"',
       "Ruth":'"Just do it"',
       "Nike":'"Amul Butter is the best"'
    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

}
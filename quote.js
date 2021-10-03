const quotes = [
    {
        quote : "Passion is the genesis of genius",
        author : "Tony Robbins",
    },
    {
        quote:"You still have enough time to make your dream come true",
        author:"Peter pans",
    },
    {
        quote:"Sometimes the right path isn't the easiest one",
        author:"Pocahontas",
    },
    {
        quote:"Remember, you are the one who can fill the world with sunshine",
        author:"Snow White",
    },
    {
        quote:"If tou don't know where you want to go, then it doesn't matter which path you take",
        author:"Alice in wonderland",
    },
    {
        quote:"A true friend looks at the tears hidden in forced smile",
        author:"Winnie the Pooh",
    },
    {
        quote:"If you cannot say something nice, say nothing at all",
        author:"Bambi",
    },
    {
        quote:"Even though it may seem silly or wrong, you must try.",
        author:"MR.Kitting",
    },
    {
        quote:"Continue to study and learn new skills",
        author:"MR.Kitting",
    },
    {
        quote:"You became what you study",
        author:"MR.Kitting",
    },
];
    
    

    


function randomQuote() {
    const quoteInput = document.querySelector(".quote li:first-child");
    const authorInput = document.querySelector(".quote li:last-child");  
    const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteInput.innerText = todaysQuote.quote;
    authorInput.innerText = todaysQuote.author;
}

randomQuote();
setInterval(randomQuote , 10000);
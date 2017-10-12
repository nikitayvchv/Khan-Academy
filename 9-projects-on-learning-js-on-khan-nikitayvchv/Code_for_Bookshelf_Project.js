//all the books and their information
var books = [
    {
        title: "The Giver",
        stars: 1,
        author: "L. Lowry"
    },
    {
        title: "Hunger Games",
        stars: 3,
        author: "S. Collins"
    },
    {
        title: "Harry Potter",
        stars: 4,
        author: "J.K. Rowling"
    }
];
fill(37, 115, 47);
textSize(40);
text("BOOK STORE", 66, 40);

// draw shelf
fill(173, 117, 33);
rect(0, 346, width, 10);

// draws the books 
for (var x = 0; x < 3; x++){
    var book = books[x];
    fill(800+x*80,70+x*60,80+x*95);
    rect(10+x*138, 245, 90, 100);
    fill(0, 0, 0);
    textSize(12);
    text(book.title, 15+x*140, 254, 70, 100);
    text(book.author, 15+x*140, 311, 70, 100);
    for (var i = 0; i < book.stars; i++) {
        image(getImage("cute/Star"), (12 + x * 138) + (i * 21), 316, 20, 30);
    }
}



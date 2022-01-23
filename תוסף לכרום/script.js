
    quates = new Array;
    quates[0] = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
    quates[1] = "The way to get started is to quit talking and begin doing.";
    quates[2] = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.";
    quates[3] = "If life were predictable it would cease to be life, and be without flavor.";
    quates[4] = "If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.";
    quates[5] = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.";
    quates[6] = "Life is what happens when you're busy making other plans.";
    quates[7] = "Spread love everywhere you go. Let no one ever come to you without leaving happier.";
    quates[8] = "When you reach the end of your rope, tie a knot in it and hang on.";
    quates[9] = "Always remember that you are absolutely unique. Just like everyone else.";
    quates[10] = "Don't judge each day by the harvest you reap but by the seeds that you plant.";
    quates[11] = "The future belongs to those who believe in the beauty of their dreams.";
    quates[12] = "Tell me and I forget. Teach me and I remember. Involve me and I learn.";
    quates[13] = "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.";
    quates[14] = "It is during our darkest moments that we must focus to see the light.";
    quates[15] = "Whoever is happy will make others happy too.";
    
    document.getElementById("print2").addEventListener("click", print2);
    function print2() {
        var random = Math.floor(Math.random() * quates.length);
        document.getElementById("quote").innerHTML = quates[random];
    }

    document.getElementById("add").addEventListener("click", add);
    function add() {
        let q = prompt("הוסף ציטוט: ");
        quates.push(q);
    }

    document.getElementById("pop").addEventListener("click", pop);
    function pop() {
        quates.pop();
    }

    document.getElementById("printPage").addEventListener("click", printPage);
    function printPage() {
        window.open("http://www.google.co.il");
        window.open("https://moodlearn.ariel.ac.il/auth/multioauth/login.php?userType=student")
    }

    document.getElementById("myPage").addEventListener("click", enter);
    function enter() {
        window.open("https://danielsweb19.000webhostapp.com");

    }


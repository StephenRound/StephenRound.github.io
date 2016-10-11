Yeah, this is pretty cool. I don't want to toot my own horn but this is the first time since starting p5 that I've leaned back, put my hands on my head, and just stared at the mesmerizing pattern I created and thought "I actually did it."

At first, the program ran similiarly to the sad face example we did in class, the only difference being the sad faces are now swords of varying lengths.

I learned about rotate() and wanted to make the swords, at the very least, spin around their hilt as an axis while they bounce all over the canvas. I made a for loop in the Swords.js file so the rotation would be constantly happening.

Instead, I accidentally made a cicle of similar random swords rotate around a global axis, which I then turned to the middle of the canvas. To have something in the middle the swords could orbit, I added a faintly flickering circle. The effect is beautiful.

Clicking the mouse basically reloads a random amount of swords, changing their color, length, and position. As an added bonus, you can resize the window and it adapts to the new size actively.
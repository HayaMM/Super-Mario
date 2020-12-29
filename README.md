 # Super Mario Run  <img src="/images/MarioRun.png" width="100">
 ## Technologies used:
* VS code separate HTML / CSS / JavaScript files.
* jQuery.
* GitHub.
* Git Bash.
## Wireframes: 

<img src="/images/wirefram.jpg" width="500">


## User stories:

* As a user, I want to have good back-ground color, so that I can be comfortable to look at.
* As a player, I want to have a message, so that I know that game is over.
* As a player, I want to have suitable size for the characters, so that I can track the characters' path.
* As a user, I want to have home page, so that I can enter the game.
* As a user, I want to have ability to return the home page, so that I can access the website.
* As a user, I want to have symmetrical design, so that I can see the site consistency.
* As a player, I want to have challenging game, so that I can be more excited.


## Development stories:
**Super Mario Run** It’s a famous game, I chose it because it’s my favorite game, I developed a very **simple version**.

* **Home page:**

 Contains **hyperlink** at the top of the page that links to the **same page**, followed by the name of the game **“Super Mario Run”** with the **image** of Mario, and a **“play”** button that takes to the **game page**, finally there is a **footer** at the botton.

### Screenshot of the home page: 

# ![](/images/homePage.png)

* **Game page:**

 Contains the same **hyper link** and **footer**.
 
 In the **middle of the page** we have the **game board** or the **game space** inside it  **Mario** and the **obstacle** that is moving **linearly** towards  Mario, when **click** the **game board** Mario will **jump** by adding **“animation class”** and **avoid the obstacles**. If Mario **didn’t** avoid the obstacle an alert message will appears to show that **“You lose”**.

### Screenshot of game page:

# ![](/images/gamePage.png)

Game is over:

# ![](/images/loseAlert.png)


## Problem solved and functions
I had a **problem** when I tried to determine collision, so I used **“setInterval()”** function to run every **50 ms** and get the position **valuables** of both Mario and the obstacle and set **if** statement to check the **collision** values if conditions are met, will apply an alert message 
and then reload the page by using:
 **location.reload();** 
 that allows the player to keep playing.


My **favorite function** is called when **click** the game space it will performs an **animation** function,
by using jquery to select the game space class and call a function that adds an animation class to Mario class.


## Future work 
I will work to make the site more responsive and interactive with the user such as 
adding audios and count score, with more challenges.





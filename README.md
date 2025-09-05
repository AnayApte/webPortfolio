# WebPortfolio - Spark Red Edition

Submission Questions:
1) My project is an online Web Portfolio, documenting all of my STEM accomplishments. For the Spark Red Application, I've added a login/logout feature, which allows a user to use their Google Account to create an account on the website (using Google OAuth).

2) Features I chose to include: Slideshow for images of accomplishements, Demo Videos, Front and Back end integration, API integration, Sign In.

3) 2hr editing this project.

4) Live Deployment Link: https://web-portfolio-black-eight.vercel.app/

   Video Link: https://drive.google.com/file/d/1M_pVYgh747KcLQ5ocORD6SHc_T4ezcYz/view?usp=sharing

   Detailed Instructions: When you clone the repository, make sure to run "cd my-portfolio". 

   From there, you need to add a .env.local file in the my-portfolio file with these arguments:
      -GOOGLE_CLIENT_ID=121974594961-b5s45oo0vfk2mqikbni5jo530mdr8bh5.apps.googleusercontent.com
      -GOOGLE_CLIENT_SECRET=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
      -NEXTAUTH_URL=http://localhost:3000
      -NEXTAUTH_SECRET=q5rUrXT7nwX5sDwx7mLIl3oUvtYm+LLGg9/UrhpfIXI=

   Afterwards, run this command "npm run dev", and the website should run on localhost:3000.

# [The App Brewery - Back-end project 03 - Newsletter Signup](https://gabriel-newsletter-signup.herokuapp.com/)

## Udemy - The Complete 2020 Web Development Bootcamp
### Section 20: APIs - Application Programming Interfaces
A back-end program, that can forward the user's name and e-mail address to Mailchimp, to sign it up for your newsletter.
 - Node.js
 - HTML5
 - CSS3

#### My Newsletter Signup page is deployed on [Heroku](https://gabriel-newsletter-signup.herokuapp.com/)

#### How to run: (from terminal)
 Clone the repository:
 > git clone https://github.com/ArpadGBondor/The_App_Brewery-Back-end_project_03-Newsletter_Signup.git

 Enter directory:
 > cd The_App_Brewery-Back-end_project_03-Newsletter_Signup/

 Download the missing dependencies from npm:
 > npm install

 Get your own API key (sry, I won't share mine... )
 > Register on Mail Chimp for your own API key: https://mailchimp.com/  
 > mailChimpUserKey: https://admin.mailchimp.com/account/api/  
 > mailChimpListID: https://admin.mailchimp.com/lists/  
 > mailChimpServerNumber: the last digits of your API key, eg: "us3"

 Create a file named '.env' and set this [enviroment variables](https://www.npmjs.com/package/dotenv):
 > MAILCHIMP_API_KEY=  
 > MAILCHIMP_LIST_ID=  
 > MAILCHIMP_SERVER_NUMBER=  

 Run program:
 > node app.js

 Send get request from browser:
 > Open: http://localhost:3000

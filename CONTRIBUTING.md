# Guide to Contributing

## Project's Values and Team Norms
- Communicate
- Meet at least 3x a week:  Tuesday at 11 am (https://nyu.zoom.us/j/98251028819), Wednesday at 4:45 pm (https://nyu.zoom.us/j/97231855503), Friday 3:30 pm (https://nyu.zoom.us/j/96305288187)
- "Done" means that the function is working properly and integrated with everyone else's code

## Git workflow rules
- Every team member should have a working branch for each feature they are developing
- Make changes locally and save
- Pull everyone else's changes before you push
- Handle any merge conflicts that arise before push, never override other people's code without permission

## Rules of contributing
- Everybody should contribute equally
- update each other at daily scrum
- communicate frequently and effectively before the daily scrum meetings 

## How disagreements and conflicts will be solved
- Handle these at Daily Scrum
- If issues continue to persist after 2 Daily Scrum meetings, bring the issue up with Jaya or Prof

## Instructions for setting up the local development environment
- Clone the repository
- will be updated later when we have a database setup

## Instructions for building and testing the project (update with that information once the project reaches that stage)
- You'll need a .env in the global folder with contesnts :
mongoUSER="whDev"
mongoPWD="whDevagilenyu"
-You'll also need a .env in the front-end folder outside of src with:
REACT_APP_WEBHOST=http://localhost
-You'll also need a .env in the back-end folder with:
webhost=http://localhost
-cd into back-end npm install, and then do the same for front-end
-Run npm start in back-end before running it in front-end

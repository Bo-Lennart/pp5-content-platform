# Dagoy - Content Sharing Platform

Dagoy is a content platform for users to share their content. The concept is that you cannot follow any users, to keep content democracy on a high level and nobody gets to ride on the "high follower number bluff = quality".. What you can do on Dagoy is bookmark posts, filter them by category and also like posts if you appreciate a users content. 

Each user has access to their own profile once they are signed in where they can create posts, see all their bookmarks, edit their profile image and password.

If anyone needs to get in touch with the admin, they can fill out the contact form and the Admin will haveget in touch as soon as possible.

![Dagoy](src/assets/readme_screenshots/responsive.png)

* Deployed FrontEnd - [Dagoy](https://dagoy-pp5.herokuapp.com/)

* Deployed BackEnd API - [Dagoy DRF API](https://pp5-api-bo.herokuapp.com/)

* BackEnd Repo - [LINK](https://github.com/Bo-Lennart/DRF-PP5-API)

* FrontEnd Repo - [LINK](https://github.com/Bo-Lennart/pp5-content-platform)

## Table of Contents
- [User Experience](#user-experience)
    - [Site Goal](#site-goal)
    - [User Stories](#user-stories)
        - [Agile Methodology](#agile-methodology)

- [Design](#design)
    - [Wireframes](#wireframes)
        - [Desktop](#desktop)
        - [Mobile Screen](#mobile-screen)
    - [Color Palette](#color-palette)
    
- [Features](#features)
    - [Foundational Features](#foundational-features)
    - [Components](#components)
    - [C.R.U.D](#crud)
- [Testing](#testing)
    - [Validators](#validators)
    - [Unfixex Bugs](#unfixed-bugs)

- [Technologies Used](#technologies-used)

    - [Frameworks](#frameworks)
    - [libraries](#libraries)
    - [Programs](#programs)

- [Components](#components)
    - [Deployment](#deployment)

- [Credits](#credits)
    - [Content](#content)
    - [Media](#media)

# User Experience
- This content application was built for my Portfolio Project 5 as part of my Diploma in Full-Stack Software Development, Code Institute. 

## Site goal
- The goal of this project is to demonstrate expereience and skills learned throughout the course as a final project within HTML, CSS, JavaScript, React.js and Django REST Framework.

- The application is a content sharing app where users can sign up, inspire eachother with content and upload by category for users to filter their field of interest. 

### User Stories
- The base of this project has consisted of building user stories and plan the project from these.

    1. USER STORY:  As a user I have a navbar to every page so I can navigate easely
    2. USER STORY:  As a user I can sign up for the news page in order to access the features of a signed up user
    3. USER STORY:  As a user I can sign in to the app and access functionality for users
    4. USER STORY:  As a user I can tell if I'm logged in or not so I can log in if I need to
    5. USER STORY:  (Refreshin access tokens) as a user I can maintain my logged in status until I choose to log out so that my experience is not compromised
    6. USER STORY:  As a user I can see booth sign up/sign in options when I'm not signed in
    7. USER STORY:  As a user I can create posts to share my content with images
    8. USER STORY:  As a user I can view other users posts to get inspired in a posts feed list
    9. USER STORY:  As a user I can like other users posts to show that I appreciate their content
    10. USER STORY:  As a user I want to be able to save posts that I find inspiring in order to check them out at a later point
    11. USER STORY:  As a user I can view all the most recent posts to get up to date with topics
    12. USER STORY:  As a user I can switch between categories in order to find the topics that I'm most interested in
    13. USER STORY:  As a user I can edit my own post title, description or category so I can make corrections or updates after they've been created
    14. USER STORY: As a user I can fill out a form to contact Admin and make them aware of issues, feedback or any other matter of contact. 
    15. USER STORY:  As a user I can change my profile picture and change password
    16. USER STORY:  As a user I can update my account password so I can keep my profile secure


### Agile Methodology

- For this project I used GitHubs own KanBan alike agile project method, where I stored my User Stories and could move them from Todo -> In Progress -> Done. This has helped me to know what was next on my list but also keep track of the projects status in terms of where I am. 

* Link To GitHub KanBan Project - [LINK](https://github.com/users/Bo-Lennart/projects/10/views/1)

![Agile KanBan Board](src/assets/readme_screenshots/agile.png)

# Design

For the design of the page i made a basic layout with wireframes and chose four colors as my base. I choose for the buttons to have the standard bootstrap - blue and the rest of the website is based on Bootstraps default design to match my foundational idea. 

# Wireframes

## Desktop
![wireframes homepage](src/assets/readme_screenshots/wireframes_homepage.png)
![wireframes desktop](src/assets/readme_screenshots/wireframes_desktop.png)

## Mobile Screen
![wireframes mobile](src/assets/readme_screenshots/wireframes_mobile.png)

# Color Palette
- I wanted a dark themed navbar, white background for posts and where all content and forms are displayed. Blue buttons to make sure they are not missed and break the dynamic color pattern with some kind of color.

![Color scheme](src/assets/readme_screenshots/color_scheme.png)

# Features

# Foundational Features
- Edit posts. 
    - When a user scrolls through the feed they will see a pen above their own posts. When they click on this they can delete their posts, or edit them. If they click "edit", they will get redirected to a form, where the data of the post is fetched and the user has the ability to update it accordingly.
![edit post](src/assets/readme_screenshots/edit_post.png)

- Bookmark & Like functionality
    - When clicking in on a post, the user will get redirected to the post details. On this page a like button and bookmark button is displayed.
    Through the like button a user can show their appreciation of a users content. 
    Through the bookmark feature, the user has the ability to store posts to their personal bookmark page. Once it's clicked, this post will be added to the posts that are displayed on your bookmark tab. If the user wishes to remove a bookmark, they just click the icon again.
![edit post](src/assets/readme_screenshots/bookmark.png)
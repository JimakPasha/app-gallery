Welcome to the “App Gallery” exercise!

In this part of your interview, you will have a chance to build a new Web application with some neat styling and some data calculations. You will be assessed according to the following criteria:

Algorithmic thinking and data manipulation
Coding quality
App structure and code architecture
Following the UI spec below and using your styling skills to implement it
Unit testing at least one part of your code
You have 2 hours + 30 minutes (150 minutes total) for this exercise. Note that you may not fully finish everything that you want to finish in the time allotted, so you’ll want to prioritize according to the grading rubric near the bottom of these instructions. Anything added after 2.5 hours will not be considered for evaluation.

Requirements
Here at GS, there are a significant number of apps being built/maintained by many teams. It would be useful for our CTO to get an overview of all of the apps in our inventory, and hence we want to build an app to display this information.

We have collected the data for all apps we own in the src/data.ts file. For this exercise, your task will be to create a gallery of these apps per the mockups in the sections below.

Layout
The general layout of the gallery will be this:

+-----------------------------------+
|            Page Header            |
+-------+---------------------------+
|       |                           |
| Apps  |                           |
|       |                           |
| Stats |                           |
|       |                           |
|       |                           |
|       |       Main Content        |
|       |                           |
|       |                           |
|       |                           |
|       |                           |
|       |                           |
|       |                           |
|       |                           |
|       |                           |
+-------+---------------------------+
Description of the layout:

There is a “Page Header” that spans the top of the page.
Note: This should always remain at the top even if the page is scrolled.
There is a “Side Bar” with two links: “Apps” and “Stats” (Statistics). These will navigate to the two pages we’re going to build (described in the sections below).
Note: Like the header, this should always remain in the same position even if the page is scrolled.
Note 2: To save time, you do not need to add react-router to this project. Feel free to just use a state variable for the currently-active page.
There is a “Main Content” section which will display the “Apps” or “Stats” page depending on which is selected in the Side Bar.
Apps Page
When the “Apps” page is selected on the Side Bar (which should be the default page displayed when first visiting the gallery), we should see something like the following using the data from src/data.ts:

+------------------------------------+
|            Page Header             |
+--------+---------------------------+
|        |                           |
| *Apps* | +-----+  +-----+  +-----+ |
|        | | App |  | App |  | App | |
| Stats  | |Image|  |Image|  |Image| |
|        | +-----+  +-----+  +-----+ |
|        | |Info |  |Info |  |Info | |
|        | +-----+  +-----+  +-----+ |
|        |                           |
|        | +-----+  +-----+  +-----+ |
|        | | App |  | App |  | App | |
|        | |Image|  |Image|  |Image| |
|        | +-----+  +-----+  +-----+ |
|        | |Info |  |Info |  |Info | |
|        | +-----+  +-----+  +-----+ |
|        |                           |
+--------+---------------------------+
Each “App” is displayed in a “Card,” and each Card displays:

The App’s image, which is governed by the “image” property in the data
The App’s info. This should be directly below the image and include:
The app’s name
The app’s version
A flat list of dependencies and their versions, sorted in alphabetical order.
Note: Dependencies may have dependencies of their own, and all should be displayed in a flat list, unique in their name+version.
Each app card should also be sorted alphabetically by the app’s name.

Responsiveness
This “Apps” page should also be responsive in that if the browser width is reduced, the “cards” that contain and app and its info should wrap to the next line so they fit the available space.

Stats Page
When the “Stats” page is selected on the side bar, we should see something like the following:

+-------------------------------------+
|             Page Header             |
+---------+---------------------------+
|         |                           |
| Apps    | Statistics:               |
|         |                           |
| *Stats* |  Total number of apps: 42 |
|         |                           |
|         |  Dependency used by most  |
|         |    apps: dep@version      |
|         |                           |
|         |  App with the most        |
|         |    dependencies: some-app |
|         |                           |
|         |                           |
|         |                           |
|         |                           |
|         |                           |
+---------+---------------------------+
All of the data for this page should be dynamically generated from src/data.ts. If the data is changed in the future, our “Stats” page should automatically display the updated results.

On this page, we want to show:

The total number of applications.
The name+version of the dependency used by the most applications. Example: if lodash@4.17.21 is used by the most (or all) applications (either directly or transitively), then this dependency should be displayed.
The application with the highest number of dependencies (including nested dependencies)
Unit Testing
We want to make sure our stats functionality is correct. You should test:

The dependency-flattening algorithm.
The functionality for finding the dependency used in the most apps.
The functionality for finding the app with the most dependencies.
Hint: Test files can be added under the test/ folder with following the pattern <name>.test.ts. Run npm test in the Shell to execute them. Tests are executed using Vitest by default (which has a Jest-like API), but you may install a different test runner if you choose. API reference: https://vitest.dev/api/

Grading
50% - Page Functionality
10% - Each app in the list displays a name, version and image.
20% - Each app displays a flat list of dependencies where:
10% - Each dependency is listed sequentially (as opposed to a tree-structure), and in alphabetic order.
10% - Duplicate dependencies are filtered out.
20% - The Stats page displays:
10% - The name and version of the dependency which is used in the most apps.
10% - The name of the app with the most unique dependencies.
20% - App Design / Responsiveness
10% - The list of applications and the stats are laid out in a card layout (as per the mock-up)
10% - The app cards are responsive by wrapping to the next line based on the available width of the container
30% - App Testing
10% - Tests exist for the dependency-flattening algorithm.
10% - Tests exist for finding the dependency used in the most apps.
10% - Tests exist for finding the app with the most dependencies.
Final Notes
We want to make this app look good, so add any styling needed to make it look professional.

This should also be production-level code, so make it as clean and organized as possible. Create any new files/components/etc that you might like. And you may reference any technical references that you need.

Whenever you’re ready, click the “Program Output” tab on the top right of the screen and start coding!


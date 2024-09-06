# 3813assignment1
3813 Software Frameworks Assignment Phase 1
Nathan Maaka
s2758464


Github repo:
https://github.com/NMGriff/3813assignment1


Partially implemented features:
User Login
JSON serialisation
Routing/REST


For the assignment we are tasked with created a front end chat program between users.
Features of this program will include a log in system utilizing a username and password.
Username and passwords are stored as JSON objects
Users are given 1 of 3 permission levels: Super Admin, Group Admin, User
Super admin assign users to different roles
Local storage completed via JSON file (converted to database using MongoDB in Phase 2)

Git repository:
While developing on my laptop I suffered a fatal error causing a blue screen loop, requiring me to rework
locally for a late submission. My repository is structured with this readme file in the root, along with
the source code and public folder uploaded via my Github Desktop client.

Data structures:
For this phase, we do not implement the the formal database, and instead use session tokens and JSON files
to store data locally. The user submits their username and password, then this locally stored data
 is used to compare with a set of username and passwords in JSON format.
 Thus, our data structure is divided between the locally stored files on the user's browser, and the repo files.

 REST API:
 Routes only partially implemented. Page navigation is possible, and variables correctly return their values.

 Angular Architecture:
 For this phase it felt nessecary to first implement a component for the log in system, however as I progressed
 it appeared that the scope of the log in component was too large and required breaking down into two separate
 components: login and parsecred (parse credentials). While the former still served it's original purpose,
 the latter simply checks the JSON file (which is filled from the username and password text fields)
 for a matching username and password. If successful, proceed to the following page, else throw incorrect username/password error.


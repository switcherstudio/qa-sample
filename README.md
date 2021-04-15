# Switcher Studio QA Sample

## The App
Your team has developed an extremely simple web app for tracking activity ideas for friends.

### App requirements
For each friend, the app will display a UI card that will:
* display name and email.
* show a configurable activity parameter in a dropdown containing a list of activity types.
* display the current activity idea, along with its difficulty and price ratings. **Ratings should be displayed using a 10-point scale ("X / 10").**
* include a **Get New Activity** button. Behavior: 
  * when clicked, **retrieve a random activity idea of the selected type** from the [Bored API](https://www.boredapi.com/), and replaces the old one in the card.
  * **all friend data should be saved**, so that when refreshing the page, the state of each friend should persist. *For the purposes of this demo, we're using browser local storage. If you'd like to reset the state of the web app back to its default while testing, clear this site's data.*

Friends should be sorted alphabetically by last name.

### Assignment
There are a few problems with the app that the developers turned over to you. Document any requirement failures, bugs, or other oddities that you find.
# Drag & drop Todo app built with Nextjs ⚛️ Emotion 👩‍🎤 react-beautiful-dnd & 🔥 Firebase

![Design preview for the Todo app coding challenge](/public/design-preview.png)

## The challenge

User should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- Drag and drop to reorder items on the list

## What I learned

I'm pretty happy with this one, it was my first time building a whole CRUD app, There were a lot of subtle challenges here concerning the drag and drop using the react-beautiful-dnd especially because I am using Nextjs as it's an SSR so this can mess up how some libraries operate.

Why react-beautiful-dnd? I chose this library simply because it offers a good drag and drop experience as it's a higher-level abstraction specifically built for vertical and horizontal lists.

I used React hooks to encapsulate the UI state rather than any management tool out there, it's a simple app so it is possible to manage the state using only React Hooks.I am using useReducer with useContext. (the useContext it is not a state management solution by itself, however combining it with the useReucer it became a full state management solution).

Concerning the light/dark toggle it may be other different approaches to build in Nextjs, I chose to use CSS variables, a simple method that meets accessibility best practices persists on reload and takes a user's preferred color scheme into consideration. It also doesn't suffer from the dreaded 'flash' of incorrect colors on the initial load.

## Continued development

One approach that I may change on similar projects is using a diffrent tool rahter than firebase. I'd like also to explore animation more, and focus more on accessibility, and learn how to use a screen reader and test the app accessibility using a keyboard.

## Author

<!-- - Website - [Zineb Boutaa](https://zineb-bou.github.io/) -->

- Twitter - [@ZBoutaa](https://twitter.com/ZBoutaa)

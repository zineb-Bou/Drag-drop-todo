We're using Emotion here as it supports SSR with Next.js right out the box, while Styled Components require additional config. The syntax is identical for our purposes.

https://codedaily.io/tutorials/Using-react-beautiful-dnd-with-NextJS?ref=morioh.com&utm_source=morioh.com

I'm pretty happy with this one, it was my first time building a whole CRUD app, There were a lot of subtle challenges here concerning the state management and implementing the drag and drop using the react-beautiful-dnd espacialy because I am using Nextjs as it's SSR so this can mess up how some librariers operates.

Why react -beautiful-dnd
there are a lot of libraries out there that allow the drag and drop interaction with react, so why react-beautiful-dnd
Simply beacause it offers a good drag and drop experience as it's a higher level abstraction specifically built for lists vertical, horizontal, movement between lists, nested lists and so on.

I am happy using different react hook to implement the todo logic (useReducer and useContext), I chose to use react hooks to manage the state rahter than any management tool out there, it's a simple app os it possible to manage the state using reacthooks, maybe react management tools for more complicated projects.

concerning the light/dark toggle it may be other different approaches to build in Nextjs, I chose to use CSS varaibles, simple method that meets accessibility best practices, persists on reload and takes a user's preferred colour scheme into consideration. It also doesn't suffer from the dreaded 'flash' of incorrect colours on initial load.

One approach that I may change on similar future project is exploring a diffrent tool rahter than firebase. I'd like to explore animation more, and focus more on accessibility, and learn how to use a screen reader and test the app accessibility using a keyboard.

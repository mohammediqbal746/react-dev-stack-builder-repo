# Project Name: Dev Stack Builder

## 📖 Short Description
Dev Stack Builder is a modern, responsive React web application that allows developers to explore various frontend, backend, and DevOps technologies. Users can easily pick their preferred tools and build their ideal technology stack for their next project.

## 🛠️ Technologies Used
- React (Vite)
- Tailwind CSS
- TypeScript / JavaScript (ES6+)
- React-Toastify
- HTML5 & CSS3

## ✨ Key Features
1. **Interactive Stack Management:** Users can add technologies to their custom stack and easily remove them individually or clear the entire stack with a single click.


2. **Real-time Notifications:** Integrated `react-toastify` to provide beautiful, instant feedback (success, warning, error) for user actions.

3. **Modern & Responsive UI:** Features a sticky navbar, a dynamic shared gradient theme, an interactive mobile hamburger menu, and a clean grid layout that adapts perfectly to all device sizes.

---
### React Q&A

*1. What is JSX, and why is it used in React?**
JSX basically means writing HTML inside JavaScript. It stands for JavaScript XML. We use it in React because it makes our lives easier. Instead of writing complex JavaScript codes to create elements, we can directly write HTML-like syntax to build our UI.

*2. What is the difference between props and state?**
Props are like arguments that we pass from a parent component to a child component. We cannot change props inside the child component. On the other hand, State is the component's own personal memory. If we change the state, the component automatically updates or re-renders.

*3. What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook is used to store data that changes over time. In this project, I used it to keep track of the technologies added to the stack. Whenever a user clicks the "Add to Stack" button, I update the state to add that item to the sidebar list.

*4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` handles side effects, like fetching data from an API or an external file. If we fetch data normally without `useEffect`, it will fetch the data again and again every time the component renders. So, to load the JSON data only once when the page first loads, it is best practice to use it. (Note: Though I used a modern Suspense approach for this specific project's data fetch).

*5. Why does every item in a `.map()` list need a unique `key` prop?**
When we render a list using `.map()`, React needs to identify exactly which item is which. The unique `key` helps React to understand which item is changed, added, or removed. It makes the website faster because React doesn't have to re-render the whole list.

*6. What is conditional rendering? Show one place you used it.**
Conditional rendering is like using if-else logic to show or hide something on the UI. I used it in the sidebar: if the stack array is empty (`stack.length === 0`), it shows a text saying "No technologies selected". If it has items, it shows the list.

*7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
To pass data from Parent to Child, we simply send it through `props`. To send data back from Child to Parent, the parent passes a function to the child via props. Then, the child calls that function with some data, and the parent receives it.
# 📝 React ToDo App

A simple and elegant **ToDo List** application built with **React**.  
This app lets you add, edit, mark tasks as done, remove individual tasks, and clear all tasks. Tasks are saved in the browser’s `localStorage` for persistence.

---

## 🎯 Features

- Add new tasks with validation  
- Toggle task status (Done / Not Yet)  
- Edit existing tasks inline via prompt  
- Remove individual tasks  
- Clear all tasks at once  
- Persist tasks using `localStorage`  


## 📂 Project Structure

todo-app/
├── src/
│ ├── App.jsx # Main React component
│ ├── App.css # Styling
│ └── index.jsx # React entry point
├── public/
├── package.json
├── README.md



---

## 🛠️ Technologies Used

- React (functional components + hooks)  
- JavaScript (ES6+)  
- CSS for styling  
- Browser `localStorage` for data persistence  

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/mr-abdo111/todo-app.git
cd todo-app
```
1_Install dependencies:

```bash
npm install
```
2_Run the development server:

```bash

npm start
```
💡 How It Works
_The app manages tasks in React state with useState.

_On initial load, it fetches tasks from localStorage (useEffect).

_When tasks change, they are saved back to localStorage.

_Tasks can be added only if input is non-empty.

_Task status toggling updates the UI and storage.

_Editing uses a prompt to update task text.

_Users can remove tasks one by one or clear the entire list.

🎨 Styling
Clean and minimal UI with focus on usability

Responsive layout with centered content

Buttons and inputs styled for clarity and accessibility

Completed tasks shown with strikethrough and grey text

📈 Future Improvements
Add task due dates and reminders

Drag-and-drop task reordering

Filter/search tasks

Mobile-friendly enhancements

Add unit tests for components

🧑‍💻 Author
mr-abdo111
GitHub Profile : https://github.com/mr-abdo111

📜 License
This project is licensed under the MIT License.

---

### What to do next?

1. Save this as `README.md` in your project root.  
2. Commit and push:

```bash
git add README.md
git commit -m "Add README"
git push
```


# Note Taking Application

A simple and elegant note-taking web application built with React and Vite. Create, view, and manage your notes with an intuitive two-panel interface.

## 📝 Description

This is a lightweight note-taking application that allows users to create, view, and delete notes. The application features a clean split-screen design with a form on the left side for creating notes and a display area on the right side showing all saved notes as cards.

## ✨ Features

- **Create Notes**: Add new notes with a title and description
- **View Notes**: Display all notes in a card-based layout
- **Delete Notes**: Remove unwanted notes with a single click
- **Responsive Design**: Clean two-column layout with modern UI
- **Real-time Updates**: Notes appear instantly after creation

## 🛠️ Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool and development server
- **ESLint** - Code linting
- **CSS3** - Styling

## 📁 Project Structure

```
NoteProject_3/
├── src/
│   ├── components/
│   │   ├── leftsection.jsx    # Form component for creating notes
│   │   ├── rightsection.jsx   # Container for displaying notes
│   │   └── cards.jsx          # Individual note card component
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NoteProject_3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 💻 How It Works

### Component Architecture

1. **App.jsx** - Main component that manages the application state
   - Maintains `title` and `details` state for form inputs
   - Manages `Note` array state containing all notes
   - Renders `Leftsection` and `Rightsection` components

2. **Leftsection.jsx** - Form component for creating notes
   - Contains input fields for note title and description
   - Handles form submission
   - Adds new note to the `Note` array
   - Clears form fields after submission

3. **Rightsection.jsx** - Container for displaying notes
   - Shows "Recent Notes" heading
   - Renders the `Cards` component with all notes

4. **Cards.jsx** - Displays individual notes
   - Maps through the `Note` array
   - Renders each note as a card with title and details
   - Provides delete functionality for each note

### State Management

The application uses React's `useState` hook for state management:

- **`title`**: Stores the current note title input
- **`details`**: Stores the current note description input
- **`Note`**: Array of note objects, each containing `title` and `details`

### Key Functionalities

#### Creating a Note
1. User enters a title in the input field
2. User enters a description in the textarea
3. On form submission, a new note object is created and added to the `Note` array
4. Form fields are cleared for the next note

#### Deleting a Note
1. Each note card has a delete button
2. Clicking delete removes the note from the `Note` array using the note's index
3. The UI updates automatically to reflect the change

### Data Flow

```
User Input → Leftsection Component → App State (Note array) → Rightsection Component → Cards Component → Display
```

## 🎨 UI/UX Features

- **Dark Theme**: Black background with white text for a modern look
- **Card-based Layout**: Notes displayed as individual cards
- **Split Screen**: Form on left (45% width), notes display on right
- **Smooth Interactions**: Button press animations and transitions
- **Scrollable Notes Area**: Handles overflow when many notes are present

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

The project uses Vite as the build tool. Configuration can be modified in `vite.config.js`.

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Built with ❤️ using React and Vite

---

**Note**: This is a simple note-taking application. Notes are stored in component state and will be lost on page refresh. For persistent storage, consider integrating with a backend API or localStorage.

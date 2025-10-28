# 📚 Book Finder

A modern, responsive web application that helps college students find books using the Open Library Search API. Built with React and CSS Modules for a clean, maintainable codebase.

## ✨ Features

- **Real-time Search**: Debounced search with instant results
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Rich Book Information**: Displays cover images, authors, publication year, publisher, subjects, and ISBN
- **Error Handling**: Graceful error messages for network issues and no results
- **Loading States**: Smooth loading animations and feedback
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd book-finder-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── SearchBar/
│   │   ├── SearchBar.js
│   │   └── SearchBar.module.css
│   ├── BookList/
│   │   ├── BookList.js
│   │   └── BookList.module.css
│   ├── BookCard/
│   │   ├── BookCard.js
│   │   └── BookCard.module.css
│   └── ErrorMessage/
│       ├── ErrorMessage.js
│       └── ErrorMessage.module.css
├── App.js
├── App.module.css
├── index.js
└── index.css
```

## 🎯 How to Use

1. **Search for Books**: Type a book title in the search bar
2. **View Results**: Browse through the book cards with detailed information
3. **Responsive Design**: The layout automatically adapts to your screen size
4. **Error Handling**: Clear error messages guide you if something goes wrong

## 🛠️ Technology Stack

- **Frontend**: React 18
- **Styling**: CSS Modules
- **API**: Open Library Search API
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full grid layout with hover effects
- **Tablet**: Adjusted grid columns and spacing
- **Mobile**: Single column layout with optimized touch targets

## 🔧 API Integration

The app uses the Open Library Search API:
- **Endpoint**: `https://openlibrary.org/search.json?title={bookTitle}`
- **Features**: Real-time search with debouncing (300ms delay)
- **Error Handling**: Network error detection and user-friendly messages
- **Data Display**: Rich book information including covers, metadata, and subjects

## 🧪 Testing

The application includes:
- **Error Boundary**: Graceful error handling
- **Loading States**: User feedback during API calls
- **Input Validation**: Prevents empty searches
- **Responsive Testing**: Works across all device sizes

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) for providing the free book search API
- React team for the amazing framework
- The open-source community for inspiration and tools

---

**Built with ❤️ for college students who love to read!**

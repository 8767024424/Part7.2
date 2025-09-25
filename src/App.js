import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <h1>Blog Application</h1>
      <p>Please log in to see the blog posts.</p>
      
      <LoginForm />
      
      {/* In later exercises (like 7.13), you would add logic here
        to conditionally render either the login form or the blog list,
        based on whether a user is logged in.
      */}
      
    </div>
  );
}

export default App;
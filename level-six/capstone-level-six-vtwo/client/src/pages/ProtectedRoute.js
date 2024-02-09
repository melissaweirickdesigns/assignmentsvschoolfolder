// Import necessary elements from React and React Router DOM.
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

// Define the ProtectedRoute functional component.
function ProtectedRoute(props) {
    // Destructure props to extract the userToken and children.
    // userToken is expected to be a string that acts as a flag for user authentication.
    // children represent the components that are passed within the ProtectedRoute component,
    // which should only be rendered if the user is authenticated.
    const { userToken, children } = props

    // Conditional rendering based on the presence of userToken.
    // If userToken exists (meaning the user is authenticated), render the children components.
    // These children components are the protected parts of the application that require the user to be logged in.
    // If userToken does not exist (meaning the user is not authenticated), use the <Navigate> component from React Router DOM
    // to redirect the user to the root route ("/"), which is typically the login or home page.
    return userToken ? children : <Navigate to="/" />
}

// Export the ProtectedRoute component so it can be used in other parts of the application.
export default ProtectedRoute

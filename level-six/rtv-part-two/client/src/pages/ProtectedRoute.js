import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute(props) {
    const { userToken, children } = props
    return userToken ? children : <Navigate to="/" />
}

export default ProtectedRoute
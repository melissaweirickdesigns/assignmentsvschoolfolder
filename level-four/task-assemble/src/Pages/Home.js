import Header from "../components/Header"
import Footer from "../components/Footer"
import Welcome from "../components/Welcome"
import Calendarpreview from "../components/Calendarpreview"
import TaskPreview from "../components/TaskPreview"
import Notifications from "../components/Notifications"
import Departments from "../components/Departments.js"
import React from "react"


export default function Home(props) {

    return (
        <>        
        <Header />
        <div className="home-page-section">
            <Welcome />
            <div className="cal-task-section">
                <Calendarpreview />
                <TaskPreview />
            </div>
            <div className="notif-dept-section">
                <Notifications />
                <Departments />
            </div>
        </div>
        <Footer />
        </>
    )
}
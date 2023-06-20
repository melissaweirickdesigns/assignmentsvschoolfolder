import Header from "../components/Header"
import Footer from "../components/Footer"
import TechSupport from "../components/TechSupport"
import TaskApproval from "../components/TaskApproval"

export default function MessageCenter(props) {

    return (
        <>
        <Header />
        <TaskApproval />
        <TechSupport />
        <Footer />
        </>
    )
}
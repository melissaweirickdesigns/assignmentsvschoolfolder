import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskManager from '../components/TaskManager';

export default function Tasks() {
    return (
      <div className="tasks">
        <Navbar />
        <TaskManager />
        <Footer />
      </div>
    );
  }
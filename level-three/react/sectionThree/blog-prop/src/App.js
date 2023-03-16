import './App.css';
import Header from './components/Header';
import BlogPostData from './BlogPostData';
import BlogPost from './components/BlogPost';
import OldBlogs from './components/OldBlogs';
import Footer from './components/Footer';

export default function App() {
  const blogPostElements = BlogPostData.map(bdata => {
    return (
      <BlogPost
      key={bdata.id}
      {...bdata}
      />
    )
  })
  return (
    <div className='main-container'>
      <Header />
      {blogPostElements}
      <OldBlogs />
      <Footer />
    </div>    
  )
}

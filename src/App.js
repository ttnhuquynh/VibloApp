import Posts from './components/posts/Posts';
import './App.css';
import UserContext from './UserContext';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import CreatePost from './components/createPost/CreatePost';
import PostDetail from './components/postDetail/PostDetail';
import Completing from './components/completing/Completing';

function App() {
	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<div className='App'>
				<Header />
				<Navbar />

				<Routes>
					<Route path='' element={<Posts />} />
					<Route path='/posts' element={<Posts />} />
					<Route
						path='/posts/:id'
						element={<PostDetail />}
					/>
					<Route path='/create' element={<CreatePost />} />
					<Route path='*' element={<Completing />} />
				</Routes>
				<Footer />
			</div>
		</UserContext.Provider>
	);
}

export default App;

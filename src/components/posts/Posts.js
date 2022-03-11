import Post from '../post/Post';
import './posts.css';
import React, {
	useState,
	useEffect,
	useContext,
	memo,
} from 'react';
import { Link } from 'react-router-dom';
import UserContext from './../../UserContext';
import { db } from './../../firebase';

function Posts() {
	const [posts, setPosts] = useState([]);
	// const [open, setOpen] = useState(false);
	// const [openSignin, setOpenSignin] = useState(false);
	// const [password, setPassword] = useState('');
	// const [username, setUsername] = useState('');
	// const [email, setEmail] = useState('');

	// const handleOpen = () => setOpen(true);
	// const handleClose = () => setOpen(false);
	useEffect(() => {
		db.collection('posts').onSnapshot(snapshot => {
			setPosts(
				snapshot.docs.map(doc => ({
					id: doc.id,
					post: doc.data(),
				}))
			);
		});
		// onSnapshot(collection(db, "posts"), (snapshot) => {
		//   setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
		// });
	}, []);
	useEffect(() => {
		console.log(posts);
	}, [posts]);
	const user = useContext(UserContext);
	console.log('this is a user', user);
	return (
		<div className='postWrapper'>
			<div className='container'>
				<div className='row'>
					<div className='col col-xl-12'>
						{posts.map(({ id, post }) => (
							<Link to={`posts/${id}`}>
								<Post key={id} post={post} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default memo(Posts);

import './postDetail.css';
import { useState, useEffect, useContext } from 'react';
import { db } from './../../firebase';
import MDEditor from '@uiw/react-md-editor';

import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserContext from './../../UserContext';
export default function PostDetail() {
	let { id } = useParams();
	const { user } = useContext(UserContext);
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState('');
	const [post, setPost] = useState({});
	useEffect(() => {
		let unsubscribe;
		if (id) {
			unsubscribe = db
				.collection('posts')
				.doc(id)
				.collection('comments')
				.onSnapshot(snapshot => {
					setComments(snapshot.docs.map(doc => doc.data()));
					console.log(snapshot);
				});
			console.log(comments);
		}
	}, []);
	const PostComment = e => {
		e.preventDefault();
		if (comment) {
			db.collection('posts')
				.doc(id)
				.collection('comments')
				.add({
					// timestamp:
					// 	db.FieldValue.serverTimestamp(),
					text: comment,
					username: user.displayName,
				});
			setComment('');
		} else console.log('Bạn chưa nhập comment');
	};
	useEffect(() => {
		let unsubscribe;
		if (id) {
			db.collection('posts')
				.doc(id)
				.get()
				.then(snapshot => setPost(snapshot.data()));

			console.log(post);
		}
	}, []);
	return (
		<div className='postDetailWrapper container'>
			<div className='userInfo'>
				<img
					src={
						post?.image ||
						'https://images.viblo.asia/avatar/d3fbbb69-55f2-4530-99de-de866b71e9d8.png'
					}
					alt=''
					className='userAvatar'
				/>
				<h2>{post.username}</h2>
			</div>
			<MDEditor.Markdown source={post?.content} />
			<div className='postComments mt-5'>
				{comments.map(comment => (
					<div className='post__comment mt-1'>
						<strong>{comment.username} </strong>
						<span>{comment.text}</span>
					</div>
				))}
				<form className='post__commentUp'>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'flex-end',
							width: 500,
							maxWidth: '100%',
							padding: '20px',
						}}
					>
						<AccountCircle
							sx={{
								color: 'action.active',
								mr: 1,
								my: 0.5,
							}}
						/>
						<TextField
							id='fullWidth'
							label='Enter your comment...'
							variant='standard'
							fullWidth
							onChange={e => {
								setComment(e.target.value);
								console.log(e.target.value);
							}}
						/>
					</Box>

					<Button onClick={PostComment}>Gửi</Button>
				</form>
			</div>
		</div>
	);
}

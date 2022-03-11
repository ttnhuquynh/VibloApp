import { useState, useContext, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './createPost.css';
import { db, storage as store } from './../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import UserContext from './../../UserContext';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
	const [content, setContent] = useState('');
	const [title, setTitle] = useState('');
	const [err, setErr] = useState('');
	const { user } = useContext(UserContext);
	console.log(user);
	let navigate = useNavigate();
	const uploadImage = async file => {
		const uploadTask = await store
			.ref()
			.child(file.name)
			.put(file);

		return uploadTask.ref.getDownloadURL();
	};
	const createPost = () => {
		if (title && content) {
			db.collection('posts')
				.add({
					createdAt:
						firebase.firestore.FieldValue.serverTimestamp(),
					title: title,
					content: content,
					username: user.displayName,
				})
				.then(function (docRef) {
					console.log(
						'Document written with ID: ',
						docRef.id
					);
					setTitle('');
					setContent('');
					navigate('');
				})
				.catch(function (error) {
					console.error('Error adding document: ', error);
				});
		} else {
			setErr('Bạn chưa nhập đầy đủ thông tin');
			setTimeout(() => {
				setErr('');
			}, 5000);
		}
	};
	useEffect(() => {
		console.log(title, content);
	}, [title, content]);
	return (
		<div className='createPostWrapper'>
			<div className='container d-flex flex-column'>
				{err ? (
					<div className='err'>{err}</div>
				) : (
					<div className='err'></div>
				)}
				<div class='input-group input-group-lg '>
					<div class='input-group-prepend'>
						<span
							class='input-group-text'
							id='inputGroup-sizing-lg'
						>
							Title
						</span>
					</div>
					<input
						type='text'
						class='form-control'
						aria-label='Large'
						aria-describedby='inputGroup-sizing-sm'
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className='mt-5'>
					<MDEditor
						value={content}
						onChange={setContent}
						uploadImage={uploadImage}
					/>
				</div>
				<button
					type='button'
					class='btn btn-outline-primary btn-lg'
					onClick={createPost}
				>
					Create
				</button>
				<MDEditor.Markdown source={content} />
			</div>
		</div>
	);
}

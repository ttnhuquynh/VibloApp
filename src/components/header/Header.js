import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';

import { db, auth } from './../../firebase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Input } from '@material-ui/core';
import React, {
	useState,
	useEffect,
	useContext,
} from 'react';
import UserContext from '../../UserContext';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: '#fafafa',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function Header() {
	const [posts, setPosts] = useState([]);
	const [open, setOpen] = useState(false);
	const [openSignin, setOpenSignin] = useState(false);
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const { user, setUser } = useContext(UserContext);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(
			authUser => {
				if (authUser) {
					// user login....
					console.log(authUser);
					setUser(authUser);
					if (authUser.displayName) {
						// dont update username
					} else {
						// iff wwe just create someone...
						return authUser.updateProfile({
							displayName: username,
						});
					}
				} else {
					// user log out
					setUser(null);
				}
			}
		);
		return () => {
			unsubscribe();
		};
	}, [setUser, user, username]);
	const signUp = e => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(authUser => {
				return authUser.user.updateProfile({
					displayName: username,
				});
			})
			.catch(err => {
				alert(err.message);
			});
		handleClose();
	};
	const signIn = e => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				alert(err.message);
			});
		setOpenSignin(false);
	};
	return (
		<div className='headerWrapper'>
			<div className='headerContainer'>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box sx={modalStyle}>
						<center>
							<img
								className='signInlogo'
								src='https://viblo.asia/logo_full.svg'
								alt=''
							/>
						</center>
						<form action='' className='signIn'>
							<Input
								placeholder='username'
								type='text'
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
							<Input
								placeholder='email'
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Input
								placeholder='password'
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<button type='submit' onClick={signUp}>
								Sign up
							</button>
						</form>
					</Box>
				</Modal>
				<Modal
					open={openSignin}
					onClose={() => setOpenSignin(false)}
					aria-labelledby='modal-modal-title'
					aria-describedby='modal-modal-description'
				>
					<Box sx={modalStyle}>
						<center>
							<img
								className='signInlogo'
								src='https://viblo.asia/logo_full.svg'
								alt=''
							/>
						</center>
						<form action='' className='signIn'>
							<Input
								placeholder='email'
								type='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Input
								placeholder='password'
								type='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							<button type='submit' onClick={signIn}>
								Sign in
							</button>
						</form>
					</Box>
				</Modal>
				{/* <div className='header__container'>
					<img
						className='app__headerImage'
						src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
						alt=''
					/>
					{user ? (
						<Button onClick={() => auth.signOut()}>
							Logout
						</Button>
					) : (
						<div className=''>
							<Button onClick={handleOpen}>Sign up</Button>
							<Button onClick={() => setOpenSignin(true)}>
								Sign in
							</Button>
						</div>
					)}
				</div> */}
				<div className='headerLeft'>
					<div className='headerLogo'>
						<img
							src='https://viblo.asia/logo_full.svg'
							alt=''
						/>
					</div>
					<div className='headerNav'>
						<a
							href='/notfound'
							className='headerLink active'
						>
							Bài viết
						</a>
						<a href='/notfound' className='headerLink'>
							Hỏi đáp
						</a>
						<a href='/notfound' className='headerLink'>
							Thảo luận
						</a>
					</div>
				</div>
				<div className='headerRight'>
					<div className='headerSearch'>
						<input
							className='searchInput'
							type='text'
							placeholder='Tìm kiếm tren Viblo'
						/>
						<div className='searchIcon'>
							<SearchIcon
								sx={{
									color: '#fff',
									fontSize: 20,
								}}
							/>
						</div>
					</div>
					<div className='headerLogin'>
						<LoginIcon
							sx={{
								color: '#5488c7',
								fontSize: 20,
								marginRight: 1,
								marginLeft: 1,
							}}
						/>
						<div className='headerLoginLink'>
							{user ? (
								<Button
									onClick={() => auth.signOut()}
									className='headerLoginLink'
								>
									Logout
								</Button>
							) : (
								<div className=''>
									<Button
										onClick={handleOpen}
										className='headerLoginLink'
									>
										Sign up
									</Button>
									<Button
										onClick={() => setOpenSignin(true)}
										className='headerLoginLink'
									>
										Sign in
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

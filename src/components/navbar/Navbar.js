import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './../../UserContext';
export default function Navbar() {
	const { user } = useContext(UserContext);
	return (
		<div className='navbarWrapper'>
			<div className='banner'>
				<img
					src='assets/banner/1.png'
					alt=''
					className='navbarBanner'
				/>
			</div>
			<div className='navbarContainer'>
				<ul className='navbarList'>
					<li className='navbarItem'>
						<a href='/' className='navbarLink '>
							MỚI NHẤT
						</a>
						<div className='line navbarActive'></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							SERIES
						</a>
						<div className='line'></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							EDITORS' CHOICE
						</a>
						<div className='line'></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							TRENDING
						</a>
						<div className='line '></div>
					</li>
					<li className='navbarItem'>
						<a href='/notfound' className='navbarLink'>
							VIDEOS
						</a>
						<div className='line'></div>
					</li>
				</ul>

				{user ? (
					<Link to='/create'> Tạo bài viết</Link>
				) : (
					<div></div>
				)}
			</div>
			<div className='navbarJoin'>
				<a
					href='https://facebook.com/groups/viblo.community.official'
					className='navbarJoinLink'
				>
					Tham gia Facebook group "Viblo Community" để cùng
					nhau học tập và kết nối
				</a>
			</div>
			<div></div>
		</div>
	);
}

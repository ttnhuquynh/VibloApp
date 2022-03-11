import './post.css';

export default function Post({ post }) {

	
	return (
		<div className='postItem'>
			<img
				src={
					post?.imageUrl ||
					'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/273496291_2349398908561363_8430925240998569056_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=P4NVfyJJF7sAX-j18u9&_nc_ht=scontent.fhan15-1.fna&oh=00_AT9poyyvmHI8dz0HhCWwywXeoKkEHNqPxnP7K2_aOty1og&oe=6230AB22'
				}
				className='postImage'
				alt=''
			/>
			<div className='postContent'>
				<div className='postInfo'>
					<p className='postAuthor'>{post.username}</p>
					<div className='postTitle'>{post.title}</div>
				</div>
				<div className='postReact'>
					<div className='postVote'>
						<span className='postCount'>
							{post.vote?.length || '0'}
						</span>
						<i class='bi bi-arrow-down-up postIcon'></i>
					</div>
					<div className='postComment'>
						<i class='bi bi-chat-left-fill postIcon'></i>
					</div>
				</div>
			</div>
		</div>
	);
}

import './footer.css';

export default function Footer() {
	return (
		<div className='footerWrapper'>
			<div className='container'>
				<div className='row'>
					<div className='mb-1 mb-md-0 col-md-4'>
						<h4 className='footerTitle'>Tài nguyên</h4>
						<div className='row'>
							<div className='col'>
								<a href='/' className='footerLink'>
									Bài viết
								</a>
								<a href='/' className='footerLink'>
									Câu hỏi
								</a>
								<a href='/' className='footerLink'>
									Videos
								</a>
								<a href='/' className='footerLink'>
									Thảo luận
								</a>
								<a href='/' className='footerLink'>
									Công cụ
								</a>
							</div>
							<div className='col'>
								<a href='/' className='footerLink'>
									Tổ chức
								</a>
								<a href='/' className='footerLink'>
									Tags
								</a>
								<a href='/' className='footerLink'>
									Tác giả
								</a>
								<a href='/' className='footerLink'>
									Đề xuất hệ thống
								</a>
								<a href='/' className='footerLink'>
									Machine Learing
								</a>
							</div>
						</div>
					</div>
					<div className='mb-1 mb-md-0 col-md-3 offset-xl-1'>
						<h4 className='footerTitle'>Dịch vụ</h4>
						<div className='row'>
							<div className='col'>
								<a href='/' className='footerLink'>
									<img
										src='assets/icon/viblo-code.png'
										alt=''
										className='footerLinkIcon'
									/>
									Viblo Code
								</a>
								<a href='/' className='footerLink'>
									<img
										src='assets/icon/viblo-cv.png'
										alt=''
										className='footerLinkIcon'
									/>
									Viblo CV
								</a>
								<a href='/' className='footerLink'>
									<img
										src='assets/icon/viblo-ctf.png'
										alt=''
										className='footerLinkIcon'
									/>
									Viblo CTF
								</a>
								<a href='/' className='footerLink'>
									<img
										src='assets/icon/viblo-learn.png'
										alt=''
										className='footerLinkIcon'
									/>
									Viblo Learning
								</a>
							</div>
						</div>
					</div>
					<div className='col-sm-4 co-md-4 col-lg-4 col-xl-4'>
						<h4 className='footerTitle'>
							Ứng dụng di động
						</h4>
						<div className='row'>
							<div className='col'>
								<a href='/' className='footerConnect'>
									<img
										src='assets/icon/googleplay.png'
										alt=''
										className='footerConnectLink'
									/>
								</a>
								<a href='/' className='footerConnect '>
									<img
										src='assets/icon/appstore.svg'
										alt=''
										className='footerConnectLink appstoreLink'
									/>
								</a>
							</div>
							<div className='col'>
								<a
									href='
								/'
									className='footerConnect'
								>
									<img
										src='assets/icon/QRcode.png'
										alt=''
										className='footerConnectLink QRlink'
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
				<hr className='hrLine' />
				<div className='row'>
					<div className='col offset-4'>
						<a href='/' className='footerLink'>
							Về chúng tôi
						</a>
					</div>
					<div className='col'>
						<a href='/' className='footerLink'>
							Phản hồi
						</a>
					</div>
					<div className='col'>
						<a href='/' className='footerLink'>
							Giúp đỡ
						</a>
					</div>
					<div className='col'>
						<a href='/' className='footerLink'>
							FAQs
						</a>
					</div>
					<div className='col'>
						<a href='/' className='footerLink'>
							RSS
						</a>
					</div>
					<div className='col'>
						<a href='/' className='footerLink'>
							Điều khoản
						</a>
					</div>
					<div className='col'>
						<a href='/' className='footerLink'>
							(c) Klight
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

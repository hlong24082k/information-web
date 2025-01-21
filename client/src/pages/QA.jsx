import React from 'react'
import { Accordion } from "flowbite-react";


const QA = () => {
	return (
		<>
			<div className="flex flex-col items-center gap-6 p-28 px-3 mx-auto bg-banner bg-cover bg-center bg-no-repeat">
				<h1 className="text-3xl font-bold lg:text-6xl text-white">Câu Hỏi Thường Gặp</h1>

				<p className="text-gray-500 text-lg">
					Here you will find a variety of articles and tutorials and topics such
					as History, Automobile and Science etc.
				</p>
				{/* <Link to={'/search'} className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">View all posts</Link> */}
			</div>
			<div className='min-h-screen max-w-5xl mx-auto p-3'>

				{/* <h1 className="text-4xl font font-semibold text-center my-7">
				Những câu hỏi thường gặp
			</h1> */}
				<Accordion>
					<Accordion.Panel>
						<Accordion.Title>Chính sách bảo hành khi mua tài khoản paypal bên bạn như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Đối với mỗi lọa tài khoản và dịch vụ mà bên mình cung cấp sẽ có những chính sách bảo hành riêng. Quý khách khi mua tài khoản hoặc dịch vụ gì, vui lòng đọc kỹ hướng dẫn sử dụng và
								chính sách bảo hành của từng dịch vụ để có thể đảm bảo quyền lợi của mình.
							</p>

						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>Tôi có thể liên hệ với Tuấn Bùi MMO team như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hiện tại Team mình đang chỉ hỗ trợ qua 3 support chính. Đó là:
							</p>
							<p className="text-gray-500 dark:text-gray-400">
								Bùi Anh Tuấn
								FB: https://www.facebook.com/tuanbuimmovn/
								Hotline - Fone: 037.224.9999
								Tele: https://t.me/tuanbuimmo
							</p>
							<p className="text-gray-500 dark:text-gray-400">
								Kim Chi
								FB: https://www.facebook.com/kimchimmo
								Fone: 0587.123456
								Tele: https://t.me/thuyduong2k3
								Hoàng Thụy
								FB: https://www.facebook.com/profile.php?id=100050793613086
								Fone: 08525.14.777
								Tele: https://t.me/hoangthuy16003
							</p>
							<p className="text-gray-500 dark:text-gray-400">
								Kim Chi
								FB: https://www.facebook.com/kimchimmo
								Fone: 0587.123456
								Tele: https://t.me/thuyduong2k3
							</p>
							<p className="text-gray-500 dark:text-gray-400">
								Hoàng Thụy
								FB: https://www.facebook.com/profile.php?id=100050793613086
								Fone: 08525.14.777
								Tele: https://t.me/hoangthuy16003
							</p>
							<p className="text-gray-500 dark:text-gray-400">
								Ngoài 3 người này nếu có ai sử dụng thương hiệu Tuấn Bùi MMO để liên hệ và giao dịch với bạn thì 100% đó là lừa đảo, quý
								khách vui lòng kiểm tra đúng link facebook hoặc link tele trước khi giao dịch vì bây giờ rất nhiều kẻ giả mạo và fake tên của những người
								uy tín để đi lừa đảo nhằm chiếm đoạt tài sản của người khác. Tuấn Bùi MMO sẽ không chịu trách nhiệm nếu bạn giao dịch với người khác ngoài 3 support này.
							</p>
						</Accordion.Content>
					</Accordion.Panel>
					<Accordion.Panel>
						<Accordion.Title>Đăng nhập tài khoản paypal lần đầu tiên như thế nào để tránh bị check phone?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								"Để đăng nhập paypal tránh bị dính phone, bạn nên lưu mật khẩu vào trình duyệt chrome mà bạn dùng để login tài khoản paypal, nếu đăng nhập vẫn không được thì bạn dùng các link vượt phone sau để đăng nhập
								+ https://www.paypal.com/cgp/app-download?intent=download&src=more_menu&tsrce=summary
								+ https://www.paypal.com/policydashboard/process/compliance/debitcard
								+ https://www.paypal.com/myaccount/transfer/?from=Header
								Bạn chỉ cần dán 1 trong 3 link này vào chrome sau đó đăng nhập = tài khoản + password paypal đã được bên mình cung cấp để đăng nhập."
							</p>


						</Accordion.Content>
					</Accordion.Panel>
				</Accordion>
			</div>
		</>
	)
}

export default QA
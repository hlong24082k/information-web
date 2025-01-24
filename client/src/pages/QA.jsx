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
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									FB: https://www.facebook.com/tuanbuimmovn/
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Hotline - Fone: 037.224.9999
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Tele: https://t.me/tuanbuimmo
								</li>
							</ul>
							<p className="text-gray-500 dark:text-gray-400">
								Hoàng Thụy
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									FB: https://www.facebook.com/profile.php?id=100050793613086
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Fone: 08525.14.777
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Tele: https://t.me/hoangthuy16003
								</li>
							</ul>
							<p className="text-gray-500 dark:text-gray-400">
								Kim Chi
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									FB: https://www.facebook.com/kimchimmo
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Fone: 0587.123456
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Tele: https://t.me/thuyduong2k3
								</li>
							</ul>
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
								Để đăng nhập paypal tránh bị dính phone, bạn nên lưu mật khẩu vào trình duyệt chrome mà bạn dùng để login tài khoản paypal, nếu đăng nhập vẫn không được thì bạn dùng các link vượt phone sau để đăng nhập
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://www.paypal.com/cgp/app-download?intent=download&src=more_menu&tsrce=summary
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://www.paypal.com/policydashboard/process/compliance/debitcard
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://www.paypal.com/myaccount/transfer/?from=Header
								</li>
							</ul>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Bạn chỉ cần dán 1 trong 3 link này vào chrome sau đó đăng nhập = tài khoản + password paypal đã được bên mình cung cấp để đăng nhập.
							</p>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Sử dụng Cookie J2team để đăng nhập paypal như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hướng dẫn login Paypal bằng tiện ích Cookie J2team - File đuôi json:
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://tuanbuimmo.com/huong-dan-su-dung-cookie-j2team/
								</li>
							</ul>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hướng dẫn login Paypal bằng tiện ích Cookie j2team - File text trên sheet driver:
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://tuanbuimmo.com/huong-dan-su-dung-cookie-j2team-de-dang-nhap-bang-file-cookie-dang-text/
								</li>
							</ul>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Sử dụng Cookie Editor để đăng nhập paypal như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hướng dẫn login Paypal bằng tiện ích Cookie Editor: https://tuanbuimmo.com/huong-dan-su-dung-cookie-editor/
							</p>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Lấy mail khôi phục của mail đuôi Mailnesia và đuôi Sellallmail như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hướng dẫn lấy code mail khôi phục từ website Mailnesia:
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://tuanbuimmo.com/huong-dan-cach-lay-code-xac-minh-tu-mail-khoi-phuc-cua-web-mailnesia-com/
								</li>
							</ul>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hướng dẫn lấy code mail khôi phục từ website Sellallmail:</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://tuanbuimmo.com/huong-dan-cach-lay-code-xac-minh-tu-mail-khoi-phuc-cua-web-sellallmail-com/
								</li>
							</ul>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Tôi lấy code mail khôi phục duôi @mmotuanbui như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Bạn vui lòng truy cập bot Telegram mục Lấy code mail tuanbui, sau đó điền mail kp bạn cần lấy code vào để hệ thống gửi code cho bạn,
								Lưu ý: cần đợi 2 - 3 phút từ khi bạn bấm nhận code trên website rồi mới check code trên bot tele</p>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Tôi đã nhận được VPS nhưng không biết sử dụng như thế nào?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hướng dẫn sử dụng VPS:
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									https://tuanbuimmo.com/huong-dan-su-dung-vps/
								</li>
							</ul>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Tôi cần làm gì để giao dịch trên bot tele một cách an toàn?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Hiện tại Hack và virus rất nhiều trên các nền tảng online, bên mình cũng đã sử dụng các phần mềm diệt virus và bảo mật cao nhất để đảm bảo an toàn khi giao dịch. Nhưng không có gì là tuyệt đối cả. Vậy nên quý khách vui lòng đọc kỹ những hướng dẫn dưới đây để đảm bảo an toàn về tiền bạc cho quý khách:
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Chỉ nạp tiền khi số tài khoản thanh toán ngân hàng có tên chủ tài khoản chính chủ là Bùi Anh Tuấn.
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Nếu cần nạp số tiền lớn vui lòng liên hệ support của Team Tuấn Bùi để được hỗ trợ.
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Số tài khoản mặc định trên bot tele là số tài khoản giống số điện thoại Hotline của Tuấn Bùi MMO - 0372249999:
								</li>
							</ul>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								MB Bank
							</p>
							<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Bùi Anh Tuấn
								</li>
								<li className="text-cyan-600 hover:underline dark:text-cyan-500">
									Số Tài Khoản: 0372249999
								</li>
							</ul>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								Nếu bạn thấy bot gửi mã QR hoặc số tài khoản khác với số tài khoản này, vui lòng liên hệ ngay cho chúng tôi. Tuyệt đối không chuyển tiền vào số tài khoản nào khác ngoài stk này khi giao dịch trên bot telegram.
							</p>
						</Accordion.Content>
					</Accordion.Panel>

					<Accordion.Panel>
						<Accordion.Title>Tôi muốn tìm lại thông tin số điện thoại của tk PPUS?</Accordion.Title>
						<Accordion.Content>
							<p className="mb-2 text-gray-500 dark:text-gray-400">
								https://tuanbuimmo.com/huong-dan-tim-lai-so-phone-cua-tai-khoan-paypal-us/
							</p>
						</Accordion.Content>
					</Accordion.Panel>

				</Accordion>
			</div>
		</>
	)
}

export default QA
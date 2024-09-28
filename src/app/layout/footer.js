import Link from 'next/link'
import Accordion from "@/app/components/Accordion";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer__main">
                        <div className="footer-col footer-col--links footer-col--collapsed">
                            <Accordion title="ร้านค้า">
                                <ul className="footer-menu__links disclosure__content" role="list">
                                    <li>
                                        <Link href="/collections/wireless-speaker">ลำโพงไร้สาย</Link>
                                    </li>
                                    <li>
                                        <Link href="/collections/headphones">หูฟัง</Link>
                                    </li>
                                    <li>
                                        <Link href="/collections/gaming-series">หูฟังและลำโพงเกม</Link>
                                    </li>
                                    <li>
                                        <Link href="/collections/audio-home">เครื่องเสียงบ้าน</Link>
                                    </li>
                                    <li>
                                        <Link href="/collections/accessories">Accessories</Link>
                                    </li>
                                    <li>
                                        <Link href="/collections/sale">Sale</Link>
                                    </li>
                                </ul>
                            </Accordion>
                        </div>
                        <div className="footer-col footer-col--links footer-col--collapsed">
                            <Accordion title="สนับสนุน">
                                <ul className="footer-menu__links disclosure__content" role="list">
                                    <li>
                                        <Link href="/pages/buy-authentic">Buy Authentic</Link>
                                    </li>
                                    <li>
                                        <Link href="https://th.jbl.com/authorized-dealers.html" target="_blank">ตัวแทนจำหน่าย</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/shipping">วิธีการจัดส่งสินค้า</Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.mahajak.com/th/mahajak-warranty" target="_blank">การรับประกัน</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/faqs">คำถามที่พบบ่อย</Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.mahajak.com/th/mahajak-warranty" target="_blank">Product Support</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/order-status">สถานะการสั่งซื้อ</Link>
                                    </li>
                                </ul>
                            </Accordion>
                        </div>
                        <div className="footer-col footer-col--links footer-col--collapsed">
                            <Accordion title="เกี่ยวกับเรา">
                                <ul className="footer-menu__links disclosure__content" role="list">
                                    <li>
                                        <Link href="http://www.harman.com/EN-US/pages/Home.aspx" target='_blank'>Harman Corporate</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/privacy-policy-statement">นโยบายความเป็นส่วนตัว</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/terms">Terms of Sale</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/terms-of-use">Terms of Use</Link>
                                    </li>
                                    <li>
                                        <Link href="/pages/why-buy-direct">Why Buy Direct</Link>
                                    </li>
                                </ul>
                            </Accordion>
                        </div>
                        <div className="footer-col footer-col--links footer-col--not-collapsed">
                            <div className="footer-block mb-8 text-start">
                                <h2 className="footer-block__heading">ติดต่อเรา</h2>
                                <div className="footer-block__text">
                                    <p>
                                        บริษัท มหาจักรดีเวลอปเมนท์ จำกัด<br/>
                                        46 ถนนสุขุมวิท 3 (นานาเหนือ) แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110<br/>
                                        สอบถามข้อมูลการสั่งซื้อ : <Link href="tel:02-256-0020"><span>02-256-0020</span></Link><br/>
                                        ศูนย์บริการ/ส่งเคลมสินค้า : <Link href="tel:02-378-9999"><span>02-378-9999</span></Link><br/>
                                        อีเมล์ : <Link href="mailto:onlinesupport@mahajak.com"><span>onlinesupport@mahajak.com</span></Link>
                                    </p>
                                </div>
                                <div className="footer-block__btns footer-block__social">
                                    <ul className="social inline-flex flex-wrap justify-start">
                                        <li>
                                            <Link href="https://www.facebook.com/JBLThailandOfficial/" className="social__link flex items-center justify-center">
                                                <svg width="12" height="24" viewBox="0 0 10 20" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon"><path d="M6.49 10.877h2.95l.44-3.555H6.49v-2.27c0-1.03.276-1.731 1.697-1.731L10 3.32V.14C9.686.097 8.61 0 7.359 0 4.745 0 2.956 1.657 2.956 4.7v2.622H0v3.555h2.956V20H6.49v-9.123z"></path></svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/jblthailand/" className="social__link flex items-center justify-center">
                                                <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon"><circle cx="15.238" cy="4.948" r="1.238"></circle><path d="M19.47 3.444A5.11 5.11 0 0 0 16.548.527a7.351 7.351 0 0 0-2.43-.466C13.05.014 12.713 0 9.999 0c-2.712 0-3.057 0-4.12.06A7.351 7.351 0 0 0 3.45.528 5.11 5.11 0 0 0 .528 3.444 7.317 7.317 0 0 0 .06 5.87C.014 6.936 0 7.274 0 9.982s0 3.053.06 4.113c.018.829.176 1.649.468 2.425a5.11 5.11 0 0 0 2.922 2.917 7.35 7.35 0 0 0 2.429.5c1.069.047 1.407.06 4.12.06s3.058 0 4.12-.06a7.351 7.351 0 0 0 2.429-.466 5.11 5.11 0 0 0 2.922-2.918 7.31 7.31 0 0 0 .467-2.424c.047-1.067.06-1.405.06-4.113s0-3.053-.06-4.113a7.317 7.317 0 0 0-.467-2.459zm-1.437 10.537a5.439 5.439 0 0 1-.34 1.843 3.262 3.262 0 0 1-1.87 1.87 5.451 5.451 0 0 1-1.825.34c-1.04.046-1.332.06-3.996.06-2.664 0-2.937 0-3.995-.06a5.451 5.451 0 0 1-1.825-.34 3.255 3.255 0 0 1-1.878-1.87 5.439 5.439 0 0 1-.34-1.823c-.046-1.038-.06-1.33-.06-3.992s0-2.934.06-3.992c.006-.63.121-1.253.34-1.844a3.255 3.255 0 0 1 1.878-1.87 5.451 5.451 0 0 1 1.825-.339c1.038-.046 1.331-.06 3.995-.06s2.937 0 3.996.06c.623.008 1.24.123 1.824.34.86.331 1.54 1.01 1.872 1.87.216.583.331 1.2.34 1.823.046 1.038.06 1.33.06 3.992 0 2.661 0 2.948-.047 3.992h-.014z"></path><path d="M9.991 14.753a4.761 4.761 0 1 1 0-9.523 4.761 4.761 0 0 1 0 9.523zm0-1.905a2.857 2.857 0 1 0 0-5.713 2.857 2.857 0 0 0 0 5.713z"></path></svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.youtube.com/@jbl" className="social__link flex items-center justify-center">
                                                <svg width="24" height="17" viewBox="0 0 48 34" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon"><path d="m19.044 23.27-.001-13.582 12.968 6.814-12.967 6.768ZM47.52 7.334s-.47-3.33-1.908-4.798C43.787.61 41.74.601 40.803.49 34.086 0 24.01 0 24.01 0h-.02S13.914 0 7.197.49c-.939.11-2.984.12-4.81 2.045C.947 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.906 4.798c1.827 1.926 4.226 1.866 5.294 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.984-.122 4.809-2.048 1.439-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824Z"></path></svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="footer__hr"/>
                <div className="footer__base">
                    <span>© 2024 <a href="/" title="">JBL Store Thailand</a></span>
                    <span> สงวนลิขสิทธิ์ตามกฎหมาย</span>
                </div>
            </footer>
        </>
    )
}

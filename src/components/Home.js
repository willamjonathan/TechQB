import '../styles/Home.css'
import Navbar from '../components/Navbar';
//import icon
import callIcon from '../img/icons/telephone-call.png'
import fishIcon from '../img/icons/fish.png'
import moneyIcon from '../img/icons/money.png'
import timeIcon from '../img/icons/back-in-time.png'
//import mitra
import gojek from '../img/mitra/gojek.png'
import alfamart from '../img/mitra/alfamart.png'
import dana from '../img/mitra/dana.jpg'
import foodhall from '../img/mitra/foodhall.png'
import indomaret from '../img/mitra/indomaret.png'

import nelayanImage from '../img/1728568398779.jpeg'

function Home() {
    return (<div>
        <Navbar></Navbar>
        <div className="home">
            <div className="section1">
                <div className="rectangle">
                    <div className="section1-title">
                        Mendukung Nelayan Lokal, segar dari Laut ke Meja Makan
                    </div>
                    <div className="section1-sub">
                        Pilihan produk yang variatif!<br />
                        Efisien, Lengkap, Segar
                    </div>
                </div>
                <div className="section2">
                    <div className="section2-container">
                        <div className="section2-c 1">
                            <div className="salah">
                                <div className="logo">
                                    <img src={callIcon} className="small-image"></img>

                                </div>
                                <div className="section2-text">
                                    <div className="section2-title">
                                        <a> Proses Pemesanan yang Mudah</a>
                                    </div>
                                    <div className="section2-sub">
                                        <a> Hanya perlu mengunduh applikasi kami Nelayan.Id melalui Apple Store atau Google Play.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section2-c 2">
                            <div className="salah">
                                <div className="logo">
                                    <img src={fishIcon} className="small-image"></img>
                                </div>
                                <div className="section2-text">
                                    <div className="section2-title">
                                        <a> Aneka Ragam Produk Segar</a>
                                    </div>
                                    <div className="section2-sub">
                                        <a> Tersedia produk terlengkap dari Sabang sampai Merauke.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section2-c 3">
                            <div className="salah">

                                <div className="logo">
                                    <img src={moneyIcon} className="small-image"></img>
                                </div>
                                <div className="section2-text">
                                    <div className="section2-title">
                                        <a> Biaya yang murah</a>
                                    </div>
                                    <div className="section2-sub">
                                        <a> Biaya yang dikenakan tidak akan mahal dikarenakan kami memiliki banyak lokasi penyimpanan bahan-bahan kami di setiap kota di Indonesia.</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section2-c 4">
                            <div className="salah">

                                <div className="logo">
                                    <img src={timeIcon} className="small-image"></img>
                                </div>
                                <div className="section2-text">
                                    <div className="section2-title">
                                        <a> Pengiriman yang Fleksibel</a>
                                    </div>
                                    <div className="section2-sub">
                                        <a> Waktu pengiriman yang bisa dipilih dari pukul 9 WIB sampai 6 WIB.</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section3">
                    <div className="section3-container">
                        <div className="section3-image">
                            <img src={nelayanImage} className="nelayanImg"></img>
                        </div>
                        <div className='section3-text'>
                            <div className='section3-title'>
                                BERSAMA Nelayan.Id
                            </div>
                            <div className='section3-sub'>
                                <p>Kami adalah solusi utama untuk inovasi perikanan Anda.
                                    Produk unggulan kami langsung dari laut, berkualitas dan segar.
                                    Bergabunglah dengan Nelayan.Id untuk mengubah impian bisnis Anda menjadi kenyataan.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section4">
                        <p>Temui partner Nelayan.Id</p>
                        <div className="section4-container">
                            <div className="mitra">

                            </div>
                            <div className="mitra">
                                <img src={alfamart} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={alfamart} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={alfamart} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={indomaret} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={indomaret} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={indomaret} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={foodhall} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={foodhall} className="mitraImg"></img>
                            </div>
                            <div className="mitra">
                                <img src={foodhall} className="mitraImg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Home;

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Upper from "../components/Upper";
import Deskripsiwisata from "../components/Deskripsiwisata";
import sawah1 from "../image/sawah/1.JPG"
import sawah2 from "../image/sawah/2.JPG"
import sawah3 from "../image/sawah/3.JPG"
import sawah4 from "../image/sawah/4.JPG"
import sawah5 from "../image/sawah/5.JPG"
import sawah6 from "../image/sawah/6.JPG"
import Carousel from "../components/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import Footer from "../components/Footer";

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../image/placeholder.png"),
  iconSize: [28, 28], // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const markers = [
  {
    geocode: [-8.395278, 115.236842],
    popUp: "Agrowisata",
  },
];
const polygon = [
  [-8.36492, 115.243017],
  [-8.364924, 115.243373],
  [-8.365154, 115.243686],
  [-8.365841, 115.243879],
  [-8.367168, 115.243932],
  [-8.367789, 115.243828],
  [-8.368758, 115.243737],
  [-8.369128, 115.243602],
  [-8.369775, 115.243709],
  [-8.370159, 115.243846],
  [-8.370614, 115.243895],
  [-8.371316, 115.24383],
  [-8.371829, 115.243329],
  [-8.37213, 115.243312],
  [-8.372619, 115.243217],
  [-8.372876, 115.24341],
  [-8.373916, 115.243041],
  [-8.37461, 115.243248],
  [-8.375665, 115.243916],
  [-8.375901, 115.244187],
  [-8.375019, 115.244999],
  [-8.374562, 115.245763],
  [-8.374058, 115.245795],
  [-8.373696, 115.246193],
  [-8.373381, 115.246336],
  [-8.372751, 115.246241],
  [-8.37237, 115.246631],
  [-8.371944, 115.24652],
  [-8.371362, 115.245947],
  [-8.370637, 115.246106],
  [-8.370401, 115.246377],
  [-8.370086, 115.246408],
  [-8.369944, 115.246552],
  [-8.370732, 115.246759],
  [-8.370889, 115.246934],
  [-8.370826, 115.247523],
  [-8.369645, 115.248972],
  [-8.368259, 115.250118],
  [-8.367959, 115.249927],
  [-8.367408, 115.250261],
  [-8.366353, 115.250468],
  [-8.365959, 115.251264],
  [-8.365612, 115.251264],
  [-8.366727, 115.252652],
  [-8.366562, 115.252778],
  [-8.366603, 115.253111],
  [-8.36714, 115.253111],
  [-8.367469, 115.254237],
  [-8.368542, 115.253862],
  [-8.368625, 115.253486],
  [-8.368996, 115.253737],
  [-8.370934, 115.253236],
  [-8.371141, 115.254028],
  [-8.372103, 115.253822],
  [-8.372035, 115.255787],
  [-8.372984, 115.255912],
  [-8.374057, 115.254995],
  [-8.3755, 115.25512],
  [-8.376614, 115.254287],
  [-8.377111, 115.254321],
  [-8.377473, 115.253127],
  [-8.377788, 115.252697],
  [-8.378969, 115.251822],
  [-8.379253, 115.251344],
  [-8.379347, 115.249497],
  [-8.381678, 115.247252],
  [-8.383553, 115.246217],
  [-8.384104, 115.245628],
  [-8.384419, 115.24488],
  [-8.384435, 115.244402],
  [-8.384293, 115.243829],
  [-8.384608, 115.241553],
  [-8.385459, 115.239865],
  [-8.386183, 115.239562],
  [-8.387428, 115.23934],
  [-8.388152, 115.238926],
  [-8.388703, 115.238002],
  [-8.389097, 115.238368],
  [-8.392011, 115.239244],
  [-8.393539, 115.239244],
  [-8.395413, 115.240422],
  [-8.398894, 115.240152],
  [-8.400201, 115.239706],
  [-8.400753, 115.239658],
  [-8.402564, 115.240231],
  [-8.403115, 115.240279],
  [-8.405761, 115.240008],
  [-8.407651, 115.240231],
  [-8.408549, 115.24039],
  [-8.410407, 115.240502],
  [-8.412313, 115.240199],
  [-8.41351, 115.240406],
  [-8.413998, 115.24012],
  [-8.414203, 115.239403],
  [-8.41466, 115.238878],
  [-8.41677, 115.237938],
  [-8.417447, 115.237302],
  [-8.41981, 115.236522],
  [-8.421605, 115.234659],
  [-8.421968, 115.233863],
  [-8.422519, 115.233353],
  [-8.424582, 115.233019],
  [-8.425905, 115.231952],
  [-8.427133, 115.232605],
  [-8.426824, 115.231833],
  [-8.426081, 115.231375],
  [-8.425834, 115.230701],
  [-8.424661, 115.231101],
  [-8.423725, 115.231043],
  [-8.42341, 115.231155],
  [-8.423047, 115.230852],
  [-8.422906, 115.231043],
  [-8.422543, 115.231059],
  [-8.421599, 115.230375],
  [-8.421095, 115.230215],
  [-8.41922, 115.23055],
  [-8.417819, 115.22977],
  [-8.41711, 115.229833],
  [-8.416653, 115.229356],
  [-8.416937, 115.228782],
  [-8.416937, 115.228782],
  [-8.415251, 115.228544],
  [-8.411424, 115.229196],
  [-8.409944, 115.228464],
  [-8.409282, 115.227397],
  [-8.408526, 115.228416],
  [-8.407345, 115.229356],
  [-8.406888, 115.228894],
  [-8.406778, 115.22856],
  [-8.406479, 115.228273],
  [-8.405408, 115.228703],
  [-8.405156, 115.228353],
  [-8.404652, 115.228432],
  [-8.403628, 115.229005],
  [-8.402116, 115.227795],
  [-8.400998, 115.227891],
  [-8.400289, 115.2284],
  [-8.399328, 115.22797],
  [-8.39884, 115.227954],
  [-8.398488, 115.2284],
  [-8.397653, 115.2284],
  [-8.397133, 115.227874],
  [-8.395747, 115.228431],
  [-8.394991, 115.228336],
  [-8.394577, 115.229034],
  [-8.394529, 115.229384],
  [-8.391757, 115.231883],
  [-8.388749, 115.2333],
  [-8.387457, 115.233412],
  [-8.385646, 115.234176],
  [-8.384764, 115.234176],
  [-8.384543, 115.234272],
  [-8.384386, 115.234558],
  [-8.383819, 115.234733],
  [-8.382338, 115.235036],
  [-8.381125, 115.235991],
  [-8.380273, 115.236335],
  [-8.379919, 115.23656],
  [-8.379943, 115.236955],
  [-8.380406, 115.238031],
  [-8.380328, 115.238378],
  [-8.379708, 115.238925],
  [-8.379528, 115.239466],
  [-8.378325, 115.239806],
  [-8.377344, 115.239733],
  [-8.374018, 115.24005],
  [-8.370437, 115.241167],
  [-8.369571, 115.241131],
  [-8.36894, 115.241502],
  [-8.366203, 115.242304],
  [-8.364976, 115.242991],
];
const purpleOptions = { color: "green" };

const slides = [sawah1, sawah2, sawah3, sawah4, sawah5, sawah6];

const Wisatasawah = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${sawah4}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Upper backgroundImageStyle={backgroundImageStyle} title="Agrowisata" />
      <Deskripsiwisata text="Potensi Agrowisata di desa Buahan merupakan daya tarik unik yang dapat menawarkan pengalaman autentik dan menyegarkan bagi para wisatawan. Persawahan di desa Buahan menawarkan pemandangan hijau yang luas dan menakjubkan. Hamparan tanaman padi yang menghijau saat musim tanam tiba, langit biru yang cerah, dan sinar matahari yang hangat menciptakan panorama yang memesona. Keindahan alam ini tentu dapat menarik minat para pengunjung untuk menikmati momen ketenangan dan kesederhanaan di tengah pesona pedesaan. potensi Agrowisata ini tidak hanya tentang menikmati pemandangan, tetapi juga menghadirkan beragam kegiatan yang menarik. Para pengunjung dapat berpartisipasi dalam proses menanam dan merawat tanaman padi, bersepeda keliling sawah, atau berjalan-jalan santai di antara tanaman hijau yang rimbun. Dengan dikembangkannya Agrowisata, desa memiliki peluang untuk meningkatkan potensi ekonomi mereka. Hal ini dapat menciptakan lapangan kerja baru, mendorong usaha mikro dan kecil yang berhubungan dengan wisata, serta meningkatkan pendapatan dan kesejahteraan masyarakat desa." />
      <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
        <div className="flex justify-center items-center" data-aos="fade-down">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
            Potensi
          </h1>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
            Wisata
          </h1>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
          data-aos="fade-right"
        >
          <div className="w-full">
            <div className="bg-white p-[16px] w-full">
              <p className="font-opensans text-md lg:text-xl text-center">
                Tur Petani: Pengunjung dapat mengikuti tur petani untuk belajar
                langsung tentang proses bercocok tanam, mulai dari menanam padi
                hingga panen. Tur ini memungkinkan para wisatawan untuk
                berinteraksi dengan petani setempat, memahami tantangan
                pertanian, dan mengalami pengalaman mendalam di dunia pertanian.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
          data-aos="fade-right"
        >
          <div className="w-full">
            <div className="bg-white p-[16px] w-full">
              <p className="font-opensans text-md lg:text-xl text-center">
                Tracking Keliling Sawah: Menyusuri jalur bersepeda di antara
                persawahan adalah cara yang menyenangkan untuk menikmati
                keindahan alam pedesaan. Wisatawan dapat menyaksikan pemandangan
                hijau yang menakjubkan dan merasakan kedamaian serta ketenangan
                di tengah sawah.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
          data-aos="fade-right"
        >
          <div className="w-full">
            <div className="bg-white p-[16px] w-full">
              <p className="font-opensans text-md lg:text-xl text-center">
                Berfoto di Spot Instagramable: Memilih spot-spot menarik untuk
                berfoto di tengah persawahan akan menjadi daya tarik bagi para
                pengunjung yang gemar berfoto dan berbagi momen di media sosial.
                Desain spot yang unik dan artistik akan menarik minat pengunjung
                untuk berpose di tengah keindahan alam.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
          data-aos="fade-right"
        >
          <div className="w-full">
            <div className="bg-white p-[16px] w-full">
              <p className="font-opensans text-md lg:text-xl text-center">
                Wisata Kuliner: Menghidangkan makanan khas berbahan dasar padi
                dan produk pertanian lokal akan memberikan pengalaman kuliner
                yang autentik. Pengunjung dapat menikmati hidangan lezat sambil
                menikmati pemandangan persawahan yang indah.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center p-[5px] mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
          data-aos="fade-right"
        >
          <div className="w-full">
            <div className="bg-white p-[16px] w-full">
              <p className="font-opensans text-md lg:text-xl text-center">
                Pusat Pendidikan Lingkungan: Memiliki pusat edukasi yang
                menyampaikan pesan tentang pentingnya kelestarian lingkungan dan
                praktik pertanian berkelanjutan akan memberikan nilai tambah
                pada potensi wisata persawahan. Wisatawan dapat memahami dampak
                positif dari upaya pelestarian alam dan berkontribusi pada
                keberlanjutan lingkungan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7 px-[32px] sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
        <div className="flex justify-center items-center" data-aos="fade-down">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
            Foto
          </h1>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
            Wisata
          </h1>
        </div>
        <div
          className="mt-7 lg:mt-10 xl:px-0 h-fit w-fit lg:h-fit flex items-center shadow-xl shadow-darkgreen"
          data-aos="fade"
        >
          <Carousel>
            {[
              ...slides.map((s) => (
                <img
                  className="top-0 bottom-0 px-0 lg:px-0 h-full w-fit"
                  src={s}
                />
              )),
            ]}
          </Carousel>
        </div>
      </div>
      <div className="py-7 px-[32px] sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px]">
        <div className="flex justify-center items-center" data-aos="fade-down">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
            Lokasi
          </h1>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
            Wisata
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center pb:4 lg:pb-8 pt-7 lg:pt-10">
          <div
            className="aspect-video h-[480px] w-full sm:w-full md:w-full lg:h-full lg:w-full"
            data-aos="fade"
          >
            <MapContainer
              className="shadow-lg shadow-darkgreen"
              center={[-8.391615, 115.236398]}
              zoom={13}
            >
              {/* OPEN STREEN MAPS TILES */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* WATERCOLOR CUSTOM TILES */}
              {/* <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        /> */}
              {/* GOOGLE MAPS TILES */}
              {/* <TileLayer
          attribution="Google Maps"
          // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
          // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
          url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        /> */}

              {markers.map((marker) => (
                <Marker position={marker.geocode} icon={customIcon}>
                  <Popup>
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-opensans text-md">{marker.popUp}</h1>
                    </div>
                  </Popup>
                </Marker>
              ))}

              <Polygon pathOptions={purpleOptions} positions={polygon} />
            </MapContainer>
          </div>
          <a
            target="_blank"
            href="https://goo.gl/maps/DzPm17FGvwcay3pG8"
            className="mt-10 text-sm text-center lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold hover:text-darkgreen border-transparent hover:border-b-brown w-[200px] font-opensans font-bold mx-auto text-darkgreen"
          >
            Buka di Google Maps!
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wisatasawah;

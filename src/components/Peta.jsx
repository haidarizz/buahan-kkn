import React, { useEffect } from "react";
import "../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import AOS from "aos";
import "aos/dist/aos.css";

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("../image/placeholder.png"),
  iconSize: [38, 38], // size of the icon
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
    geocode: [48.86, 2.3522],
    popUp: "Hello, I am pop up 1",
  },
  {
    geocode: [48.85, 2.3522],
    popUp: "Hello, I am pop up 2",
  },
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3",
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

const purpleOptions = { color: "purple" };

const Peta = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[180px] xl:px-[240px] border-y-8 border-t-lightgreen border-b-lightgreen bg-opacity-50">
        <div className="flex justify-center items-center" data-aos="fade-down">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
            Peta Geografis
          </h1>
          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
            Buahan
          </h1>
        </div>
        <div className="flex flex:1 flex-col xl:flex-row justify-center items-center pb:7 lg:pb-10 pt-7 lg:pt-10">
          <div
            className="z-0 px-[32px] xl:pr-10 xl:pl-0 xl:w-1/2 h-[240px] w-full sm:w-[500px] md:w-[520px] lg:h-[360px] lg:w-[664px]"
            data-aos="fade-down"
          >
            <MapContainer
              className="shadow-lg shadow-darkgreen"
              center={[-8.391615, 115.236398]}
              zoom={12}
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

              <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
              >
                {/* Mapping through the markers */}
                {markers.map((marker) => (
                  <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popUp}</Popup>
                  </Marker>
                ))}

                {/* Hard coded markers */}
                {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
              </MarkerClusterGroup>
              <Polygon pathOptions={purpleOptions} positions={polygon} />
            </MapContainer>
          </div>
          <div
            className="flex flex-col justify-center xl:pl-10 px-[32px] xl:pr-0 xl:w-1/2"
            data-aos="fade-down"
          >
            <p className="font-opensans text-md lg:text-xl text-justify mb-7 pt-6 xl:pt-0">
              Jelajahi keajaiban Desa Buahan melalui pengalaman interaktif peta
              kami. Temukan setiap sudut indah dengan mudah, temukan jalur
              pintas yang tersembunyi, dan nikmati informasi mendalam tentang
              destinasi menarik. Dengan peta interaktif kami, Anda tidak hanya
              melihat, tetapi merasakan kehidupan dan kebudayaan kami dalam
              detail visual yang mengesankan. Segera mulai petualangan Anda dan
              temukan pesona kami dengan cara yang baru dan menarik.
            </p>
            <a
              target="_blank"
              href="https://buahan-gianyar.desa.id/"
              className="text-center ml-0 text-sm lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold border-transparent hover:border-b-brown w-[150px] font-opensans font-medium mx-auto text-darkgreen"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Peta;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Deskripsi = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-7 px-0 sm:px-[70px] md:px-[120px] lg:px-[240px] xl:px-[360px] border-b-8 border-lightgreen">
      <div className="flex justify-center items-center" data-aos="fade-down">
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold font-dmserif text-darkgreen">
          Deskripsi Desa
        </h1>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:pl-4 pl-2 font-dancingscript text-brown">
          Buahan
        </h1>
      </div>
      <div
        className="flex flex-col items-center justify-center mx-[32px] xl:mx-0 bg-gradient-to-tr from-darkgreen to-lightgreen mt-6 lg:mt-10"
        data-aos="fade-right"
      >
        <div className="bg-white m-[5px]">
          <div className="px-[16px] pt-[16px] pb-[22px] flex flex-col items-center">
            <p className="font-opensans text-md lg:text-xl text-justify mb-6">
              Selamat datang di Desa Dinas Buahan: Mahakarya Keindahan di
              Pelukan Pegunungan Bali! Mengintip dari jendela alam, ada satu
              tempat yang menawarkan keindahan alam yang menakjubkan dan hawa
              yang sejuk di tengah hamparan hijau dan udara segar yang
              menggelitik. Terletak di Kecamatan Payangan, Kabupaten Gianyar,
              Desa Dinas Buahan adalah surga tersembunyi di pulau Dewata, Bali,
              yang memanjakan jiwa petualang dan pencinta keindahan alam.
              Berkeliling di desa ini, Anda akan disuguhkan dengan panorama
              menakjubkan, dengan latar belakang pegunungan yang menjulang
              tinggi dan hutan lebat yang memberikan ketenangan sejati. Namun,
              jangan anggap desa ini hanya menawarkan pemandangan alam semata.
              Di balik keindahan ini, terdapat ragam kemungkinan petualangan
              yang tak terlupakan. Bukan hanya destinasi wisata biasa, Desa
              Dinas Buahan telah bertransformasi menjadi pusat pariwisata yang
              menawarkan penginapan yang eksklusif dan nyaman seperti hotel,
              villa, dan bungalow mewah yang menyatu dengan alam. Namun, tetap
              terasa adem karena sektor pertanian, perkebunan, dan peternakan
              tetap menjadi jantung desa ini. Menjadi bagian dari desa ini
              adalah menghirup kesejukan alam dan hidup berdampingan dengan
              penduduk lokal yang ramah, sebagian besar adalah petani dan
              peternak yang menjaga akar budaya dan kehidupan desa tetap hidup.
              Dari aktivitas sehari-hari hingga perayaan lokal yang meriah, Desa
              Dinas Buahan adalah titik temu antara kemodernan dan keaslian.
              Jika Anda siap menggali pesona alam yang belum terjamah dan
              merasakan sentuhan kehidupan desa yang otentik, jangan lewatkan
              kesempatan ini. Kunjungi website resmi Desa Dinas Buahan sekarang
              untuk merencanakan petualangan Anda menuju cakrawala baru
              keindahan Bali yang sesungguhnya.
            </p>
            <a
              target="_blank"
              href="https://buahan-gianyar.desa.id/"
              className="text-sm text-center lg:text-md px-7 py-1.5 border-y-4 border-y-transparent bg-yellow bg-opacity-70 hover:bg-yellow hover:bg-opacity-100 hover:font-extrabold hover:text-darkgreen border-transparent hover:border-b-brown w-[150px] font-opensans font-medium mx-auto text-darkgreen"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;

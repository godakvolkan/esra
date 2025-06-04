import hakkımızda from "../images/hakkımızda.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">Hakkımızda</h2>
          <p>
            Ahsenia Restaurant olarak, doğadan ilham alan bir mutfak anlayışını
            şehrin kalbine taşıyoruz. Her tabakta tazelik, her lokmada samimiyet
            sunma hayaliyle yola çıktık. Geleneksel lezzetleri modern
            dokunuşlarla harmanladığımız mutfağımızda, sadece yemek değil; anı
            biriktirmenizi sağlayacak bir deneyim sunmayı hedefliyoruz.
          </p>

          <p>
            Menümüzde yer alan her tarif, mevsiminde toplanmış, özenle seçilmiş
            malzemelerle hazırlanır. Şarküteriden sıcak yemeklere,
            zeytinyağlılardan tatlılara kadar sunduğumuz her ürün, hem lezzet
            hem de sağlık açısından titizlikle seçilir. Doğal, katkısız ve
            kaliteli ürün kullanımı, mutfağımızın temel taşıdır.
          </p>

          <p>
            Ahsenia, sadece bir restoran değil; dostlarla buluşma noktası, özel
            günlerin vazgeçilmez adresi ve huzurlu bir sofrada hayatı
            paylaşmanın simgesidir. Ferah atmosferimiz, güler yüzlü ekibimiz ve
            misafirperverliğimiz ile sizi kendi evinizdeymiş gibi
            hissettirmekten mutluluk duyarız.
          </p>

          <p>
            Yemek bizim için sadece bir ihtiyaç değil, bir sanattır. Ahsenia
            ailesi olarak bu sanatı sizinle paylaşmak bizim için bir onurdur.
            Gelin, soframıza misafir olun, doğallığın ve lezzetin buluştuğu bu
            eşsiz deneyimi birlikte yaşayalım.
          </p>
        </div>

        <div className="about-image">
          <img
            src={hakkımızda}
            alt="Hakkımızda"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        <div className="contact-info">
          <h3>İletişim Bilgilerimiz</h3>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>
              Doğal Lezzetler Sokak No:17, Ahenk Mahallesi, 34700 Kadıköy /
              İstanbul, Türkiye
            </span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>+90 (216) 123 45 67</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>iletisim@ahseniarestaurant.com</span>
          </div>
          <div className="contact-item">
            <i className="fab fa-instagram"></i>
            <span>
              <a
                href="https://www.instagram.com/ahseniarestaurant/"
                target="_blank"
                rel="noreferrer"
              >
                @ahseniarestaurant
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

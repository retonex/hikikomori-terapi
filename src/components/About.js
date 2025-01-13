import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1>Hakkımızda</h1>
        <div className="about-content">
          <p>
            HikiHelp, modern yaşamın getirdiği sosyal izolasyon ve internet bağımlılığı gibi zorluklarla mücadele eden bireylere destek olmak amacıyla kurulmuş dijital bir terapi platformudur. Özellikle Hikikomori Sendromu yaşayan kişilere yönelik sunduğumuz rehberlik, bireylerin toplumla yeniden sağlıklı bağlar kurmasını ve aktif bir yaşam sürmelerini amaçlamaktadır.
          </p>

          <p>
            Günümüzde dijital çağın hızla gelişmesiyle birlikte birçok birey, sosyal çevreden koparak dijital dünyaya daha fazla bağımlı hale gelmektedir. Bu durum, zamanla sosyal izolasyonu artırarak hem ruhsal hem de fiziksel sağlık sorunlarına yol açabilmektedir. HikiHelp, internet bağımlılığı ve sosyal izolasyonun üstesinden gelmek için Bilişsel Davranışçı Terapi (BDT) tekniklerini temel alarak geliştirilmiştir.
          </p>

          <div className="section-title">Platformumuz, bireylerin:</div>
          <div className="platform-goals">
            <ul>
              <li>Sosyal izolasyonun etkilerinden kurtulmasını,</li>
              <li>İnternet bağımlılığıyla başa çıkmasını,</li>
              <li>Sağlıklı dijital alışkanlıklar geliştirmesini,</li>
              <li>Duygusal dayanıklılık kazanmasını amaçlamaktadır.</li>
            </ul>
          </div>

          <p>
            Bu süreçte, profesyonel terapistler ve alanında uzman danışmanlar eşliğinde, her bireyin ihtiyaçlarına özel çözümler sunuyoruz. HikiHelp olarak, güvenli ve gizliliğe önem veren bir platform sunarak bireylerin kendilerini rahat ve güvende hissetmelerini sağlıyoruz.
          </p>

          <div className="section-title">Vizyonumuz</div>
          <p>
            Toplumsal bağları güçlendirerek, bireylerin hem dijital hem de fiziksel dünyada dengeli ve sağlıklı bir yaşam sürmelerini sağlamak.
          </p>

          <div className="section-title">Misyonumuz</div>
          <p>
            Sosyal izolasyon ve internet bağımlılığı ile mücadelede etkili, erişilebilir ve bilimsel temellere dayanan dijital terapi çözümleri sunmak.
          </p>

          <div className="section-title">Değerlerimiz</div>
          <div className="values-grid">
            <div className="value-item">
              <h4>Empati ve Anlayış</h4>
              <p>Her bireyin yaşadığı zorluklara saygı duyuyoruz.</p>
            </div>
            <div className="value-item">
              <h4>Güvenlik ve Gizlilik</h4>
              <p>Kullanıcı bilgilerinin güvenliği bizim için önceliklidir.</p>
            </div>
            <div className="value-item">
              <h4>Bilimsel Yaklaşım</h4>
              <p>Kanıta dayalı terapi teknikleri kullanıyoruz.</p>
            </div>
            <div className="value-item">
              <h4>Erişilebilirlik</h4>
              <p>Herkesin kolayca faydalanabileceği çözümler sunuyoruz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
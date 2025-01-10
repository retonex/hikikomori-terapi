import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ModuleDetail.css';
import { FaBook, FaClipboardCheck, FaChartLine, FaLaptop, FaSun, FaBrain } from 'react-icons/fa';
import ActivityWheel from './ActivityWheel';

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const [openSection, setOpenSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const moduleContent = {
    'sosyal-izolasyon': {
      title: 'Sosyal İzolasyonu Anlamak',
      description: 'Bu modül, sosyal izolasyonun nedenlerini anlamanıza ve üstesinden gelmenize yardımcı olacak araçlar sunar. Hedefimiz, kendinizi daha iyi tanımanızı ve adım adım sosyal etkileşimlerinizi artırmanızı sağlamaktır.',
      goals: [
        'Sosyal kaygılarınızın kaynaklarını belirleme',
        'Düşünce kalıplarınızı analiz etme',
        'Kademeli sosyal etkileşim planı oluşturma'
      ],
      sections: [
        {
          id: 1,
          icon: <FaBook />,
          title: 'Düşünce Günlüğü',
          content: `Düşünce günlüğü, günlük deneyimlerinizi ve duygularınızı kaydetmenize yardımcı olan etkili bir araçtır.

NASIL KULLANILIR?

📝 Günlük Yazım Rutini:
• Her gün aynı saatte 15 dakikanızı ayırın
• Sakin bir ortam seçin
• Dürüst ve açık olun

✍️ Günlük Şablonu:
1. Bugün yaşadığınız olay
2. Bu olayla ilgili düşünceleriniz
3. Hissettiğiniz duygular
4. Alternatif düşünce biçimleri

💡 Örnek:
Olay: Markette kasiyerle konuşurken kekeleme
Düşünce: "Kendimi rezil ettim"
Duygu: Utanç ve kaygı
Alternatif: "Bu çok normal bir durum, herkesin başına gelebilir"

🎯 Hedef:
Bu alıştırmayı düzenli yaparak, düşünce kalıplarınızı fark edecek ve daha yapıcı düşünme biçimleri geliştireceksiniz.`
        },
        {
          id: 2,
          icon: <FaClipboardCheck />,
          title: 'Sosyal İzolasyon Nedenlerini Bulma Testi',
          content: 'Aşağıdaki durumlardan size uyanları işaretleyin:',
          isChecklist: true,
          checklistItems: [
            'Sosyal ortamlarda kendimi rahatsız hissediyorum',
            'Başkalarının beni yargılayacağından endişeleniyorum',
            'Grup içinde konuşmakta zorlanıyorum',
            'Yeni insanlarla tanışmak beni kaygılandırıyor',
            'Sosyal medyada bile etkileşime girmekte zorlanıyorum',
            'Evden çıkmak için motivasyon bulmakta zorlanıyorum',
            'Aile üyeleriyle bile iletişim kurmak zor geliyor',
            'Kendimi sürekli yetersiz hissediyorum',
            'Geçmişteki olumsuz sosyal deneyimler beni etkiliyor',
            'İnsanlarla göz teması kurmakta zorlanıyorum',
            'Sosyal davetleri genellikle reddediyorum',
            'Yalnız kalmayı tercih ediyorum',
            'Başkalarıyla konuşacak konu bulamıyorum',
            'Toplum içinde yemek yemekten kaçınıyorum',
            'Telefon görüşmeleri yapmak beni gergin hissettiriyor',
            'Sosyal becerilerimin yetersiz olduğunu düşünüyorum',
            'Başkalarının başarılarıyla kendimi kıyaslıyorum',
            'Reddedilme korkusu yaşıyorum',
            'Kendimi ifade etmekte zorlanıyorum',
            'Sosyal aktivitelere katılmak beni yoruyor'
          ]
        },
        {
          id: 3,
          icon: <FaChartLine />,
          title: 'İzleme Çalışması',
          content: `İzleme çalışması, sosyal etkileşimlerinizi ve gelişiminizi takip etmenizi sağlayan sistemli bir yöntemdir.

📊 GÜNLÜK İZLEME TABLOSU

Tablonuzda Bulunması Gerekenler:
1. Tarih ve Saat
2. Etkileşim Türü (örn: market alışverişi)
3. Süre
4. Kaygı Seviyesi (1-10)
5. Kullandığınız Başa Çıkma Yöntemleri
6. Olumlu Anlar
7. Zorlandığınız Noktalar

✨ FAYDALARI

• Gelişiminizi somut olarak görebilirsiniz
• Zorlayıcı durumları belirleyebilirsiniz
• Başarılı stratejilerinizi keşfedebilirsiniz
• Motivasyonunuzu artırabilirsiniz
• Terapistinizle paylaşabileceğiniz veriler elde edersiniz

💪 BAŞLARKEN

• Küçük etkileşimlerle başlayın
• Her gün en az bir kayıt yapın
• Dürüst değerlendirmeler yapın
• Gelişiminizi haftalık olarak gözden geçirin

🌟 Unutmayın: Her küçük ilerleme, büyük değişimlerin temelidir.`
        }
      ]
    },
    'internet-bagimliligi': {
      title: 'İnternet Bağımlılığı Kontrolü',
      description: `Hikikomori ve internet bağımlılığı genellikle iç içe geçmiş durumdadır. İnternet, sosyal izolasyon yaşayan bireyler için dış dünyayla tek bağlantı noktası haline gelebilir. Ancak kontrolsüz internet kullanımı, var olan izolasyonu daha da derinleştirebilir.\n\n
🔍 HİKİKOMORİ VE İNTERNET BAĞIMLILIĞI İLİŞKİSİ\n\n
• İnternet, sosyal kaygılardan kaçış için güvenli bir sığınak gibi görünebilir\n\n
• Sanal dünyada geçirilen süre arttıkça, gerçek dünyadan kopuş da artabilir\n\n
• Online etkileşimler, yüz yüze iletişimin yerini alamaz\n\n
• Gece-gündüz ritminin bozulması izolasyonu tetikleyebilir\n\n
🎯 BU MODÜLÜN AMAÇLARI\n\n
• İnternet kullanımınızı dengeli bir seviyeye getirmek\n\n
• Gerçek dünya aktivitelerine geçiş için zemin hazırlamak\n\n
• Sağlıklı çevrimiçi/çevrimdışı denge kurmak\n\n
• Teknolojiyi bir kaçış değil, gelişim aracı olarak kullanmak`,
      goals: [
        'İnternet kullanım alışkanlıklarınızı analiz etme ve farkındalık geliştirme',
        'Günlük rutininizde çevrimdışı aktivitelere yer açma',
        'Sosyal medya ve oyun bağımlılığıyla başa çıkma teknikleri öğrenme',
        'Teknolojiyi yararlı amaçlar için kullanma becerisi kazanma',
        'Gerçek dünya sosyal etkileşimlerine kademeli geçiş yapma'
      ],
      sections: [
        {
          id: 1,
          icon: <FaChartLine />,
          title: 'Ekran Süresi Günlüğü',
          content: `İnternet kullanımınızı kontrol altına almanın ilk adımı, mevcut durumunuzu anlamaktır.\n\n
📱 GÜNLÜK TAKİP TABLOSU\n\n
• Hangi uygulamalarda ne kadar vakit geçiriyorsunuz?\n\n
• Gün içinde en çok hangi saatlerde aktifsiniz?\n\n
• Hangi içerikler sizi daha çok çekiyor?\n\n
📊 HAFTALIK DEĞERLENDİRME\n\n
• Toplam ekran sürenizi hesaplayın\n\n
• Kullanım grafiğinizi çıkarın\n\n
• İlerleme/gerileme durumunuzu not edin\n\n
💡 HEDEF BELİRLEME\n\n
• Günlük maksimum kullanım süresi belirleyin\n\n
• Her uygulama için limit koyun\n\n
• Düzenli mola saatleri planlayın`
        },
        {
          id: 2,
          icon: <FaSun />,
          title: 'Alternatif Aktiviteler Çarkı',
          content: <ActivityWheel />
        },
        {
          id: 3,
          icon: <FaLaptop />,
          title: 'Dijital Maruz Kalma Planı',
          content: `İnterneti kontrollü ve amaçlı kullanmayı öğrenmek için kademeli bir yaklaşım.\n\n
⏰ GÜNLÜK PROGRAM\n\n
• Sabah rutininizde internet yok\n\n
• Öğle arası sosyal medya kontrolü\n\n
• Akşam saatlerinde iş/okul araştırmaları\n\n
🎯 HAFTALIK HEDEFLER\n\n
• İlk hafta: Her gün 1 saat internet-free zaman\n\n
• İkinci hafta: Belirli sitelere erişim kısıtlaması\n\n
• Üçüncü hafta: Sadece belirlenen saatlerde kullanım\n\n
💪 UYGULAMA STRATEJİLERİ\n\n
• Bildirimleri kapatın veya sınırlayın\n\n
• Ekran süresi takip uygulaması kullanın\n\n
• Başarılarınızı not edin ve ödüllendirin`
        },
        {
          id: 4,
          icon: <FaBrain />,
          title: 'İnternet Tetikleyicilerini Tanıma',
          content: `İnternete yönelmenize neden olan faktörleri belirlemeniz önemlidir.\n\n
🔍 TETİKLEYİCİ ANALİZİ\n\n
• Hangi duygular sizi internete yönlendiriyor?\n\n
• Hangi ortamlar tetikleyici oluyor?\n\n
• Hangi saatlerde dürtü daha güçlü?\n\n
📝 GÜNLÜK KAYIT\n\n
• Tetikleyici durumu not edin\n\n
• O andaki duygu durumunuzu yazın\n\n
• Alternatif davranış seçeneklerini belirleyin\n\n
🎯 ÇÖZÜM STRATEJİLERİ\n\n
• Her tetikleyici için bir eylem planı oluşturun\n\n
• Alternatif başa çıkma yöntemleri geliştirin\n\n
• Destek sisteminizi güçlendirin`
        },
        {
          id: 5,
          icon: <FaBook />,
          title: 'Dijital Detoks Programı',
          content: `Belirli sürelerde tamamen internetten uzak kalarak bağımlılığınızı kırın.\n\n
🌱 DETOKS AŞAMALARI\n\n
• Mini Detoks (4 saat)\n\n
• Yarım Gün Detoks (12 saat)\n\n
• Tam Gün Detoks (24 saat)\n\n
📋 HAZIRLIK SÜRECİ\n\n
• Önceden planlama yapın\n\n
• Yakınlarınızı bilgilendirin\n\n
• Alternatif aktiviteler belirleyin\n\n
✨ DETOKS SIRASINDA\n\n
• Doğada vakit geçirin\n\n
• Kitap okuyun\n\n
• Hobilerle ilgilenin\n\n
• Arkadaşlarınızla yüz yüze görüşün`
        },
        {
          id: 6,
          icon: <FaChartLine />,
          title: 'İlerleme Takibi',
          content: `Gelişiminizi ölçmek ve motivasyonunuzu korumak için düzenli değerlendirme yapın.\n\n
📊 HAFTALIK DEĞERLENDİRME\n\n
• Ekran süresi değişimi\n\n
• Başarılı detoks süreleri\n\n
• Yeni edinilen alışkanlıklar\n\n
🎯 AYLIK HEDEF KONTROLÜ\n\n
• Belirlenen hedeflere ulaşma durumu\n\n
• Karşılaşılan zorluklar\n\n
• Geliştirilen stratejiler\n\n
💫 MOTİVASYON TAKİBİ\n\n
• Küçük başarıları kutlayın\n\n
• İlerleme grafiğinizi çıkarın\n\n
• Deneyimlerinizi not edin`
        }
      ]
    },
    'adim-adim-sosyallesme': {
      title: 'Adım Adım Sosyalleşme',
      description: `Sosyal etkileşimlere kademeli olarak geri dönmek, iyileşme sürecinin en önemli adımlarından biridir. Bu modül, size güvenli ve kontrollü bir şekilde sosyalleşme imkanı sunar.\n\n
🎯 MODÜL AMAÇLARI\n\n
• Sosyal kaygıyı azaltmak\n\n
• Sosyal becerileri geliştirmek\n\n
• Özgüveni artırmak\n\n
• Yeni ilişkiler kurmak\n\n
💡 NASIL ÇALIŞIR?\n\n
Bu modül, en az stres verici durumlardan başlayarak, kademeli olarak daha zorlayıcı sosyal durumlara ilerlemenizi sağlar. Her adımda size destek olacak teknikler ve öneriler sunulur.`,
      goals: [
        'Sosyal kaygıyı yönetme becerilerini geliştirme',
        'Günlük sosyal etkileşimleri artırma',
        'İletişim becerilerini güçlendirme',
        'Sosyal ortamlarda kendini rahat hissetme',
        'Yeni arkadaşlıklar kurma cesareti kazanma'
      ],
      sections: [
        {
          id: 1,
          icon: <FaChartLine />,
          title: 'Sosyal Maruziyet Basamakları',
          content: `Sosyal durumlara kademeli olarak maruz kalma planı.\n\n
🔄 BAŞLANGIÇ SEVİYESİ\n\n
• Market kasiyeri ile göz teması kurma\n\n
• Asansörde selamlaşma\n\n
• Komşuya gülümseme\n\n
🔄 ORTA SEVİYE\n\n
• Kafede sipariş verme\n\n
• Toplu taşıma kullanma\n\n
• Kısa sohbetler başlatma\n\n
🔄 İLERİ SEVİYE\n\n
• Sosyal etkinliklere katılma\n\n
• Grup sohbetlerine dahil olma\n\n
• Sunum yapma\n\n
⚡ ÖNEMLİ NOTAR\n\n
• Her adımı kendi hızınızda ilerletin\n\n
• Başarısızlık değil, deneyim olarak görün\n\n
• Küçük başarıları kutlayın`
        },
        {
          id: 2,
          icon: <FaBook />,
          title: 'Sosyal Beceri Egzersizleri',
          content: `Günlük hayatta uygulayabileceğiniz pratik sosyal beceri alıştırmaları.\n\n
👥 İLETİŞİM BECERİLERİ\n\n
• Aktif Dinleme: Karşınızdakinin sözünü kesmeden dinleyin\n\n
• Soru Sorma: Açık uçlu sorular kullanın\n\n
• Beden Dili: Açık ve kendinden emin duruş sergileyin\n\n
🗣️ SOHBET BECERİLERİ\n\n
• Güncel konulardan bahsedin\n\n
• Karşınızdakinin ilgi alanlarını keşfedin\n\n
• Empati kurun ve anlayış gösterin\n\n
💪 ÖZGÜVENİ GELİŞTİRME\n\n
• Olumlu iç konuşma yapın\n\n
• Başarılarınızı hatırlayın\n\n
• Kendinizi olduğunuz gibi kabul edin`
        },
        {
          id: 3,
          icon: <FaBrain />,
          title: 'Sosyal Kaygı Yönetimi',
          content: `Sosyal durumlarda yaşanan kaygıyı azaltma teknikleri.\n\n
🧘‍♂️ ANLIK SAKİNLEŞME TEKNİKLERİ\n\n
• Derin nefes alma\n\n
• 5-4-3-2-1 Farkındalık egzersizi\n\n
• Progresif kas gevşetme\n\n
🎯 DÜŞÜNCE YÖNETİMİ\n\n
• Olumsuz düşünceleri fark etme\n\n
• Gerçekçi alternatifler üretme\n\n
• Felaketleştirmeyi engelleme\n\n
⚡ ACİL DURUM STRATEJİLERİ\n\n
• Güvenli alan belirleme\n\n
• Destekleyici kişileri tanımlama\n\n
• Kaygı anında kullanılacak cümleleri hazırlama`
        }
      ]
    },
    'gunluk-rutinler': {
      title: 'Günlük Rutinler',
      description: `Sağlıklı bir yaşam tarzı ve düzenli günlük rutinler, iyileşme sürecinin temel taşlarıdır. Bu modül, size adım adım yeni ve sağlıklı alışkanlıklar kazandırmayı hedefler.\n\n
🌟 NEDEN ÖNEMLİ?\n\n
• Düzenli rutinler güven ve kontrol hissi verir\n\n
• Günlük yapı, kaygıyı azaltır\n\n
• Sağlıklı alışkanlıklar enerji seviyenizi artırır\n\n
• Planlı yaşam, sosyal katılımı kolaylaştırır`,
      goals: [
        'Düzenli uyku düzeni oluşturma',
        'Sağlıklı beslenme alışkanlıkları geliştirme',
        'Fiziksel aktiviteyi günlük hayata entegre etme',
        'Kişisel bakım rutinleri oluşturma',
        'Ev düzeni ve organizasyon becerileri kazanma'
      ],
      sections: [
        {
          id: 1,
          icon: <FaBook />,
          title: 'Sabah Rutini Oluşturma',
          content: `Güne enerjik ve pozitif başlamak için öneriler.\n\n
⏰ UYKU DÜZENİ\n\n
• Her gün aynı saatte uyanın\n\n
• Alarmı uzağa koyun\n\n
• Telefonu yatak odasından çıkarın\n\n
🌅 SABAH AKTİVİTELERİ\n\n
• Su için ve hafif egzersiz yapın\n\n
• Güneş ışığına maruz kalın\n\n
• Sağlıklı bir kahvaltı hazırlayın\n\n
✨ KİŞİSEL BAKIM\n\n
• Duş alın ve üstünüzü değiştirin\n\n
• Temel hijyen rutinlerini uygulayın\n\n
• Kendinize bakım yapın`
        },
        {
          id: 2,
          icon: <FaSun />,
          title: 'Günlük Aktivite Planlaması',
          content: `Gününüzü yapılandırmak için pratik öneriler.\n\n
📋 GÜNLÜK PLAN OLUŞTURMA\n\n
• Önemli görevleri listeleyin\n\n
• Zaman dilimlerine ayırın\n\n
• Molalar planlayın\n\n
🏃‍♂️ FİZİKSEL AKTİVİTE\n\n
• Günde en az 30 dakika hareket edin\n\n
• Ev içi egzersizler yapın\n\n
• Yürüyüşe çıkın\n\n
🧠 ZİHİNSEL AKTİVİTELER\n\n
• Kitap okuyun\n\n
• Bulmaca çözün\n\n
• Yeni bir hobi edinin`
        },
        {
          id: 3,
          icon: <FaChartLine />,
          title: 'Akşam Rutini',
          content: `Kaliteli bir uyku için akşam rutini önerileri.\n\n
🌙 UYKU ÖNCESİ HAZIRLIK\n\n
• Ekranlardan uzak durun\n\n
• Rahatlatıcı aktiviteler yapın\n\n
• Yatak odanızı hazırlayın\n\n
🍽️ AKŞAM YEMEĞİ\n\n
• Hafif yemekler tercih edin\n\n
• Yatmadan 2-3 saat önce yiyin\n\n
• Kafein tüketimini sınırlayın\n\n
😌 RAHATLAMA TEKNİKLERİ\n\n
• Meditasyon yapın\n\n
• Günlük yazın\n\n
• Hafif streching yapın`
        }
      ]
    },
    'gevseme-teknikleri': {
      title: 'Gevşeme Teknikleri',
      description: `Stres ve kaygıyla başa çıkmak için bilimsel olarak kanıtlanmış gevşeme teknikleri bu modülde sizinle paylaşılmaktadır. Bu teknikler, günlük yaşamınızda kolayca uygulayabileceğiniz pratik araçlardır.\n\n
🎯 TEKNİKLERİN FAYDALARI\n\n
• Kaygı seviyesini düşürür\n\n
• Kas gerginliğini azaltır\n\n
• Uyku kalitesini artırır\n\n
• Duygusal dengeyi sağlar\n\n
• Odaklanmayı kolaylaştırır`,
      goals: [
        'Stres yönetimi becerilerini geliştirme',
        'Kaygı kontrolü sağlama',
        'Bedensel farkındalığı artırma',
        'Duygusal dengeyi koruma',
        'Günlük rahatlama rutini oluşturma'
      ],
      sections: [
        {
          id: 1,
          icon: <FaBook />,
          title: 'Nefes Teknikleri',
          content: `Temel nefes egzersizleri ve uygulamaları.\n\n
🫁 DERİN NEFES\n\n
• Rahat bir pozisyon alın\n\n
• Burnunuzdan 4 saniye nefes alın\n\n
• 4 saniye tutun\n\n
• Ağzınızdan 6 saniye verin\n\n
🌬️ ALTERNATİF TEKNİKLER\n\n
• Kutu nefesi (4-4-4-4)\n\n
• Burun kanadı nefesi\n\n
• Arındırıcı nefes\n\n
⚡ GÜNLÜK UYGULAMA\n\n
• Sabah uyandığınızda\n\n
• Stresli anlarda\n\n
• Yatmadan önce`
        },
        {
          id: 2,
          icon: <FaBrain />,
          title: 'Meditasyon ve Mindfulness',
          content: `Zihin-beden bağlantısını güçlendiren uygulamalar.\n\n
🧘‍♂️ TEMEL MEDİTASYON\n\n
• Sessiz bir ortam seçin\n\n
• Rahat bir pozisyon alın\n\n
• Düşüncelerinizi gözlemleyin\n\n
🎯 MINDFULNESS UYGULAMALARI\n\n
• Yemek yeme farkındalığı\n\n
• Yürüyüş meditasyonu\n\n
• Duyusal farkındalık\n\n
💫 GÜNLÜK PRATİKLER\n\n
• 5 dakikalık mini meditasyonlar\n\n
• Günlük aktivitelerde farkındalık\n\n
• Duygu taraması`
        },
        {
          id: 3,
          icon: <FaSun />,
          title: 'Progresif Kas Gevşetme',
          content: `Vücuttaki gerginliği azaltan sistematik bir teknik.\n\n
💪 UYGULAMA ADIMLARI\n\n
• Sakin bir ortam seçin\n\n
• Rahat bir pozisyon alın\n\n
• Her kas grubunu sırayla çalışın\n\n
🔄 KAS GRUPLARI\n\n
• Eller ve kollar\n\n
• Yüz ve boyun\n\n
• Omuzlar ve sırt\n\n
• Karın ve bacaklar\n\n
⏱️ UYGULAMA ZAMANI\n\n
• Her kas grubu için 5-7 saniye kasılma\n\n
• 30 saniye gevşeme\n\n
• Toplam 15-20 dakika`
        }
      ]
    }
  };

  const currentModule = moduleContent[moduleId];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const getRecommendations = () => {
    const count = checkedItems.length;
    
    if (count === 0) return null;

    const recommendations = {
      social: [
        'Günde bir kez kısa süreli dışarı çıkma pratiği yapın',
        'Online sosyal gruplara katılarak başlayın',
        'Aile üyeleriyle günlük kısa sohbetler planlayın'
      ],
      anxiety: [
        'Nefes egzersizleri yapın',
        'Düşünce günlüğü tutun',
        'Kademeli maruziyet tekniklerini deneyin'
      ],
      selfEsteem: [
        'Günlük başarı listesi oluşturun',
        'Kendinize karşı nazik olma alıştırmaları yapın',
        'Güçlü yönlerinizi keşfetme çalışması yapın'
      ]
    };

    return (
      <div className="test-results">
        <h3>Test Sonuçları</h3>
        <p>İşaretlediğiniz {count} madde üzerinden değerlendirme:</p>
        <div className="severity-level">
          <span className={`severity ${count > 15 ? 'high' : count > 10 ? 'medium' : 'low'}`}>
            {count > 15 ? 'Yüksek Düzey' : count > 10 ? 'Orta Düzey' : 'Düşük Düzey'} 
            sosyal izolasyon eğilimi
          </span>
        </div>
        <div className="recommendations">
          <h4>Öneriler:</h4>
          <div className="recommendation-categories">
            <div className="recommendation-category">
              <h5>Sosyal Beceriler için:</h5>
              <ul>
                {recommendations.social.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            <div className="recommendation-category">
              <h5>Kaygı Yönetimi için:</h5>
              <ul>
                {recommendations.anxiety.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
            <div className="recommendation-category">
              <h5>Özgüven Geliştirme için:</h5>
              <ul>
                {recommendations.selfEsteem.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleCheckboxChange = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(item => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <div className="module-detail">
      <div className="module-detail-container">
        <h1>{currentModule?.title}</h1>
        <div className="module-description">
          <p>{currentModule?.description}</p>
          <div className="module-goals">
            <h3>Hedefler:</h3>
            <ul>
              {currentModule?.goals.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="module-sections">
          {currentModule?.sections.map((section) => (
            <div key={section.id} className="module-section">
              <div 
                className="section-header" 
                onClick={() => toggleSection(section.id)}
              >
                <div className="section-title">
                  <span className="section-icon">{section.icon}</span>
                  <h2>{section.title}</h2>
                </div>
                <span className={`arrow ${openSection === section.id ? 'open' : ''}`}>▼</span>
              </div>
              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="section-content"
                  >
                    {section.isChecklist ? (
                      <>
                        <div className="checklist">
                          {section.checklistItems.map((item, index) => (
                            <label key={index} className="checklist-item">
                              <input 
                                type="checkbox"
                                checked={checkedItems.includes(index)}
                                onChange={() => handleCheckboxChange(index)}
                              />
                              <span>{item}</span>
                            </label>
                          ))}
                        </div>
                        <div className="test-actions">
                          <button 
                            className="evaluate-button"
                            onClick={() => setShowResults(true)}
                            disabled={checkedItems.length === 0}
                          >
                            Testi Değerlendir
                          </button>
                        </div>
                        {showResults && getRecommendations()}
                      </>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail; 
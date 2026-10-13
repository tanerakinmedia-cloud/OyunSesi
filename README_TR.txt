# OyunSesi Masaüstü — başlangıç projesi

Bu klasör, Windows için Electron masaüstü uygulaması kaynak kodudur. Mikrofon seçimi, oda oluşturma/katılma arayüzü ve WebRTC/PeerJS prototipi içerir.

## Gerekenler
- Windows 10/11
- Node.js LTS: https://nodejs.org/
- İnternet bağlantısı

## İlk kez çalıştırma
1. ZIP dosyasını bir klasöre çıkar.
2. Node.js LTS'yi kur.
3. Bu klasörde Dosya Gezgini adres çubuğuna `cmd` yazıp Enter'a bas.
4. Açılan terminalde sırayla çalıştır:
   ```
   npm install
   npm start
   ```
5. Mikrofon izni ver. Mikrofon listesinden cihazını seçip sonra odayı oluştur/katıl.

## Windows kurulum dosyası (.exe) oluşturma
Aynı terminalde:
```
npm run dist
```
İşlem tamamlanırsa `dist` klasöründe kurulum dosyası oluşur.

## Önemli sınırlar
- Bu, test amaçlı ilk prototiptir; 5–10 kişi için güvenilirliği henüz doğrulanmamıştır.
- Ses bağlantısı PeerJS'in herkese açık sinyal sunucusunu kullanır. Bazı ağlarda doğrudan bağlantı başarısız olabilir; TURN sunucusu gerekebilir.
- Oda kodu kimlik doğrulaması değildir. Hassas/özel konuşmalar için bu prototipi kullanmayın.
- İnternet üzerinden kullanım için tüm arkadaşların uygulamayı çalıştırması ve aynı oda kodunu girmesi gerekir.
- Üretime çıkmadan önce güvenlik, yeniden bağlanma, oda yönetimi ve ses bağlantısı akışı iyileştirilmelidir.

---
layout: post
title:  "Enpara.com Android uygulaması"
categories: development
tags: enpara.com enpara android
---

Uzun zamandır beklediğim Enpara.com Android uygulamasının *sonunda* çıktığını biraz önce Enpara'dan  aldığım bir sms ile öğrendim. Kendileri de geciktiklerinin bilncinde olacaklar ki *"... sizleri çok beklettik ama"* ile başlayan bir sms atarak biraz kullanıcıları yumuşatmayı hedeflemişler.

Enpara gibi tüm işlemleri internet üstüne taşıyıp, şubeyi aradan çıkarmayı hedefleyen bir bankacılık anlayışının mobil uygulamayı aylar sonra çıkarması kabul edilemez. Ne varki rakiplerinin hantallığı ve geri kafalığı karşısında *"hadi len tamam affettim"* diyesim geliyor.

Uygulamayadan ilk izlenimler
----------------------------

Uygulamayı indirdim, ben indirken daha henüz 143 kişi indirmişti.

İlk açılışta çıkan koyu renkli yarı saydam bir "overlay" ile ana düğmelerin işlevleri anlatılmış. Genel olarak başarılı ancak ilk ekrandaki büyük giriş düğmesi etkin gibi göründüğü halde tıklanmayıp onun yerine sağ üstteki küçük "Tanıtımı geç" yazısına basılacak olması kötü bir kullanıcı deneyimi oluşturmuş.

Olumlu noktalar
---------------

* Tasarım ve renkler web sayfası ile uyumlu. Diyeceksiniz ki "e ne olacaktı!" öyle demeyin neler gördük :(
* Menüler sade ve kullanışlı, işlem akışları çok anlaşılır. Gerçi sadelikte zaten Enpara.com'da çok fazla işlem yapılamamasının da (örneğin SGK borcu veya trafik cezası ödenememesi) biraz etkisi var ama olsun.
* Garanti'nin cep şubesinde beni çok sinir eden müşteri numarasını her defasında girme derdi burada *"Müşteri numarasını hatırla"* seçeneği ile çözülmüş. Yaşasıııın :) `@garanti`: bu kadar zor muydu?
* Çıkış tuşuna basınca "Emin misiniz?" diye sormuyor, zönk diye çıkıyor uygulamadan. Bana Linux'un kullanıcıya yaklaşımı gibi geldi. "Çıkcam diyorsa çıkacaktır, açın yolu!" :D Acaba artık Outlook ve/veya IE8 kullanan `dummy user` tayfasını umursamıyorlar mı yoksa bunu sormayı unuttular mı? Umarım ilkidir diyerek şukusunu verdim.

Olumsuz noktalar
----------------

* Parola girdikten sonra gelen sms şifresini uygulama kendi yakalayabilirdi ama onun yerine ben elle yazdım.
* Gerçi sonraki girişlerimde bir daha hiç sms şifresi istemedi, belki de girişler arasında çok az zaman var diye bilemiyorum. Bunu bi takip edicem. Belki de bugdır :/
* Uygulama açıkken ana ekrana dönünce ya da tarayıcıya gidince oturum sonlanıyor, yeniden giriş yapmak gerekiyor. Garanti'nin uygulamasında böyle değil, oturumun sonlanması için ya kullanıcı özellikle çıkış yapmalı ya da oturum timeout olmalı. Bu büyük bir sorun ve kullanışlılığı çok düşürmüş.
* Hatta burada bir sorun var sanki: 
  1. Enpara uygulamasına giriş yap
  2. Başka uygulamaya geç
  3. Enpara'ya geri dön
  4. Enpara oturumun sonlandığını yaptığını bildiren bir mesaj gösterir
  5. Androidin ana ekranında takılırken bir süre sonra üst barda Enpara logosu belirir ve bildirimde de "3dkdır işlem yapmadığınız için oturumunuz sonlandırılmıştır" der.
  
 
  
Şimdilik bu kadar, kullandıkça yazmaya değer bir şeyler çıkarsa yazarım yine.

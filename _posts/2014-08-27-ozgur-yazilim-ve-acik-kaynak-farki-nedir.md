---
layout: post
title:  "Özgür Yazılım ve Açık Kaynak Kodlu Yazılım Farkı Nedir?"
categories: yazılım
duration: 4min
tags:
  - özgür-yazılım
  - açık-kaynak
  - özgür-yazılım-açık-kaynak-farkı
---

Bu iki kavram çokça karıştırılıyor. Elimden geldiğince kısa ve anlaşılabilir bir yazıyla farklarını hatırlatmak istedim.

Goygoyu geç sadete gel diyenler için <a href="#zgr-yazlm-ve-ak-kaynak-kodlu-yazlm-fark-nedir">farklar burada »</a>

---

## Özgür yazılım hakkında (belki) bilmedikleriniz

Farklardan bahsetmeden önce özgür yazılım hakkındaki sıklıkla görülen yanlış anlamaları düzeltelim.

### Bir yazılımın özgür yazılım olması için GPL'li olması gerekmez

<a href="#lgili-balantlar">İlgili bağlantılar</a> bölümünde da görebileceğiniz gibi GPL dışında bir çok özgür yazılım lisansı vardır.

_GPL nedir?: "GNU General Public License"ın kısaltılmışıdır. En yaygın kullanılan özgür yazılım lisansıdır._

### Özgür yazılımlar ücretsiz olmak zorunda değildir

GPL ile lisanslanmış olanlar da dahil <span style="color:#dd4814;font-weight:bold;">tüm özgür yazılımlar para ile satılabilir</span>. Hatta GPL lisansının 2. ve 3. sürümlerinde buna dair bir madde bile vardır.

### Özgür yazılım lisanslarının hepsi kodlarınızın sizin yazdığınız kısmını paylaşmanızı gerektirmez

Bir özgür yazılım üzerinde yaptığınız değişiklikleri sizin de özgür bir lisansla paylaşmanızı gerektiren kavrama `copyleft` denir<sup><a href="#referanslar">[1]</a></sup>.

Özgür yazılım lisansları `copyleft`li olmak zorunda değildir. Özgür yazılımın tanımının [açıklandığı sayfadan](http://www.gnu.org/philosophy/free-sw.html) alıntı:

> Freedom 3 includes the freedom to release your modified versions as free software. A free license may also permit other ways of releasing them; in other words, <strong>it does not have to be a copyleft license</strong>.

Örneğin siz özgür yazılım lisanslı bir A uygulaması alıp üzerine geliştirmeler yaptınız ve kullanmaya başladınız. Kullandığınız A uygulamasının özgün kodları dışındaki, kendi geliştirmelerinizi herkes ile paylaşmak zorunda değilsiniz. (Eğer A uygulaması copyleft içermeyen bir özgür yazılım lisansı kullanmışsa)

---

## Özgür yazılım nedir?

Lisansları aşağıdaki 4 koşulu sağlayan yazılımlar özgür yazılım kabul edilir<sup><a href="#referanslar">[2]</a></sup>.

    0. Programı dilediğin gibi, herhangi bir amaçla çalıştırma özgürlüğü.
    1. Programın nasıl çalıştığını inceleme ve dilediğin işlemleri yapacak biçimde onu değiştirme özgürlüğü.
    2. Kopyalarını dağıtma özgürlüğü.
    3. Kendi değiştirilmiş sürümlerini dağıtma özgürlüğü.

<br>

## Açık kaynaklı yazılım nedir?

Açık kaynaklı yazılım tanımı biraz daha uzun, o nedenle buraya koymadım. [Bu bağlantıdan](http://opensource.org/osd) ulaşabilirsiniz.

---

## Özgür Yazılım ve Açık Kaynak Kodlu Yazılım Farkı Nedir?

Aslında iki kavram arasında tanımsal olarak çok küçük farklar vardır. Asıl fark iki kavramın felsefi boyutundadır. Sanırım çoğu kişi, yazıktır, işin felsefi boyutunu umursamıyor. Eğer siz umursuyorsanız Stallman'ın bu konuyu çok net anlatan şahane bir yazısı var. Onun üzerine söyleceyecek başka bir şeyim yok, yazıyı kesinlikle okumanızı öneririm: [Açık kaynağın kaçırdığı nokta ne? - Richard Stallman](http://www.gnu.org/philosophy/open-source-misses-the-point.html)

Ben burada sektördekilerin öncelikle umursadığı ve asıl bilmek istediği bölüme değineceğim: Pratikteki farklar (ki neredeyse yok).

Bence açık kaynaklı yazılım lisanslarının tek farkı açık kaynak tanımının 4. maddesindeki

> The license may restrict source-code from being distributed in modified form only if the license allows the distribution of "patch files" with the source code for the purpose of modifying the program at build time.

tümcesinden kaynaklanıyor. Bu tümcenin anlamı şu: 

Bir açık kaynak lisansı, isterse, kullanıcılara özgün kodu değiştirerek yayınlamayı yasaklayabilir. Ancak bu durumda uygulamanın kaynak koddan build edildiği sırada değiştirilmesine olanak sağlayacak yamaları (patch) yayınlama izni vermek _zorundadır_.

Yani açık kaynak lisansları, özgün kodu ekleme yapılmış biçimde doğrudan dağıtmaya izin vermeyebilse de kullanıcıları, yaptıkları değişiklikleri kamudan tamamen saklamaya zorlayamaz.

Eğer kullanıcı değişiklikleri kamudan saklamayı kendi isterse o başka bir durum. Özgür yazılımlarda da açık kaynaklı yazılımlarda da lisans copyleft gerektirmiyorsa zaten kullanıcı isterse değişikliklerini saklayabilir<sup><a href="#referanslar">[4]</a></sup>.

Sonuç olarak açık kaynak lisansları ile özgür yazılım lisanslarının ticari açıdan bir farkı yok. Yani patronları korkutan şey aslında özgür yazılım değil _copyleft_ imiş, o da açık kaynak lisanslarında da olabiliyor imiş.

---

#### İlgili bağlantılar

* [Özgür yazılım lisanslarının Türkçe çevirileri](http://ozgurlisanslar.org.tr/)
* [Açık kaynağın kaçırdığı nokta ne? - Richard Stallman](http://www.gnu.org/philosophy/open-source-misses-the-point.html)
* [Özgür yazılım lisansları listesi](http://www.gnu.org/licenses/license-list.html)
* [Açık kaynaklı yazılım lisansları listesi](http://opensource.org/licenses)

#### Referanslar

1. [Copyleft tanımı](http://www.gnu.org/copyleft/)
2. [Özgür yazılım tanımı](http://www.gnu.org/philosophy/free-sw.html)
3. [Açık kaynaklı yazılım tanımı](http://opensource.org/osd)
4. [Copyleft olmayan özgür yazılımlar](http://www.gnu.org/philosophy/categories.html#Non-CopyleftedFreeSoftware)

#### Resimler

1. [http://commons.wikimedia.org/wiki/File:Free_Software_and_Open_Source_Software_Composite_Logo.svg](http://commons.wikimedia.org/wiki/File:Free_Software_and_Open_Source_Software_Composite_Logo.svg)
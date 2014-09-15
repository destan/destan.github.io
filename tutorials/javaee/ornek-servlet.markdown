---
layout: tutorial
title:  "Örnek Servlet"
tags:
  - javaEE
  - servlet

# tutorial
level: 2
section: "Java EE"
duration: 20min
author: Destan Sarpkaya
creation_date: 2014-09-03
update_date: 2014-09-03
version: v1
license: 
version_history: 

---

### Örnekte ne yapacağız

Bu örneğin sonunda sunucuda çalışan bir Java uygulamamız olacak. Biz tarayıcımıza bu uygulamanın URLsini yazınca, uygulama bir HTML sayfası üretecek ve tarayıcıya gönderecek. Böylelikle biz de üretilen HTML sayfasını görmüş olacağız.

<nav class="well">
  <header>İçindekiler</header>

{% markdown %}

1. [Başlamadan önce](#Başlamadan önce)
    1. [Tomcat 8 kurulumu](#Tomcat 8 kurulumu)
    2. [Eclipse Kurulumu](#Eclipse Kurulumu)
        1. [Eclipse indirme](#Eclipse indirme)
        2. [Eclipse Zaten Kuruluysa](#Eclipse Zaten Kuruluysa)
    3. [Eclipse'e sunucu (Tomcat 8) ekleme](#Eclipse'e sunucu ekleme)
2. [Bir Servlet Uygulaması Örneği](#Bir Servlet Uygulaması Örneği)
    1. [Eclipse'te Web Projesi Oluşturma](#Eclipse'te Web Projesi Oluşturma)
    2. [Eclipse'te Paket Oluşturma](#Eclipse'te Paket Oluşturma)
    3. [Servlet Sınıfı Yazımı](#Servlet Sınıfı Yazımı)
    4. [Sunucuya Servleti Tanıtma Yolu: `web.xml` veya Anotasyon](#Sunucuya Servleti Tanıtma Yolu: web.xml veya Anotasyon)
        1. [web.xml Kullanımı](#web.xml Kullanımı)
        2. [Anotasyon Kullanımı](#Anotasyon Kullanımı)
    5. [Projenin Son Görünümü](#Projenin Son Görünümü)
3. [Uygulamayı Çalıştırma](#Uygulamayı Çalıştırma)
    1. [Merhaba Dünya](#Merhaba Dünya)
4. [Neler Oldu? Yapılanların İncelemesi](#Neler Oldu? Yapılanların İncelemesi)
5. [Kaynak Kodları İndirin](#kaynak-kodlar-ndirin)

{% endmarkdown %}
</nav>


<h2 id="Başlamadan önce">Başlamadan önce</h2>

Eğer henüz <a href="/tutorials/javaee/servlet-nedir.html">Servlet nedir?</a> sunumunu okumadıysanız, bu örneğe başlamadan önce okumanızı kesinlikle tavsiye ederim.

<a href="/tutorials/javaee/servlet-nedir.html">Servlet nedir?</a> sunumunda belirtildiği gibi, yazacağımız `servlet`lerin çalıştırılabilmesi için bir `servlet container`a gereksinimimiz olacak. Servlet container olarak Tomcat 8 kullanacağız.

<h3 id="Tomcat 8 kurulumu">Tomcat 8 kurulumu</h3>

Tomcat 8'i <a href="http://tomcat.apache.org/download-80.cgi" target="_blank" rel="nofollow">bu adresten</a> indirebilirsiniz.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/tomcatDownloadLink.png" alt="Tomcat 8 indirme bağlantısı" title="Tomcat 8 indirme bağlantısı">
  <figcaption>.tar.gz uzantili dosyayi tercih edin. Windows kullananıyorsanız .zip tercih edin. </figcaption>
</figure>

<h3 id="Eclipse Kurulumu">Eclipse Kurulumu</h3>

Eclipse'i işletim sisteminizin paket yöneticisinden indirebilirsiniz. Ancak paket yöneticisinden yükleyeceğiniz Eclipse'in sürümü oldukça eski olacaktır. O nedenle <a href="#Eclipse indirme">bir sonraki</a> adıma geçerek kendinizin indirmesini öneririm.

Yine de paket yöneticisi kullanmak isteyenler için Ubuntu'da örnek:

{% highlight bash %}
$ sudo apt-get install eclipse-wtp
{% endhighlight %}

<section class="hint" title="ipucu">
  Paket yöneticisiyle indireceğiniz Eclipse'in sürümünü kurulumdan önce denetlemek için aşağıdaki komutu kullanabilirsiniz.
</section>

{% highlight bash %}
$ apt-cache policy eclipse-wtp
eclipse-wtp:
  Installed: (none)
  Candidate: 3.5.2-1
  Version table:
     3.5.2-1 0
        500 http://archive.ubuntu.com/ubuntu/ trusty/universe amd64 Packages
{% endhighlight %}

<h4 id="Eclipse indirme">Eclipse indirme</h4>

<a href="https://www.eclipse.org/downloads/" target="_blank" rel="nofollow">Şu adresten</a> _"Eclipse IDE for Java EE Developers"_ bağlantısındaki Eclipse'i indirip sıkıştırılmış dosyayı bir klasöre çıkarın. Başka bir şey yapmanıza gerek kalmadan `eclipse` dosyasına çift tıklayarak Eclipse'i kullanabilirsiniz.

<h4 id="Eclipse Zaten Kuruluysa">Eclipse Zaten Kuruluysa</h4>

Kullandığınız Eclipse sürümünün web geliştirmeye uygun sürüm olması gerekiyor. Bunu Eclipse'te `Help -> About Eclipse` menüsünden denetleyebilirsiniz.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseAbout.png" alt="Tomcat 8 indirme bağlantısı" title="Tomcat 8 indirme bağlantısı">
  <figcaption>"for web developers" ifadesi olmalı</figcaption>
</figure>

<br>

Eğer sizin Eclipse'iniz böyle değilse:

1. [Bir önceki adımdan](#Eclipse indirme) Eclipse'i indirebilirsiniz.
2. Eclipse WTP eklentisini kurabilirsiniz.

<h3 id="Eclipse'e sunucu ekleme">Eclipse'e sunucu (Tomcat 8) ekleme</h3>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/yeniSunucuContextMenu.png" alt="Eclipse'te yeni sunucu ekleme - Sağ tıklayarak açılan menü" title="Sağ tıklayarak açılan menü">
  <figcaption>Sağ tıklayarak açılan menüden 'New -> Other ...' seçeneğinini seçiyoruz</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/yeniSunucuContextMenu2.png" alt="Eclipse'te yeni sunucu ekleme - Server seçeneğinini seçiyoruz" title="Server seçeneğinini seçiyoruz">
  <figcaption>Bu menüden 'Server' seçeneğinini seçiyoruz</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/tomcat8-sec.png" alt="Eclipse'te yeni sunucu ekleme - Sağ tıklayarak açılan menü" title="Yeni sunucu seçimi">
  <figcaption><strong>Apache</strong> klasörü altında Tomcat 8 seçeneğinini seçiyoruz</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/yeniSunucu.png" alt="Eclipse'te yeni sunucu ekleme - Sunucunun yerini belirleme" title="Yeni sunucunun yerini belirleme">
  <figcaption>İndirdiğimiz Tomcat 8'i hangi klasör altına attıysak o klasörün yolunu (path) <em>Browse</em> düğmesine basarak veriyoruz.</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/sunucuTabindaYeniSunucu.png" alt="Eclipse'te yeni sunucu ekleme - Sunucu tabında yeni sunucu görünür" title="Sunucu tabında yeni sunucu görünür">
  <figcaption>Sunucular (Servers) tabında yeni sunucuyu görebiliriz.</figcaption>
</figure>

<br>

---

<h2 id="Bir Servlet Uygulaması Örneği">Bir Servlet Uygulaması Örneği</h2>

Artık yeni bir proje oluşturarak ilk servletimizi yazmaya hazırız.

<h3 id="Eclipse'te Web Projesi Oluşturma">Eclipse'te Web Projesi Oluşturma</h3>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-sag-tiklayarak-yeni-proje-ekleme.png" alt="Eclipse'te yeni proje ekleme - Sağ tıklayarak açılan menü" title="Sağ tıklayarak açılan menü">
  <figcaption>Menüden Dynamic Web Project seçeneğini seçiyoruz</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-yeni-proje-ozellikleri.png" alt="Eclipse'te yeni proje ekleme - Proje özelliklerini belirleme" title="Proje özelliklerini belirleme">
  <figcaption>Projenin adını yazarak Finish düğmesine basıyoruz. Diğer seçenekler ön tanımlı olarak geliyor.</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-projenin-ilk-yapisi.png" alt="Eclipse'te yeni proje ekleme - Projenin ilk yapısı" title="Projenin ilk yapısı">
  <figcaption>İlk oluşan proje böyle görünecek, henüz hiç kod yazmadık.</figcaption>
</figure>

<br>

<h3 id="Eclipse'te Paket Oluşturma">Eclipse'te Paket Oluşturma</h3>

Herhangi bir sınıf yaratmadan önce bir paket yaratmalıyız. Paket oluşturmak her zaman uyulması gereken bir standarttır, bunu isteğe bağlı olarak düşünmeyin!

`src` klasörünün altına bir paket oluşturalım.

Bunu `src` klasörüne sağ tıklayıp `New` seçeneğini seçerek veya `src` klasörünü seçip `CTRL+N` tuşlarına basarak yapabilirsiniz.

<figure>
  <img style="width:49%" src="/tutorials/javaee/img/ornekServlet/servletOrnegi-yeni-paket-olusturma.png" alt="Eclipse'te yeni proje ekleme - Yeni paket oluşturma" title="Yeni paket oluşturma">
  <img style="width:49%" src="/tutorials/javaee/img/ornekServlet/servletOrnegi-paketi-adlandirma.png" alt="Eclipse'te yeni proje ekleme - Paketi adlandırma" title="Paketi adlandırma">
  <figcaption>Paket adını "com.dorukdestan.tutorials.helloworld" olarak giriyoruz.</figcaption>
</figure>

<br>

<h3 id="Servlet Sınıfı Yazımı">Servlet Sınıfı Yazımı</h3>

`com.dorukdestan.tutorials.helloworld` paketinin altına `HelloWorldServlet` adında bir sınıf yaratalım.

{% highlight java %}
package com.dorukdestan.tutorials.helloworld;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorldServlet extends HttpServlet{

  private static final long serialVersionUID = 1L;
  
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    
    PrintWriter writer = resp.getWriter();
    writer.write("Merhaba dünya!");
  }

}

{% endhighlight %}

<h3 id="Sunucuya Servleti Tanıtma Yolu: web.xml veya Anotasyon">Sunucuya Servleti Tanıtma Yolu: `web.xml` veya Anotasyon</h3>

Projede kullanılan servletleri ve bu servletlere hangi urller üzerinden erişileceğini tanımlamak gereklidir. Bu tanımları yapmak için `web.xml` adında bir xml dosyası kullanabilir veya Servlet sınıflarının üstünde anotasyon kullanabiliriz.

Bu yazıda iki örneği de göreceğiz.

<h4 id="web.xml Kullanımı">web.xml Kullanımı</h4>

Projedeki `Deployment Descriptor: MerhabaDunya` öğesine sağ tıklayıp `Generate Deployment Descriptor Stub` seçeneğini seçerseniz Eclipse sizin için `WebContent/WEB-INF` klasörü altında bir `web.xml` dosyası oluştur.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-sonradan-otomatik-web-xml-olusturtma.png" alt="Eclipse'te yeni proje ekleme - Otomatik web.xml oluşturtma" title="Otomatik web.xml oluşturtma">
  <figcaption>web.xml dosyasının şablonunu otomatik olarak Eclipse oluşturtabiliriz.</figcaption>
</figure>

<br>

<section class="hint" title="ipucu">
  web.xml dosyasını, projeyi **ilk oluştururken** açılan pencerede, proje adını girdikten sonra "Finish" düğmesi yerine "Next" düğmesine basarak ilerleyip de oluşturabilirsiniz.

  <figure>
    <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-baslangicta-web-xml-olusturtma.png" alt="Eclipse'te yeni proje ekleme - Başlangıçta otomatik web.xml oluşturtma" title="Başlangıçta otomatik web.xml oluşturtma">
    <figcaption>web.xml dosyasının şablonunu otomatik olarak Eclipse oluşturtabiliriz.</figcaption>
  </figure>
</section>

<br>

Otomatik oluşturulan `web.xml` dosyasına servlet tanımı ve servlet mappingi ekleyelim. Dosyanın son hali şöyle olacak: 

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
  version="3.1">
  
  <display-name>MerhabaDunya</display-name>

  <!-- Servlet tanimi -->
  <servlet>
    <servlet-name>MyFirstServlet</servlet-name>
    <servlet-class>com.dorukdestan.tutorials.helloworld.HelloWorldServlet</servlet-class>
  </servlet>

  <!-- Servlet mapping. Bu servlete hangi url uzerinden erisilebilecegini tanimlar. -->
  <servlet-mapping>
    <servlet-name>MyFirstServlet</servlet-name>
    <url-pattern>/selam</url-pattern>
  </servlet-mapping>

  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.htm</welcome-file>
    <welcome-file>default.jsp</welcome-file>
  </welcome-file-list>
</web-app>
{% endhighlight %}

<br>

<h4 id="Anotasyon Kullanımı">Anotasyon Kullanımı</h4>

Servlet 3.0 spesifikasyonundan itibaren web.xml kullanmak yerine servlet tanımlarını anotasyonlarla yapabiliyoruz.

{% highlight java %}
package com.dorukdestan.tutorials.helloworld;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/selam")
public class HelloWorldServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    PrintWriter writer = resp.getWriter();
    writer.write("Merhaba dünya!");
  }

}
{% endhighlight %}

<span style="color:green;font-weight:bold;">@WebServlet</span><span style="color:blue;font-weight:bold;">("/selam")</span>

Yukarıdaki yeşil bölüm servlet tanımı, mavi bölüm ise servlet url mapping tanımıdır. Url mapping bu servlete hangi urlden yapılan isteklerin ulaşacağını belirler.

<section class="hint" title="ipucu">
  <p><code>@WebServlet("/selam")</code> kullanımı aslında <code>@WebServlet(urlPatterns = { "/selam" })</code> kullanımının kısayoludur.
  </p>

  <p>Tek bir servlet için `@WebServlet(urlPatterns = { "/selam", "/naber", "/salute" })` biçiminde birden çok URL de tanımlayabilirsiniz.</p>
</section>

<section class="warn">
  Anotasyon kullandığınız zaman, web.xml dosyasını tamamen silebilirsiniz. Uygulamanız sorunsuz çalışır. Ancak anotasyon ile yapamadığımız bazı ayarlar vardır (welcome-files-list, session-timeout gibi). Bu ayarları vermek için web.xml dosyasını anotasyon kullandığımız uygulamalarda da kullanırız.
</section>

<section class="error">
  Anotasyon ve web.xml dosyasını birlikte kullanıyorsanız, web.xml dosyasından servlet tanımlarını ve mappingleri sildiğinizden emin olun!
</section>

<br>

<h3 id="Projenin Son Görünümü">Projenin Son Görünümü</h3>

Proje son durumda şöyle görünüyor:

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-projenin-calisan-durumda-gorunumu.png" alt="Eclipse'te yeni proje ekleme - Projenin çalışan durumunda dosya ve klasör yapısı" title="Projenin çalışan durumunda dosya ve klasör yapısı">
  <figcaption>Projenin çalışan durumunda dosya ve klasör yapısı.</figcaption>
</figure>

<br>

<h2 id="Uygulamayı Çalıştırma">Uygulamayı Çalıştırma</h2>

Projeye sağ tıklayarak açılan menüden uygulamamızı Tomcat'e deploy ederek çalıştırabiliriz.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-uygulamayi-calistirma.png" alt="Eclipse'te yeni proje ekleme - Eclipse web uygulaması çalıştırma" title="Eclipse web uygulaması çalıştırma">
  <figcaption>Eclipse üzerinden web uygulaması çalıştırma.</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/servletOrnegi-sunucuyu-secme.png" alt="Eclipse'te yeni proje ekleme - Uygulamanın üzerinde çalışacağı sunucuyu seçme" title="Uygulamanın üzerinde çalışacağı sunucuyu seçme">
  <figcaption>Mavi kutucuğu işaretlerseniz bir daha sunucu seçimi için size sormadan Tomcat'e deploy eder.</figcaption>
</figure>

<br>

<h3 id="Merhaba Dünya">Merhaba Dünya</h3>

<a href="http://localhost:8080/MerhabaDunya/selam" target="_blank" rel="nofollow">http://localhost:8080/MerhabaDunya/selam</a> adresini ziyaret ederseniz Java servlet kullanarak dünyaya merhaba dediğinizi görebilirsiniz.

<section class="warn" title="uyarı">
  Uygulamayı ilk çalıştırdığınızda Eclipse'in otomatik olarak gösterdiği tarayıcıda 404 hatası alacaksınız. Çünkü Eclipse <code>http://localhost:8080/MerhabaDunya</code> adresini açar. Bu adres bizim uygulamamız için <code>base</code> adrestir. Yani <code>/</code> URLsine denk gelir. Oysa biz web.xml dosyasında sadece <code>/selam</code> URLsi için bir mapping tanımladık. Bu nedenle uygulamamız <code>/</code> URLsi için ne yapacağını bilmez ve hata verir.
</section>

<br>

<h2 id="Neler Oldu? Yapılanların İncelemesi">Neler Oldu? Yapılanların İncelemesi</h2>

Önce uygulamaya eriştiğimiz adresi inceleyelim:

<p style="font-weight: bold;color: #999;">
  http://<span style="color: black;">localhost</span>:<span style="color: #00B800">8080</span>/<span style="color: blue">MerhabaDunya</span>/<span style="color: #FF00EB">selam</span>
</p>

<span style="font-weight: bold; color: black;">Domain</span>: Sunucunun çalıştığı bilgisayarın adresidir.
<br>
<span style="font-weight: bold; color: #00B800">Port</span>: Tomcat varsayılan olarak 8080 portundan çalışır. Bunu Tomcat yapılandırmasından veya Eclipse üzerinden değiştirebilirsiniz.
<br>
<span style="font-weight: bold; color: blue">Context Root</span>: Sunucu üzerinde birden çok uygulama çalışabilir. Erişmek istediğiniz uygulamanın context rootunu yazarak isteklerinizi o uygulamaya iletirsiniz.
<br>
<span style="font-weight: bold; color: #FF00EB">URL</span>: Bu bölüme yazılan URLler uygulamada tanımlanan mappinglere göre ilgili servetlere yönlendirilir. Eğer bu kısım yazılmazsa URL `/` olarak girilmiş kabul edilir. 


**Adım adım olanlar:**

1. `http://localhost:8080/MerhabaDunya/selam` adresini tarayıcının adres çubuğuna yazınca tarayıcı bu adrese **HTTP GET** isteği yapar.
2. İstek `http://localhost:8080` adresindeki Tomcat'e ulaşır.
3. Sunucu gelen isteğin pembe kısmına bakar. Tanımlı mappingler içinde bu `/selam` URLsine ilişkilendirilmiş bir servlet arar.
4. Tanımlı mappinglere göre `/selam` URLsi ile `HelloWorldServlet` servleti ilişkilendirilmiş.
5. Sunucu (servlet container) `HelloWorldServlet` sınıfından bir nesne yaratır.
6. Gelen istek bir GET isteği olduğu için `HelloWorldServlet` nesnesinin `doGet` methodu çağırılır.
7. Bizim yazdığımız kodlar `doGet` methodu içinde `response` nesnesini değiştirir.
8. Sunucu `response` nesnesini HTMLe çevirir ve kullanıcının tarayıcısına geri yollar.

## Kaynak Kodları İndirin

* <a href="https://github.com/JavaOrnekleri/OrnekServlet/archive/master.zip" target="_blank" rel="nofollow"> ▼ .zip olarak indir (Anotasyon kullanan sürüm)</a>
* <a href="https://github.com/JavaOrnekleri/OrnekServlet/archive/web-xml.zip" target="_blank" rel="nofollow"> ▼ .zip olarak indir (web.xml kullanan sürüm)</a>


veya

git kullanarak `clone`la

{% highlight bash %}
# Anotasyon kullanan sürüm
$ git clone https://github.com/JavaOrnekleri/OrnekServlet.git

# web.xml kullanan sürüm
$ git clone https://github.com/JavaOrnekleri/OrnekServlet.git --branch web-xml --single-branch
{% endhighlight %}

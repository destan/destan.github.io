---
layout: tutorial
title:  "Örnek Servlet"
tags:
  - javaEE
  - servlet

# tutorial
level: 2
section: "Java EE"
duration: 15min
author: Destan Sarpkaya
creation_date: 2014-09-03
update_date: 2014-09-03
version: v1
license: 
version_history: 

---

### Örnekte ne yapacağız

Bu örneğin sonunda sunucuda çalışan bir Java uygulamamız olacak. Biz tarayıcımıza bu uygulamanın URLsini yazınca, uygulama bir HTML sayfası üretecek ve tarayıcıya gönderecek. Böylelikle biz de üretilen HTML sayfasını görmüş olacağız.

## Başlamadan önce

Eğer henüz <a href="/tutorials/javaee/servlet-nedir.html">Servlet nedir?</a> sunumunu okumadıysanız, bu örneğe başlamadan önce okumanızı kesinlikle tavsiye ederim.

<a href="/tutorials/javaee/servlet-nedir.html">Servlet nedir?</a> sunumunda belirtildiği gibi, yazacağımız `servlet`lerin çalıştırılabilmesi için bir `servlet container`a gereksinimimiz olacak. Servlet container olarak Tomcat 8 kullanacağız.

### Tomcat 8 kurulumu

Tomcat 8'i <a href="http://tomcat.apache.org/download-80.cgi" target="_blank" rel="nofollow">bu adresten</a> indirebilirsiniz.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/tomcatDownloadLink.png" alt="Tomcat 8 indirme bağlantısı" title="Tomcat 8 indirme bağlantısı">
  <figcaption>.tar.gz uzantili dosyayi tercih edin. Windows kullananıyorsanız .zip tercih edin. </figcaption>
</figure>

### Eclipse'iniz Uygun Mu?

Herşeyden önce kullandığınız Eclipse sürümünün web geliştirmeye uygun sürüm olması gerekiyor. Bunu `Eclipse'te Help -> About Eclipse` menüsünden denetleyebilirsiniz.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseAbout.png" alt="Tomcat 8 indirme bağlantısı" title="Tomcat 8 indirme bağlantısı">
  <figcaption>"for web developers" ifadesi olmalı</figcaption>
</figure>

<br>

Eğer sizin Eclipse'iniz böyle değilse şu adresten _"Eclipse IDE for Java EE Developers"_ bağlantısındaki Eclipse'i indirebilirsiniz.

### Eclipse'e sunucu (Tomcat 8) ekleme

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

## Eclipse'te Yeni Proje Oluşturma

Artık yeni bir proje oluşturarak ilk servletimizi yapmaya hazırız.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-1.png" alt="Eclipse'te yeni proje ekleme - Sağ tıklayarak açılan menü" title="Sağ tıklayarak açılan menü">
  <figcaption>Menüden Dynamic Web Project seçeneğini seçiyoruz</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-2.png" alt="Eclipse'te yeni proje ekleme - Proje özelliklerini belirleme" title="Proje özelliklerini belirleme">
  <figcaption>Projenin adını yazarak Finish düğmesine basıyoruz. Diğer seçenekler ön tanımlı olarak geliyor.</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-3.png" alt="Eclipse'te yeni proje ekleme - Projenin ilk yapısı" title="Projenin ilk yapısı">
  <figcaption>İlk oluşan proje böyle görünecek, henüz hiç kod yazmadık.</figcaption>
</figure>

<br>

## Önce Paketler

Herhangi bir sınıf yaratmadan önce bir paket yaratmalıyız. `src` klasörünün altına bir paket oluşturalım.

Bunu `src` klasörüne sağ tıklayıp `New` seçeneğini seçerek veya `src` klasörünü seçip `CTRL+N` tuşlarına basarak yapabilirsiniz.

<figure>
  <img style="width:49%" src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-4.png" alt="Eclipse'te yeni proje ekleme - Yeni paket oluşturma" title="Yeni paket oluşturma">
  <img style="width:49%" src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-5.png" alt="Eclipse'te yeni proje ekleme - Paketi adlandırma" title="Paketi adlandırma">
  <figcaption>Paket adını "com.dorukdestan.tutorials.helloworld" olarak giriyoruz.</figcaption>
</figure>

<br>

## İlk Servlet Sınıfımız

paketinin altına `HelloWorldServlet` adında bir sınıf yaratalım.

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

## Sunucuya Servleti Tanıtma Yolu: `web.xml`

Projede kullanılan servletleri ve bu servletlere hangi urller üzerinden erişileceğini tanımlamak için `web.xml` adında bir xml dosyası kullanılır.

Projedeki `Deployment Descriptor: MerhabaDünya` öğesine sağ tıklayıp `Generate Deployment Descriptor Stub` seçeneğini seçerseniz Eclipse sizin için `WebContent/WEB-INF` klasörü altında bir `web.xml` dosyası oluştur.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-6.png" alt="Eclipse'te yeni proje ekleme - Otomatik web.xml oluşturma" title="Otomatik web.xml oluşturma">
  <figcaption>web.xml dosyasının şablonunu otomatik olarak Eclipse oluşturtabiliriz.</figcaption>
</figure>

<br>

Otomatik oluşturulan `web.xml` dosyasına servlet tanımı ve servlet mappingi ekleyelim. Dosyanın son hali şöyle olacak: 

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://xmlns.jcp.org/xml/ns/javaee"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
  version="3.1">
  
  <display-name>MerhabaDünya</display-name>

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

Proje son durumda şöyle görünüyor:

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-7.png" alt="Eclipse'te yeni proje ekleme - Projenin çalışan durumunda dosya ve klasör yapısı" title="Projenin çalışan durumunda dosya ve klasör yapısı">
  <figcaption>Projenin çalışan durumunda dosya ve klasör yapısı.</figcaption>
</figure>

<br>

## Uygulamayı Çalıştırma

Projeye sağ tıklayarak açılan menüden uygulamamızı Tomcat'e deploy ederek çalıştırabiliriz.

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-8.png" alt="Eclipse'te yeni proje ekleme - Eclipse web uygulaması çalıştırma" title="Eclipse web uygulaması çalıştırma">
  <figcaption>Eclipse üzerinden web uygulaması çalıştırma.</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/javaee/img/ornekServlet/eclipseYeniProje-9.png" alt="Eclipse'te yeni proje ekleme - Uygulamanın üzerinde çalışacağı sunucuyu seçme" title="Uygulamanın üzerinde çalışacağı sunucuyu seçme">
  <figcaption>Mavi kutucuğu işaretlerseniz bir daha sunucu seçimi için size sormadan Tomcat'e deploy eder.</figcaption>
</figure>

<br>

## Merhaba Dünya

<a href="http://localhost:8080/MerhabaDünya/selam" target="_blank" rel="nofollow">http://localhost:8080/MerhabaDünya/selam</a> adresini ziyaret ederseniz Java servlet kullanarak dünyaya merhaba dediğinizi görebilirsiniz.

<section class="warn">
  Uygulamayı ilk çalıştırdığınızda Eclipse'in otomatik olarak gösterdiği tarayıcıda 404 hatası alacaksınız. Çünkü Eclipse <code>http://localhost:8080/MerhabaDünya</code> adresini açar. Bu adres bizim uygulamamız için <code>base</code> adrestir. Yani <code>/</code> URLsine denk gelir. Oysa biz web.xml dosyasında sadece /selam URLsi için bir mapping tanımladık. Bu nedenle uygulamamız <code>/</code> URLsi için ne yapacağını bilmez ve hata verir. 
</section>

<br>

## Neler Oldu?

Önce uygulamaya eriştiğimiz adresi inceleyelim:

<p style="font-weight: bold;color: #999;">
  http://<span style="color: black;">localhost</span>:<span style="color: #00B800">8080</span>/<span style="color: blue">MerhabaDünya</span>/<span style="color: #FF00EB">selam</span>
</p>

<span style="font-weight: bold; color: black;">Domain</span>: Sunucunun çalıştığı bilgisayarın adresidir.
<br>
<span style="font-weight: bold; color: #00B800">Port</span>: Tomcat varsayılan olarak 8080 portundan çalışır. Bunu Tomcat yapılandırmasından veya Eclipse üzerinden değiştirebilirsiniz.
<br>
<span style="font-weight: bold; color: blue">Context Root</span>: Sunucu üzerinde birden çok uygulama çalışabilir. Erişmek istediğiniz uygulamanın context rootunu yazarak isteklerinizi o uygulamaya iletirsiniz.
<br>
<span style="font-weight: bold; color: #FF00EB">URL</span>: Bu bölüme yazılan URLler uygulamada tanımlanan mappinglere göre ilgili servetlere yönlendirilir. Eğer bu kısım yazılmazsa URL `/` olarak girilmiş kabul edilir. 


**Adım adım olanlar:**

1. `http://localhost:8080/MerhabaDünya/selam` adresini tarayıcının adres çubuğuna yazınca tarayıcı bu adrese **HTTP GET** isteği yapar.
2. Sunucu gelen isteğin pembe kısmına bakar. Tanımlı mappingler içinde bu `/selam` URLsine ilişkilendirilmiş bir servlet arar.
3. Tanımlı mappinglere göre `/selam` URLsi ile `HelloWorldServlet` servleti ilişkilendirilmiş.
4. Sunucu (servlet container) `HelloWorldServlet` sınıfından bir nesne yaratır.
5. Gelen istek bir GET isteği olduğu için `HelloWorldServlet` nesnesinin `doGet` methodu çağırılır.
6. Bizim yazdığımız kodlar `doGet` methodu içinde `response` nesnesini değiştirir.
7. Sunucu `response` nesnesini HTMLe çevirir ve kullanıcının tarayıcısına geri yollar.

## Kaynak Kodları İndirin

<a href="https://github.com/destan/servlet-ornegi/archive/merhaba-dunya.zip" target="_blank" rel="nofollow"> ▼ .zip olarak indir</a>

veya

git kullanarak clonela

{% highlight bash %}
$ git clone https://github.com/destan/servlet-ornegi.git
{% endhighlight %}

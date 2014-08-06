---
layout: post
title:  "Linux Yaz Kampı 2014 Java Eğitimi Ön Hazırlık"
categories: yazılım
tags:
  - java
  - linux-yaz-kampı
  - linux-yaz-kampı-2014
---

Linux Yaz Kampı 2014'te Java eğitimi katılımcılarından kampa gelmeden önce bilgisayarlarında bir yazılım geliştirme ortamı oluşturmalarını istiyoruz. 

Temelde beklediğimiz 3 basit şey var: Linux, JDK ve Eclipse. İsteğe bağlı olarak Sublime.

İşletim sistemi
---------------

Kesinlikle bir Linux dağıtımı kullanın. Yeni kuracak olanlar lütfen **[Ubuntu](http://www.ubuntu.com/download/desktop)** veya **Mint** tercih etsin.

### Bilgisayarında Linux yüklü olmayanlar

* Lütfen yüklesin :)
* Linux yükleyecek teknik yeterlilikte olmayanlar, kampa gelmeden önce, en az 10GB hacmi olan bir **boş** sürücü hazırlasın.
  - Örneğin D: veya E: sürücüsü. Ama tamamen boş olmalı.
* Kampa gelirken yanlarında en az 2gb kapasiteli **boş** alanı olan bir çubuk bellek getirsin.

### İlla ki Windows diyenler

Bir sorun yaşadıklarında yardım edemeyebiliriz :( 

Java
----

Bilgisayarınızda `JDK`'nin son sürümünün yüklü olduğundan emin olun. JDK yüklemek için debian tabanlı dağıtımlarda aşağıdaki komutları kullanabilirsiniz:

```
sudo apt-get install openjdk-7-jdk
```

Diğer dağıtımları olanlar kendi paket yöneticilerinden `openjdk-7-jdk` paketini yükleyebilir.

Windozcular [buradan](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) :)

Eclipse
-------

Java geliştirmek için Eclipse IDEsini kullanacağız. Eclipse'i [kendi sitesi](https://www.eclipse.org/downloads/)nden indirebilirsiniz.

Eğitim sürecinde sınıfın durumuna göre web konularına girme olasılığımız olduğu için **Eclipse IDE for Java EE Developers** seçeneğini indirmelisiniz.

### Kullanımı

JDKyi kurduktan sonra Eclipse'i tar.gz dosyasından çıkarttığınız zaman klasör içindeki `eclipse` dosyasına çift tıklayarak kullanmaya başlayabilirsiniz.

Sublime 
-------

(zorunlu değil)

Eğitim boyunca bazen text editöre ihtiyacımız olabilir. Bunun için http://www.sublimetext.com/3 adresinden `Sublime` uygulamasını indirebilirsiniz. Ubuntu kullanıyorsanız `.deb` dosyasını çift tıklayarak kurabilirsiniz. Diğer dağıtımlar için _tarball_ indirip içindekileri bir yere çıkarıp kullanmaya başlayabilirsiniz. (Eclipse gibi)
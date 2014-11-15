---
layout: tutorial
title:  "MVC Nedir | JavaEE Uygulama Mimarisi"
tags:
  - javaEE
  - spring
  - tasarım desenleri
  - uygulama mimarisi
description: "Gerek Java gerek .net dünyasında çokça sözü edilen MVC kavramının örneklerle açıklandığı bir yazı."

# tutorial
level: 0
section: "Java EE"
duration: 5min
author: Destan Sarpkaya
creation_date: 2014-09-23
update_date: 2014-09-23
version: v1
license: 
version_history: 
---

Hangi dili kullanırsak kullanalım büyük ölçekli bir uygulama geliştirirken projenin yapısını yönetilebilir, genişletilebilir ve anlaşılabilir tutmak isteriz. Uygulama mimarisini bu isteklere yanıt verebilecek biçimde seçmek isteriz. Bu kaygılar bizi (özellikle web uygulamalarında) MVC kavramına götürür.

Bu yazıda, neredeyse herkesin o veya bu biçimde duyduğu MVC kavramını diğer mimari yapılarla ilişkilerini de anlatarak açıklamaya çalışacağız.

<h2 id="MVC Nedir?">MVC Nedir?</h2>

MVC (Model-View-Controller) bir tasarım deseni (design pattern) veya bir mimari desendir (architectural pattern). Bazı kaynaklar tasarım deseni bazı kaynaklar mimari desen demekte ancak bu konuda kesin bir kanı ve genel geçer doğru bir tanım yoktur. Kesin doğru aramak yerine MVCnin geliştiriciye ne öğütlediğini öğrenerek çıkarım yapmak en yararlısı olabilir.

<h3 id="MVC İlk Nasıl Çıktı?">MVC İlk Nasıl Çıktı?</h3>

Çok ayrıntıya girmeden, MVC kavramının 1978'de Xerox PARC şirketinde çalışan <em>Trygve Reenskaug</em> tarafından ortaya atıldığını<sup><a href="#kaynak 1" rel="nofollow">[1]</a></sup>, ilk olarak Smalltalk-80 programlama dili ile kullanılmaya başlandığını not edelim.

MVC kavramı ilk ortaya çıktığında bizim şimdi masaüstü uygulamaları olarak tanımladığımız uygulamalar için düşünülmüştü.

MVC kullanıcının kafasındaki model (mental model) ile bilgisayardaki model arasında bağ kurma sorununa çözüm olarak önerilmiş<sup><a href="#kaynak 1" rel="nofollow">[1]</a></sup>. Bu sorun uygulamalar ne kadar gelişip değişirse değişsin günümüzde hala mevcut. Bu nedenle bu ortak sorunun çözümü olan MVC kavramı 35 yıl önce ortaya atılmasına ve şimdiki web uygulamalarından çok farklı uygulamalar için tasarlanmasına karşın, zamanla evrimleşip gelişerek günümüzde vazgeçilmez bir mimari kavram olarak karşımıza çıkıyor.

<h2 id="MVC Nasıl Çalışır?">MVC Nasıl Çalışır?</h2>

MVC kavramı ile geliştirilen uygulamalar belli sorumlulukları uygulama içinde paylaştırırlar.

**Model**: Uygulama domainindeki verileri ve verilerin değişimini yönetir

**View**: Modellerin yani verilerin kullanıcıya UI üzerinden gösterilmesini yönetir

**Controller**: Kullanıcı girdilerine (input) göre modelde değişiklik yapar ve değişen modele göre viewi günceller

MVC kavramının kesin bir tanımı, bir standartı olmadığı için birkaç çeşit uygulaması vardır. Örneğin yukarıdaki tanımlar pasif `view` kullanan bir MVC kavramını tanımlar. Bu kullanımda `view`ı güncellemek `controller`ın sorumluluğudur.

Başka bir kullanımda `view`ı güncellemek modelin sorumluluğu olarak tanımlanabilir. Kullanılan tanımlar diller arasında hatta aynı dildeki uygugulama çatıları (framework) arasında bile değişik olabilir.

<h2 id="3 Katmanlı Mimari">3 Katmanlı Mimari</h2>

<h2 id="Model 1 ve Model 2">Model 1 ve Model 2</h2>

<h3 id="Model 2 ve MVC İlişkisi">Model 2 ve MVC İlişkisi</h3>

<h3 id="Spring MVC">Spring MVC</h3>

<h2>Kaynaklar</h2>

1. <a id="kaynak 1" href="http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html" target="_blank" rel="nofollow">Trygve Reenskaug kişisel sayfası</a>
---
layout: post
title:  "SEO'da Devrim: Google crawler javascript çalıştırmaya başlıyor"
categories: yazılım
tags:
 - seo
 - google-crawler
 - javascript
 - tek-sayfa-uygulama
 - tek-sayfa-uygulamalar
 - angularjs
---

Search Engine Optimization (SEO) çalışmalarında son zamanlarda en çok uğraşılan konu JavaScript ile yaratılan içeriğin arama motorlarına gösterilmesiydi. Bunun nedeni donanımların güçlenip tarayıcıların JavaScript'i daha hızlı çalıştırabilmesiyle artık web sitelerinin yerini içeriği JavaScript ile dinamik oluşturan web uygulamalarının almış olmasıydı. Bunun yanında bir de tek sayfa uygulamaların (single page application) popülerleşmesi, web uygulaması kavramını piyasada iyice baskın konuma getirirken SEO işlerini de iyice zorlaştırmıştı.

Şimdiye dek JavaScript ile yaratılan içerikleri arama motorlarına göstermenin yolu kullanıcıya normal sayfayı, arama moturuna ise sunucu tarafında JavaScript'in çalıştırılmasıyla hazırlanmış "pre-rendered" sayfayı sunmak idi. Ancak Google'ın bloğundan Cuma günü duyurduğu [habere göre](http://googlewebmastercentral.blogspot.com.tr/2014/05/understanding-web-pages-better.html) artık **Google crawler sayfalardaki JavaScript'i çalıştıracak**.

Yazıda ayrıca önümüzdeki günlerde Google'ın sayfaları nasıl render ettiğini anlamayı kolaylaştıracak debug araçlarını web master araçlarından görebileceğimiz de belirtilmiş.

Belirsizlikler
--------------

Google'ın sayfaların düzgün render edilebilmesi için gerekli koşulları sıraladığı listede şu madde dikkati çekiyor:

> Sometimes the JavaScript may be too complex or <span class="has-translation" title="gizemli (requiring secret knowledge to be understood; mysterious)">arcane</span> for us to execute, in which case we can’t render the page fully and accurately.

Burada neyin "complex", neyin <span class="has-translation" title="gizemli (requiring secret knowledge to be understood; mysterious)">"arcane"</span> olduğu çok muğlak. Umarım önümüzdeki günlerde bunları açıklığa kavuşturacak yeni blog yazıları gelir Google'dan.

Bu durum Google'ın JavaScript uygulama çatısı AngularJs ile geliştirilen uygulamalar için iyi bir haber mi yoksa AngularJs uygulamaları Google için "complex" ve "arcane" mi yakında öğreneceğiz.
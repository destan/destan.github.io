---
layout: tutorial
title:  "Eclipse'te build path nerede?"
tags:
  - eclipse
  - build-path
  - java-build-path
  - yapılandırma
  - configuration
description: "Eclipse kullanırken çokça gereksinim duyacağınız Build Path yapılandırmasına nasıl erişebileceğinizi anlatır."

# tutorial
level: 1
section: "Eclipse"
duration: 1min
author: Destan Sarpkaya
creation_date: 2014-09-01
update_date: 2014-09-01
version: v1
license:
version_history: 
---

Eclipse'te projenizin adının yanında kırmızı bir ünlem varsa büyük olasılıkla `build path`inizde bir sorun vardır. Bu durumda build path menüsünü açıp kütüphanelerinizi düzenlemeniz gerekir.

1. Bunun için sol tarafta bulunan `project explorer` veya `package explorer` bölümünden proje adnızı bulup sağ tıklayın.
2. Açılan menüde `Build path Configure build path` seçeneğini seçin (Resim 1).
3. Bir açılır-pencerede (popup) build path menüsüne ulaşabilirsiniz (Resim 2).

<figure>
  <img src="/tutorials/eclipse/img/buildPathMenu.png" alt="Eclipse build path nerede?">
  <figcaption>Resim 1 - Projeye sağ tıklayarak açılan menü</figcaption>
</figure>

<br>

<figure>
  <img src="/tutorials/eclipse/img/buildPath.png" alt="Eclipse java build path">
  <figcaption>Resim 2 - Build path menüsü</figcaption>
</figure>

<br>

Java build path menüsünün ayrıntılı kullanım bilgisi için <a href="http://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2Freference%2Fref-properties-build-path.htm" target="_blank" rel="nofollow">Eclipse belgelerindeki build path sayfasına (İngilizce)</a> bakabilirsiniz.

## Java Build Path Nedir?

Java projeniz derlenirken, derleyicinin bağımlılıkları bulmak için kullandığı `path`dir. Aşağıdakileri içerir:

* Kaynak klasörünüzdeki (`src`) sınıflar
* Proje ile ilişkilendirilmiş JARlar ve klasörler
* Projenize bağlanmış diğer projelerin dışa aktardığı (export) sınıflar ve JARlar
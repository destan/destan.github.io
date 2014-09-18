---
layout: tutorial
title:  "Ubuntu JDK 8 Kurulumu"
tags:
  - java
  - jdk 8
  - kurulum
description: "Ubuntu'da JDK 8 nasıl kurulur? OpenJDK8 repolarda olmadığı halde paket yöneticisi üzerinden kurulum nasıl yapılacak? gibi soruların yanıtlarını bulabilirsiniz."

# tutorial
level: 1
section: "Java EE"
duration: 1min
author: Destan Sarpkaya
creation_date: 2014-09-02
update_date: 2014-09-02
version: v1
license: 
version_history: 

---

OpenJDK8 paketi henüz Ubuntu paket yöneticisinde olmadığı için (bakınız ilgili <a href="https://bugs.launchpad.net/ubuntu/+source/openjdk-8/+bug/1341628" target="_blank" rel="nofollow">bug</a>) Oracle JDK 8 sürümünü PPA üzerinden kuracağız.

<a href="http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html" target="_blank" rel="nofollow">WebUpd8</a> tarafından sağlanan PPAyı ekleyip paketi kuruyoruz. Bu paket aslında Oracle'ın <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank" rel="nofollow">sağladığı</a> dosyayı indirerek gerekli yapılandırmaları sizin için otomatik olarak yapıyor.

### Kurulum

Aşağıdaki komutları ('$' işareti olmadan) sırasıyla konsola girin. Konsolu `CTRL+ALT+T` tuşları ile açabilirsiniz.

{% highlight bash %}
$ sudo add-apt-repository ppa:webupd8team/java
$ sudo apt-get update
$ sudo apt-get install oracle-java8-installer
{% endhighlight %}


Kurulum 153 Mb veri indirileceği için biraz zaman alabilir. Kurulumun sonunda konsolda yazan logların son satırlarına bakın.

{% highlight bash %}
Oracle JDK 8 installed
update-alternatives: using /usr/lib/jvm/java-8-oracle/jre/lib/amd64/libnpjp2.so to provide /usr/lib/mozilla/plugins/libjavaplugin.so (mozilla-javaplugin.so) in auto mode
Oracle JRE 8 browser plugin installed
Setting up gsfonts-x11 (0.22) ...
{% endhighlight %}

Yukarıdaki yazılar gibi kurulumun başarıyla tamamlandığını belirten loglar olduğundan emin olun.

### Java sürümünü denetleyin

Kurulum sorunsuz tamamlandıysa konsola `java -version` komutunu yazarak Java versiyonunuzu denetleyin. `1.8` ile başladığından emin olun.

{% highlight bash %}
$ java -version
java version "1.8.0_20"
Java(TM) SE Runtime Environment (build 1.8.0_20-b26)
Java HotSpot(TM) 64-Bit Server VM (build 25.20-b23, mixed mode)
{% endhighlight %}

Artık Java kodlarınızı derleyebilirsiniz :)
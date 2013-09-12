---
layout: post
title: "Sayfada Kullanılan Tüm CSS Sınıflarını Bulmak"
categories: development
tags: css jquery javascript tüm-cssleri-bulmak
---

Bir sayfada kullanılan tüm css sınıflarını tekil olarak yani yalnız 1 kere içeren biçimde bulmak. Çok süper basit ama hem bloga bişiler karalamış olayım hem de lazım olunca buradan kopyalayayım diye yazdım gitti...

{% highlight javascript %}
var result = {};
$('[class]').each(function(i, e) {
  var classes = $(this).attr('class').split(' ');
  for(var i = 0; i < classes.length; i++){
    result[classes[i]] = true;
  }
});
var classes = Object.keys(result).sort();
var classesAsString = classes.join('\n')
{% endhighlight %}
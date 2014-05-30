---
layout: post
title:  "Qt5 Fresh HTML5 Project Building Problem"
categories: development
tags:
 - qt5
 - html5
 - qt5-html5
 - building-problem
---

When create a new html5 project on Qt Creator with a fresh Qt SDK installment the build fails with following compilation error:

{% highlight bash %}
...

/usr/bin/ld: cannot find -lxslt
/usr/bin/ld: cannot find -lgio-2.0
/usr/bin/ld: cannot find -lgstapp-0.10
/usr/bin/ld: cannot find -lgstinterfaces-0.10
/usr/bin/ld: cannot find -lgstpbutils-0.10
/usr/bin/ld: cannot find -lgstvideo-0.10
/usr/bin/ld: cannot find -lgstbase-0.10
/usr/bin/ld: cannot find -lgstreamer-0.10
/usr/bin/ld: cannot find -lgobject-2.0
/usr/bin/ld: cannot find -lgmodule-2.0
/usr/bin/ld: cannot find -lxml2
/usr/bin/ld: cannot find -lgthread-2.0
/usr/bin/ld: cannot find -lglib-2.0
/usr/bin/ld: cannot find -lGL
collect2: error: ld returned 1 exit status
make: *** [html5-test] Error 1
19:50:16: The process "/usr/bin/make" exited with code 2.
Error while building/deploying project html5-test (kit: Desktop Qt 5.2.1 GCC 64bit)
When executing step 'Make'

{% endhighlight %}

Solution
--------

Solution is to install dependencies via following:

{% highlight bash %}
sudo aptitude install libxslt1-dev libgstreamer0.10-dev libgstreamer-plugins-base0.10-dev
{% endhighlight %}

**Environment**

* Ubuntu 14.04 64bit
* Qt Creator 3.1.0 (opensource)
* Based on Qt 5.2.1 (GCC 4.6.1, 64 bit)

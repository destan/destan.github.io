---
layout: tutorial
title:  "JSP Nedir? | JSP Tutorial"
tags:
  - javaEE
  - servlet
  - JSP
  - Java Server Pages
description: "Bu yazıda JSP teknolojisinin ne olduğunu anlatıp basit örnekler ile JSPyi pratikte gördük. JSP sayfalarında kullanılan elemanları, JSP sayfalarının sunucuda nasıl işlendiğini ayrıntılı olarak ele aldık."

# tutorial
level: 2
section: "Java EE"
duration: 20min
author: Destan Sarpkaya
creation_date: 2014-09-16
update_date: 2014-09-16
version: v1
Bir license: 
version_history: 
---

Bu yazıda JSP teknolojisinin ne olduğunu anlatıp basit örnekler ile JSPyi uygulamada göreceğiz. Bu yazıya başlamadan önce [Örnek Servlet](/tutorials/javaee/ornek-servlet.html) yazısını okumalısınız.

<nav class="well">
  <header>İçindekiler</header>

{% markdown %}
1. [JSP Nedir?](#JSP Nedir?)
2. [Bir JSP Örneği](#Bir JSP Örneği)
    1. [Dinamik JSP Sayfası](#Dinamik JSP Sayfası)
3. [JSP Nasıl Çalışır?](#JSP Nasıl Çalışır?)
    1. [JSP Sayfalarının Servlet'e Dönüştürülmesi](#JSP Sayfalarının Servlet'e Dönüştürülmesi)
4. [JSP Elemanları](#JSP Elemanları)
    1. [Directive](#Directive)
    2. [Scriptlet](#Scriptlet)
    3. [Action Tag](#Action Tag)
    4. [Expressions](#Expressions)
    5. [Declaration](#Declaration)
    6. [JSP Sayfasındaki Öntanımlı Nesneler](#JSP Sayfasındaki Öntanımlı Nesneler)
5. [Expression language(EL) in JSP](#Expression language(EL) in JSP)
6. [Kaynak Kodları İndirin](#Kaynak Kodları İndirin)
{% endmarkdown %}

</nav>

<h2 id="JSP Nedir?">JSP Nedir?</h2>

JSPnin açılımı _Java Server Pages_'dir. JSP teknolojisi, hem durağan (statik) hem de dinamik parçaları olan web içeriğini kolayca yaratmanızı sağlar. JSP, Servlet teknolojisinin tüm özelliklerini barındırırken aynı zamanda web içeriği yaratmanın daha doğal ve kolay yolunu sunar.

JSP teknolojisinin temel özellikleri şunlardır:

* JSP sayfaları yaratmak için bir dil sunar. JSP sayfaları text tabanlı, HTML benzeri sayfalardır. Durağan (statik) veya dinamik web sayfaları oluşturmayı kolaylaştırır.
* Sunucu tarafındaki nesnelere erişmek için bir  `expression language` sunar.
* JSPye kendi özelliklerinizi eklemeniz için yollar sunar (örneğin custom tags)

<h2 id="Bir JSP Örneği">Bir JSP Örneği</h2>

Bir JSP sayfası yazmak için, servletlerde olduğu gibi, önce bir _Dynamic Web Project_ oluşturmalıyız. Yeni bir proje oluşturmak yerine [bir önceki yazıda](/tutorials/javaee/ornek-servlet.html) oluşturduğumuz projeyi kullanalım.

Projedeki `WEBContent` klasörü içinde `merhaba.jsp` adlı bir dosya oluşturacağız. Bunun için `WEBContent` klasörüne sağ tıklayıp `New -> JSP File` seçeneğini seçelim.

<figure>
  <img src="/tutorials/javaee/img/jspNedir/yeniJspDosyasiOlusturma.png" alt="Yeni JSP dosyası oluşturma" title="Yeni JSP dosyası oluşturma">
  <figcaption>Eclipse bizim için bir JPS şablonundan kullanıma hazır bir dosya yaratır</figcaption>
</figure>

Oluşan dosya içeriği aşağıdaki gibi olacaktır:

{% highlight jsp %}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>
{% endhighlight %}

`body` tagleri arasına _Merhaba dünya_ yazabiliriz. `merhaba.jsp` dosyasını aşağıdaki gibi olacak biçimde güncelleyelim:

{% highlight jsp %}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Bir JSP Sayfasından Merhaba Dünya</title>
</head>
<body>

  Merhaba Dünya

</body>
</html>
{% endhighlight %}

Dikkat ederseniz şablondaki `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">` doctype tanımını `<!DOCTYPE html>` ile değiştirdik. Böylece tarayıcılara sayfamızın HTML5 kullandığını söylemiş oluruz. Örneklerde bazen sadelik için doctype tanımı hiç konmayabilir de, pratikte tarayıcılar için bu bir fark yaratmaz.

Daha sonra uygulamayı çalıştıralım. Bunun için proje adına sağ tıklayıp `Run as -> Run on server` seçeneğini seçeriz.

<a href="http://localhost:8080/MerhabaDunya/merhaba.jsp" target="_blank" rel="nofollow">http://localhost:8080/MerhabaDunya/merhaba.jsp</a> adresini açtığınızda sayfanın çıktısını görebilirsiniz.

<h3 id="Dinamik JSP Sayfası">Dinamik JSP Sayfası</h3>

Şimdiye kadar yaptığımız sayfalar (bir önceki örnekteki servlet ve şimdiki JSP) durağan sayfalardı. Yani kullanıcı her istek yaptığında aynı içerik ile karşılaşıyordu. Artık sayfalarımıza biraz dinamiklik katalım, yani her açıldığında aynı içeriği göstermesin. Bunun ilk akla gelen örneği kullanıcıya saati gösteren bir web sayfasıdır.

Bunun için `WEBContent` klasörü içinde `saatKac.jsp` adlı bir dosya oluşturacağız. Eclipse'in eklediği JSP şablonunu aşağıdaki gibi güncelleyin:

{% highlight jsp %}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.time.LocalTime" %>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Saat Kaç?</title>
</head>
<body>

  <h1>JSP Örneği</h1>

  Saat :<%= LocalTime.now() %>
  
</body>
</html>
{% endhighlight %}

Burada `<%@ page import="java.time.LocalTime" %>` satırı dikkatinizi çekmeli. Bu bir `Include directive`. Java sınıflarında olduğu gibi kullandığımız kütüphaneleri _include_ etmeye yarar. Direktifleri birazdan daha ayrıntılı inceleyeceğiz.

<a href="http://localhost:8080/MerhabaDunya/saatKac.jsp" target="_blank" rel="nofollow">http://localhost:8080/MerhabaDunya/saatKac.jsp</a> adresini açınca sunucuzunun saatini görebilirsiniz. Sayfayı her yenilediğinizde saatin (en azından saniyenin) değiştiğini göreceksiniz. Çünkü her istekte HTML sayfası yeniden oluşturuluyor ve JSP sayfanızdaki Java kodları yeniden çalıştırılıyor.

---

<h2 id="JSP Nasıl Çalışır?">JSP Nasıl Çalışır?</h2>

JSP sayfaları aslında birer `Servlet`tir. Detaylandırmak gerekirse, JSP sayfaları sunucu tarafından önce bir Servlet sınıfına dönüştürülür (Translation) ve daha sonra derlenir (Compilation).

Bir request bir JSP sayfasına iletildiği zaman (url mapping olunca), sunucu önce ilgili JSPnin servlet sınıfı ile JSP sayfasının kendisini karşılaştırır. Eğer JSP sayfası daha yeniyse veya ilgili JSP için henüz bir Servlet oluşturulmamışsa JSPyi yeniden Servlete dönüştürür ve derler. Daha sonra gelen requesti bu Servlet sınıfına iletir. Bundan sonraki aşamalar önceden gördüğümüz Servletlerle aynıdır.

<h3 id="JSP Sayfalarının Servlet'e Dönüştürülmesi">JSP Sayfalarının Servlet'e Dönüştürülmesi</h3>

Eclipse'in kullandığı workspace klasörü `workspace` olsun. O zaman otomatik oluşturulan Servletleri

`workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/work/Catalina/localhost/MerhabaDunya/org/apache/jsp`

altında bulabilirsiniz. _(Sizin için `tmp0` klasörü farklı adlarda olabilir. `tmp1`, `tmp2` gibi...)_

<figure>
  <img src="/tutorials/javaee/img/jspNedir/otomatikOlusturulanJsp.png" alt="JSP sayfaları Servlet sınıflarına dönüştürülür ve sonra derlenir" title="JSP sayfaları Servlet sınıflarına dönüştürülür ve sonra derlenir">
  <figcaption>JSP sayfaları Servlet sınıflarına dönüştürülür ve sonra derlenir</figcaption>
</figure>

<br>

Örneğin `saatKac.jsp` dosyasının Servlet'e dönüştürülmüş hali, yani `saatKac_jsp.java` dosyası şöyledir:

<br>

{% highlight java %}
public final class saatKac_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  // ...
  // sadelik için çıkarıldı

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response) throws java.io.IOException, javax.servlet.ServletException {

    // ...
    // sadelik için çıkarıldı

    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
            null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n");
      out.write("<html>\n");
      out.write("<head>\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n");
      out.write("<title>Saat Kaç?</title>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("\n");
      out.write("  <h1>JSP Örneği</h1>\n");
      out.write("\n");
      out.write("  Saat :");
      out.print( LocalTime.now() );
      out.write("\n");
      out.write("  \n");
      out.write("</body>\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      // ...
      // sadelik için çıkarıldı
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
{% endhighlight %}

Otomatik oluşturulan `saatKac_jsp` sınıfı `HttpJspBase` sınıfını extend ediyor. <a href="https://tomcat.apache.org/tomcat-8.0-doc/api/org/apache/jasper/runtime/HttpJspBase.html" target="_blank" rel="nofollow">Tomcat 8'in APIsine</a> bakacak olursanız aşağıdaki gibi bir sınıf hiyerarşisi görürsünüz.

    java.lang.Object
      └╴javax.servlet.GenericServlet
          └╴javax.servlet.http.HttpServlet
              └╴org.apache.jasper.runtime.HttpJspBase

Otomatik oluşturulan sınıfın extend ettiği `HttpJspBase` sınıfı da zaten `HttpServlet`ten extend edilmiş. Yani sonuçta `saatKac_jsp` sınıfı da bir Servlet.

Daha sonra sunucu `saatKac_jsp.java` dosyasını derleyerek `saatKac_jsp.class` dosyasını oluşturur ve artık bu dosyayı çalıştırır. 

---

<h2 id="JSP Elemanları">JSP Elemanları</h2>

<h3 id="Directive">Directive</h3>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Directive</th>
      <th>Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><%@ page … %></td>
      <td>Sayfaya özgü özellikleri tanımlar. Örneğin bir kütüphane import eder, <code>session</code>a bilgi koyar gibi...</td>
    </tr>
    <tr>
      <td><%@ include … %></td>
      <td>Mevcut JSP sayfasına bir başka sayfa eklemeye yarar.</td>
    </tr>
    <tr>
      <td><%@ taglib … %></td>
      <td>Sayfada kullanılacak bir tag kütüphanesi tanımlar.</td>
    </tr>
  </tbody>
</table>

<h3 id="Scriptlet">Scriptlet</h3>

JSP içine yazılan Java kodlarıdır. Bir java dosyası içine yazılan herhangi bir Java kodunu yazabilirsiniz. Örneğin `ipGoster.jsp` sayfası ekleyip içeriğini aşağıdaki gibi değiştirseniz bir scripletin çıktısını görebilirsiniz.

{% highlight jsp %}
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>IPniz</title>
</head>
<body>
  <% out.println("IP adresiniz: " + request.getRemoteAddr()); %>
</body>
</html>
{% endhighlight %}

<figure>
  <img src="/tutorials/javaee/img/jspNedir/ipGosterJsp.png" alt="JSP ile kullanıcının IP adresini gösterme" title="JSP ile kullanıcının IP adresini gösterme">
  <figcaption>JSP ile kullanıcının IP adresini gösterme</figcaption>
</figure>

<h3 id="Action Tag">Action Tag</h3>

JSP sayfasının `request processing` aşamasındaki davranışını etkilemek için kullanılır. Kullanımı

    <jsp:action_adı attribute="deger" />

biçimindedir. `<jsp:include>` dışındakileri pek kullanmayacağız.

<h3 id="Expressions">Expressions</h3>

İçine yazılan _expression_ı çalıştırıp, çıktısını `String`e çevirip, ekrana yazan elemanlardır. `saatKac.jsp` sayfasında da kullanmıştık. `LocalTime.now()` _expression_ının değerini `String` olarak ekrana yazdırmıştı.

    <%= LocalTime.now() %>

Biçiminde kullanılır.

<h3 id="Declaration">Declaration</h3>

JSP sayfasının tamamında geçerli olacak değişken tanımlamayı sağlayan elemanlardır. `declarationOrnegi.jsp` diye bir JSP sayfasının bodysine şunları yazalım:

{% highlight jsp %}
<body>
  <%! LocalTime time1 = LocalTime.now(); %>
  <% LocalTime time2 = LocalTime.now(); %>
  
  <p><%= "Time 1: " + time1   %></p>
  <p><%= "Time 2: " + time2   %></p>
</body>
{% endhighlight %}

<a href="http://localhost:8080/MerhabaDunya/declarationOrnegi.jsp" target="_blank" rel="nofollow">http://localhost:8080/MerhabaDunya/declarationOrnegi.jsp</a> adresini açıp birkaç kez yenilerseniz, <em>Time1</em>in değişmediğini ancak <em>Time2</em>nin her yenilemede değiştiğini göreceksiniz.

Çünkü scriptlet (`<% ... %>`) içinde yapılan değişken tanımları oluşturulan servlet sınıfının service methodu içinde tanımlanır, yani yerel değişken olur.

Ancak declaration (`<%! ... %>`) içinde yapılan değişken tanımları oluşturulan servlet sınıfının içinde bir field olarak tanımlanır.

Servletlerden hatırlayacağımız üzere her request handle edilirken service metodu yeniden çağırılır. Ancak JSP sayfasından oluşturulan bir servlet sınıfı JSP değişmedikçe yeniden oluşturulmaz. Aşağıda sunucu tarafından oluşturulan servlet kodunu incelerseniz neler olduğunu daha net göreceksiniz: 

{% highlight java %}
public final class declarationOrnegi_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

 LocalTime time1 = LocalTime.now(); 
  
  // ... sadelik için çıkarıldı

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    try {

      // ... sadelik için çıkarıldı

      out.write('\n');
      out.write(' ');
 LocalTime time2 = LocalTime.now(); 
      out.write("\n");
      out.write("\t\n");
      out.write("\t<p>");
      out.print( "Time 1: " + time1   );
      out.write("</p>\n");
      out.write("\t<p>");
      out.print( "Time 2: " + time2   );

      // ... sadelik için çıkarıldı
{% endhighlight %}

<h3 id="JSP Sayfasındaki Öntanımlı Nesneler">JSP Sayfasındaki Öntanımlı Nesneler</h3>

<table class="table table-striped">
  <tbody>
    <tr>
      <th>Nesneler</th>
      <th>Açıklama</th>
    </tr>
    <tr>
      <td>request</td>
      <td>Servletlerde de gördüğümüz <strong>HttpServletRequest</strong> nesnesi.</td>
    </tr>
    <tr>
      <td>response</td>
      <td>Servletlerde de gördüğümüz <strong>HttpServletResponse</strong> nesnesi.</td>
    </tr>
    <tr>
      <td>out</td>
      <td>Doğrudan kullanıcıya yollanan <code>response</code>a yazmaya yarayan <strong>PrintWriter</strong> nesnesi.</td>
    </tr>
    <tr>
      <td>session</td>
      <td>Mevcut <code>request</code> ile ilişkilendirilmiş <strong>HttpSession</strong> nesnesi.</td>
    </tr>
    <tr>
      <td>application</td>
      <td>Mevcut uygulama ile ilişkilendirilmiş <code>application context</code> <strong>ServletContext</strong> nesnesi.</td>
    </tr>
    <tr>
      <td>config</td>
      <td>Mevcut sayfa ile ilişkilendirilmiş <strong>ServletConfig</strong> nesnesi.</td>
    </tr>
    <tr>
      <td>pageContext</td>
      <td>Tüm öntanımlı nesneleri otomatik olarak içerir(request, session vb.).</td>
    </tr>
    <tr>
      <td>page</td>
      <td>JSPnin dönüştürüldüğü Servlet instanceı için <strong>this</strong> keywordüne eşdeğerdir, servletin kendisini belirtir.</td>
    </tr>
    <tr>
      <td>exception</td>
      <td>Exception handling ve hata mesajı göstermek için kullanılan <code>Exception</code> nesnesidir. Bu nesne yalnızca <code>isErrorPage</code> <em>attribute</em>ü true olan JSP sayfalarında bulunur.</td>
    </tr>
  </tbody>
</table>

---

<h2 id="Expression language(EL) in JSP">Expression language(EL) in JSP</h2>

JSP sayfalarında öntanımlı nesnelere ve sayfaya request üzerinden eklenen `bean`lere erişmeyi kolaylaştırmak için kullanılır. Kullanımı şöyledir:

    ${expression}

Örneğin sırasıyla `form.jsp` ve `display.jsp` adında iki dosya oluşturup içeriğini aşağıdaki gibi güncelleyelim.

{% highlight jsp %}
<body> 
  <form action="display.jsp"> 
    Kullanıcı Adı: <input type="text" name="username" /><br>
    Üniversite: <input type="text" name="uni" /><br>
    <input type="submit" value="Yolla"/> 
  </form> 
</body> 
{% endhighlight %}

{% highlight jsp %}
<body>
   Kullanıcı Adı ${ param.username } <br>
   Üniversite ${ param.uni }
</body>
{% endhighlight %}

---

<h2 id="Kaynak Kodları İndirin">Kaynak Kodları İndirin</h2>

Yazıdaki tüm örnekleri içeren Eclipse projesini indirin.

<a href="https://github.com/JavaOrnekleri/JSPNedir/archive/master.zip" target="_blank" rel="nofollow"> ▼ .zip olarak indir</a>

veya

git kullanarak `clone`la

{% highlight bash %}
$ git clone https://github.com/JavaOrnekleri/JSPNedir.git
{% endhighlight %}
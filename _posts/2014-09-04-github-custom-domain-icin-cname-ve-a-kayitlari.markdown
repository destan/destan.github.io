---
layout: post
title:  "Github Custom Domain için CNAME ve A Kayıtları"
categories: yazılım
duration: 4min
tags:
  - github-custom-domain
  - dns-kayıtları
  - cname-kaydı
  - a-kaydı
draft: true
---

Eğer internet siteniz statik ise Github üzerinde tutabilir ve sitenizi istediğiniz alan adıyla sunabilirsiniz (custom domain). Bunu yaparken Github'ın "load-balancer"larından yararlanmak için alan adınızı Github'ın sunucularına CNAME ile yönlendirmeniz gerekli.

Eğer A kaydı ile yönlendirirseniz, yapılan her istek önce 302, sonra 200 alır yani her istek redirect olur. 

> If a CNAME RR is present at a node, no other data should be present; this ensures that the data for a canonical name and its aliases cannot be different.


function FindProxyForURL(url, host) {
  var e = {
    data: {
      "localDomains":[
        "zenguard.biz",
        "local",
        "dev",
        "ip",
        "box",
        "lvh.me",
        "ripe",
        "invalid",
        "intra",
        "intranet",
        "onion",
        "vcap.me",
        "zeus.pm",
        "127.0.0.1.xip.io",
        "smackaho.st",
        "localtest.me",
        "site",
        "about:addons",
        "about:newtab",
        "about:preferences",
        "about:config"
      ],
      "nodeOverrides":[],
      "IPv4NotationRE":{},
      "localIPsRE":{}
    },
    nodeLookup: function (e,n){
      return e[n]||!1
    },
    compareHosts: function (e,n){
      var t,o,r;
      for(o=0,r=e.length;r>o;o++)
        if(t=e[o],this.matchWildcardDomain(n,t))
          return t
    },
    compareURLs: function (e,n){
      var t,o,r;
      for(t=0,o=e.length;o>t;t++)
        if(r=e[t],r.test(n))
          return r
    },
    dnsDomainIs: function (e,n){
      return e.length>=n.length&&e.substring(e.length-n.length)===n
    },
    matchWildcardDomain: function (e,n){
      var t,o,r;
      return t=e===n,r=e.slice(-n.length)===n,o="."===e[e.lastIndexOf(n)-1],t||r&&o
    },
    matchNodeOverride: function (e,n){
      var t,o,r;return r=function(){
        var o,r,i,a;
        for(i=this.data.nodeOverrides,a=[],o=0,r=i.length;r>o;o++)
          t=i[o],t.target_cc===n&&this.compareHosts(t.hosts,e)&&a.push(t);
        return a
      }.call(this),(null!=r&&null!=(o=r[0])?o.nodes:void 0)||!1
    },
    matchRules: function (e,n,t){
      var r,i,a,u;
      if((null!=e?e.length:void 0)>0)
        for(null==this.data.rulesWithOverrides&&(e=s(e,o.ruleOverrides)),r=i=0,a=e.length;a>i;r=++i)
          if(u=e[r],this.matchWildcardDomain(n,u.domain)||null!=u.hosts&&this.compareHosts(u.hosts,n))
            return r
    },
    _getProxyState: function (e,n,t){
      var o,r,i,a,s;
      if(e=e.toLowerCase(),this.data.IPv4NotationRE.lastIndex=0,this.data.localIPsRE.lastIndex=0,!~n.indexOf(".")&&!~n.indexOf(":"))
        return "LOCAL";
      if(this.data.IPv4NotationRE.test(n)&&this.data.localIPsRE.test(n))
        return "LOCAL";
        for(s=this.data.localDomains,o=0,r=s.length;r>o;o++)
          if(i=s[o],this.matchWildcardDomain(n,i))
            return "LOCAL";

        return a=this.matchRules(t,n,e),null!=a?t[a].cc:"DEFAULT"
    }
  };
  e.data.localDomains = e.data.localDomains.concat(["zenmate.com","d1jr1idae5ms9n.cloudfront.net"]);
  e.data.IPv4NotationRE = /^\\d+\\.\\d+\\.\\d+\\.\\d+$/g;
  e.data.localIPsRE = /(^127\\.)|(^192\\.168\\.)|(^10\\.)|(^172\\.1[6-9]\\.)|(^172\\.2[0-9]\\.)|(^172\\.3[0-1]\\.)/;
  e.data.defaultLocation = 'CA';
  e.data.nodeDict = {
    // ubiquity.io
    // uw5.zenguard.org - 64.120.98.162 (1)
    // uw10.zenguard.org - 23.19.43.50 (2)
    // uw15.zenguard.org - 209.58.128.137 (3)
    // uw14.zenguard.org - 209.58.128.138 (4)
    // uw9.zenguard.org - 23.19.43.58 (5)
    // uw8.zenguard.org - 23.19.47.130 (6)
    // uw16.zenguard.org - 209.58.128.136 (7)
    // uw4.zenguard.org - 173.234.148.122 (8)
    // uw7.zenguard.org - 173.208.127.130 (9)
    // uw13.zenguard.org - 209.58.128.139 (10)
    // uw12.zenguard.org - 209.58.128.140 (11)
    // uw6.zenguard.org - 174.34.143.242 (12)
    // uw11.zenguard.org - 209.58.128.141 (13)
    "UW":"HTTPS uw5.zenguard.org:443;HTTPS uw10.zenguard.org:443;HTTPS uw15.zenguard.org:443;HTTPS uw14.zenguard.org:443;HTTPS uw9.zenguard.org:443;HTTPS uw8.zenguard.org:443;HTTPS uw16.zenguard.org:443;HTTPS uw4.zenguard.org:443;HTTPS uw7.zenguard.org:443;HTTPS uw13.zenguard.org:443;HTTPS uw12.zenguard.org:443;HTTPS uw6.zenguard.org:443;HTTPS uw11.zenguard.org:443",
    // EDIS.AT
    // at2.zenguard.org - 158.255.211.179 (14)
    // at1.zenguard.org - 37.235.56.29 (15)
    "AT":"HTTPS at2.zenguard.org:443;HTTPS at1.zenguard.org:443",
    // EDIS
    // be2.zenguard.org - 192.71.249.174 (16)
    // be1.zenguard.org - 192.71.249.125 (17)
    "BE":"HTTPS be2.zenguard.org:443;HTTPS be1.zenguard.org:443",
    // https://friendhosting.net
    // bg2.zenguard.org - 217.12.202.74 (18)
    // bg1.zenguard.org - 217.12.202.61 (19)
    "BG":"HTTPS bg2.zenguard.org:443;HTTPS bg1.zenguard.org:443",
    // https://www.ovh.ie/
    // ca5.zenguard.org - 149.56.19.97 (20)
    // ca6.zenguard.org - 192.99.232.154 (21)
    "CA":"HTTPS ca5.zenguard.org:443;HTTPS ca6.zenguard.org:443",
    // cz4 - 89.238.186.143 (22)
    // cz3 - 89.238.186.138 (23)
    "CZ":"HTTPS cz4.zenguard.org:443;HTTPS cz3.zenguard.org:443",
    //http://creanova.org/
    // fi62 - 91.221.66.78 (24)
    // fi61 - 91.221.67.90 (25)
    "FI":"HTTPS fi62.zenguard.org:443;HTTPS fi61.zenguard.org:443",
    // poneytelecom.eu
    // fr13 - 195.154.194.174 (26)
    // fr14 - 62.210.162.217 (27)
    "FR":"HTTPS fr13.zenguard.org:443;HTTPS fr14.zenguard.org:443",
    //https://www.leaseweb.com/
    // de38.zenguard.org - 46.165.220.224 (28)
    // de52.zenguard.org - 46.165.210.16 (29)
    // de57.zenguard.org - 178.162.208.141 (30)
    // de47.zenguard.org - 46.165.220.220 (31)
    // de58.zenguard.org - 178.162.208.142 (32)
    // de39.zenguard.org - 46.165.220.217 (33)
    // de53.zenguard.org - 178.162.199.130 (34)
    // de60.zenguard.org - 46.165.210.24 (35)
    // de56.zenguard.org - 178.162.216.39 (36)
    "DE":"HTTPS de38.zenguard.org:443;HTTPS de52.zenguard.org:443;HTTPS de57.zenguard.org:443;HTTPS de47.zenguard.org:443;HTTPS de58.zenguard.org:443;HTTPS de39.zenguard.org:443;HTTPS de53.zenguard.org:443;HTTPS de60.zenguard.org:443;HTTPS de56.zenguard.org:443",
    // https://pacswitch.com/
    // hk34.zenguard.org - 103.10.197.10 (37)
    // hk29.zenguard.org - 103.10.197.58 (38)
    // hk35.zenguard.org - 103.10.197.210 (39)
    // hk28.zenguard.org - 103.10.197.146 (40)
    "HK":"HTTPS hk34.zenguard.org:443;HTTPS hk29.zenguard.org:443;HTTPS hk35.zenguard.org:443;HTTPS hk28.zenguard.org:443",
    // EDIS
    // il60.zenguard.org - 93.182.144.73 (41)
    // il61.zenguard.org - 193.182.144.74 (42)
    "IL":"HTTPS il60.zenguard.org:443;HTTPS il61.zenguard.org:443",
    // netdream.it
    // it1.zenguard.org - 95.141.35.64 (43)
    // it2.zenguard.org - 95.141.32.82 (44)
    "IT":"HTTPS it1.zenguard.org:443;HTTPS it2.zenguard.org:443",
    // dataclub.biz
    // lv62.zenguard.org - 46.183.222.210 (45)
    // lv61.zenguard.org - 46.183.217.178 (46)
    "LV":"HTTPS lv62.zenguard.org:443;HTTPS lv61.zenguard.org:443",
    // server.lu
    // lu61.zenguard.org - 94.242.250.36 (47)
    // lu62.zenguard.org - 94.242.250.37 (48)
    "LU":"HTTPS lu61.zenguard.org:443;HTTPS lu62.zenguard.org:443",
    // md62.zenguard.org - 176.123.7.36 (49)
    // md61.zenguard.org - 176.123.7.15 (50)
    "MD":"HTTPS md62.zenguard.org:443;HTTPS md61.zenguard.org:443",
    // nl61 - 95.211.203.151 (51)
    // nl62 - 5.79.74.75 (52)
    "NL":"HTTPS nl61.zenguard.org:443;HTTPS nl62.zenguard.org:443",
    // pl61 - 37.235.48.50 (53)
    // pl60 - 37.235.48.166 (54)
    "PL":"HTTPS pl61.zenguard.org:443;HTTPS pl60.zenguard.org:443",
    // ro11.zenguard.org - 37.221.160.98 (55)
    // ro12.zenguard.org - 37.221.160.114 (56)
    "RO":"HTTPS ro11.zenguard.org:443;HTTPS ro12.zenguard.org:443",
    // sg12.zenguard.org - 103.254.154.231 (57)
    // sg11.zenguard.org - 103.254.154.229 (58)
    "SG":"HTTPS sg12.zenguard.org:443;HTTPS sg11.zenguard.org:443",
    // es61.zenguard.org - 50.7.82.50 (59)
    // es62.zenguard.org - 50.7.82.66 (60)
    "ES":"HTTPS es61.zenguard.org:443;HTTPS es62.zenguard.org:443",
    // ch12.zenguard.org - 179.43.147.2 (61)
    // ch14.zenguard.org - 179.43.147.66 (62)
    "CH":"HTTPS ch12.zenguard.org:443;HTTPS ch14.zenguard.org:443",
    // ua1.zenguard.org - 217.12.204.135 (63)
    // ua2.zenguard.org - 217.12.204.146 (64)
    "UA":"HTTPS ua1.zenguard.org:443;HTTPS ua2.zenguard.org:443",
    // gb16.zenguard.org - 80.84.56.58 (65)
    // gb17.zenguard.org - 5.152.201.74 (66)
    // gb9.zenguard.org - 31.3.244.58 (67)
    // gb33.zenguard.org - 109.200.26.2 (68)
    // gb44.zenguard.org - 31.3.224.66 (69)
    // gb15.zenguard.org - 80.84.56.34 (70)
    "GB":"HTTPS gb16.zenguard.org:443;HTTPS gb17.zenguard.org:443;HTTPS gb9.zenguard.org:443;HTTPS gb33.zenguard.org:443;HTTPS gb44.zenguard.org:443;HTTPS gb15.zenguard.org:443",
    // us19.zenguard.org - 207.244.72.200 (71)
    // us47.zenguard.org - 207.244.78.10 (72)
    // us40.zenguard.org - 173.208.81.178 (73)
    // us14.zenguard.org - 108.62.18.138 (74)
    // us28.zenguard.org - 108.59.8.210 (75)
    // us41.zenguard.org - 199.115.114.228 (76)
    // us18.zenguard.org - 207.244.72.195 (77)
    "US":"HTTPS us19.zenguard.org:443;HTTPS us47.zenguard.org:443;HTTPS us40.zenguard.org:443;HTTPS us14.zenguard.org:443;HTTPS us28.zenguard.org:443;HTTPS us41.zenguard.org:443;HTTPS us18.zenguard.org:443"
  };
  e.data.rulesWithOverrides = [];
  var res = e._getProxyState(url, host, e.data.rulesWithOverrides);

  if (res === 'LOCAL' || res === 'DIRECT' || res === 'OFF') {
    return 'DIRECT'
  };
  if (res === 'DEFAULT') {
    cc = e.data.defaultLocation
  } else {
    cc = res
  };

  var override = e.matchNodeOverride(host, cc);

  if (override) {
    cc = override
  };
  return e.nodeLookup(e.data.nodeDict, cc) || 'DIRECT';
}

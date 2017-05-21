/*!
 * maisonnette-admin v0.0.1 (https://foxythemes.net)
 * Copyright 2017 Foxy Themes all rights reserved 
 */

var App=function() {
    function a() {
        var a=$(".navbar-nav > .nav-item", f),
        b=a.filter(".open");
        b.length||a.filter(":first-child").addClass("open")
    }
    function b() {
        $(".nav-link, .dropdown-item", f).on("click", function(a) {
            function b(a) {
                var b=$(a).parent(), c=$(".nav-item.open, ."+g.megaMenuSectionClass+".open", b);
                a.slideUp( {
                    duration:i, complete:function() {
                        b.removeClass("open"), c.removeClass("open"), $(this).removeAttr("style")
                    }
                }
                )
            }
            function c(a) {
                var c=a.parent(), d=!1;
                d=c.siblings(".open"), c.hasClass(g.megaMenuSectionClass)&&(megaColumn=c.parent(), d=d.add(megaColumn.siblings().find("."+g.megaMenuSectionClass+".open"))), d&&b($("> ."+g.subNavClass, d)), a.slideDown( {
                    duration:i, complete:function() {
                        c.addClass("open"), $(this).removeAttr("style")
                    }
                }
                )
            }
            var d=$(this), e=d.parent(), f=e.siblings(".open"), h=d.next("."+g.subNavClass), i=g.SlideSpeed;
            $.isXs()?(h.length&&(e.hasClass("open")?b(h):c(h), a.preventDefault()), a.stopPropagation()):e.parent().hasClass("navbar-nav")&&h.length&&(f.removeClass("open"), e.addClass("open"), a.preventDefault())
        }
        ),
        $(window).resize(function() {
            i(function() {
                $.isXs()||a()
            }
            , 100, "sync_tabs")
        }
        )
    }
    function c(a) {
        var b=$("<div>", {
            class: a
        }
        ).appendTo("body"),
        c=b.css("background-color");
        return b.remove(),
        c
    }
    function d() {
        $(".mai-scroller").perfectScrollbar()
    }
    var e,
    f,
    g= {
        animate: !1, popover: !0, assetsPath: "assets", imgPath: "img", jsPath: "js", libsPath: "lib", SlideSpeed: 200, megaMenuClass: "mai-mega-menu-container", megaMenuColumnClass: "mai-mega-menu-column", megaMenuSectionClass: "mai-mega-menu-section", navTabsClass: "mai-nav-tabs", subNavClass: "mai-sub-nav"
    }
    ,
    h= {}
    ,
    i=function() {
        var a= {}
        ;
        return function(b, c, d) {
            d||(d="x1x2x3x4"),
            a[d]&&clearTimeout(a[d]),
            a[d]=setTimeout(b, c)
        }
    }
    ();
    return {
        conf:g,
        color:h,
        init:function(a) {
            e=document.getElementsByClassName(g.megaMenuClass),
            f=document.getElementsByClassName(g.navTabsClass),
            $.extend(g, a),
            h.primary=c("clr-primary"),
            h.success=c("clr-success"),
            h.info=c("clr-info"),
            h.warning=c("clr-warning"),
            h.danger=c("clr-danger"),
            h.grey=c("clr-grey"),
            h.dark=c("clr-dark"),
            h.light=c("clr-light"),
            h.black=c("clr-black"),
            b(),
            d(),
            $(".mai-settings .dropdown-menu").on("click", function(a) {
                a.stopPropagation()
            }
            ),
            $('[data-toggle="tooltip"]').tooltip(),
            $('[data-toggle="popover"]').popover()
        }
    }
}

();
!function() {
    function a(c, d) {
        if(c=c?c:"", d=d|| {}
        , c instanceof a)return c;
        if(!(this instanceof a))return new a(c, d);
        var e=b(c);
        this._originalInput=c,
        this._r=e.r,
        this._g=e.g,
        this._b=e.b,
        this._a=e.a,
        this._roundA=N(100*this._a)/100,
        this._format=d.format||e.format,
        this._gradientType=d.gradientType,
        this._r<1&&(this._r=N(this._r)),
        this._g<1&&(this._g=N(this._g)),
        this._b<1&&(this._b=N(this._b)),
        this._ok=e.ok,
        this._tc_id=L++
    }
    function b(a) {
        var b= {
            r: 0, g: 0, b: 0
        }
        ,
        d=1,
        f=!1,
        h=!1;
        return"string"==typeof a&&(a=H(a)),
        "object"==typeof a&&(a.hasOwnProperty("r")&&a.hasOwnProperty("g")&&a.hasOwnProperty("b")?(b=c(a.r, a.g, a.b), f=!0, h="%"===String(a.r).substr(-1)?"prgb":"rgb"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("v")?(a.s=E(a.s), a.v=E(a.v), b=g(a.h, a.s, a.v), f=!0, h="hsv"):a.hasOwnProperty("h")&&a.hasOwnProperty("s")&&a.hasOwnProperty("l")&&(a.s=E(a.s), a.l=E(a.l), b=e(a.h, a.s, a.l), f=!0, h="hsl"), a.hasOwnProperty("a")&&(d=a.a)),
        d=x(d),
        {
            ok: f, format: a.format||h, r: O(255, P(b.r, 0)), g: O(255, P(b.g, 0)), b: O(255, P(b.b, 0)), a: d
        }
    }
    function c(a, b, c) {
        return {
            r: 255*y(a, 255), g: 255*y(b, 255), b: 255*y(c, 255)
        }
    }
    function d(a, b, c) {
        a=y(a, 255),
        b=y(b, 255),
        c=y(c, 255);
        var d,
        e,
        f=P(a, b, c),
        g=O(a, b, c),
        h=(f+g)/2;
        if(f==g)d=e=0;
        else {
            var i=f-g;
            switch(e=h>.5?i/(2-f-g): i/(f+g), f) {
                case a: d=(b-c)/i+(c>b?6: 0);
                break;
                case b: d=(c-a)/i+2;
                break;
                case c: d=(a-b)/i+4
            }
            d/=6
        }
        return {
            h: d, s: e, l: h
        }
    }
    function e(a, b, c) {
        function d(a, b, c) {
            return 0>c&&(c+=1),
            c>1&&(c-=1),
            1/6>c?a+6*(b-a)*c: .5>c?b: 2/3>c?a+6*(b-a)*(2/3-c): a
        }
        var e,
        f,
        g;
        if(a=y(a, 360), b=y(b, 100), c=y(c, 100), 0===b)e=f=g=c;
        else {
            var h=.5>c?c*(1+b): c+b-c*b, i=2*c-h;
            e=d(i, h, a+1/3),
            f=d(i, h, a),
            g=d(i, h, a-1/3)
        }
        return {
            r: 255*e, g: 255*f, b: 255*g
        }
    }
    function f(a, b, c) {
        a=y(a, 255),
        b=y(b, 255),
        c=y(c, 255);
        var d,
        e,
        f=P(a, b, c),
        g=O(a, b, c),
        h=f,
        i=f-g;
        if(e=0===f?0: i/f, f==g)d=0;
        else {
            switch(f) {
                case a: d=(b-c)/i+(c>b?6: 0);
                break;
                case b: d=(c-a)/i+2;
                break;
                case c: d=(a-b)/i+4
            }
            d/=6
        }
        return {
            h: d, s: e, v: h
        }
    }
    function g(a, b, c) {
        a=6*y(a, 360),
        b=y(b, 100),
        c=y(c, 100);
        var d=M.floor(a),
        e=a-d,
        f=c*(1-b),
        g=c*(1-e*b),
        h=c*(1-(1-e)*b),
        i=d%6,
        j=[c,
        g,
        f,
        f,
        h,
        c][i],
        k=[h,
        c,
        c,
        g,
        f,
        f][i],
        l=[f,
        f,
        h,
        c,
        c,
        g][i];
        return {
            r: 255*j, g: 255*k, b: 255*l
        }
    }
    function h(a, b, c, d) {
        var e=[D(N(a).toString(16)),
        D(N(b).toString(16)),
        D(N(c).toString(16))];
        return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0): e.join("")
    }
    function i(a, b, c, d) {
        var e=[D(F(d)),
        D(N(a).toString(16)),
        D(N(b).toString(16)),
        D(N(c).toString(16))];
        return e.join("")
    }
    function j(b, c) {
        c=0===c?0: c||10;
        var d=a(b).toHsl();
        return d.s-=c/100,
        d.s=z(d.s),
        a(d)
    }
    function k(b, c) {
        c=0===c?0: c||10;
        var d=a(b).toHsl();
        return d.s+=c/100,
        d.s=z(d.s),
        a(d)
    }
    function l(b) {
        return a(b).desaturate(100)
    }
    function m(b, c) {
        c=0===c?0: c||10;
        var d=a(b).toHsl();
        return d.l+=c/100,
        d.l=z(d.l),
        a(d)
    }
    function n(b, c) {
        c=0===c?0: c||10;
        var d=a(b).toRgb();
        return d.r=P(0, O(255, d.r-N(255*-(c/100)))),
        d.g=P(0, O(255, d.g-N(255*-(c/100)))),
        d.b=P(0, O(255, d.b-N(255*-(c/100)))),
        a(d)
    }
    function o(b, c) {
        c=0===c?0: c||10;
        var d=a(b).toHsl();
        return d.l-=c/100,
        d.l=z(d.l),
        a(d)
    }
    function p(b, c) {
        var d=a(b).toHsl(),
        e=(N(d.h)+c)%360;
        return d.h=0>e?360+e: e, a(d)
    }
    function q(b) {
        var c=a(b).toHsl();
        return c.h=(c.h+180)%360,
        a(c)
    }
    function r(b) {
        var c=a(b).toHsl(),
        d=c.h;
        return[a(b),
        a( {
            h: (d+120)%360, s: c.s, l: c.l
        }
        ),
        a( {
            h: (d+240)%360, s: c.s, l: c.l
        }
        )]
    }
    function s(b) {
        var c=a(b).toHsl(),
        d=c.h;
        return[a(b),
        a( {
            h: (d+90)%360, s: c.s, l: c.l
        }
        ),
        a( {
            h: (d+180)%360, s: c.s, l: c.l
        }
        ),
        a( {
            h: (d+270)%360, s: c.s, l: c.l
        }
        )]
    }
    function t(b) {
        var c=a(b).toHsl(),
        d=c.h;
        return[a(b),
        a( {
            h: (d+72)%360, s: c.s, l: c.l
        }
        ),
        a( {
            h: (d+216)%360, s: c.s, l: c.l
        }
        )]
    }
    function u(b, c, d) {
        c=c||6,
        d=d||30;
        var e=a(b).toHsl(),
        f=360/d,
        g=[a(b)];
        for(e.h=(e.h-(f*c>>1)+720)%360;
        --c;
        )e.h=(e.h+f)%360,
        g.push(a(e));
        return g
    }
    function v(b, c) {
        c=c||6;
        for(var d=a(b).toHsv(), e=d.h, f=d.s, g=d.v, h=[], i=1/c;
        c--;
        )h.push(a( {
            h: e, s: f, v: g
        }
        )),
        g=(g+i)%1;
        return h
    }
    function w(a) {
        var b= {}
        ;
        for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);
        return b
    }
    function x(a) {
        return a=parseFloat(a),
        (isNaN(a)||0>a||a>1)&&(a=1),
        a
    }
    function y(a, b) {
        B(a)&&(a="100%");
        var c=C(a);
        return a=O(b, P(0, parseFloat(a))),
        c&&(a=parseInt(a*b, 10)/100),
        M.abs(a-b)<1e-6?1: a%b/parseFloat(b)
    }
    function z(a) {
        return O(1, P(0, a))
    }
    function A(a) {
        return parseInt(a, 16)
    }
    function B(a) {
        return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)
    }
    function C(a) {
        return"string"==typeof a&&-1!=a.indexOf("%")
    }
    function D(a) {
        return 1==a.length?"0"+a: ""+a
    }
    function E(a) {
        return 1>=a&&(a=100*a+"%"),
        a
    }
    function F(a) {
        return Math.round(255*parseFloat(a)).toString(16)
    }
    function G(a) {
        return A(a)/255
    }
    function H(a) {
        a=a.replace(J, "").replace(K, "").toLowerCase();
        var b=!1;
        if(R[a])a=R[a],
        b=!0;
        else if("transparent"==a)return {
            r: 0, g: 0, b: 0, a: 0, format: "name"
        }
        ;
        var c;
        return(c=T.rgb.exec(a))? {
            r: c[1], g: c[2], b: c[3]
        }
        :(c=T.rgba.exec(a))? {
            r: c[1], g: c[2], b: c[3], a: c[4]
        }
        :(c=T.hsl.exec(a))? {
            h: c[1], s: c[2], l: c[3]
        }
        :(c=T.hsla.exec(a))? {
            h: c[1], s: c[2], l: c[3], a: c[4]
        }
        :(c=T.hsv.exec(a))? {
            h: c[1], s: c[2], v: c[3]
        }
        :(c=T.hsva.exec(a))? {
            h: c[1], s: c[2], v: c[3], a: c[4]
        }
        :(c=T.hex8.exec(a))? {
            a: G(c[1]), r: A(c[2]), g: A(c[3]), b: A(c[4]), format: b?"name": "hex8"
        }
        :(c=T.hex6.exec(a))? {
            r: A(c[1]), g: A(c[2]), b: A(c[3]), format: b?"name": "hex"
        }
        :!!(c=T.hex3.exec(a))&& {
            r: A(c[1]+""+c[1]), g: A(c[2]+""+c[2]), b: A(c[3]+""+c[3]), format: b?"name": "hex"
        }
    }
    function I(a) {
        var b,
        c;
        return a=a|| {
            level: "AA", size: "small"
        }
        ,
        b=(a.level||"AA").toUpperCase(),
        c=(a.size||"small").toLowerCase(),
        "AA"!==b&&"AAA"!==b&&(b="AA"),
        "small"!==c&&"large"!==c&&(c="small"),
        {
            level: b, size: c
        }
    }
    var J=/^[\s,
    #]+/,
    K=/\s+$/,
    L=0,
    M=Math,
    N=M.round,
    O=M.min,
    P=M.max,
    Q=M.random;
    a.prototype= {
        isDark:function() {
            return this.getBrightness()<128
        }
        ,
        isLight:function() {
            return!this.isDark()
        }
        ,
        isValid:function() {
            return this._ok
        }
        ,
        getOriginalInput:function() {
            return this._originalInput
        }
        ,
        getFormat:function() {
            return this._format
        }
        ,
        getAlpha:function() {
            return this._a
        }
        ,
        getBrightness:function() {
            var a=this.toRgb();
            return(299*a.r+587*a.g+114*a.b)/1e3
        }
        ,
        getLuminance:function() {
            var a,
            b,
            c,
            d,
            e,
            f,
            g=this.toRgb();
            return a=g.r/255,
            b=g.g/255,
            c=g.b/255,
            d=.03928>=a?a/12.92: Math.pow((a+.055)/1.055, 2.4), e=.03928>=b?b/12.92: Math.pow((b+.055)/1.055, 2.4), f=.03928>=c?c/12.92: Math.pow((c+.055)/1.055, 2.4), .2126*d+.7152*e+.0722*f
        }
        ,
        setAlpha:function(a) {
            return this._a=x(a),
            this._roundA=N(100*this._a)/100,
            this
        }
        ,
        toHsv:function() {
            var a=f(this._r, this._g, this._b);
            return {
                h: 360*a.h, s: a.s, v: a.v, a: this._a
            }
        }
        ,
        toHsvString:function() {
            var a=f(this._r, this._g, this._b),
            b=N(360*a.h),
            c=N(100*a.s),
            d=N(100*a.v);
            return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)": "hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"
        }
        ,
        toHsl:function() {
            var a=d(this._r, this._g, this._b);
            return {
                h: 360*a.h, s: a.s, l: a.l, a: this._a
            }
        }
        ,
        toHslString:function() {
            var a=d(this._r, this._g, this._b),
            b=N(360*a.h),
            c=N(100*a.s),
            e=N(100*a.l);
            return 1==this._a?"hsl("+b+", "+c+"%, "+e+"%)": "hsla("+b+", "+c+"%, "+e+"%, "+this._roundA+")"
        }
        ,
        toHex:function(a) {
            return h(this._r, this._g, this._b, a)
        }
        ,
        toHexString:function(a) {
            return"#"+this.toHex(a)
        }
        ,
        toHex8:function() {
            return i(this._r, this._g, this._b, this._a)
        }
        ,
        toHex8String:function() {
            return"#"+this.toHex8()
        }
        ,
        toRgb:function() {
            return {
                r: N(this._r), g: N(this._g), b: N(this._b), a: this._a
            }
        }
        ,
        toRgbString:function() {
            return 1==this._a?"rgb("+N(this._r)+", "+N(this._g)+", "+N(this._b)+")": "rgba("+N(this._r)+", "+N(this._g)+", "+N(this._b)+", "+this._roundA+")"
        }
        ,
        toPercentageRgb:function() {
            return {
                r: N(100*y(this._r, 255))+"%", g: N(100*y(this._g, 255))+"%", b: N(100*y(this._b, 255))+"%", a: this._a
            }
        }
        ,
        toPercentageRgbString:function() {
            return 1==this._a?"rgb("+N(100*y(this._r, 255))+"%, "+N(100*y(this._g, 255))+"%, "+N(100*y(this._b, 255))+"%)": "rgba("+N(100*y(this._r, 255))+"%, "+N(100*y(this._g, 255))+"%, "+N(100*y(this._b, 255))+"%, "+this._roundA+")"
        }
        ,
        toName:function() {
            return 0===this._a?"transparent": !(this._a<1)&&(S[h(this._r, this._g, this._b, !0)]||!1)
        }
        ,
        toFilter:function(b) {
            var c="#"+i(this._r, this._g, this._b, this._a),
            d=c,
            e=this._gradientType?"GradientType = 1, ": "";
            if(b) {
                var f=a(b);
                d=f.toHex8String()
            }
            return"progid:DXImageTransform.Microsoft.gradient("+e+"startColorstr="+c+",endColorstr="+d+")"
        }
        ,
        toString:function(a) {
            var b=!!a;
            a=a||this._format;
            var c=!1,
            d=this._a<1&&this._a>=0,
            e=!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"name"===a);
            return e?"name"===a&&0===this._a?this.toName(): this.toRgbString(): ("rgb"===a&&(c=this.toRgbString()), "prgb"===a&&(c=this.toPercentageRgbString()), ("hex"===a||"hex6"===a)&&(c=this.toHexString()), "hex3"===a&&(c=this.toHexString(!0)), "hex8"===a&&(c=this.toHex8String()), "name"===a&&(c=this.toName()), "hsl"===a&&(c=this.toHslString()), "hsv"===a&&(c=this.toHsvString()), c||this.toHexString())
        }
        ,
        _applyModification:function(a, b) {
            var c=a.apply(null, [this].concat([].slice.call(b)));
            return this._r=c._r,
            this._g=c._g,
            this._b=c._b,
            this.setAlpha(c._a),
            this
        }
        ,
        lighten:function() {
            return this._applyModification(m, arguments)
        }
        ,
        brighten:function() {
            return this._applyModification(n, arguments)
        }
        ,
        darken:function() {
            return this._applyModification(o, arguments)
        }
        ,
        desaturate:function() {
            return this._applyModification(j, arguments)
        }
        ,
        saturate:function() {
            return this._applyModification(k, arguments)
        }
        ,
        greyscale:function() {
            return this._applyModification(l, arguments)
        }
        ,
        spin:function() {
            return this._applyModification(p, arguments)
        }
        ,
        _applyCombination:function(a, b) {
            return a.apply(null, [this].concat([].slice.call(b)))
        }
        ,
        analogous:function() {
            return this._applyCombination(u, arguments)
        }
        ,
        complement:function() {
            return this._applyCombination(q, arguments)
        }
        ,
        monochromatic:function() {
            return this._applyCombination(v, arguments)
        }
        ,
        splitcomplement:function() {
            return this._applyCombination(t, arguments)
        }
        ,
        triad:function() {
            return this._applyCombination(r, arguments)
        }
        ,
        tetrad:function() {
            return this._applyCombination(s, arguments)
        }
    }
    ,
    a.fromRatio=function(b, c) {
        if("object"==typeof b) {
            var d= {}
            ;
            for(var e in b)b.hasOwnProperty(e)&&(d[e]="a"===e?b[e]: E(b[e]));
            b=d
        }
        return a(b, c)
    }
    ,
    a.equals=function(b, c) {
        return!(!b||!c)&&a(b).toRgbString()==a(c).toRgbString()
    }
    ,
    a.random=function() {
        return a.fromRatio( {
            r: Q(), g: Q(), b: Q()
        }
        )
    }
    ,
    a.mix=function(b, c, d) {
        d=0===d?0: d||50;
        var e,
        f=a(b).toRgb(),
        g=a(c).toRgb(),
        h=d/100,
        i=2*h-1,
        j=g.a-f.a;
        e=-1==i*j?i: (i+j)/(1+i*j), e=(e+1)/2;
        var k=1-e,
        l= {
            r: g.r*e+f.r*k, g: g.g*e+f.g*k, b: g.b*e+f.b*k, a: g.a*h+f.a*(1-h)
        }
        ;
        return a(l)
    }
    ,
    a.readability=function(b, c) {
        var d=a(b),
        e=a(c);
        return(Math.max(d.getLuminance(), e.getLuminance())+.05)/(Math.min(d.getLuminance(), e.getLuminance())+.05)
    }
    ,
    a.isReadable=function(b, c, d) {
        var e,
        f,
        g=a.readability(b, c);
        switch(f=!1, e=I(d), e.level+e.size) {
            case"AAsmall": case"AAAlarge": f=g>=4.5;
            break;
            case"AAlarge": f=g>=3;
            break;
            case"AAAsmall": f=g>=7
        }
        return f
    }
    ,
    a.mostReadable=function(b, c, d) {
        var e,
        f,
        g,
        h,
        i=null,
        j=0;
        d=d|| {}
        ,
        f=d.includeFallbackColors,
        g=d.level,
        h=d.size;
        for(var k=0;
        k<c.length;
        k++)e=a.readability(b, c[k]),
        e>j&&(j=e, i=a(c[k]));
        return a.isReadable(b, i, {
            level: g, size: h
        }
        )||!f?i:(d.includeFallbackColors=!1, a.mostReadable(b, ["#fff", "#000"], d))
    }
    ;
    var R=a.names= {
        aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32"
    }
    ,
    S=a.hexNames=w(R),
    T=function() {
        var a="[-\\+]?\\d+%?",
        b="[-\\+]?\\d*\\.\\d+%?",
        c="(?:"+b+")|(?:"+a+")",
        d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",
        e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";
        return {
            rgb:new RegExp("rgb"+d),
            rgba:new RegExp("rgba"+e),
            hsl:new RegExp("hsl"+d),
            hsla:new RegExp("hsla"+e),
            hsv:new RegExp("hsv"+d),
            hsva:new RegExp("hsva"+e),
            hex3:/^([0-9a-fA-F] {
                1
            }
            )([0-9a-fA-F] {
                1
            }
            )([0-9a-fA-F] {
                1
            }
            )$/,
            hex6:/^([0-9a-fA-F] {
                2
            }
            )([0-9a-fA-F] {
                2
            }
            )([0-9a-fA-F] {
                2
            }
            )$/,
            hex8:/^([0-9a-fA-F] {
                2
            }
            )([0-9a-fA-F] {
                2
            }
            )([0-9a-fA-F] {
                2
            }
            )([0-9a-fA-F] {
                2
            }
            )$/
        }
    }
    ();
    "undefined"!=typeof module&&module.exports?module.exports=a:"function"==typeof define&&define.amd?define(function() {
        return a
    }
    ):window.tinycolor=a
}

(),
!function(a) {
    a.isBreakpoint=function(b) {
        var c,
        d;
        return c=a("<div/>", {
            class: "hidden-"+b+"-down"
        }
        ).appendTo("body"),
        d=c.is(":hidden"),
        c.remove(),
        d
    }
    ,
    a.extend(a, {
        isXs:function() {
            return a.isBreakpoint("xs")
        }
        , isSm:function() {
            return a.isBreakpoint("sm")
        }
        , isMd:function() {
            return a.isBreakpoint("md")
        }
        , isLg:function() {
            return a.isBreakpoint("lg")
        }
    }
    )
}

(jQuery);
var App=function() {
    "use strict";
    return App.ChartJs=function() {
        function a() {
            var a=tinycolor(App.color.primary),
            b=tinycolor(App.color.primary).lighten(22),
            c=document.getElementById("line-chart"),
            d= {
                labels:["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July"],
                datasets:[ {
                    label: "My First dataset", borderColor: a, backgroundColor: a.setAlpha(.8), data: [g(), g(), g(), g(), g(), g(), g()]
                }
                ,
                {
                    label: "My Second dataset", borderColor: b, backgroundColor: b.setAlpha(.5), data: [g(), g(), g(), g(), g(), g(), g()]
                }
                ]
            }
            ;
            new Chart(c, {
                type: "line", data: d
            }
            )
        }
        function b() {
            var a=tinycolor(App.color.primary),
            b=tinycolor(App.color.primary).lighten(22),
            c=document.getElementById("bar-chart"),
            d= {
                labels:["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July"],
                datasets:[ {
                    label: "Credit", borderColor: a, backgroundColor: a.setAlpha(.8), data: [g(), g(), g(), g(), g(), g(), g()]
                }
                ,
                {
                    label: "Debit", borderColor: b, backgroundColor: b.setAlpha(.5), data: [g(), g(), g(), g(), g(), g(), g()]
                }
                ]
            }
            ;
            new Chart(c, {
                type:"bar", data:d, options: {
                    elements: {
                        rectangle: {
                            borderWidth: 2, borderColor: "rgb(0, 255, 0)", borderSkipped: "bottom"
                        }
                    }
                }
            }
            )
        }
        function c() {
            var a=tinycolor(App.color.primary).lighten(30),
            b=tinycolor(App.color.primary),
            c=document.getElementById("radar-chart"),
            d= {
                labels:["Eating",
                "Drinking",
                "Sleeping",
                "Designing",
                "Coding",
                "Cycling",
                "Running"],
                datasets:[ {
                    label: "First Year", backgroundColor: a.setAlpha(.3), borderColor: a, pointBackgroundColor: a, pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: a, data: [65, 59, 90, 81, 56, 55, 40]
                }
                ,
                {
                    label: "Second Year", backgroundColor: b.setAlpha(.4), borderColor: b, pointBackgroundColor: b, pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: b, data: [28, 48, 40, 19, 96, 27, 100]
                }
                ]
            }
            ;
            new Chart(c, {
                type: "radar", data: d
            }
            )
        }
        function d() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).lighten(10),
            c=tinycolor(App.color.primary).lighten(20),
            d=tinycolor(App.color.primary).lighten(30),
            e=tinycolor(App.color.primary).lighten(40),
            f=document.getElementById("polar-chart"),
            g= {
                datasets:[ {
                    data: [11, 16, 14, 7, 14], backgroundColor: [a, b, c, d, e], label: "My dataset"
                }
                ],
                labels:["January",
                "February",
                "March",
                "April",
                "May"]
            }
            ;
            new Chart(f, {
                type: "polarArea", data: g
            }
            )
        }
        function e() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).lighten(12),
            c=tinycolor(App.color.primary).lighten(22),
            d=document.getElementById("pie-chart"),
            e= {
                labels:["Red",
                "Blue",
                "Yellow"],
                datasets:[ {
                    data: [300, 50, 100], backgroundColor: [a, b, c], hoverBackgroundColor: [a, b, c]
                }
                ]
            }
            ;
            new Chart(d, {
                type: "pie", data: e
            }
            )
        }
        function f() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).lighten(12),
            c=tinycolor(App.color.primary).lighten(22),
            d=document.getElementById("donut-chart"),
            e= {
                labels:["Red",
                "Blue",
                "Yellow"],
                datasets:[ {
                    data: [300, 50, 100], backgroundColor: [a, b, c], hoverBackgroundColor: [a, b, c]
                }
                ]
            }
            ;
            new Chart(d, {
                type: "doughnut", data: e
            }
            )
        }
        var g=function() {
            return Math.round(100*Math.random())
        }
        ;
        a(),
        b(),
        c(),
        d(),
        e(),
        f()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.chartsMorris=function() {
        function a() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).lighten(15).toString();
            new Morris.Line( {
                element: "line-chart", data: e, xkey: "period", ykeys: ["licensed", "sorned"], labels: ["Licensed", "Off the road"], lineColors: [a, b]
            }
            )
        }
        function b() {
            var a=tinycolor(App.color.primary).lighten(15).toString(),
            b=tinycolor(App.color.primary).brighten(3).toString();
            Morris.Bar( {
                element:"bar-chart", data:[ {
                    device: "iPhone", geekbench: 136, macbench: 180
                }
                , {
                    device: "iPhone 3G", geekbench: 137, macbench: 200
                }
                , {
                    device: "iPhone 3GS", geekbench: 275, macbench: 350
                }
                , {
                    device: "iPhone 4", geekbench: 380, macbench: 500
                }
                , {
                    device: "iPhone 4S", geekbench: 655, macbench: 900
                }
                , {
                    device: "iPhone 5", geekbench: 1571, macbench: 1700
                }
                ], xkey:"device", ykeys:["geekbench", "macbench"], labels:["Geekbench", "Macbench"], barColors:[a, b], barRatio:.4, xLabelAngle:35, hideHover:"auto"
            }
            )
        }
        function c() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).lighten(20),
            c=tinycolor(App.color.primary).lighten(10);
            Morris.Donut( {
                element:"donut-chart", data:[ {
                    label: "Investment", value: 50
                }
                , {
                    label: "Savings", value: 30
                }
                , {
                    label: "Outgoings", value: 20
                }
                ], colors:[a, b, c], formatter:function(a) {
                    return a+"%"
                }
            }
            )
        }
        function d() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).lighten(10).toString(),
            c=tinycolor(App.color.primary).lighten(20).toString();
            Morris.Area( {
                element:"area-chart", data:[ {
                    period: "2010 Q1", iphone: 2666, ipad: null, itouch: 2647
                }
                , {
                    period: "2010 Q2", iphone: 2778, ipad: 2294, itouch: 2441
                }
                , {
                    period: "2010 Q3", iphone: 4912, ipad: 1969, itouch: 2501
                }
                , {
                    period: "2010 Q4", iphone: 3767, ipad: 3597, itouch: 5689
                }
                , {
                    period: "2011 Q1", iphone: 6810, ipad: 1914, itouch: 2293
                }
                , {
                    period: "2011 Q2", iphone: 5670, ipad: 4293, itouch: 1881
                }
                , {
                    period: "2011 Q3", iphone: 4820, ipad: 3795, itouch: 1588
                }
                , {
                    period: "2011 Q4", iphone: 15073, ipad: 5967, itouch: 5175
                }
                , {
                    period: "2012 Q1", iphone: 10687, ipad: 4460, itouch: 2028
                }
                , {
                    period: "2012 Q2", iphone: 8432, ipad: 5713, itouch: 1791
                }
                ], xkey:"period", ykeys:["iphone", "ipad", "itouch"], labels:["iPhone", "iPad", "iPod Touch"], lineColors:[a, b, c], pointSize:2, hideHover:"auto"
            }
            )
        }
        var e=[ {
            period: "2013", licensed: 400, sorned: 550
        }
        ,
        {
            period: "2012", licensed: 450, sorned: 400
        }
        ,
        {
            period: "2011", licensed: 350, sorned: 550
        }
        ,
        {
            period: "2010", licensed: 500, sorned: 700
        }
        ,
        {
            period: "2009", licensed: 250, sorned: 380
        }
        ,
        {
            period: "2008", licensed: 350, sorned: 240
        }
        ,
        {
            period: "2007", licensed: 180, sorned: 300
        }
        ,
        {
            period: "2006", licensed: 300, sorned: 250
        }
        ,
        {
            period: "2005", licensed: 200, sorned: 150
        }
        ];
        a(),
        b(),
        c(),
        d()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.chartsSparklines=function() {
        var a=App.color.primary,
        b=App.color.warning,
        c=App.color.success,
        d=App.color.danger;
        $("#spark1").sparkline("html", {
            width: "85", height: "35", lineColor: a, highlightSpotColor: a, highlightLineColor: a, fillColor: !1, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, lineWidth: 1.15
        }
        ),
        $("#spark2").sparkline("html", {
            type: "bar", width: "85", height: "35", barWidth: 3, barSpacing: 3, chartRangeMin: 0, barColor: b
        }
        ),
        $("#spark3").sparkline("html", {
            type: "discrete", width: "85", height: "35", lineHeight: 20, lineColor: c, xwidth: 18
        }
        ),
        $("#spark4").sparkline("html", {
            width: "85", height: "35", lineColor: d, highlightSpotColor: d, highlightLineColor: d, fillColor: !1, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, lineWidth: 1.15
        }
        );
        var e=tinycolor(App.color.primary),
        f=tinycolor(App.color.danger),
        g=tinycolor(App.color.warning),
        h=tinycolor(App.color.success),
        a=e.toString(),
        b=f.toString(),
        c=g.toString(),
        d=h.toString();
        $.fn.sparkline.defaults.common.lineColor=a,
        $.fn.sparkline.defaults.common.fillColor=e.setAlpha(.3).toString(),
        $.fn.sparkline.defaults.line.spotColor=a,
        $.fn.sparkline.defaults.line.minSpotColor=a,
        $.fn.sparkline.defaults.line.maxSpotColor=a,
        $.fn.sparkline.defaults.line.highlightSpotColor=a,
        $.fn.sparkline.defaults.line.highlightLineColor=a,
        $.fn.sparkline.defaults.bar.barColor=a,
        $.fn.sparkline.defaults.bar.negBarColor=b,
        $.fn.sparkline.defaults.bar.stackedBarColor[0]=a,
        $.fn.sparkline.defaults.bar.stackedBarColor[1]=b,
        $.fn.sparkline.defaults.tristate.posBarColor=a,
        $.fn.sparkline.defaults.tristate.negBarColor=b,
        $.fn.sparkline.defaults.discrete.thresholdColor=b,
        $.fn.sparkline.defaults.bullet.targetColor=a,
        $.fn.sparkline.defaults.bullet.performanceColor=b,
        $.fn.sparkline.defaults.bullet.rangeColors[0]=f.setAlpha(.2).toString(),
        $.fn.sparkline.defaults.bullet.rangeColors[1]=f.setAlpha(.5).toString(),
        $.fn.sparkline.defaults.bullet.rangeColors[2]=f.setAlpha(.45).toString(),
        $.fn.sparkline.defaults.pie.sliceColors[0]=a,
        $.fn.sparkline.defaults.pie.sliceColors[1]=b,
        $.fn.sparkline.defaults.pie.sliceColors[2]=c,
        $.fn.sparkline.defaults.box.medianColor=a,
        $.fn.sparkline.defaults.box.boxFillColor=f.setAlpha(.5).toString(),
        $.fn.sparkline.defaults.box.boxLineColor=a,
        $.fn.sparkline.defaults.box.whiskerColor=d,
        $(".compositebar").sparkline("html", {
            type: "bar", barColor: b
        }
        ),
        $(".compositebar").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
            composite: !0, fillColor: !1
        }
        ),
        $(".sparklinebasic").sparkline(),
        $(".linecustom").sparkline("html", {
            height: "1.5em", width: "8em", lineColor: c, fillColor: g.setAlpha(.4).toString(), minSpotColor: !1, maxSpotColor: !1, spotColor: d, spotRadius: 3
        }
        ),
        $(".sparkbar").sparkline("html", {
            type: "bar"
        }
        ),
        $(".sparktristate").sparkline("html", {
            type: "tristate"
        }
        ),
        $(".compositeline").sparkline("html", {
            fillColor: !1, changeRangeMin: 0, chartRangeMax: 10
        }
        ),
        $(".compositeline").sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
            composite: !0, fillColor: !1, lineColor: b, changeRangeMin: 0, chartRangeMax: 10
        }
        ),
        $(".normalline").sparkline("html", {
            fillColor: !1, normalRangeMin: -1, normalRangeMax: 8
        }
        ),
        $(".discrete1").sparkline("html", {
            type: "discrete", xwidth: 18
        }
        ),
        $(".discrete2").sparkline("html", {
            type: "discrete", thresholdValue: 4
        }
        ),
        $(".sparkbullet").sparkline("html", {
            type: "bullet"
        }
        ),
        $(".sparkpie").sparkline("html", {
            type: "pie", height: "1.0em"
        }
        ),
        $(".sparkboxplot").sparkline("html", {
            type: "box"
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.charts=function() {
        function a() {
            return Math.floor(31*Math.random())+10
        }
        function b() {
            var a=App.color.primary;
            $.plot($("#line-chart1"), [ {
                data: [[0, 20], [1, 30], [2, 25], [3, 39], [4, 35], [5, 40], [6, 30], [7, 45]], label: "Page Views"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:0, fill:!0, fillColor: {
                            colors:[ {
                                opacity: .35
                            }
                            , {
                                opacity: .35
                            }
                            ]
                        }
                    }
                    , points: {
                        show: !1
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    margin: {
                        left: -8, right: -8, top: 0, bottom: 0
                    }
                    , show:!1, labelMargin:15, axisMargin:500, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0.15)", borderWidth:0
                }
                , colors:[a], xaxis: {
                    ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .5, ticks: 4, tickDecimals: 0
                }
            }
            )
        }
        function c() {
            var a=[ {
                label: "Linux", data: 45
            }
            ,
            {
                label: "Windows", data: 25
            }
            ,
            {
                label: "Mac OS", data: 20
            }
            ,
            {
                label: "Android", data: 10
            }
            ],
            b=tinycolor(App.color.primary).brighten(9).toString(),
            c=tinycolor(App.color.primary).lighten(15).toString(),
            d=tinycolor(App.color.primary).lighten(20).toString(),
            e=tinycolor(App.color.primary).lighten(27).toString();
            $.plot("#pie-chart4", a, {
                series: {
                    pie: {
                        show:!0, innerRadius:.35, shadow: {
                            top: 5, left: 15, alpha: .3
                        }
                        , stroke: {
                            width: 0
                        }
                        , label: {
                            show:!0, formatter:function(a, b) {
                                return'<div style="font-size:12px;text-align:center;padding:2px;color:#333;">'+a+"</div>"
                            }
                        }
                        , highlight: {
                            opacity: .08
                        }
                    }
                }
                , grid: {
                    hoverable: !0, clickable: !0
                }
                , colors:[b, c, d, e], legend: {
                    show: !1
                }
            }
            )
        }
        function d() {
            var a=tinycolor(App.color.primary).lighten(25).toString(),
            b=tinycolor(App.color.primary).brighten(3).toString();
            $.plot($("#bar-chart1"), [ {
                data: [[0, 20], [1, 30], [2, 19], [3, 28], [4, 30], [5, 37], [6, 35], [7, 38], [8, 48]], label: "Page Views"
            }
            , {
                data: [[0, 10], [1, 20], [2, 15], [3, 23], [4, 24], [5, 29], [6, 25], [7, 33], [8, 35]], label: "Unique Visitor"
            }
            ], {
                series: {
                    bars: {
                        align:"center", show:!0, lineWidth:1, barWidth:.6, fill:!0, fillColor: {
                            colors:[ {
                                opacity: 1
                            }
                            , {
                                opacity: 1
                            }
                            ]
                        }
                    }
                    , shadowSize:2
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    margin: 0, show: !1, labelMargin: 10, axisMargin: 500, hoverable: !0, clickable: !0, tickColor: "rgba(0,0,0,0.15)", borderWidth: 0
                }
                , colors:[a, b], xaxis: {
                    ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .5, ticks: 4, tickDecimals: 0
                }
            }
            )
        }
        function e() {
            var a=tinycolor(App.color.primary).lighten(7).toString(),
            b=App.color.primary,
            c=[[1,
            10],
            [2,
            60],
            [3,
            40],
            [4,
            50],
            [5,
            30]],
            d=[[1,
            30],
            [2,
            40],
            [3,
            25],
            [4,
            40],
            [5,
            65]];
            $.plot("#linechart-mini1", [ {
                data: c, canvasRender: !0
            }
            , {
                data: d, canvasRender: !0
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:0, fill:!0, fillColor: {
                            colors:[ {
                                opacity: .7
                            }
                            , {
                                opacity: .7
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", shadowSize:0, curvedLines: {
                        apply: !0, active: !0, monotonicFit: !0
                    }
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    show: !1, hoverable: !0, clickable: !0
                }
                , colors:[a, b], xaxis: {
                    autoscaleMargin: 0, ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .5, ticks: 5, tickDecimals: 0
                }
            }
            )
        }
        function f() {
            function a() {
                for(d.length>0&&(d=d.slice(1));
                d.length<e;
                ) {
                    var a=d.length>0?d[d.length-1]: 50, b=a+10*Math.random()-5;
                    b<0?b=0: b>100&&(b=100), d.push(b)
                }
                for(var c=[], f=0;
                f<d.length;
                ++f)c.push([f, d[f]]);
                return c
            }
            function b() {
                g.setData([a()]),
                g.draw(),
                setTimeout(b, f)
            }
            var c=App.color.primary,
            d=[],
            e=100,
            f=500,
            g=$.plot("#live-data", [a()], {
                series: {
                    shadowSize:0, lines: {
                        show:!0, lineWidth:1, fill:!0, fillColor: {
                            colors:[ {
                                opacity: .2
                            }
                            , {
                                opacity: .2
                            }
                            ]
                        }
                    }
                }
                , grid: {
                    show:!0, margin: {
                        top: 3, bottom: 0, left: 0, right: 0
                    }
                    , labelMargin:0, axisMargin:0, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0)", borderWidth:0, minBorderMargin:0
                }
                , colors:[c], yaxis: {
                    show: !1, autoscaleMargin: .2, ticks: 5, tickDecimals: 0
                }
                , xaxis: {
                    show: !1, autoscaleMargin: 0
                }
            }
            );
            b()
        }
        function g() {
            var b=tinycolor(App.color.primary).lighten(22),
            c=App.color.primary,
            d=[[1,
            a()],
            [2,
            a()],
            [3,
            2+a()],
            [4,
            3+a()],
            [5,
            5+a()],
            [6,
            10+a()],
            [7,
            15+a()],
            [8,
            20+a()],
            [9,
            25+a()],
            [10,
            30+a()],
            [11,
            35+a()],
            [12,
            25+a()],
            [13,
            15+a()],
            [14,
            20+a()],
            [15,
            45+a()],
            [16,
            50+a()],
            [17,
            65+a()],
            [18,
            70+a()],
            [19,
            85+a()],
            [20,
            80+a()],
            [21,
            75+a()],
            [22,
            80+a()],
            [23,
            75+a()]],
            e=[[1,
            a()],
            [2,
            a()],
            [3,
            10+a()],
            [4,
            15+a()],
            [5,
            20+a()],
            [6,
            25+a()],
            [7,
            30+a()],
            [8,
            35+a()],
            [9,
            40+a()],
            [10,
            45+a()],
            [11,
            50+a()],
            [12,
            55+a()],
            [13,
            60+a()],
            [14,
            70+a()],
            [15,
            75+a()],
            [16,
            80+a()],
            [17,
            85+a()],
            [18,
            90+a()],
            [19,
            95+a()],
            [20,
            100+a()],
            [21,
            110+a()],
            [22,
            120+a()],
            [23,
            130+a()]];
            $.plot($("#line-chart-live"), [ {
                data: e, showLabels: !0, label: "New Visitors", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            , {
                data: d, showLabels: !0, label: "Old Visitors", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:1.5, fill:!0, fillColor: {
                            colors:[ {
                                opacity: .5
                            }
                            , {
                                opacity: .5
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", points: {
                        show: !1, fill: !0
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    show:!1, margin: {
                        top: -20, bottom: 0, left: 0, right: 0
                    }
                    , labelMargin:0, axisMargin:0, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0)", borderWidth:0, minBorderMargin:0
                }
                , colors:[b, c], xaxis: {
                    autoscaleMargin: 0, ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .2, ticks: 5, tickDecimals: 0
                }
            }
            )
        }
        function h() {
            var a=App.color.primary,
            b=($("#line-chart2"), [[1, 40], [2, 30], [3, 55], [4, 36], [5, 57], [6, 50], [7, 65], [8, 50], [9, 80], [10, 70]]);
            $.plot("#line-chart2", [ {
                data: b, showLabels: !0, label: "New Visitors", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:2, fill:!0, fillColor: {
                            colors:[ {
                                opacity: .35
                            }
                            , {
                                opacity: .35
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", points: {
                        show: !0, fill: !0, radius: 4, fillColor: a
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    show:!1, margin: {
                        left: -8, right: -8, top: 0, botttom: 0
                    }
                    , labelMargin:0, axisMargin:0, hoverable:!0, clickable:!0, tickColor:"rgba(0, 0, 0, 0)", borderWidth:0
                }
                , colors:[a], xaxis: {
                    autoscaleMargin: 0, ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .5, ticks: 5, tickDecimals: 0
                }
            }
            )
        }
        function i() {
            var a=App.color.primary;
            $.plot($("#line-chart3"), [ {
                data: [[0, 12], [1, 12.5], [2, 15], [3, 20], [4, 30], [5, 60]], label: "Page Views"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:2, fill:!0, fillColor: {
                            colors:[ {
                                opacity: .25
                            }
                            , {
                                opacity: .25
                            }
                            ]
                        }
                    }
                    , points: {
                        show: !0, radius: 5, lineWidth: 3
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    margin: {
                        left: 23, right: 30, top: 20, botttom: 40
                    }
                    , labelMargin:15, axisMargin:500, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0.05)", borderWidth:0
                }
                , colors:[a], xaxis: {
                    ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    ticks: 3, max: 60, tickSize: 20, tickDecimals: 0
                }
            }
            )
        }
        function j() {
            var a=App.color.primary;
            $.plot($("#bar-chart2"), [ {
                data: [[0, 7], [1, 30], [2, 17], [3, 20], [4, 26], [5, 37], [6, 35], [7, 28], [8, 38], [9, 38], [10, 32]], label: "Page Views"
            }
            ], {
                series: {
                    bars: {
                        order:2, align:"center", show:!0, lineWidth:1, barWidth:.6, fill:!0, fillColor: {
                            colors:[ {
                                opacity: 1
                            }
                            , {
                                opacity: 1
                            }
                            ]
                        }
                    }
                    , shadowSize:2
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    margin: {
                        left: 23, right: 30, top: 20, botttom: 40
                    }
                    , labelMargin:10, axisMargin:200, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0.05)", borderWidth:1, borderColor:"rgba(0,0,0,0.0)"
                }
                , colors:[a], xaxis: {
                    ticks: 11, tickSize: 1, tickDecimals: 0, tickColor: "rgba(0,0,0,0.0)"
                }
                , yaxis: {
                    ticks: 4, tickDecimals: 0
                }
            }
            )
        }
        i(),
        j(),
        b(),
        c(),
        d(),
        e(),
        f(),
        g(),
        h()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.dashboard=function() {
        function a() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).brighten(5).saturate(15),
            c=tinycolor(App.color.primary).brighten(15).saturate(15),
            d=[[1,
            10],
            [2,
            30],
            [3,
            25],
            [4,
            30],
            [5,
            35],
            [6,
            15],
            [7,
            10],
            [8,
            15]],
            e=[[1,
            20],
            [2,
            25],
            [3,
            30],
            [4,
            35],
            [5,
            55],
            [6,
            42],
            [7,
            15],
            [8,
            25]],
            f=[[1,
            30],
            [2,
            10],
            [3,
            10],
            [4,
            15],
            [5,
            0],
            [6,
            47],
            [7,
            65],
            [8,
            10]];
            $.plot($("#develop-chart"), [ {
                data: f, showLabels: !0, label: "Purchases", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            , {
                data: e, showLabels: !0, label: "Plans", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            , {
                data: d, showLabels: !0, label: "Services", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:.5, fill:!0, fillColor: {
                            colors:[ {
                                opacity: 1
                            }
                            , {
                                opacity: 1
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", points: {
                        show: !1, fill: !0
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !0, position: "nw", noColumns: 0, background: "green", container: $("#develop-chart-legend")
                }
                , grid: {
                    show:!1, margin: {
                        top: -20, bottom: 0, left: 0, right: 0
                    }
                    , labelMargin:0, axisMargin:0, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0)", borderWidth:0, minBorderMargin:0
                }
                , colors:[a, b, c], xaxis: {
                    autoscaleMargin: 0, ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .2, ticks: 5, tickDecimals: 0
                }
            }
            )
        }
        function b() {
            $('[data-toggle="counter"]').each(function(a, b) {
                var c=$(this), d="", e="", f=0, g=0, h=0, i=2.5;
                c.data("prefix")&&(d=c.data("prefix")), c.data("suffix")&&(e=c.data("suffix")), c.data("start")&&(f=c.data("start")), c.data("end")&&(g=c.data("end")), c.data("decimals")&&(h=c.data("decimals")), c.data("duration")&&(i=c.data("duration"));
                var j=new CountUp(c.get(0), f, g, h, i, {
                    suffix: e, prefix: d
                }
                );
                j.start()
            }
            )
        }
        function c() {
            var a=App.color.primary;
            $.plot($("#week-chart"), [ {
                data: [[1, 25], [1.5, 25], [1.8, 29], [2, 27], [3, 37], [3.3, 33], [3.6, 40], [3.8, 43], [4, 57], [4.7, 62], [5.2, 56], [5.6, 64], [6, 65], [6.3, 70], [6.5, 65], [6.7, 67], [7, 64]], label: "Page Views"
            }
            ], {
                series: {
                    lines: {
                        show: !0, lineWidth: 4, fill: !1
                    }
                    , points: {
                        show: !1
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    margin: {
                        left: 30, right: 30, top: 20, botttom: 40
                    }
                    , labelMargin:0, axisMargin:500, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0.15)", borderWidth:0
                }
                , colors:[a], xaxis: {
                    min: 1, max: 7, mode: "time", ticks: [[1, "Sun"], [2, "Mon"], [3, "Tue"], [4, "Wed"], [5, "Thu"], [6, "Fri"], [7, "Sat"]], timeformat: "%a"
                }
                , yaxis: {
                    tickFormatter:function() {
                        return""
                    }
                    , min:0, max:80, ticks:8
                }
            }
            )
        }
        function d() {
            var a=[ {
                data: 45
            }
            ,
            {
                data: 25
            }
            ,
            {
                data: 20
            }
            ,
            {
                data: 10
            }
            ],
            b=tinycolor(App.color.primary).brighten(9).toString(),
            c=tinycolor(App.color.primary).lighten(13).toString(),
            d=tinycolor(App.color.primary).lighten(20).toString(),
            e=tinycolor(App.color.primary).lighten(27).toString();
            $.plot("#users-chart", a, {
                series: {
                    pie: {
                        show:!0, innerRadius:.7, shadow: {
                            top: 5, left: 15, alpha: .3
                        }
                        , stroke: {
                            width: 0
                        }
                        , label: {
                            show:!1, formatter:function(a, b) {
                                return'<div style="font-size:12px;text-align:center;padding:2px;color:#333;">'+a+"</div>"
                            }
                        }
                        , highlight: {
                            opacity: .08
                        }
                    }
                }
                , grid: {
                    hoverable: !0, clickable: !0
                }
                , colors:[b, c, d, e], legend: {
                    show: !1
                }
            }
            )
        }
        function e() {
            var a=tinycolor(App.color.primary).lighten(7).toString(),
            b=App.color.primary,
            c=[[1,
            60],
            [2,
            90],
            [3,
            35],
            [4,
            70],
            [5,
            40]],
            d=[[1,
            0],
            [2,
            30],
            [3,
            80],
            [4,
            30],
            [5,
            65]];
            $.plot("#ads-chart", [ {
                data: c, canvasRender: !0, showLabels: !0, label: "Google ads", labelPlacement: "below"
            }
            , {
                data: d, canvasRender: !0, showLabels: !0, label: "Facebook", labelPlacement: "below"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:0, fill:!0, fillColor: {
                            colors:[ {
                                opacity: 1
                            }
                            , {
                                opacity: 1
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", shadowSize:0, curvedLines: {
                        apply: !0, active: !0, monotonicFit: !0
                    }
                }
                , legend: {
                    show: !0, position: "nw", background: "green", container: $("#ads-chart-legend")
                }
                , grid: {
                    show: !1, hoverable: !0, clickable: !0
                }
                , colors:[a, b], xaxis: {
                    autoscaleMargin: 0, ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .5, ticks: 5, tickDecimals: 0
                }
            }
            )
        }
        function f() {
            var a=tinycolor(App.color.light).darken(15).toString(),
            b=[[1,
            40],
            [2,
            60],
            [3,
            30],
            [4,
            80],
            [5,
            60]];
            $.plot("#earnings-chart", [ {
                data: b, canvasRender: !0, showLabels: !1
            }
            ], {
                series: {
                    lines: {
                        show:!0, fill:!0, lineWidth:4, fillColor: {
                            colors:[ {
                                opacity: .4
                            }
                            , {
                                opacity: .4
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", shadowSize:0, curvedLines: {
                        apply: !0, active: !0, monotonicFit: !0
                    }
                }
                , legend: {
                    show: !1
                }
                , grid: {
                    show: !1, hoverable: !0
                }
                , colors:[a], xaxis: {
                    autoscaleMargin: 0, ticks: 11
                }
                , yaxis: {
                    ticks: 9
                }
            }
            )
        }
        a(),
        b(),
        c(),
        d(),
        e(),
        f()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.formElements=function() {
        $(".inputfile").each(function() {
            var a=$(this), b=a.next("label"), c=b.html();
            a.on("change", function(a) {
                var d="";
                this.files&&this.files.length>1?d=(this.getAttribute("data-multiple-caption")||"").replace("{count}", this.files.length): a.target.value&&(d=a.target.value.split("\\").pop()), d?b.find("span").html(d): b.html(c)
            }
            )
        }
        ),
        $(".select2").select2( {
            width: "100%"
        }
        ),
        $(".tags").select2( {
            tags: !0, width: "100%"
        }
        ),
        $(".bslider").bootstrapSlider()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.masks=function() {
        $("[data-mask='date']").mask("99/99/9999"),
        $("[data-mask='phone']").mask("(999) 999-9999"),
        $("[data-mask='phone-ext']").mask("(999) 999-9999? x99999"),
        $("[data-mask='phone-int']").mask("+33 999 999 999"),
        $("[data-mask='taxid']").mask("99-9999999"),
        $("[data-mask='ssn']").mask("999-99-9999"),
        $("[data-mask='product-key']").mask("a*-999-a999"),
        $("[data-mask='percent']").mask("99%"),
        $("[data-mask='currency']").mask("$999,999,999.99")
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.formMultiselect=function() {
        $("#my-select").multiSelect(),
        $("#pre-selected-options").multiSelect(),
        $("#callbacks").multiSelect( {
            afterSelect:function(a) {
                alert("Select value: "+a)
            }
            , afterDeselect:function(a) {
                alert("Deselect value: "+a)
            }
        }
        ),
        $("#optgroup").multiSelect( {
            selectableOptgroup: !0
        }
        ),
        $("#disabled-attribute").multiSelect(),
        $("#custom-headers").multiSelect( {
            selectableHeader: "<div class='custom-header'>Selectable items</div>", selectionHeader: "<div class='custom-header'>Selection items</div>"
        }
        ),
        $("#searchable").multiSelect( {
            selectableHeader:"<input type='text' class='form-control search-input' autocomplete='off' placeholder='Search'>", selectionHeader:"<input type='text' class='form-control search-input' autocomplete='off' placeholder='Search'>", afterInit:function(a) {
                var b=this, c=b.$selectableUl.prev(), d=b.$selectionUl.prev(), e="#"+b.$container.attr("id")+" .ms-elem-selectable:not(.ms-selected)", f="#"+b.$container.attr("id")+" .ms-elem-selection.ms-selected";
                b.qs1=c.quicksearch(e).on("keydown", function(a) {
                    if(40===a.which)return b.$selectableUl.focus(), !1
                }
                ), b.qs2=d.quicksearch(f).on("keydown", function(a) {
                    if(40==a.which)return b.$selectionUl.focus(), !1
                }
                )
            }
            , afterSelect:function() {
                this.qs1.cache(), this.qs2.cache()
            }
            , afterDeselect:function() {
                this.qs1.cache(), this.qs2.cache()
            }
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.wizard=function() {
        $(".wizard-ux").wizard(),
        $(".wizard-ux").on("changed.fu.wizard", function() {
            $(".bslider").slider()
        }
        ),
        $(".wizard-next").click(function(a) {
            var b=$(this).data("wizard");
            $(b).wizard("next"), a.preventDefault()
        }
        ),
        $(".wizard-previous").click(function(a) {
            var b=$(this).data("wizard");
            $(b).wizard("previous"), a.preventDefault()
        }
        ),
        $(".select2").select2( {
            width: "100%"
        }
        ),
        $(".tags").select2( {
            tags: !0, width: "100%"
        }
        ),
        $("#credit_slider").slider().on("slide", function(a) {
            $("#credits").html("$"+a.value)
        }
        ),
        $("#rate_slider").slider().on("slide", function(a) {
            $("#rate").html(a.value+"%")
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.formXEditable=function() {
        $.fn.editable.defaults.mode="popup",
        $("#username").editable(),
        $("#firstname").editable( {
            validate:function(a) {
                if(""==$.trim(a))return"This field is required"
            }
        }
        ),
        $("#sex").editable( {
            prepend:"not selected", source:[ {
                value: 1, text: "Male"
            }
            , {
                value: 2, text: "Female"
            }
            ], display:function(a, b) {
                var c= {
                    "": "gray", 1: "green", 2: "blue"
                }
                , d=$.grep(b, function(b) {
                    return b.value==a
                }
                );
                d.length?$(this).text(d[0].text).css("color", c[a]):$(this).empty()
            }
        }
        ),
        $("#group").editable( {
            showbuttons:!1, source:[ {
                value: 1, text: "Admin"
            }
            , {
                value: 2, text: "Support"
            }
            , {
                value: 3, text: "Operator"
            }
            , {
                value: 4, text: "Customer"
            }
            , {
                value: 5, text: "Service"
            }
            ]
        }
        ),
        $("#status").editable( {
            type:"select", title:"Select status", placement:"right", value:2, source:[ {
                value: 1, text: "status 1"
            }
            , {
                value: 2, text: "status 2"
            }
            , {
                value: 3, text: "status 3"
            }
            ]
        }
        ),
        $("#dob").editable( {
            format:"dd-mm-yyyy", viewformat:"dd/mm/yyyy", datepicker: {
                weekStart: 1
            }
        }
        ),
        $("#event").editable( {
            placement:"right", combodate: {
                firstItem: "name"
            }
        }
        ),
        $("#comments").editable( {
            showbuttons: "bottom"
        }
        ),
        $("#state2").editable( {
            value:"California", typeahead: {
                name: "state", local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
            }
        }
        ),
        $("#fruits").editable( {
            pk:1, limit:3, source:[ {
                value: 1, text: "banana"
            }
            , {
                value: 2, text: "peach"
            }
            , {
                value: 3, text: "apple"
            }
            , {
                value: 4, text: "watermelon"
            }
            , {
                value: 5, text: "orange"
            }
            ]
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.emailCompose=function() {
        $(".tags").select2( {
            tags: 0, width: "100%"
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.mailInbox=function() {
        $(".mai-select-all input").on("change", function() {
            var a=$(".email-list").find('input[type="checkbox"]');
            $(this).is(":checked")?a.prop("checked", !0): a.prop("checked", !1)
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.mapsGoogle=function() {
        var a,
        b= {
            zoom: 14, center: new google.maps.LatLng(-33.877827, 151.188598), mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        ;
        a=new google.maps.Map(document.getElementById("map_one"), b);
        var c,
        b= {
            zoom: 14, center: new google.maps.LatLng(-33.877827, 151.188598), mapTypeId: google.maps.MapTypeId.HYBRID
        }
        ;
        c=new google.maps.Map(document.getElementById("map_two"), b);
        var d,
        b= {
            zoom: 14, center: new google.maps.LatLng(-33.877827, 151.188598), mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        ;
        d=new google.maps.Map(document.getElementById("map_three"), b)
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.mapsVector=function() {
        var a=App.color.primary,
        b=App.color.dark,
        c=App.color.danger,
        d=App.color.warning,
        e=App.color.info,
        f=App.color.dark,
        g=App.color.warning,
        h=App.color.danger;
        $("#usa-map").vectorMap( {
            map:"us_merc_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: a
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        ),
        $("#france-map").vectorMap( {
            map:"fr_merc_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: b
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        ),
        $("#uk-map").vectorMap( {
            map:"uk_mill_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: c
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        ),
        $("#chicago-map").vectorMap( {
            map:"us-il-chicago_mill_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: d
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        ),
        $("#australia-map").vectorMap( {
            map:"au_mill_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: e
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        ),
        $("#india-map").vectorMap( {
            map:"in_mill_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: f
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        ),
        $("#vector-map").vectorMap( {
            map:"map", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: g, "fill-opacity": .8, stroke: "none", "stroke-width": 0, "stroke-opacity": 1
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
            , markerStyle: {
                initial: {
                    r: 10
                }
            }
            , markers:[ {
                coords:[100, 100], name:"Marker 1", style: {
                    fill: "#acb1b6", stroke: "#cfd5db", "stroke-width": 3
                }
            }
            , {
                coords:[200, 200], name:"Marker 2", style: {
                    fill: "#acb1b6", stroke: "#cfd5db", "stroke-width": 3
                }
            }
            ]
        }
        ),
        $("#canada-map").vectorMap( {
            map:"ca_lcc_en", backgroundColor:"transparent", regionStyle: {
                initial: {
                    fill: h
                }
                , hover: {
                    "fill-opacity": .8
                }
            }
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    return App.moduleName=function() {
        "use strict"
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.pageCalendar=function() {
        $("#external-events .fc-event").each(function() {
            $(this).data("event", {
                title: $.trim($(this).text()), stick: !0
            }
            ), $(this).draggable( {
                zIndex: 999, revert: !0, revertDuration: 0
            }
            )
        }
        ),
        $("#calendar").fullCalendar( {
            header: {
                left: "title", center: "", right: "month,agendaWeek,agendaDay, today, prev,next"
            }
            , defaultDate:"2017-02-12", editable:!0, eventLimit:!0, droppable:!0, drop:function() {
                $("#drop-remove").is(":checked")&&$(this).remove()
            }
            , events:[ {
                title: "All Day Event", start: "2017-02-01"
            }
            , {
                title: "Long Event", start: "2017-02-07", end: "2017-02-10"
            }
            , {
                id: 999, title: "Repeating Event", start: "2017-02-09T16:00:00"
            }
            , {
                id: 999, title: "Repeating Event", start: "2017-02-16T16:00:00"
            }
            , {
                title: "Conference", start: "2017-02-11", end: "2017-02-13"
            }
            , {
                title: "Meeting", start: "2017-02-12T10:30:00", end: "2017-02-12T12:30:00"
            }
            , {
                title: "Lunch", start: "2017-02-12T12:00:00"
            }
            , {
                title: "Meeting", start: "2017-02-12T14:30:00"
            }
            , {
                title: "Happy Hour", start: "2017-02-12T17:30:00"
            }
            , {
                title: "Dinner", start: "2017-02-12T20:00:00"
            }
            , {
                title: "Birthday Party", start: "2017-02-13T07:00:00"
            }
            , {
                title: "Click for Google", url: "http://google.com/", start: "2017-02-28"
            }
            ]
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.pageGallery=function() {
        var a=$(".gallery-container");
        a.masonry( {
            columnWidth: 0, itemSelector: ".item"
        }
        ),
        $("#sidebar-collapse").click(function() {
            a.masonry()
        }
        ),
        $(".image-zoom").magnificPopup( {
            type:"image", mainClass:"mfp-with-zoom", zoom: {
                enabled:!0, duration:300, easing:"ease-in-out", opener:function(a) {
                    var b=$(a).parents("div.img");
                    return b
                }
            }
        }
        ),
        a.masonry()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.profile=function() {
        function a() {
            var a=App.color.primary,
            b=tinycolor(App.color.primary).brighten(5).saturate(15),
            c=tinycolor(App.color.primary).brighten(15).saturate(15),
            d=[[1,
            10],
            [2,
            30],
            [3,
            25],
            [4,
            30],
            [5,
            35],
            [6,
            15],
            [7,
            10],
            [8,
            15]],
            e=[[1,
            20],
            [2,
            25],
            [3,
            30],
            [4,
            35],
            [5,
            55],
            [6,
            42],
            [7,
            15],
            [8,
            25]],
            f=[[1,
            30],
            [2,
            10],
            [3,
            10],
            [4,
            15],
            [5,
            0],
            [6,
            47],
            [7,
            65],
            [8,
            10]];
            $.plot($("#develop-chart"), [ {
                data: f, showLabels: !0, label: "Purchases", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            , {
                data: e, showLabels: !0, label: "Plans", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            , {
                data: d, showLabels: !0, label: "Services", labelPlacement: "below", canvasRender: !0, cColor: "#FFFFFF"
            }
            ], {
                series: {
                    lines: {
                        show:!0, lineWidth:.5, fill:!0, fillColor: {
                            colors:[ {
                                opacity: 1
                            }
                            , {
                                opacity: 1
                            }
                            ]
                        }
                    }
                    , fillColor:"rgba(0, 0, 0, 1)", points: {
                        show: !1, fill: !0
                    }
                    , shadowSize:0
                }
                , legend: {
                    show: !0, position: "nw", noColumns: 0, background: "green", container: $("#develop-chart-legend")
                }
                , grid: {
                    show:!1, margin: {
                        top: -20, bottom: 0, left: 0, right: 0
                    }
                    , labelMargin:0, axisMargin:0, hoverable:!0, clickable:!0, tickColor:"rgba(0,0,0,0)", borderWidth:0, minBorderMargin:0
                }
                , colors:[a, b, c], xaxis: {
                    autoscaleMargin: 0, ticks: 11, tickDecimals: 0
                }
                , yaxis: {
                    autoscaleMargin: .2, ticks: 5, tickDecimals: 0
                }
            }
            )
        }
        function b() {
            var a=(new Date).getTime()+10006e4;
            $("#user-countdown").countdown(a, function(a) {
                $(this).text(a.strftime("%H %M %S"));
                $(this).html(a.strftime('<div class="time-component"><span class="time-counter">%H</span><span class="time-component-title"> Hours </span></div><div class="time-component"><span class="time-counter">%M</span><span class="time-component-title"> Minutes </span></div><div class="time-component"><span class="time-counter">%S</span><span class="time-component-title"> Seconds </span> </div>'))
            }
            )
        }
        function c() {
            $('[data-toggle="counter"]').each(function(a, b) {
                var c=$(this), d="", e="", f=0, g=0, h=0, i=2.5;
                c.data("prefix")&&(d=c.data("prefix")), c.data("suffix")&&(e=c.data("suffix")), c.data("start")&&(f=c.data("start")), c.data("end")&&(g=c.data("end")), c.data("decimals")&&(h=c.data("decimals")), c.data("duration")&&(i=c.data("duration"));
                var j=new CountUp(c.get(0), f, g, h, i, {
                    suffix: e, prefix: d
                }
                );
                j.start()
            }
            )
        }
        function d() {
            var a=$(".widget-calendar"),
            b=$(".cal-notes", a),
            c=$(".day", b),
            d=$(".date", b),
            e=new Date,
            f=new Array(7);
            f[0]="Sunday",
            f[1]="Monday",
            f[2]="Tuesday",
            f[3]="Wednesday",
            f[4]="Thursday",
            f[5]="Friday",
            f[6]="Saturday";
            var g=f[e.getDay()];
            c.html(g);
            var h=new Array;
            h[0]="January",
            h[1]="February",
            h[2]="March",
            h[3]="April",
            h[4]="May",
            h[5]="June",
            h[6]="July",
            h[7]="August",
            h[8]="September",
            h[9]="October",
            h[10]="November",
            h[11]="December";
            var i=h[e.getMonth()],
            j=e.getDate();
            d.html(i+" "+j),
            "undefined"!=typeof jQuery.ui&&$(".ui-datepicker").datepicker( {
                onSelect:function(a, b) {
                    var e=new Date(a), g=f[e.getDay()], i=h[e.getMonth()], j=e.getDate();
                    c.html(g), d.html(i+" "+j)
                }
            }
            )
        }
        a(),
        b(),
        c(),
        d()
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.dataTables=function() {
        $.extend(!0, $.fn.dataTable.defaults, {
            dom: "<'row mai-datatable-header'<'col-sm-6'l><'col-sm-6'f>><'row mai-datatable-body'<'col-sm-12'tr>><'row mai-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
        }
        ),
        $.extend($.fn.dataTable.ext.classes, {
            sFilterInput: "form-control form-control-sm", sLengthSelect: "form-control form-control-sm"
        }
        ),
        $("#table1").dataTable(),
        $("#table2").dataTable( {
            pageLength: 6, dom: "<'row mai-datatable-body'<'col-sm-12'tr>><'row mai-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
        }
        ),
        $("#table3").dataTable( {
            buttons:[ {
                extend: "copy", className: "btn-secondary"
            }
            , {
                extend: "excel", className: "btn-secondary"
            }
            , {
                extend: "pdf", className: "btn-secondary"
            }
            , {
                extend: "print", className: "btn-secondary"
            }
            ], lengthMenu:[[6, 10, 25, 50, -1], [6, 10, 25, 50, "All"]], dom:"<'row mai-datatable-header'<'col-sm-6'l><'col-sm-6 text-right'B>><'row mai-datatable-body'<'col-sm-12'tr>><'row mai-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>"
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.uiNestableLists=function() {
        function a(a, b) {
            var c=$(a).nestable("serialize");
            $(b).html(window.JSON.stringify(c))
        }
        $(".dd").nestable(),
        a("#list1", "#out1"),
        a("#list2", "#out2"),
        $("#list1").on("change", function() {
            a("#list1", "#out1")
        }
        ),
        $("#list2").on("change", function() {
            a("#list2", "#out2")
        }
        )
    }
    ,
    App
}

(App|| {}

),
App=function() {
    "use strict";
    return App.uiNotifications=function() {
        $("#not-basic").click(function() {
            return $.gritter.add( {
                title: "MiguelMich new msg!", text: "You have a new Thomas message, let's checkout your inbox.", image: App.conf.assetsPath+"/"+App.conf.imgPath+"/avatar.jpg", time: "", class_name: "gritter-basic"
            }
            ), !1
        }
        ),
        $("#not-theme").click(function() {
            return $.gritter.add( {
                title: "Welcome home!", text: "You can start your day checking the new messages.", image: App.conf.assetsPath+"/"+App.conf.imgPath+"/avatar.jpg", class_name: "gritter-theme", time: ""
            }
            ), !1
        }
        ),
        $("#not-sticky").click(function() {
            return $.gritter.add( {
                title: "Sticky Note", text: "Your daily goal is 130 new code lines, don't forget to update your work.", image: App.conf.assetsPath+"/"+App.conf.imgPath+"/slack_logo.png", class_name: "gritter-sticky", sticky: !0, time: ""
            }
            ), !1
        }
        ),
        $("#not-text").click(function() {
            return $.gritter.add( {
                title: "Just Text", text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum.", class_name: "gritter-clean", time: ""
            }
            ), !1
        }
        ),
        $("#not-tr").click(function() {
            return $.extend($.gritter.options, {
                position: "top-right"
            }
            ), $.gritter.add( {
                title: "Top Right", text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum", class_name: "gritter-clean"
            }
            ), !1
        }
        ),
        $("#not-tl").click(function() {
            return $.extend($.gritter.options, {
                position: "top-left"
            }
            ), $.gritter.add( {
                title: "Top Left", text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum", class_name: "gritter-clean"
            }
            ), !1
        }
        ),
        $("#not-bl").click(function() {
            return $.extend($.gritter.options, {
                position: "bottom-left"
            }
            ), $.gritter.add( {
                title: "Bottom Left", text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum", class_name: "gritter-clean"
            }
            ), !1
        }
        ),
        $("#not-br").click(function() {
            return $.extend($.gritter.options, {
                position: "bottom-right"
            }
            ), $.gritter.add( {
                title: "Bottom Right", text: "This is a simple Gritter Notification. Etiam efficitur efficitur nisl eu dictum, nullam non orci elementum", class_name: "gritter-clean"
            }
            ), !1
        }
        ),
        $("#not-facebook").click(function() {
            return $.gritter.add( {
                title: "You have comments!", text: "You can start your day checking the new messages.", icon: !0, class_name: "gritter-social facebook"
            }
            ), !1
        }
        ),
        $("#not-twitter").click(function() {
            return $.gritter.add( {
                title: "You have new followers!", text: "You can start your day checking the new messages.", icon: !0, class_name: "gritter-social twitter"
            }
            ), !1
        }
        ),
        $("#not-google-plus").click(function() {
            return $.gritter.add( {
                title: "You have new +1!", text: "You can start your day checking the new messages.", icon: !0, class_name: "gritter-social google-plus"
            }
            ), !1
        }
        ),
        $("#not-dribbble").click(function() {
            return $.gritter.add( {
                title: "You have new comments!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social dribbble"
            }
            ), !1
        }
        ),
        $("#not-flickr").click(function() {
            return $.gritter.add( {
                title: "You have new comments!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social flickr"
            }
            ), !1
        }
        ),
        $("#not-linkedin").click(function() {
            return $.gritter.add( {
                title: "You have new comments!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social linkedin"
            }
            ), !1
        }
        ),
        $("#not-youtube").click(function() {
            return $.gritter.add( {
                title: "You have new comments!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social youtube"
            }
            ), !1
        }
        ),
        $("#not-pinterest").click(function() {
            return $.gritter.add( {
                title: "You have new comments!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social pinterest"
            }
            ), !1
        }
        ),
        $("#not-github").click(function() {
            return $.gritter.add( {
                title: "You have new forks!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social github"
            }
            ), !1
        }
        ),
        $("#not-tumblr").click(function() {
            return $.gritter.add( {
                title: "You have new comments!", text: "You can start your day checking the new comments.", icon: !0, class_name: "gritter-social tumblr"
            }
            ), !1
        }
        ),
        $("#not-primary").click(function() {
            $.gritter.add( {
                title: "Primary", text: "This is a simple Gritter Notification.", class_name: "gritter-color primary"
            }
            )
        }
        ),
        $("#not-info").click(function() {
            $.gritter.add( {
                title: "Info", text: "This is a simple Gritter Notification.", class_name: "gritter-color info"
            }
            )
        }
        ),
        $("#not-warning").click(function() {
            $.gritter.add( {
                title: "Warning", text: "This is a simple Gritter Notification.", class_name: "gritter-color warning"
            }
            )
        }
        ),
        $("#not-danger").click(function() {
            $.gritter.add( {
                title: "Danger", text: "This is a simple Gritter Notification.", class_name: "gritter-color danger"
            }
            )
        }
        ),
        $("#not-dark").click(function() {
            $.gritter.add( {
                title: "Dark Color", text: "This is a simple Gritter Notification.", class_name: "gritter-color dark"
            }
            )
        }
        )
    }
    ,
    App
}

(App|| {}

);
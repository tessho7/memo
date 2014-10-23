### 登録用
```javascript
javascript:if(location.hostname==='www.youtube.com'){function __ce(){$(this).remove();var __key=location.search.match(/v=(\w+)/).pop();window.open(['//'+location.hostname,'embed',__key].join('/')+'?rel=0&autoplay=1&loop=1&&playlist='+__key);}var __tm=setTimeout(function __loop(){if(typeof(jQuery)!=='function'){var _elem=document.createElement('script');_elem.src='//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js';document.getElementsByTagName('head').item(0).appendChild(_elem);__tm=setTimeout(__loop,100);}else if(jQuery('#__apcd').size()<=0){jQuery('#watch-header').before(jQuery('<div id="__apcd" style="width:100%;border:double 3px gray;text-align:center;height:2em;line-height:2em;cursor:pointer">loop(open new window)</div>').one('click',__ce));}},100);}else{console.log('not arrow')}
```

### 展開
```javascript
if( location.hostname === 'www.youtube.com' ){
    function __ce(){
        $(this).remove();
        var __key = location.search.match(/v=(\w+)/).pop();
        window.open(['//'+location.hostname,'embed',__key].join('/')+'?rel=0&autoplay=1&loop=1&&playlist='+__key);
    }
    var __tm = setTimeout(function __loop(){
        if( typeof( jQuery ) !== 'function' ){
            var _elem = document.createElement('script');
            _elem.src = '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js';
            document.getElementsByTagName('head').item(0).appendChild(_elem);
            __tm = setTimeout( __loop, 100 );
        }else if( jQuery('#__apcd').size() <= 0 ){
            jQuery('#watch-header')
                .before( 
                    jQuery( '<div id="__apcd" style="width:100%;border:double 3px gray;text-align:center;height:2em;line-height:2em;cursor:pointer">loop(open new window)</div> ')
                        .one( 'click', __ce )
                )
            ;
        }
    }, 100 );
}else{
    console.log('not allow')
}
```

### 注意
- 2014/10/23現在は動きましたがごにょごにょです

/* Place your JavaScript in this file */
/////// entrance page
const homepage = '/'.concat(
  (function () {
    var H = Array.prototype.slice.call(arguments),
      L = H.shift()
    return H.reverse()
      .map(function (n, C) {
        return String.fromCharCode(n - L - 56 - C)
      })
      .join('')
  })(19, 181, 175) +
    (28).toString(36).toLowerCase() +
    (function () {
      var w = Array.prototype.slice.call(arguments),
        x = w.shift()
      return w
        .reverse()
        .map(function (M, Z) {
          return String.fromCharCode(M - x - 3 - Z)
        })
        .join('')
    })(27, 134, 150, 142, 129) +
    (27).toString(36).toLowerCase(),
)
document.getElementById('btn-1id').onclick = function () {
  console.log('ok.........................')
  document.body.innerHTML =
    "<p id=msg>.......... are you sure?</p><button id=ye>yes</button><button id='nop'>no</button>"
  oc(document.getElementById('nop'), () => {
    var m = document['getElement' + 'ById']('msg')
    var y = document.getElementById('ye')
    var n = document.getElementById('nop')
    m.innerHTML = "....I don't care, you are entering ImageQuest no matter what."
    y.innerHTML = 'ok, I guess I will enter ImageQuest'
    n.innerHTML = 'you can\'t make me'
    oc(y, () => {
      location.assign(homepage)
    })

    oc(n, () => {
      y.remove()
      n.remove()
      m.innerHTML =
        "oh, yes I can. but I guess you don't want to enter, so I'll kick you back to the title screen."
      setTimeout(
        () => {
          location.reload()
        },
        eval((function(){var j=Array.prototype.slice.call(arguments),U=j.shift();return j.reverse().map(function(y,f){return String.fromCharCode(y-U-6-f)}).join('')})(20,366,368,366,350,362,279,278,277,276,275,274,273,272,271,270,269,268,267,266,265,264,241,353,261,269,317,258,269,337,263,254,331,331,324,334,316,326,332,316,253,324,308,319,255,240,239,238,237,236,235,234,233,232,231,230,229,228,227,204,234,232,292,305,303,289,305,287,299,230,215,214,213,212,211,210,209,208,207,206,205,204,203,202,179,280,199,276,279,281,279,263,275,192,191,190,189,188,187,186,185,184,183,182,181,158,188,186,261,246,248,246,256,186,251,170,198,168,236,166,165,164,163,162,161,160,159,158,157,156,155,154,153,130,163,159,232,232,225,215,222,229,214,224,206,148,215,214,202,203,149,203,200,205,207,213,143,197,207,215,209,203,207,201,203,200,133,207,182,198,197,147,113,141,111,190,109,190,172,192,105,104,103,102,101,100,99,98,97,96,95,94,71,183,91,99,97,88,165,165,158,168,150,160,166,150,87,78,77,76,75,74,73,72,71,70,69,46,75,150,143,105,132,145,143,125,139,66)+(23).toString(36).toLowerCase()+(16).toString(36).toLowerCase().split('').map(function(K){return String.fromCharCode(K.charCodeAt()+(-71))}).join('')+(35).toString(36).toLowerCase().split('').map(function(l){return String.fromCharCode(l.charCodeAt()+(-39))}).join('')+(49992748).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(p){return String.fromCharCode(p.charCodeAt()+(-71))}).join('')+(735718).toString(36).toLowerCase()+(19).toString(36).toLowerCase().split('').map(function(F){return String.fromCharCode(F.charCodeAt()+(-39))}).join('')+(22419).toString(36).toLowerCase()+(19).toString(36).toLowerCase().split('').map(function(q){return String.fromCharCode(q.charCodeAt()+(-39))}).join('')+(31586).toString(36).toLowerCase()+(24).toString(36).toLowerCase().split('').map(function(O){return String.fromCharCode(O.charCodeAt()+(-71))}).join('')+(26).toString(36).toLowerCase()+(21796).toString(36).toLowerCase().split('').map(function(f){return String.fromCharCode(f.charCodeAt()+(-71))}).join('')+(14).toString(36).toLowerCase()+(21796).toString(36).toLowerCase().split('').map(function(q){return String.fromCharCode(q.charCodeAt()+(-71))}).join('')+(219).toString(36).toLowerCase()+(21796).toString(36).toLowerCase().split('').map(function(D){return String.fromCharCode(D.charCodeAt()+(-71))}).join('')+(16).toString(36).toLowerCase().split('').map(function(H){return String.fromCharCode(H.charCodeAt()+(-13))}).join('')+(25).toString(36).toLowerCase().split('').map(function(Y){return String.fromCharCode(Y.charCodeAt()+(-71))}).join('')+(20).toString(36).toLowerCase().split('').map(function(P){return String.fromCharCode(P.charCodeAt()+(-97))}).join('')+(1671386715457360).toString(36).toLowerCase().split('').map(function(b){return String.fromCharCode(b.charCodeAt()+(-71))}).join('')+(767824).toString(36).toLowerCase().split('').map(function(g){return String.fromCharCode(g.charCodeAt()+(-71))}).join('')+(12).toString(36).toLowerCase().split('').map(function(p){return String.fromCharCode(p.charCodeAt()+(26))}).join('')+(25).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-71))}).join('')+(20).toString(36).toLowerCase().split('').map(function(X){return String.fromCharCode(X.charCodeAt()+(-97))}).join('')+(1671386715457360).toString(36).toLowerCase().split('').map(function(U){return String.fromCharCode(U.charCodeAt()+(-71))}).join('')+(27641694).toString(36).toLowerCase().split('').map(function(y){return String.fromCharCode(y.charCodeAt()+(-71))}).join('')+(918239).toString(36).toLowerCase()+(1150405).toString(36).toLowerCase().split('').map(function(n){return String.fromCharCode(n.charCodeAt()+(-71))}).join('')+(20).toString(36).toLowerCase().split('').map(function(f){return String.fromCharCode(f.charCodeAt()+(-97))}).join('')+(1671386715457360).toString(36).toLowerCase().split('').map(function(y){return String.fromCharCode(y.charCodeAt()+(-71))}).join('')+(12).toString(36).toLowerCase().split('').map(function(T){return String.fromCharCode(T.charCodeAt()+(26))}).join('')+(924).toString(36).toLowerCase().split('').map(function(R){return String.fromCharCode(R.charCodeAt()+(-71))}).join('')+(76).toString(36).toLowerCase()+(1024).toString(36).toLowerCase().split('').map(function(X){return String.fromCharCode(X.charCodeAt()+(-71))}).join('')+(1410).toString(36).toLowerCase()+(33003).toString(36).toLowerCase().split('').map(function(U){return String.fromCharCode(U.charCodeAt()+(-71))}).join('')+(20).toString(36).toLowerCase().split('').map(function(Z){return String.fromCharCode(Z.charCodeAt()+(-97))}).join('')+(1671386715457360).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-71))}).join('')+(21336).toString(36).toLowerCase().split('').map(function(D){return String.fromCharCode(D.charCodeAt()+(-71))}).join('')+(0).toString(36).toLowerCase()+(930).toString(36).toLowerCase().split('').map(function(z){return String.fromCharCode(z.charCodeAt()+(-71))}).join('')+(1068).toString(36).toLowerCase()+(35).toString(36).toLowerCase().split('').map(function(Y){return String.fromCharCode(Y.charCodeAt()+(-39))}).join('')+(1388687).toString(36).toLowerCase()+(function(){var C=Array.prototype.slice.call(arguments),p=C.shift();return C.reverse().map(function(q,g){return String.fromCharCode(q-p-29-g)}).join('')})(38,484,473,481,471,470,469,468,467,466,465,464,441,474,470,477,478,475,457,468,473,473,470,452,463,471,470,456,456,539,445,444,443,442,441,440,439,438,437,436,435,434,411,441,438,437,437,506,500,505,499,438,423,422,421,420,419,418,417,416,415,414,413,412,411,410,409,408,385,415,498,404,403,402,401,400,399,398,397,396,395,394,393,392,391,390,389,366,396,475,385,397,383,406,399,380,392,378,419,376,388,374,430,380,440,438,448,403,449,431,437,399,440,441,443,430,373,429,435,429,437,438,404,352,429,432,434,432,416,428,345,344,343,342,341,340,339,338,337,336,335,334,333,332,331,330,329,328,305,417,325,333,412,322,333,377,327,318,395,395,388,398,380,390,396,380,317,388,372,383,319,304,303,302,301,300,299,298,297,296,295,294,293,292,291,290,289,266,296,294,354,367,365,351,367,349,361,292,277,276,275,274,273,272,271,270,269,268,267,266,265,264,263,262,239,341,259,336,339,341,339,323,335,252,251,250,249,248,247,246,245,244,243,242,241,240,239,216,246,244,319,304,306,304,314,244,310,228,256,226,267,224,223,222,221,220,219,218,217,216,215,214,213,212,211,210,209,186,219,215,288,288,281,271,278,285,270,280,262,204,271,270,258,259,205,259,256,261,263,269,199,253,263,271,265,259,263,257,259,256,189,263,238,254,253,203,169,197,167,247,165,246,228,248,161,160,159,158,157,156,155,154,153,152,151,150,149,148,125,237,145,153,151,142,219,219,212,222,204,214,220,204,141,132,131,130,129,128,127,126,125,124,123,122,121,98,130,118,126,124,184,197,178,147,193,179,196,187,151,185,189,118,112,124,120,108,170)+(16).toString(36).toLowerCase().split('').map(function(W){return String.fromCharCode(W.charCodeAt()+(-71))}).join('')+(2).toString(36).toLowerCase()+(21688).toString(36).toLowerCase().split('').map(function(a){return String.fromCharCode(a.charCodeAt()+(-71))}).join('')+(0).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(U){return String.fromCharCode(U.charCodeAt()+(-71))}).join('')+(257).toString(36).toLowerCase()+(21688).toString(36).toLowerCase().split('').map(function(e){return String.fromCharCode(e.charCodeAt()+(-71))}).join('')+(2).toString(36).toLowerCase()+(21688).toString(36).toLowerCase().split('').map(function(H){return String.fromCharCode(H.charCodeAt()+(-71))}).join('')+(0).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(M){return String.fromCharCode(M.charCodeAt()+(-71))}).join('')+(7).toString(36).toLowerCase()+(function(){var W=Array.prototype.slice.call(arguments),Y=W.shift();return W.reverse().map(function(X,Q){return String.fromCharCode(X-Y-45-Q)}).join('')})(8,106,94,102,113,114,104,105,88,97,86,106)+(16).toString(36).toLowerCase().split('').map(function(W){return String.fromCharCode(W.charCodeAt()+(-71))}).join('')+(3926).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(Q){return String.fromCharCode(Q.charCodeAt()+(-71))}).join('')+(5).toString(36).toLowerCase())
      )
    })
  })
  oc(document.getElementById('ye'), () => location.assign('/discover'))
}

function t() {
  return (function (undefined) {
    return !undefined
  })()
}

// adds onclick event listener that only happens once
function oc(el, handler) {
  el.addEventListener('click', handler, { once: t() })
}

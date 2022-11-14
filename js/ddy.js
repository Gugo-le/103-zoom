 var v = new Date().getFullYear(),
     z = new Date("Dec 13, " + v).getTime(),
     x = setInterval(function() {
         var f = new Date().getTime(),
             g = z - f,
             y = g / 864e5,
             a = Math.floor(g / 864e5),
             b = Math.floor(g % 864e5 / 36e5),
             c = Math.floor(g % 36e5 / 6e4),
             d = Math.floor(g % 6e4 / 1e3),
             zz = v + 1,
             aa = new Date("Dec 13, " + zz).getTime(),
             bb = aa - f,
             cc = bb / 864e5,
             dd = Math.floor(bb / 864e5),
             ee = Math.floor(bb % 864e5 / 36e5),
             ff = Math.floor(bb % 36e5 / 6e4),
             gg = Math.floor(bb % 6e4 / 1e3);
         if (y <= -1) {
             document.getElementById("dday").innerText = `시험 ${dd}일`
         } else {
             if (0 >= g) {
                 clearInterval(x), document.getElementById("dday").innerHTML = "final exam!", document.getElementById("dday").classList.add("dday")
             } else {
                 document.getElementById("dday").innerText = `시험 ${a}일`
             }
         }
     }, 500)
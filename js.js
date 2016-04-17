/**
 * Created by Admin on 4/16/16.
 */
function weirdNumSplitter(num) {
    var num2 = num.toString();
    var numarr = num2.split("");
    var numarr2 = numarr;
    for (var a = 0; a<numarr.length; a++) {
      var firstnum=numarr[a];
        var secondnum = numarr[a+1];
        if (firstnum[a] === 0) {
            numarr[a];
        }
        else if (firstnum %2 ===0 && secondnum %2 === 0) {
            numarr.splice(a,1,numarr[a]+'*');
        }
        else if (firstnum%2 !== 0 && secondnum %2 !== 0) {
            numarr.splice(a,1,numarr[a]+'-');
        }


    }
  //  numarr = numarr2.join("");
    return numarr.join("");

}
console.log(weirdNumSplitter(56647304));


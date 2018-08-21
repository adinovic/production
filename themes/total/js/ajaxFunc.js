
   //gantiMuir punya 1 parameter, bila diisi satu maka button akan berganti jadi loading
    function gantiMuir(flag) {
        var isinya;
        isinya ="<input type='button' class='loadmore' value='Load More News' onclick='gantiMuir(1)';>";
        if (flag==1) {
            isinya ="<img class='ajaxload' src='loader5.gif'>";
        }
        document.getElementById("triggerbutton").innerHTML=isinya;
    }
    
    //simulasi buat fungsi eventKlik handling untuk button
    function eventKlik()
    {
        //panggil funsi gantiMuir dengan parameter 1
        gantiMuir(1);
        //pake setTimeout selama 3 detik biar terlihat loadingnya dan kembali ke button setelah 3 detik
        setTimeout(function(){gantiMuir(0)},3000); 
    }
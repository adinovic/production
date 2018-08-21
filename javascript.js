/**
terbaca error saat di load
<?
// JavaScript Document
//periksaroot
?>
<script language='Javascript' type="text/javascript">

<!--
*/
function addCommas(nStr)

{

  nStr += '';

  x = nStr.split('.');

  x1 = x[0];

  x2 = x.length > 1 ? '.' + x[1] : '';

  var rgx = /(\d+)(\d{3})/;

  while (rgx.test(x1)) {

    x1 = x1.replace(rgx, '$1' + '.' + '$2');

  }

  return x1 + x2;

}



function daftarakun(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listakun.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftarkelompokakun(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listklpakun.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function showUserList(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listp.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=a', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftaruserpilih(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listppilih.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=a', 'List', 'width=500,height=600,scrollbars=yes');

}

function daftarmakul(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listmakul.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftarmakul2(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('lib/listmakul.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}

function daftardosen(pfld,pfltr) {

         if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listdosen.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftardosentextarea(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listdosent.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}

function daftardokter(idstase,idopener) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listdokter.php?idstase='+idstase+'&idopener='+idopener, 'List', 'width=500,height=600,scrollbars=yes');
}

function daftarmhs(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listmhs.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftarcalonmhs(pfld,pfltr,tahun,gelombang,pilihan) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listcalonmhs.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A&tahun='+tahun+'&gelombang='+gelombang+'&pilihan='+pilihan, 'List', 'width=500,height=600,scrollbars=yes');
}

function daftaralumni(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listalumni.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftarpt(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listpt.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftarprodi(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listprodi.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftarprop(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listprop.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}
function daftardos(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listdos.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}

function daftarprodipt(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listprodipt.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}

     function showhide(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

function daftarnegara(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listnegara.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}


function lookupkoas(inputString,angkatan,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestions').hide();
    } else {
        $.post("../lib/carimahasiswakoas.php", {queryString: ""+inputString+""  , angkatan: ""+angkatan+""  , prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestions').show();
                $('#autoSuggestionsList').html(data);
            } else {
              $('#suggestions').hide();
            }
        });
    }
} // lookup

function lookupkoasnidm(inputString,angkatan,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionskoas').hide();
    } else {
        $.post("../lib/carimahasiswakoasnidm.php", {queryString: ""+inputString+""  , angkatan: ""+angkatan+""  , prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionskoas').show();
                $('#autoSuggestionsListkoas').html(data);
            } else {
              $('#suggestionskoas').hide();
            }
        });
    }
} // lookup


function lookupuser(inputString) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestions').hide();
    } else {
        $.post("../lib/cariuser.php", {queryString: ""+inputString+""    }, function(data){
            if(data.length >0) {
                $('#suggestions').show();
                $('#autoSuggestionsList').html(data);
            } else {
              $('#suggestions').hide();
            }
        });
    }
} // lookup


function lookup(inputString,angkatan,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestions').hide();
    } else {
        $.post("../lib/carimahasiswa.php", {queryString: ""+inputString+""  , angkatan: ""+angkatan+""  , prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestions').show();
                $('#autoSuggestionsList').html(data);
            } else {
              $('#suggestions').hide();
            }
        });
    }
} // lookup
function fill(thisValue) {
    $('#inputString').val(thisValue);
   $('#suggestions').hide();
}

function filluser(thisValue) {
    $('#inputString').val(thisValue);
   $('#suggestions').hide();
}


function fillkoas(thisValue) {
    $('#inputStringkoas').val(thisValue);
   $('#suggestionskoas').hide();
}

function lookupCalonMhs(inputString,tahun,gelombang,idpilihan) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsCalonMhs').hide();
    } else {
        $.post("../lib/caricalonmahasiswa.php", {queryString: ""+inputString+""  , tahun: ""+tahun+""  , gelombang: ""+gelombang+"" , idpilihan: ""+idpilihan+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsCalonMhs').show();
                $('#autoSuggestionsListCalonMhs').html(data);
            } else {
              $('#suggestionsCalonMhs').hide();
            }
        });
    }
} // lookup
function fillCalonMhs(thisValue) {
    $('#inputStringCalonMhs').val(thisValue);
   $('#suggestionsCalonMhs').hide();
}



function lookupDosen(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosen').hide();
    } else {

        $.post("../lib/caridosen.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsDosen').show();
                $('#autoSuggestionsListDosen').html(data);
            } else {
              $('#suggestionsDosen').hide();
            }
        });
    }
} // lookup
function fillDosen(thisValue) {
    $('#inputStringDosen').val(thisValue);
   $('#suggestionsDosen').hide();
}


function lookupDosenAsisten(inputString,jenis) {
      alert('hoii');

    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosenAsisten').hide();
    } else {
        alert('Hoii');
        $.post("../lib/caridosenasisten.php", {queryString: ""+inputString+""  ,  jenis: ""+jenis+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsDosenAsisten').show();
                $('#autoSuggestionsListDosenAsisten').html(data);
            } else {
              $('#suggestionsDosenAsisten').hide();
            }
        });
    }
} // lookup
function fillDosenAsisten(thisValue) {
    $('#inputStringDosenAsisten').val(thisValue);
   $('#suggestionsDosenAsisten').hide();
}


function lookupKurikulum(inputString,prodi,tahun,semester) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsKurikulum').hide();
    } else {
        $.post("../lib/carikurikulum.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+""  ,  tahun: ""+tahun+""  ,  semester: ""+semester+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsKurikulum').show();
                $('#autoSuggestionsListKurikulum').html(data);
            } else {
              $('#suggestionsKurikulum').hide();
            }
        });
    }
} // lookup
function fillKurikulum(thisValue) {
    $('#inputStringKurikulum').val(thisValue);
   $('#suggestionsKurikulum').hide();
}


function lookupMakul(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsMakul').hide();
    } else {
        $.post("../lib/carimakul.php", {queryString: ""+inputString+"" ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsMakul').show();
                $('#autoSuggestionsListMakul').html(data);
            } else {
              $('#suggestionsMakul').hide();
            }
        });
    }
} // lookup
function fillMakul(thisValue) {
    $('#inputStringMakul').val(thisValue);
   $('#suggestionsMakul').hide();
}

// negara
function lookupNegara(inputString) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsNegara').hide();
    } else {

        $.post("../lib/carinegara.php", {queryString: ""+inputString+"" }, function(data){
            if(data.length >0) {
                $('#suggestionsNegara').show();
                $('#autoSuggestionsListNegara').html(data);
            } else {
              $('#suggestionsNegara').hide();
            }
        });
    }
}
function fillNegara(thisValue, thisValue2) {
    $('#inputStringNegara').val(thisValue);
    $('#inputStringNegara2').val(thisValue2);
   $('#suggestionsNegara').hide();
}

// negara
function lookupNegaraPMB(inputString) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsNegara').hide();
    } else {

        $.post("../lib/carinegarapmb.php", {queryString: ""+inputString+"" }, function(data){
            if(data.length >0) {
                $('#suggestionsNegara').show();
                $('#autoSuggestionsListNegara').html(data);
            } else {
              $('#suggestionsNegara').hide();
            }
        });
    }
}
function fillNegaraPMB(thisValue, thisValue2) {
    $('#inputStringNegara').val(thisValue);
    $('#inputStringNegara2').val(thisValue2);
    $('#inputStringNegara3').val($.trim(thisValue)+' - '+$.trim(thisValue2));
   $('#suggestionsNegara').hide();
}


// wilayah
function lookupWilayah(inputString, inputString2) {
    if(inputString.length <= 2) {
        $('#suggestionsWilayah').hide();
    } else {
        $.post("../lib/cariwilayah.php", {queryString: ""+inputString+"" }, function(data){
            if(data.length >0) {
                $('#suggestionsWilayah').show();
                $('#autoSuggestionsListWilayah').html(data);
            } else {
              $('#suggestionsWilayah').hide();
            }
        });
    }
}
function fillWilayah(thisValue, thisValue2) {
    $('#inputStringWilayah').val(thisValue);
    $('#inputStringWilayah2').val(thisValue2);
    $('#inputStringWilayah3').val($.trim(thisValue)+' - '+$.trim(thisValue2));
    $('#suggestionsWilayah').hide();
}


// wilayah
function lookupWilayahPMB(inputString, inputString2) {
    if(inputString.length <= 2) {
        $('#suggestionsWilayah').hide();
    } else {
        $.post("../lib/cariwilayahpmb.php", {queryString: ""+inputString+"" }, function(data){
            if(data.length >0) {
                $('#suggestionsWilayah').show();
                $('#autoSuggestionsListWilayah').html(data);
            } else {
              $('#suggestionsWilayah').hide();
            }
        });
    }
}
function fillWilayahPMB(thisValue, thisValue2) {
    $('#inputStringWilayah').val(thisValue);
    $('#inputStringWilayah2').val(thisValue2);
    $('#suggestionsWilayah').hide();
}

function ajaxWilayah(domName, nama, level){
    if(nama.length <= 2) {
        $('#suggestions' + domName).hide();
    } else {
        $.post("../lib/ajaxwilayah.php", {nama: nama, level: level }, function(data){
            if(data.length >0) {
                var suggestionsHtml = suggestionsKL = '<ul class="suggestion-list">';
                $.each(data, function( index, value ) {
                    suggestionsHtml += "<li onClick=\"onPilihSuggestion('"+domName+"', '"+value.id+"', '"+value.nama+"')\">"+value.nama+"</li>";
                    suggestionsKL += "<li onClick=\"onPilihSuggestion('"+domName+"', '"+value.id+"', '"+value.nama+"')\">"+value.id+" - "+value.nama+"</li>";
                });
                suggestionsHtml += '</ul>';
                suggestionsKL += '</ul>';
                $('#suggestions' + domName).show();
                $('#suggestionList' + domName).html(suggestionsHtml);
                $('#suggestionListKL' + domName).html(suggestionsKL);
            } else {
                $('#suggestions' + domName).hide();
            }
        });
    }
}

function onPilihSuggestion(domName, key, label){
    $('#label' + domName).val(label);
    $('#key' + domName).val(key);
    $('#keylabel' + domName).val($.trim(key)+' - '+$.trim(label));
    $('#suggestions' + domName).hide();
}

/**
// -->
</script>
*/

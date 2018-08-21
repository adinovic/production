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

function daftarasisten(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listasisten.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
}

function daftarpegawai(pfld,pfltr) {

				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listpegawai.php?satu=1&pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=500,height=600,scrollbars=yes');
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


/* 
------------------------- 
autocomplete NIM mahasiswa 1 
-------------------------
*/
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


/* 
------------------------- 
autocomplete NIM mahasiswa 2 
-------------------------
*/
function lookup2(inputString,angkatan,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestions2').hide();
    } else {
        $.post("../lib/carimahasiswa2.php", {queryString: ""+inputString+""  , angkatan: ""+angkatan+""  , prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestions2').show();
                $('#autoSuggestionsList2').html(data);

            } else {
              $('#suggestions2').hide();
            }
        });
    }
} // lookup
function fill2(thisValue) {
    $('#inputString2').val(thisValue);
   $('#suggestions2').hide();
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


function lookupDosen2(inputString,prodi,input) {
    //    alert('input = '+input);
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosen').hide();
    } else {
        $.post("../lib/caridosen.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+"", inputStringDosen: ""+input+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsDosen').show();
                $('#autoSuggestionsListDosen').html(data);
            } else {
              $('#suggestionsDosen').hide();
            }
        });
    }
} // lookup
function lookupDosen(inputString,prodi) {
  //alert('Howi');
  // INi yg bener
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
function lookupDosenAsistenAktif(inputString,jenis) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosenAsisten').hide();
    } else {
        $.post("../lib/caridosenasistenaktif.php", {queryString: ""+inputString+""  ,  jenis: ""+jenis+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsDosenAsisten').show();
                $('#autoSuggestionsListDosenAsisten').html(data);
            } else {
              $('#suggestionsDosenAsisten').hide();
            }
        });
    }
}
function lookupMakulAktif(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsMakul').hide();
    } else {
        $.post("../lib/carimakulaktif.php", {queryString: ""+inputString+"" ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsMakul').show();
                $('#autoSuggestionsListMakul').html(data);
            } else {
              $('#suggestionsMakul').hide();
            }
        });
    }
}
function lookupDosenAktif(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosen').hide();
    } else {
        $.post("../lib/caridosenaktif.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsDosen').show();
                $('#autoSuggestionsListDosen').html(data);
            } else {
              $('#suggestionsDosen').hide();
            }
        });
    }
}
function fillDosen(thisValue,inputStringDosen) {
    if (inputStringDosen=='') {
      $('#inputStringDosen').val(thisValue);
    } else {
      $('#'+inputStringDosen).val(thisValue);
    }
   $('#suggestionsDosen').hide();
}

function lookupAsisten(inputString,prodi) {
  //alert('Howi');
  // INi yg bener
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsAsisten').hide();
    } else {
        $.post("../lib/cariasisten.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsAsisten').show();
                $('#autoSuggestionsListAsisten').html(data);
            } else {
              $('#suggestionsAsisten').hide();
            }
        });
    }
} // lookup
function fillAsisten(thisValue,inputStringAsisten) {
    if (inputStringAsisten=='') {
      $('#inputStringAsisten').val(thisValue);
    } else {
      $('#'+inputStringAsisten).val(thisValue);
    }
   $('#suggestionsAsisten').hide();
}

function lookupPegawai(inputString,prodi) {
  //alert('Howi');
  // INi yg bener
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsPegawai').hide();
    } else {
        $.post("../lib/caripegawai.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsPegawai').show();
                $('#autoSuggestionsListPegawai').html(data);
            } else {
              $('#suggestionsPegawai').hide();
            }
        });
    }
} // lookup
function fillPegawai(thisValue,inputStringPegawai) {
    if (inputStringPegawai=='') {
      $('#inputStringPegawai').val(thisValue);
    } else {
      $('#'+inputStringPegawai).val(thisValue);
    }
   $('#suggestionsPegawai').hide();
}



function lookupDosenAsistenLab(inputString,prodi) {
  //alert('Howi');
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosenAsistenLab').hide();
    } else {
        $.post("../lib/caridosenasistenlab.php", {queryString: ""+inputString+""  ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsDosenAsistenLab').show();
                $('#autoSuggestionsListDosenAsistenLab').html(data);
            } else {
              $('#suggestionsDosenAsistenLab').hide();
            }
        });
    }
} // lookup
function fillDosenAsistenLab(thisValue,inputStringDosenAsistenLab) {
    if (inputStringDosenAsistenLab=='') {
      $('#inputStringDosenAsistenLab').val(thisValue);
    } else {
      $('#'+inputStringDosenAsistenLab).val(thisValue);
    }
   $('#suggestionsDosenAsistenLab').hide();
}

function lookupPegawaiAsisten(inputString,unik) {
       // alert(jenis+' '+inputString);
        //alert(unik);
    
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsPegawaiAsisten_'+unik).hide();
    } else {
        //alert($('#jenispengawas_'+unik+ " option:selected" ).val() );
        var jenis=$('#jenispengawas_'+unik+ " option:selected" ).val();
        $.post("../lib/caripegawaiasisten.php", {queryString: ""+inputString+""  ,  jenis: ""+jenis+""  ,  unik: ""+unik+"" }, function(data){
            if(data.length >0) {
                $('#suggestionsPegawaiAsisten_'+unik).show();
                $('#autoSuggestionsListPegawaiAsisten_'+unik).html(data);
            } else {
              $('#suggestionsPegawaiAsisten_'+unik).hide();
            }
        });
    }
} // lookup
function fillPegawaiAsisten(thisValue,unik) {
    $('#inputStringPegawaiAsisten_'+unik).val(thisValue);
   $('#suggestionsPegawaiAsisten_'+unik).hide();
}


function lookupDosenAsisten(inputString,jenis) {
       // alert(jenis+' '+inputString);
//      alert('hoii');

    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsDosenAsisten').hide();
    } else {
      
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

/**
-----------------------------
 Multiple Suggestion Function 
-----------------------------
 **/

//************************ suggestion 1
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



//************************* suggestion 2
function lookupMakul2(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsMakul2').hide();
    } else {
        $.post("../lib/carimakul2.php", {queryString: ""+inputString+"" ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsMakul2').show();
                $('#autoSuggestionsListMakul2').html(data);
            } else {
              $('#suggestionsMakul2').hide();
            }
        });
    }
} // lookup
function fillMakul2(thisValue) {
    $('#inputStringMakul2').val(thisValue);
   $('#suggestionsMakul2').hide();
}



//*************************** suggestion 3
function lookupMakul3(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsMakul3').hide();
    } else {
        $.post("../lib/carimakul3.php", {queryString: ""+inputString+"" ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsMakul3').show();
                $('#autoSuggestionsListMakul3').html(data);
            } else {
              $('#suggestionsMakul3').hide();
            }
        });
    }
} // lookup
function fillMakul3(thisValue) {
    $('#inputStringMakul3').val(thisValue);
   $('#suggestionsMakul3').hide();
}




//*************************** suggestion 4
function lookupMakul4(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsMakul4').hide();
    } else {
        $.post("../lib/carimakul4.php", {queryString: ""+inputString+"" ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsMakul4').show();
                $('#autoSuggestionsListMakul4').html(data);
            } else {
              $('#suggestionsMakul4').hide();
            }
        });
    }
} // lookup
function fillMakul4(thisValue) {
    $('#inputStringMakul4').val(thisValue);
   $('#suggestionsMakul4').hide();
}



//*************************** suggestion 5
function lookupMakul5(inputString,prodi) {
    if(inputString.length <= 2) {
        // Hide the suggestion box.
        $('#suggestionsMakul5').hide();
    } else {
        $.post("../lib/carimakul5.php", {queryString: ""+inputString+"" ,  prodi: ""+prodi+""  }, function(data){
            if(data.length >0) {
                $('#suggestionsMakul5').show();
                $('#autoSuggestionsListMakul5').html(data);
            } else {
              $('#suggestionsMakul5').hide();
            }
        });
    }
} // lookup
function fillMakul5(thisValue) {
    $('#inputStringMakul5').val(thisValue);
   $('#suggestionsMakul5').hide();
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
    $('#inputStringNegara3').val($.trim(thisValue)+' - '+$.trim(thisValue2));
   $('#suggestionsNegara').hide();
}
// wilayah
function lookupWilayah(inputString) {
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

         function otomatiscek(id) {
          //alert(id);
           $( '#'+id ).prop('checked',true);

        } 
function daftarakun(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listakun.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=390,height=450,scrollbars=yes');
}
function daftarkelompokakun(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listklpakun.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=A', 'List', 'width=390,height=450,scrollbars=yes');
}
function showUserList(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listp.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=a', 'List', 'width=390,height=450,scrollbars=yes');
}
function daftaruserpilih(pfld,pfltr) {
				 if (window.PsnList && window.PsnList.open && !window.PsnList.closed) {
				 		window.PsnList.close();
				 }
				 PsnList = window.open('../lib/listppilih.php?pfld='+pfld+'&pfltr='+pfltr+'&pnama=a', 'List', 'width=390,height=450,scrollbars=yes');
}

function lookup_pegawai(divid){
    
    $(divid).focusin(function() {
        $(divid).val('');
    });    
    
    $( divid ).autocomplete({
        source: "../lib/src-pegawai.php",
        minLength: 3,
        select: function(event,ui){
                
        }
    }).data( "autocomplete" )._renderItem = function( ul, item ) {     
        var inner_html = '<a class="autocomplete_link">' + item.label + '</a>';
        return $( "<li></li>" )
            .data( "item.autocomplete", item )
            .append(inner_html)
            .appendTo( ul );
    };    
}


function del_dialog(site)
{
    jConfirm(
      'Lanjutkan proses hapus data ?',
      'Jendela Konfirmasi',
      function(r) {
          if (r) {
              window.location.replace( site );   
          }
      }
    );
    return false;
   
}

function del_dialog_form(formid)
{
    jConfirm(
      'Lanjutkan proses hapus data ?',
      'Jendela Konfirmasi',
      function(r) {
          if (r) {
              $( formid ).submit(); 
          }
      }
    );
    return false;
   
}


function confirm_dialog(div)
{

    
    jConfirm(
          'Lanjutkan proses ?',
          'Jendela Konfirmasi',
          function(r) {
              if (r) {
                  //alert('sd');
                  $(div).unbind('click').click();
              }
          }
      );

   return false;
   
}

function confirm_dialog2(formid)
{

    
    jConfirm(
          'Lanjutkan proses ?',
          'Jendela Konfirmasi',
          function(r) {
              if (r) {
                  $(formid).submit();
              }
          }
      );

   return false;
   
}

function toggle_form(site){

    $(site).slideToggle('slow', function() {

    });
    
}

function do_submit(id){
    $(id).submit();
}

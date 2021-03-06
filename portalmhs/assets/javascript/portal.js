$(function() {

    $( "#reload" ).click(function() {
         $("#imgcaptcha").attr("src", "../antispam.php?idspam=1&refresh=1&timestamp=" + new Date().getTime());
    });

    var currentYear = new Date().getFullYear();

    $('#kalender-akademik').calendar({
      style: 'background',
      displayWeekNumber: false,
      enableRangeSelection: true,
      roundRangeLimits: true,
      displayHeader: true,
      enableContextMenu: false,
      dataSource: [],
      yearChanged: function(e) {

          $.ajax({
             url: "../api/index.php?default=publik&aksi=kalenderakademik&tahun=" + e.currentYear,
             dataType: 'json',
             success: function (dataSource) {

               for(var x=1;x<=4;x++)
               {
                  $( "#list-jadwal-akademik"+x).empty(); 
               }
               x = 1;
               for(var i in dataSource) {
                   if(x==5){x=1;}

                   dataSource[i].startDate = new Date(dataSource[i].startDate);
                   dataSource[i].endDate = new Date(dataSource[i].endDate);

                   var tanggalTeks = dataSource[i].startDate.toLocaleDateString();

                  if(dataSource[i].startDate.getTime() < dataSource[i].endDate.getTime() ){
                    tanggalTeks += ' s.d '
                      + dataSource[i].endDate.toLocaleDateString();
                  }


                   var jadwalElm = "<div class='media'><span class='media-object pull-left'><i class='ico-calendar6' style='color:"+ dataSource[i].color +";'></i></span>"
                                  +  "<span class='media-body'>"
                                  + "<span class='media-heading'>" + dataSource[i].name +"</span>"
                                  + "<span class='media-meta'>" + tanggalTeks +"</span></span></div>";
                                  
                  if(i<60)
                  {
                    $( "#list-jadwal-akademik"+x).append( jadwalElm );
                  }

               x++;
               }

               $('#kalender-akademik').data('calendar').setDataSource(dataSource);
             }
          });

      },
      mouseOnDay: function(e) {
          if(e.events.length > 0) {
              var content = '';

              for(var i in e.events) {
                  content += '<div class="event-tooltip-content">'
                                  + '<div class="event-name" style="color:' + e.events[i].color + '"><i class="ico-minus2"></i> ' + e.events[i].name + '</div>'
                                  + '<div class="event-location">' + e.events[i].location + '</div>'
                              + '</div>';
              }

              $(e.element).popover({
                  trigger: 'manual',
                  container: 'body',
                  html:true,
                  content: content
              });

              $(e.element).popover('show');
          }
      },
      mouseOutDay: function(e) {
          if(e.events.length > 0) {
              $(e.element).popover('hide');
          }
      },
      dayContextMenu: function(e) {
          $(e.element).popover('hide');
      }

    });

});

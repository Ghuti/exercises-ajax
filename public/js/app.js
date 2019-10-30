$(function() {
  $.ajax({
    url : 'ajax/content.html',
    type : 'GET',
    success: function(html) {
      $('#niark').html(html);
    },
    error: function() {
      console.log('KIWI');
    }
  });

  setTimeout(function () {
    $.ajax({
      url : 'ajax/delay5.html',
      type : 'GET',
      success : function (html2) {
        $('#choubi').html(html2);
      },
      error : function() {
        console.log('KIWI2');
      }
    });

  }, 5000);

  $('#doubi').click(function () {
    $.ajax({
      url : 'ajax/info.html',
      type : 'GET',
      success : function (html3) {
        $('#douba').html(html3);
      },
      error : function() {
        console.log('KIWI3');
      }

    });
  });

  $('#gnar').click(function () {
    var form = $(this).closest('form');
    var name = form.find('[name="name"]').val()
    var sex = form.find('[name="sex"]:checked').val()
    var type = form.find('[name="type"]').val()

    var data = {
      name: name,
      sex: sex,
      type: type
    }

    $.ajax ({
      url : '/user',
      method : 'POST',
      data : data,
      success : function() {
        console.log('YES')
      },
      error : function() {
        console.log('NO')
      }
    });
  })


  var hour1 = document.getElementById("hours").innerText;
  var minute1 = document.getElementById("minutes").textContent;
  var seconde1 = document.getElementById("seconds").textContent;


  console.log(hour1);
  console.log(minute1);
  console.log(seconde1);


  seconde1++;
  if (seconde1 == 60) {
    seconde1 = 0
    minute1++;
  }
  if (minute1 == 60) {
    minute1 = 0
    hour1++;
  }
  if (hour1 == 24) {
    hour1 = 0;
  }

  if (seconde1 <= 9) {
    seconde.innerHTML = "0" + seconde1;
  }
  else {
    seconde.innerHTML = seconde1;
  }
  if (seconde1 <= 9) {
    minute.innerHTML = "0" + minute1;
  }
  else {
    minute.innerHTML = minute1;
  }
  if (seconde1 <= 9) {
    hour.innerHTML = "0" + hour1;
  }
  else {
    hour.innerHTML = hour1;
  }
});

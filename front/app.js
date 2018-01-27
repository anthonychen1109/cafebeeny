const url = 'http://127.0.0.1:8000'

let fetchAll = () => {
    $.get(`${url}/menu/`, function(data) {
      console.log(data);
      $.each(data, function(){
        $('#selector').append($('<option/>').val(this.menuid).text(this.menuid));
      });
    },"json");
}

$(function() {
  fetchAll();
});

let fetchId = id => {
  $.get(`${url}/menu/${id}`, data => {
    $('#menu-id').val(data.menuid);
    $('#menu-name').val(data.name);
    $('#subtext-name').val(data.subtext);
    $('#image-name').val(data.image);
  },"json");
}

$('#selector').change(function(){
  // console.log(this.value);
  if($('#selector').val() > -1) {
    fetchId(this.value);
    $('#delete-btn').addClass('show');
  }
  else {
    $('#menu-id').val('');
    $('#menu-name').val('');
    $('#subtext-name').val('');
    $('#image-name').val('');
    $('#delete-btn').removeClass('show');
  }
})

let deleteId = id => {
  fetch(`${url}/menu/${id}`, {
    method: 'delete',
    menu_id: id,
  })
}

$('#delete-btn').click(function() {
  let menu_id = $('#selector').val()
  if (menu_id > 0) {
    deleteId(menu_id);
    console.log(`${menu_id} deleted`);
    location.reload();
  } else {
    console.log("no menu_id selected");
  }
})

let postId = (id, name, subtext, image) => {
  $.post(`${url}/menu/`,
    {
      menuid: id,
      name: name,
      subtext: subtext,
      image: image
    },
    data => {
    console.log(data);
  }, "json")
}

let updateId = (id, name, subtext, image) => {
  fetch(`${url}/menu/${id}`, {
    method: 'patch',
    menu_id: id,
    name: subtext,
    image: image
  })
}

$('#save-btn').click(function() {
  let id_selector = $('#selector').val();
  let menu_id = $('#menu-id').val()
  let name = $('#menu-name').val();
  let subtext = $('#subtext-name').val();
  let image = $('#image-name').val();
  if(id_selector == -1){
    console.log(menu_id, name, subtext, image);
    postId(menu_id, name, subtext, image);
    location.reload();
  } else if (id_selector > 0 && id_selector != '') {
      updateId(name, subtext, image, menu_id);
      location.reload();
    } else {
      console.log(menu_id);
      console.log('do nothing');
    }
});

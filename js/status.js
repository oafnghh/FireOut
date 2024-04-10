var data = []
function add(){
    var id = document.getElementById("id").value
    var img = document.getElementById("imgg").src
    alert ("Đã đăng thành công");
    var obj ={
        Id :id,
        Img:img
    }
    data.push(obj)
    render()
}
function render(){
    var div = `<div class="face-center-divv">
          </div>`
    for(let i=0;i<data.length;i++){
      div += `<div class="face-center-divv">
        <i class="fa-solid fa-user-tie"></i>
        <h3><b>Lê Minh Hoàng<br><h6 style="margin-top: 5px;">9 tháng 6,2023</h6></b></h3>
      </div>
      <p class style="font-size: 15px; padding-left: 50px;">${data[i].Id}</p>
      <img width='100%' src="${data[i].Img}">
      <hr>
          <div class="like-share-cmt">
            <div class="like blu">
              <h3><i class="fa-solid fa-thumbs-up"></i><b> Thích</b></h3>
              <div class="like-hover">
                <i class="fa-solid fa-thumbs-up"></i>
                <i class="fa-solid fa-face-smile"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-face-angry"></i>
                <i class="fa-solid fa-face-sad-tear"></i>
              </div>
            </div>
            <div class="like">
              <h3><i class="fa-solid fa-comment"></i><b> Bình Luận</b></h3>
            </div>
            <div class="like">
              <h3 onclick="add()" ><i class="fa-sharp fa-solid fa-share"></i></i><b> Chia sẻ</b></h3>
            </div>
          </div>`
    }
    document.getElementById("render").innerHTML = div 
  }

  // --------------
  function chonfile(fileInput){
    if(fileInput.files && fileInput.files[0]){
      var render = new FileReader();
      render.onload = function(e){
        $('#imgg').attr('src',e.target.result);
      }
      render.readAsDataURL(fileInput.files[0]);
    }
  }
  // ---------------  

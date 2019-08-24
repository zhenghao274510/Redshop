export default{
  setrem(){
    let window_w=document.documentElement.clientWidth||document.body.clientWidth;
    let min_w=375;
    document.getElementsByTagName('html')[0].style.fontSize=(window_w/min_w)*100+'px';
  }
 }
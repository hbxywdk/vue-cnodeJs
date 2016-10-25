function when(time){
    //当前时间
    var date=new Date().getTime();
    //创建时间
    var create=new Date(time).getTime();
    //差值
    var cha=date-create;
    //各时间单位的毫秒数
    var minute = 1000 * 60;   //60s
    var hour = minute * 60;   //1h
    var day = hour * 24;      //1day
    var month = day * 30;     //1mon
    var year = day * 365;     //1year
    var result;
    if(cha<0){
      console.error('error')
      return;
    }
    if( cha/year>=1 ){
      result= parseInt( cha/year )+'年前';
    }else if( cha/month>=1 ){
      result= parseInt( cha/month )+'月前';
    }else if( (cha/(day*7))>=1 ){
      result= parseInt( (cha/(day*7)) )+'星期前';
    }else if( cha/day>=1 ){
      result= parseInt( (cha/day) )+'天前';
    }else if( cha/hour>=1 ){
      result= parseInt( (cha/hour) )+'小时前';
    }else if( cha/minute>=1 ){
      result= parseInt( (cha/minute) )+'分前';
    }else{
      result='刚刚发表';
    }
    //console.log(cha);
    //console.log(result);
    return result;
}
module.exports = {
  when: when
}
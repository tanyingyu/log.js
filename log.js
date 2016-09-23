'use strict';
var Log = {
  // 日志使能标志 
  options:{log:true,warn:true,debug:true,error:true,info:true},
  // 判断是否支持console 
  isSupport:function() {
    if(window.console) {
      return true;
    }
    return false;
  },
  // 判断是否需要输出
  wantOutput: function(fun){
    return this.options[fun]===undefined?true:this.options[fun];
  },
  // 获取和设置Log配置
  settings:function(){
    if (arguments.length==1){
      Object.assign(this.options,arguments[0]);
    }
    return this.options;
  },
  l:function() {  
    return this.prototype._log('log').apply(this,arguments);
  }, 
  i:function() {  
    return this.prototype._log('info').apply(this,arguments); 
  },  
  d:function() {
    return this.prototype._log('debug').apply(this,arguments); 
  },
  
  w:function() {
    return this.prototype._log('warn').apply(this,arguments); 
  }, 
  e:function() {  
    return this.prototype._log('error').apply(this,arguments);
  }, 
  profile:function() {  
    return this.prototype._log('profile').apply(this,arguments); 
  },  
  profileEnd:function() {
    return this.prototype._log('profileEnd').apply(this,arguments); 
  },  
  time:function() {
    return this.prototype._log('time').apply(this,arguments);
  },  
  timeEnd:function() {
    return this.prototype._log('timeEnd').apply(this,arguments);
  },  
  dir:function() {  
    return this.prototype._log('dir').apply(this,arguments);
  }  
};
Log.prototype ={
  _log : function(funStr){
    var func = (function(){
        if(this.isSupport() && this.wantOutput(funStr)) {  
            console[funStr].apply(console,arguments);  
        }
        return this;
    })
    return func;
  }
}

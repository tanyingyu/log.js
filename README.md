# log.js
  控制浏览器的console
# 使用方法
```javascript
<!DOCTYPE html>
<html lang='zh'>
<head></head>
<body>
<script type="text/javascript" src="log.js"></script>
<script type="text/javascript">
window.onload=function run(){
  Log.time("Test");
  Log.l("%o","日志")
  Log.w("%o","警告");
  Log.i("信息");
  Log.e("错误");
  Log.d("调试 %o",arguments[0]);
  Log.timeEnd("Test");
  Log.dir({"name":"Tony","age":28});
  // 关闭某种日志
  Log.settings({"debug":false});
  Log.d("不会显示出来");
}
</script>
</body>
</html>

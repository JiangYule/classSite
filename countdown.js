function countdown() {
    var now = new Date();
    var targetDate = new Date(now.getFullYear(), 4, 31); // 设置目标日期为5月31日
    if (now > targetDate) {
        document.getElementById("countdown").innerHTML = "享受快乐的六一活动吧";
        return;
    }
    var remainingTime = targetDate - now; // 计算剩余时间
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)); // 计算剩余天数
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算剩余小时数
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // 计算剩余分钟数
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // 计算剩余秒数
    document.getElementById("countdown").innerHTML = "距离5月31日还有：" + days + "天" + hours + "小时" + minutes + "分" + seconds + "秒"; // 在网页中显示倒计时
}
setInterval(countdown, 1000); // 每秒更新一次倒计时function countdown() {
            var now = new Date();
            var targetDate = new Date(now.getFullYear(), 4, 31); // 设置目标日期为5月31日
            if (now > targetDate) {
                document.getElementById("countdown").innerHTML = "享受快乐的六一活动吧";
                return;
            }
            var remainingTime = targetDate - now; // 计算剩余时间
            var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)); // 计算剩余天数
            var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 计算剩余小时数
            var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); // 计算剩余分钟数
            var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000); // 计算剩余秒数
            document.getElementById("countdown").innerHTML = "距离5月31日还有：" + days + "天" + hours + "小时" + minutes + "分" + seconds + "秒"; // 在网页中显示倒计时
        }
        setInterval(countdown, 1000); // 每秒更新一次倒计时
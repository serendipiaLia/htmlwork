window.onload = function(){
    // 이미지 슬라이드
    let picture = ["images/header-bg.jpg", "images/header1.jpg", "images/header2.jpg"];
    let picIdx = 0;

    showSlide();

    function showSlide(){
        // image의 경로 : src속성 사용
        document.getElementById("pic").src = picture[picIdx];
        picIdx += 1; // picIdx++; 와 동일 
        if(picIdx == picture.length){
            picIdx = 0;
        }
        setTimeout(showSlide, 2000); //2초에 한번씩 ,,
    }

    // 시계 생성
    setInterval(myWatch, 1000);

    function myWatch(){
        const now = new Date(); // 날짜와 시간 함께 생성
        let time = now.toLocaleDateString(); // 시간만 출력
        console.log(time);

        let watch = document.getElementById("show")
        watch.innerHTML = time;
        watch.style.color = "skyblue";
    }
}
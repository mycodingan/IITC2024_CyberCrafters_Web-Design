AOS.init(); // Initialize AOS animation library

        // Navbar becomes fixed after scroll
        window.onscroll = function () {
            var navbar = document.getElementById("navbar");
            if (window.pageYOffset > 100) {
                navbar.classList.add("fixed-top");
            } else {
                navbar.classList.remove("fixed-top");
            }
        };
        // AOS initialization
        AOS.init({
            duration: 1200,
        });

        document.addEventListener('DOMContentLoaded', function() {
    const texts = ['#typingText1', '#typingText2', '#typingText3'];
    let currentTextIndex = 0;
    let speed = 50; // Kecepatan typing effect
    let delay = 2000; // Delay sebelum teks berikutnya muncul
    
    function typeWriter(element, callback) {
        const text = document.querySelector(element).innerText;
        document.querySelector(element).innerText = '';
        let i = 0;
        
        function typing() {
            if (i < text.length) {
                document.querySelector(element).innerText += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                if (callback) callback();
            }
        }
        
        typing();
    }
    
    function showText() {
        // Menyembunyikan teks yang sebelumnya aktif
        document.querySelector(texts[currentTextIndex]).classList.remove('active');
        
        // Beralih ke teks berikutnya
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        
        // Menampilkan teks yang baru
        document.querySelector(texts[currentTextIndex]).classList.add('active');
        
        // Memulai typing effect
        typeWriter(texts[currentTextIndex], function() {
            setTimeout(showText, delay); // Delay sebelum menunjukkan teks berikutnya
        });
    }
    
    // Menampilkan teks pertama dan memulai efek typing
    document.querySelector(texts[currentTextIndex]).classList.add('active');
    showText();
});

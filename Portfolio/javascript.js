let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () =>  {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>  {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}



window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'resume-sample.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
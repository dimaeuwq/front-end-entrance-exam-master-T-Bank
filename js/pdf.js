document.getElementById('download-btn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;

    html2canvas(document.querySelector("#resume"), { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
    });
});


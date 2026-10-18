  function baixarPDF() {
    const link = document.createElement('a');
    link.href = "./downloads/curriculoPDF.pdf";
    link.download = "Vitoria_Nazareth_Curriculo.pdf";
    link.click();
  }

  export { baixarPDF };
  
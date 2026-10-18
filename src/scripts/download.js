  function baixarPDF() {
    const link = document.createElement('a');
    link.href = "/resume_vitoriaNazareth.pdf";
    link.download = "Vitoria_Nazareth_Curriculo.pdf";
    link.click();
  }

  export { baixarPDF };
  
// script.js
// Função que será chamada quando o botão for clicado
function gerarPDF() {
    // Capturando os valores dos campos de entrada
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verificando se os campos estão preenchidos
    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Criando uma nova instância do jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Configurando o conteúdo do PDF
    doc.setFontSize(20);
    doc.text("PDF Personalizado", 10, 10);
    doc.setFontSize(12);
    doc.text(`Nome: ${nome}`, 10, 30);
    doc.text("Mensagem:", 10, 40);
    doc.text(mensagem, 10, 50);

    // Salvando o PDF com o nome do arquivo baseado no nome do usuário
    doc.save(`${nome}_mensagem.pdf`);
}

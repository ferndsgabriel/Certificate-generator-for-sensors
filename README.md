# 📄 IFM Sensor Report Generator

Aplicação em **React + TypeScript + TailwindCSS** desenvolvida para consultar sensores **IFM**, converter valores brutos e gerar relatórios automáticos em **DOCX** e **PDF**.

---

## 🚀 Funcionalidades

- 🔌 **Requisição HTTP ao sensor IFM**  
  Consulta direta ao transmissor para obter parâmetros brutos.

- 🔄 **Conversão de valores**  
  Conversões utilizadas:
  - Hex → ASCII  
  - Hex → Decimal  
  - Index → Valor / Unidade / Parâmetro  
  - Adequação de valores conforme padrões IFM

- 📝 **Geração de DOCX automático**  
  Um template `.docx` é preenchido usando **Docxtemplater** e **PizZip**.

- 📑 **Exportação para PDF**  
  O documento gerado é convertido para PDF automaticamente.

- 🎨 **UI com TailwindCSS**  
  Interface leve, moderna e responsiva.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-----------|------------|
| **React** | Interface e fluxo da aplicação |
| **TypeScript** | Tipagem estática e segurança |
| **TailwindCSS** | Estilização |
| **Axios** | Requisição ao sensor IFM |
| **Docxtemplater** | Preenchimento de templates DOCX |
| **PizZip** | Manipulação interna do DOCX |
| **FileSaver** | Download de arquivos |
| **Conversor PDF** | Conversão DOCX → PDF |

---

## 📦 Estrutura Simplificada do Projeto


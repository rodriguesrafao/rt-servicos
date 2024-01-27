import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export class ImpressaoOrdemServico {

    constructor(dadosParaImpressao) {
      this.os = dadosParaImpressao;
    }  
  
    async PreparaDocumento() {
      const corpoDocumento = this.CriaCorpoDocumento();
      const documento = this.GerarDocumento(corpoDocumento);
      return documento;
    }
  
    CriaCorpoDocumento() {
    }
  
    GerarDocumento(corpoDocumento) {
      const documento = {
        pageSize: 'A4',
        pageMargins: [14, 96, 14, 58],
        header: function () {
          return {
              margin: [14, 12, 14, 0],
              layout: 'noBorders',
              table: {
                body: [                             
                  [
                    { 
                      image: 'imgHeader', 
                      cover: { width: 566, height: 80, valign: "bottom", align: "right" }, 
                    }
                  ],              
                ],
              },
            };
        },
        content: corpoDocumento,
      footer(currentPage, pageCount) {
            return {
              layout: 'noBorders',
              margin: [14, 0, 14, 22],
              table: {
                widths: ['auto'],
                body: [
                  [
                    [
                      {
                        text:
                          '',
                        alignment: 'left',
                        fontSize: 6,
                      },
                      {
                        text: '',
                        alignment: 'right',
                        fontSize: 6,
                      },
                    ],
                  ],
                  [
                    {
                      text:
                        '_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',
                      alignment: 'center',
                      fontSize: 5,
                    },
                  ],
                  [
                    [
                      {
                        text: `Página ${currentPage.toString()} de ${pageCount}`,
                        fontSize: 7,
                        alignment: 'right',
                        /* horizontal, vertical */
                        margin: [3, 0],
                      },
                      {
                        text: '© Cliente privado',
                        fontSize: 7,
                        alignment: 'center',
                      },
                    ],
                  ],
                ],
              },
            };
          },
      styles: {
        reportName: {
          fontSize: 9,
          bold: true,
          alignment: 'center',
          margin: [0, 4, 0, 0],
        }
      },
      images:{
        imgHeader: 'caminho da imagem'
      }
    };
      return documento;
    }
  }
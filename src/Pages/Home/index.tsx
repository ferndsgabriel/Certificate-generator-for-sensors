import axios from "axios";
import { useState} from "react";
import { hexToAscii, hexToDecimal, indexToValue, indexToValueColr, indexToValuePn, indexToValueUni } from "../../utils/converter";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import { FaAnglesDown } from "react-icons/fa6";
import Toast from "../../components/ui/toast";


function Home () {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');



    const resetMessages = () =>{
        setErrorMessage(''); 
        setSuccessMessage(''); 
        setStatusMessage(''); 
    }

    const getRequest = async () =>{

        const ifmName = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":16,
                "subindex":0,
            }
        });

        const productName = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":18,
                "subindex":0,
            }
        });

        const productText = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":20,
                "subindex":0,
            }
        });

        const serialNumber = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":21,
                "subindex":0,
            }
        });

        const sp_fh1 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":583,
                "subindex":0,
            }
        });

        const rp_fl1 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":584,
                "subindex":0,
            }
        });

        const sp_fh2 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":593,
                "subindex":0,
            }
        });

        const rp_fl2 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":594,
                "subindex":0,
            }
        });

        const ou1 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":580,
                "subindex":0,
            }
        });

        const ou2 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":590,
                "subindex":0,
            }
        });

        const ds1 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":581,
                "subindex":0,
            }
        });

        const dr1 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":582,
                "subindex":0,
            }
        });

        const ds2 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":591,
                "subindex":0,
            }
        });

        const dr2 = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":592,
                "subindex":0,
            }
        });

        const uni = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":551,
                "subindex":0,
            }
        });

        const pn = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":500,
                "subindex":0,
            }
        });

        const lo = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":561,
                "subindex":0,
            }
        });

        const hi = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":560,
                "subindex":0,
            }
        });

        const dap = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":510,
                "subindex":0,
            }
        });

        const colr = await axios.post('/iolink-proxy/', {
            code: "request",
            cid: 4, 
            adr: "/iolinkmaster/port[1]/iolinkdevice/iolreadacyclic", 	
            data:{
                "index":554,
                "subindex":0,
            }
        });

        return {
            Manufacturer:(hexToAscii(ifmName.data.data.value)),
            ProductName:(hexToAscii(productName.data.data.value)),
            ProductText:(hexToAscii(productText.data.data.value)),
            SerialNumber:(hexToAscii(serialNumber.data.data.value)),
            SP_FH1:(hexToDecimal(sp_fh1.data.data.value, 1,0.1)),
            RP_FL1:(hexToDecimal(rp_fl1.data.data.value, 1,0.1)),
            SP_FH2:(hexToDecimal(sp_fh2.data.data.value, 1,0.1)),
            RP_FL2:(hexToDecimal(rp_fl2.data.data.value, 1,0.1)),
            OU1:(indexToValue(ou1.data.data.value)),
            OU2:(indexToValue(ou2.data.data.value)),
            DS1:(hexToDecimal(ds1.data.data.value, 1,0.1)),
            DR1:(hexToDecimal(dr1.data.data.value, 1,0.1)),
            DS2:(hexToDecimal(ds2.data.data.value, 1,0.1)),
            DR2:(hexToDecimal(dr2.data.data.value, 1,0.1)),
            Uni:(indexToValueUni(uni.data.data.value)),
            Pn:(indexToValuePn(pn.data.data.value)),
            LO:(hexToDecimal(lo.data.data.value, 1,0.1)),
            HI:(hexToDecimal(hi.data.data.value, 1,0.1)),
            DAP:(hexToDecimal(dap.data.data.value, 1,0.1)),
            Colr:(indexToValueColr(colr.data.data.value)),
        }
    }

    function loadFile(url: string) {
        return new Promise<string>((resolve, reject) => {
            PizZipUtils.getBinaryContent(url, (error: Error | null, content: string) => {
                if (error) reject(error);
                else resolve(content);
            });
        });
    }

    async function gerar() {
        resetMessages();
        setIsLoading(true);
        
        let sensorData:any;
        let formData = new FormData();

        try {
            setStatusMessage('Requisitando dados...');
            sensorData = await getRequest();
        } catch (error) {
            resetMessages();
            setErrorMessage('Erro ao requisitar dados, verifique sua conexão com o mestre e tente novamente.');
            setIsLoading(false);
            return;
        }

        try {
            const content = await loadFile("/template/template.docx");
            const zip = new PizZip(content);
            
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            const d = new Date();

            doc.setData({
                manufacturer: sensorData.Manufacturer,
                serialnumber: sensorData.SerialNumber,
                code: sensorData.ProductName,
                text: sensorData.ProductText,
                date: d.toLocaleDateString('pt-BR'),
                time: `${d.getHours()}:${d.getMinutes()}`,
                sp1: sensorData.SP_FH1,
                rp1: sensorData.RP_FL1,
                sp2: sensorData.SP_FH2,
                rp2: sensorData.RP_FL2,
                ou1: sensorData.OU1,
                ou2: sensorData.OU2,
                ds1: sensorData.DS1,
                dr1: sensorData.DR1,
                ds2: sensorData.DS2,
                dr2: sensorData.DR2,
                uni: sensorData.Uni,
                pn: sensorData.Pn,
                lo: sensorData.LO,
                hi: sensorData.HI,
                dap: sensorData.DAP,
                colr: sensorData.Colr
            });

            doc.render();

            const wordBlob = doc.getZip().generate({
                type: "blob",
                mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            });
            formData.append('File', new File([wordBlob], 'sensor.docx'));

        } catch (error) {
            resetMessages();
            setErrorMessage('Erro ao gerar o template.');
            setIsLoading(false);
            return;
        }


        try {
            setStatusMessage('Convertendo para PDF...');
            const CONVERT_API_SECRET = import.meta.env.VITE_APP_PDFKEY;
            const response = await axios.post(
                `https://v2.convertapi.com/convert/docx/to/pdf?Secret=${CONVERT_API_SECRET}&download=attachment`, 
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    responseType: 'blob' 
                }
            );
            saveAs(response.data, `Relatorio-sensor.pdf`);
        } catch (error) {
            resetMessages();
            setErrorMessage('Erro ao converter para PDF.');
            return
        }finally{
            resetMessages();
            setIsLoading(false);
            setSuccessMessage('Arquivo gerado com sucesso.');
        }
    }

    return(
        <>
            <main className="w-full min-h-screen bg-gray-200 flex items-center justify-center flex-col gap-8">
                <section className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-2xl font-semibold">Gerador de relatório para sensores IFM</h1>

                    <article className="flex flex-col gap-4 items-center">
                        <span>Ajuste o IP do mestre para estar na mesma faixa de rede do seu ambiente. </span>
                        <FaAnglesDown className="animate-bounce"/>
                        <span className="border-2 px-8 py-2">192 . 168 . XXX . XXX</span>
                    </article>
                </section>

                <section>
                    <button className="text-lg bg-orange-500 text-white px-8 py-3 rounded-3xl border-white border-2 disabled:cursor-not-allowed cursor-pointer
                    not-disabled:hover:bg-orange-600 duration-200 transition-colors disabled:opacity-70"
                    onClick={gerar} disabled={isLoading}>
                        Gerar relatório
                    </button>
                </section>


                <Toast status={'Info'} message={statusMessage} />
                <Toast status={'Success'} message={successMessage} />
                <Toast status={'Error'} message={errorMessage} />
            </main>
        </>
    )
}

export default Home;
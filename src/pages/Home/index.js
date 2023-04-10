import Card from '../../components/Card/Card';
import CardContact from '../../components/Card/CardContact';
import '../Home/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../../components/Title';
import BigCard from '../../components/Bigcard';
import office from '../../assets/img/office.png'
import OCAS from '../../assets/img/OCAS.png'





function Home() {
    return ( 
        <div className="bg">
            <Container style={{maxWidth: '1400px'}}>
                <Title titulo="HFA - WebApp´s"/>
                <Row>
                    <Card href="http://rh.ocas.pt:8000/open/login" style={{backgroundColor: "#078A11"}} title="Kelio" description="RH - Recursos Humanos"/>
                    <Card href="https://podio.com/login?provider=podio&return_to=https%3A%2F%2Fpodio.com%2Fhome" style={{backgroundColor: "#697A82"}} title="Podio" description="Criar soluções e automatizar fluxos de trabalho"/>
                    <Card href="http://go.hfa.pt/login/index.castle?ReturnUrl=%2fCGArtigo%2fListGado.castle&" style={{backgroundColor: "#0E7F9F"}} title="Go" description="Central de Cotação"/>
                    <Card href="http://svrapps/uebeq/include/main.asp?urlmail=&n=" style={{backgroundColor: "#6A3499"}} title="Uebe.Q" description="Manutenção / Status das linhas"/>
                    <Card href="https://10.0.5.53/" style={{backgroundColor: "#425df5"}} title="Tag - Test and Go" description="Testes"/>
                    <Card href="https://app.powerbi.com/reportEmbed?reportId=fcff919e-782e-4654-9319-fd54fb4499b6&autoAuth=true&ctid=68b2874c-08e6-4074-8e34-d7a6e681789f" style={{backgroundColor: "#d7ab14"}} title="PowerBI" description="Análise de negócios"/>
                    <Card href="https://issues.alticelabs.com/secure/Dashboard.jspa" style={{backgroundColor: "#585858"}} title="JIRA Reparações" description="Projetos de reparação"/>
                    <Card href="https://unifi.hfa.pt:8443/manage/site/default/dashboard" style={{backgroundColor: "#BD8C14"}} title="UNIFI" description="Gestor das antenas WiFi"/>
                    <Card href="http://factoryeye.hfa.pt/" style={{backgroundColor: "#376eb5"}} title="FactoryEye" description="Experiência do chão de fábrica"/>
                    <Card href="http://ticketclip.hfa.pt/" style={{backgroundColor: "#ba3e16"}} title="TicketClip" description="Monitoramento e acompanhamento de projetos"/>
                    
                </Row>
            </Container>
            <Container style={{maxWidth: '1400px', marginTop: '75px',}}>
                <Title titulo="WorkFlow Manager"/>
                <Row>
                    <Card href="http://appsmith-appsmith.wfm.hfa.pt/user/login?redirectUrl=http%3A%2F%2Fappsmith-appsmith.wfm.hfa.pt%2Fapplications%2F62b467b59344af651b78ff6c%2Fpages%2F62b968979344af651b7903f2%2Fedit" style={{backgroundColor: "#f86a2b"}} title="Appsmith" description="Criação de interfaces (Front-End)"/>
                    <Card href="http://n8n.wfm.hfa.pt/signin?redirect=%252F" style={{backgroundColor: "#20b69e"}} title="N8N" description="Gestão de fluxos lógicos mais complexos"/>
                    <Card href="http://wfm-api-core.wfm.hfa.pt/admin/auth/login" style={{backgroundColor: "#121180"}} title="Strapi" description="Gestão da API de acesso a dados"/>
                    <Card href="http://hitron5final.wfm.hfa.pt/" style={{backgroundColor: "#607d8b"}} title="Fluxo HITRON5" description="Recolha de dados"/>
                    <Card href="http://final.wfm.hfa.pt/" style={{backgroundColor: "#607d8b"}} title="Fluxo ASKEY5" description="Recolha de dados"/>
                    <Card href="http://ont.wfm.hfa.pt/" style={{backgroundColor: "#607d8b"}} title="Fluxo ONT" description="Recolha de dados"/>
                    <Card href="http://intek.wfm.hfa.pt/" style={{backgroundColor: "#607d8b"}} title="Fluxo INTEK" description="Recolha de dados"/>
                    <Card href="http://backofficewfm.wfm.hfa.pt/" style={{backgroundColor: "#607d8b"}} title="BackOffice" description="Relatórios e visualização de dados"/>          
                </Row>
            </Container>
            <Container style={{maxWidth: '1400px', marginTop: '75px',}}>
                <Title titulo="Informação Interna HFA"/>
                <Row>
                    <BigCard href="https://www.hfa.pt/inicio" title="ELECTRONIC IS EVERYWHERE AND WE BUILD IT" style={{backgroundImage:`url(${office})`, backgroundSize:'cover'}} />
                    <BigCard href="https://www.onecountryallsolutions.com/" title="Grupo OCAS" description="One Country, All Solutions.Providing the future." style={{backgroundImage:`url(${OCAS})`, backgroundSize:'cover'}}/>
                    <CardContact style={{backgroundColor: "#1998c5"}} title="Contactos" internalLink="/pages/Contatos" description="Encontra todos os contatos Internos."/>        
                </Row>
            </Container>
        </div>
     );
}

export default Home;
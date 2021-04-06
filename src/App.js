//Conversor de moedas do real
//Giovani Lovatto Allegretti
//import dos programas externos
import React, { useState, useEffect } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import dos componentes do bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
//import icones react
import { BiMoney } from "react-icons/bi";



function App() {
    //Definição de variaveis
    const [moeda, setMoeda] = useState('USD')
    const [codigo, setCodigo] = useState('')
    const [valor, setValor] = useState('')
    const [valorconvert, setValorconvert] = useState('')

    //Função para fazer a conversão
    useEffect(() => {
        if (!valor || !codigo) {
            return
        }
        console.log(codigo[0].high)
        console.log(valor / codigo[0].high)         // até aqui é mostrado apenas no console para desbug
        setValorconvert((valor / codigo[0].high).toFixed(2))      //parte mais importante do código aonde faz a conversão
    }, [codigo, valor])

    //função async que carrega a API
    async function obterMoeda(obtmoeda) {
        let url = `https://economia.awesomeapi.com.br/json/${moeda}`
        console.log(url)
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCodigo(data)
                console.log('Dados Carregados com sucesso')

            })
    }

    return (
        //apartir daqui é o front-end aonde será trabalhada a formatação com a organização do projeto.
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#inicio"><BiMoney />Conversor de Real para outras moedas</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#fatecitu" className="fatecitu">Fatec Itu</Nav.Link>
                </Nav>
            </Navbar>

            <Jumbotron>
                <h1><BiMoney size="60px" bg="success" />Conversor de Moeda</h1>


            </Jumbotron>
            <Card className="cartao" bg="dark">
                <Card.Header className="cabecalho" style={{background: "#b3f37e"}} >Conversor</Card.Header>
                <form className="quadro">
                    <label className="fonteform"> Qual moeda gostaria de converter do real?</label>
                    
                    <br></br>

                    <select onChange={event => setMoeda(event.target.value)} value={moeda} className="valorcss">
                        <option value="BRL">Real</option>
                        <option value="USD">Dolar</option>
                        <option value="USDT">Dolar Turismo</option>
                        <option value="CAD">Dolar Canadense</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">Libra Esterlina</option>
                        <option value="ARS">Peso Argentino</option>
                        <option value="BTC">Bitcoin</option>
                        <option value="LTC">Litecoin</option>
                        <option value="JPY">Yene Japonês</option>
                        <option value="CHF">Franco Suiço</option>
                        <option value="AUD">Dólar Australiano</option>
                        <option value="CNY">Yuan Chinês</option>
                        <option value="ILS">Novo Shekel Israelense</option>
                        <option value="ETH">Ethereum</option>
                        <option value="XRP">Ripple</option>
                    </select>
                    <br></br>

                    <label className="fonteform">Qual a quantidade que deseja converter</label>
                    <input type="number" className="valorcss"
                        onChange={event => setValor(event.target.value)} value={valor}
                        placeholder="Digite seu valor"
                        step="0.2">
                    </input>
                    <br></br>

                    <button className="botao" onClick={(event) => {
                        event.preventDefault();
                        obterMoeda(moeda)
                    }}>Converter</button>
                    <br></br>

                    <label className="fonteform"> Sua moeda convertida foi:</label>
                    <br></br>
                    <input type="text" className="resultadocss" value={valorconvert}>
                    </input>

                </form>
            </Card>
        </>
    )
}
export default App

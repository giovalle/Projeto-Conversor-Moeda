import React, { useState, useEffect } from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function App() {

    const [moeda, setMoeda] = useState('USD')
    const [codigo, setCodigo] = useState('')
    const [valor, setValor] = useState('')
    const [valorconvert, setValorconvert] = useState('')

useEffect(()=>{
    if (!valor||!codigo){
        return
    }
console.log(codigo[0].high)
console.log(valor/codigo[0].high)
setValorconvert((valor/codigo[0].high).toFixed(2))
},[codigo,valor])

    async function obterMoeda(obtmoeda) {
        const codigo = ('')
        let url = `https://economia.awesomeapi.com.br/json/${moeda}`
        console.log(url)
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCodigo(data)
                console.log('Dados Carregados com sucesso')
                console.log(codigo)
    
            })}  
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#inicio">Conversor de Moedas</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#inicio">Início</Nav.Link>
                    <Nav.Link href="#contato">Contato</Nav.Link>
                </Nav>
            </Navbar>

            <Jumbotron>
                <h1>Conversor de Moeda</h1>


            </Jumbotron>
            <Card className="cartao" bg="dark">
                <form className="quadro">
                    <label className="fonteform"> Qual moeda gostaria de converter:</label>
                    <select>
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
                    <label className="fonteform"> Qual Moeda você deseja:</label>
                    <select onChange={event => setMoeda(event.target.value)} value={moeda}>
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
                    onChange={event => setValor(event.target.value)} value={valor}>
                    </input>
                    <br></br>

                    <button className="botao" onClick={(event) => {
                        event.preventDefault();
                        obterMoeda(moeda)
                    }}>Converter</button>
                    <br></br>
                    <label className="fonteform"> Sua moeda convertida foi:</label>
                    <br></br>
                    <input type="text" className="valorcss" value={valorconvert}>
                    </input>
                </form>
            </Card>
        </>
    )
}
export default App

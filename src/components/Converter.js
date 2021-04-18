import React, { Component } from "react";

class Converter extends Component {
  state = {
    currencies: ["USD", "EUR", "UAH", "PLN", "GBP", "CNY", "JPY"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: ""
  };











  handleSelect = e => {
    
 
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };
calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
    
      fetch(`https://free.currconv.com/api/v7/convert?q=${this.state.base}_${this.state.convertTo}&compact=ultra&apiKey=dd7504537964c7185759`)
        .then(res => res.json())
        .then(data => {
          const date = data.dates;
        const text = this.state.base + "_" + this.state.convertTo 
        const result = data[text] * amount
          this.setState({
            result,
            date
          });
        });
    }
  };

  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  render() {
    
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
     
      <div className="container my-5">
        <div className="row">
          <div className=" mx-auto">
           <section>
            <div className="card-body">
            <div className="face1 front">
            <h2 className="debit">
              Конвертер валют
              </h2>
              <h5 className="bank">
             Наведіть, щоб конвертувати
              </h5>
            </div>
            <div className="face2 back">
              <h5 className="ecv">
                {amount} {base} є еквівалентним до
              </h5>
              <h2 className="amount">

                {amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {convertTo}
              </h2>
              <p className="asfor"> {amount === "" ? "/ / /" : date === null ? "" : date}</p>
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-input1 form-inline mb-4">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-input2 form-inline mb-4">
                    <input
                      disabled={true}
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>

                <div className=" col-lg-2 align-self-center">
                  <h1 onClick={this.handleSwap} className="reload swap">
                    &#8595;&#8593;
                  </h1>
                </div>
              </div>
            </div>
            </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;

import React from 'react'

const Cards = (props) => {

    const {imagen, title, text, opc1, opc2, opc3, opc4} = props;

    return (
        <div className="card" style={{width:"18rem", display: "inline-block"}}>
            {/* <img src={imagen} className="card-img-top img-thumbnail" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                {/* <a href="#" className="btn btn-primary">Ver más</a> */}
            </div>

            <div class="form-check">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">{opc1}</label>
                </div>
                <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id={"inlineRadio2"+opc2} value="option2" />
                        <label class="form-check-label" for="inlineRadio2">{opc2}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">{opc3}</label>
                </div>
            </div>
        </div>
    )
}

export default Cards;
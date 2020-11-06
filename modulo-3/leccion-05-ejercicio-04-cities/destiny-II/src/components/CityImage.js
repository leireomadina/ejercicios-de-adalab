import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      "Buenos Aires":
        "https://pix10.agoda.net/hotelImages/4877634/0/db7ebdd6192005597fb67a0632c3a153.jpg?s=1024x768",
      Sidney:
        "https://www.todaaustralia.com/wp-content/uploads/2018/07/sidney-sydney-australia-1170x658.jpg",
      Praga:
        "https://viajeradicta.com/wp-content/uploads/2018/11/puentes-praga-republica-checa-2.jpg",
      Boston:
        "https://www.cronista.com/__export/1541718517736/sites/diarioelcronista/img/2018/11/08/boston.jpg",
      Tokio:
        "https://mywowo.net/media/images/cache/tokyo_tokyo_01_introduzione_jpg_1200_630_cover_85.jpg",
    };
  }
  render() {
    return (
      // FALTA incluir cada ciudad del objeto en la imagen!!!!
      <img
        src={this.cities[this.props.city]}
        alt={`Imagen de ${this.props.city}`}
        title={`Imagen de ${this.props.city}`}
      ></img>
    );
  }
}

export default CityImage;

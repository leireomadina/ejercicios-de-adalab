import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    // también podríamos meter estos datos en un objeto literal fuera de la clase
    this.cities = {
      "Buenos Aires":
        "https://www.cronista.com/__export/1589398341205/sites/diarioelcronista/img/2020/05/13/ciudad_vacia_crop1589398340532.png_258117318.png",
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
      <img
        src={this.cities[this.props.city]}
        alt={`Imagen de ${this.props.city}`}
        title={`Imagen de ${this.props.city}`}
      ></img>
    );
  }
}

export default CityImage;

import React from 'react';
import AdalabersList from '../stylesheets/AdalabersList.scss';
import AdalaberDetail from './AdalaberDetail';

class Adalabers extends React.Component {

  render() {

    const html = [];

    for (let i = 0; i < this.props.list.length; i++) {
      const eachAdalaber = this.props.list[i];
      console.log(eachAdalaber);
      // Hacemos push de un nuevo componente (cada li)
      html.push(
        <AdalaberDetail key={i} name ={eachAdalaber.fullname}/>
      );
      console.log(eachAdalaber.fullname);
    }
    
    return (
      <section className="listing">
        <div className="listing__count">
          {/* metemos entre corchetes código JS: un condicional ternario */}
          {this.props.list.length === 0 ? 
          "No hay" : 
          this.props.list.length} elementos
        </div>
        <div className="listing__header">Listado de Adalabers</div>
        <ul className="listing__content">{html}</ul>
      </section>
    );
  }
}

export default Adalabers;

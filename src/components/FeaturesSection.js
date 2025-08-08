import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const FeaturesSection = ({receiveList}) => {
  return (
    <section class="container">
        <h2>O que você irá receber?</h2>
        <ul class="features-list">
          {receiveList.map(item=> <li><i class="fas fa-check-circle icon"></i><strong>{item}</strong></li>)}
        </ul>
    </section>
  );
};

export default FeaturesSection;
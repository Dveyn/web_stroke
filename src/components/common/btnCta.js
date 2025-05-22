'use client';

export const BtnCta = ({text}) => {
  return (

    <a
      href="/#contact"
      onClick={ () => {
        try {
          ym(97829589, 'reachGoal', 'on_cta');
        } catch (error) { }
      } }
      className='cta-button'
    >
      { text ? text : 'Заказать услугу' }
    </a>

  );
};

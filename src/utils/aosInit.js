import AOS from 'aos';

const aosInit = () => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 120,
  });
};

export default aosInit;

import aboutSvg from '../assets/developer.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I am an Master's degree holder with over 7 years of hands-on experience in the dynamic field of web design and development. 
            I bring a wealth of expertise and a passion for crafting innovative and efficient solutions.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

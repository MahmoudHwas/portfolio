import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Programmer',
        1400, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1400,
        'MEARN Stack',
        1400,
        'Web Developer',
        1400
      ]}
      wrapper="span"
      speed={50}
     className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};
export default TextEffect;
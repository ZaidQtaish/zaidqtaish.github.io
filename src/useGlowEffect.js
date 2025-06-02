import { useEffect } from 'react';

const useGlowEffect = () => {
  useEffect(() => {
    const glowEffect = document.createElement('div');
    glowEffect.className = 'glow-effect';
    document.body.appendChild(glowEffect);

    const handleMouseMove = (e) => {
      glowEffect.style.left = `${e.pageX}px`;
      glowEffect.style.top = `${e.pageY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(glowEffect);
    };
  }, []);
};

export default useGlowEffect;



// const SplineViewer = ({ scene }) => {
//   const viewerRef = useRef(null);

//   useEffect(() => {
//     async function loadSpline() {
//       await import('https://unpkg.com/@splinetool/viewer@1.9.3/build/spline-viewer.js');
//     }

//     loadSpline().then(() => {
//       if (viewerRef.current) {
//         viewerRef.current.url = scene;
//       }
//     });

//     return () => {
//       if (viewerRef.current) {
//         viewerRef.current.url = ''; // Clear the URL to prevent issues on unmount
//       }
//     };
//   }, [scene]);

//   return (
//     <spline-viewer
//       ref={viewerRef}
//       style={{ width: '10%', height: '800px' }} // Customize the dimensions as needed
//     />
//   );
// };

// const Bottle = () => {
//   return (
//   <>
//   <div className=' flex columns-2 h-4/5'>
//     <aside className='bg-black w-1/2 text-white rounded-md '>
//     Welcome To Hydrate
//     </aside>
//     <aside>
//       <SplineViewer className="w-1/2" scene="https://prod.spline.design/aL20FL3Q1nr2P6Ow/scene.splinecode" />

//     </aside>
   
//   </div>
//   </>
//   );
// };

// export default Bottle;


import Spline from '@splinetool/react-spline';
import React from 'react';

const Bottle = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-black rounded-3xl mx-5 w-auto h-full text-white">
        <div className="flex flex-col justify-center md:w-1/2 p-4">
          <h1 className="futuristic-heading font-bold text-4xl mb-4">Welcome To <span className='text-7xl'>Hydrate</span></h1>
          <p className='text-lg'>
            At Hydrate, we take immense pride in providing the freshest and purest water to our valued customers. Sourced from pristine natural springs and meticulously filtered, our water is enriched with essential minerals that invigorate your body and mind. Our advanced purification process ensures that every drop of Hydrate water is free from impurities, offering you a crisp and refreshing taste. Perfect for hydration on the go, our pure water not only quenches your thirst but also revitalizes your senses, making it the ideal choice for a healthier life.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <Spline className='rounded-sm' scene="https://prod.spline.design/aL20FL3Q1nr2P6Ow/scene.splinecode"/>
        </div>
      </div>

      <div className="flex flex-col mx-5 lg:flex-row w-auto justify-between p-8 mt-4 bg-sky-200 shadow-xl rounded-3xl">
        <section className="mb-8 lg:mb-0 lg:w-2/3">
          <h2 className="text-2xl mb-4">Benefits of Pure Water</h2>
          <p className="mb-4">Pure water is essential for maintaining hydration and overall health. It helps to flush out toxins from the body, keeps the skin hydrated and glowing, and aids in digestion. Drinking pure water can also boost your energy levels and improve your mental clarity.</p>
          <p>Our water is sourced from natural springs and goes through a rigorous purification process to ensure it is free from contaminants and rich in essential minerals.</p>
        </section>
        <aside className="lg:w-1/3 lg:pl-8">
          <h2 className="text-2xl mb-4">Made from Minerals</h2>
          <p className="mb-4">Our pure water is fortified with essential minerals like calcium, magnesium, and potassium. These minerals are crucial for maintaining healthy bones, muscles, and nerve function. They also help to regulate blood pressure and support heart health.</p>
          <p>Experience the refreshing taste and health benefits of our mineral-rich pure water, and feel energized throughout the day.</p>
        </aside>
      </div>
    </>
  );
}

export default Bottle;




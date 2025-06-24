// import React, { useEffect } from 'react';

// const CareerForm = ({ onClose }) => {

//   useEffect(() => {
//     const currentUrl = window.location.href;
//     const urlInput = document.getElementById('careerPagecurrentUrlInput');
//     if (urlInput) {
//         urlInput.value = currentUrl;
//     }
// }, []);

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-2/5 relative">
//         <button
//           type="button"
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
//         <form action='' method='post' encType="multipart/form-data">
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               name='name'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               name='phone'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name='email'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//             />
//              <input
//               type="file"
//               // accept=".pdf"
//               id="resume"
//               name='resume'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//             />
//             <textarea
//               placeholder="Message"
//               name='message'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//               rows="4"
//             />
//            <input type="hidden" id="careerPagecurrentUrlInput" name="careerpagecurrentUrl" />
//             <button
//               type="submit"
//               name='submit'
//               className="w-full px-4 py-2 bg-yellow-700 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CareerForm;


// import React, { useState, useEffect } from 'react';

// const CareerForm = ({ onClose }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const currentUrl = window.location.href;
//     const urlInput = document.getElementById('careerPagecurrentUrlInput');
//     if (urlInput) {
//       urlInput.value = currentUrl;
//     }
//   }, []);

//   const handleSubmit = (event) => {
//     setIsLoading(true);
//     // Add any additional form submission logic here if needed

//     // Simulate form submission delay for demonstration
//     setTimeout(() => {
//       setIsLoading(false);
//       // Assuming onClose should be called after submission
//       onClose();
//     }, 5000);
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-2/5 relative">
//         <button
//           type="button"
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-2xl font-semibold mb-4">Apply Now</h2>
//         <form
//           action=''
//           method='post'
//           encType="multipart/form-data"
//           onSubmit={handleSubmit}
//         >
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               name='name'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//               disabled={isLoading}
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               name='phone'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//               disabled={isLoading}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               name='email'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//               disabled={isLoading}
//             />
//             <input
//               type="file"
//               id="resume"
//               name='resume'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//               disabled={isLoading}
//             />
//             <textarea
//               placeholder="Message"
//               name='message'
//               className="w-full px-4 py-2 border border-yellow-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700"
//               rows="4"
//               disabled={isLoading}
//             />
//             <input type="hidden" id="careerPagecurrentUrlInput" name="careerpagecurrentUrl" />
//             <button
//               type="submit"
//               name='submit'
//               className="w-full px-4 py-2 bg-yellow-700 text-white rounded-lg shadow hover:bg-yellow-600 transition duration-300"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Submitting...' : 'Submit'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CareerForm;

import React, { useState, useEffect } from 'react';

const CareerForm = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlInput = document.getElementById('careerPagecurrentUrlInput');
    if (urlInput) {
      urlInput.value = currentUrl;
    }
  }, []);

  const handleSubmit = (event) => {
    setIsLoading(true);
    // Add any additional form submission logic here if needed

    // Simulate form submission delay for demonstration
    setTimeout(() => {
      setIsLoading(false);
      // Assuming onClose should be called after submission
      onClose();
    }, 5000);
  };

  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center" style={{ zIndex: 1050 }}>
      <div className="bg-white p-4 rounded shadow position-relative w-100" style={{ maxWidth: '500px' }}>
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
          aria-label="Close"
        ></button>
        <h2 className="fs-3 fw-semibold mb-3">Apply Now</h2>
        <form
          action=''
          method='post'
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              name='name'
              className="form-control mb-3"
              disabled={isLoading}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name='phone'
              className="form-control mb-3"
              disabled={isLoading}
            />
            <input
              type="email"
              placeholder="Email"
              name='email'
              className="form-control mb-3"
              disabled={isLoading}
            />
            <input
              type="file"
              id="resume"
              name='resume'
              className="form-control mb-3"
              disabled={isLoading}
            />
            <textarea
              placeholder="Message"
              name='message'
              className="form-control mb-3"
              rows="4"
              disabled={isLoading}
            />
            <input type="hidden" id="careerPagecurrentUrlInput" name="careerpagecurrentUrl" />
            <button
              type="submit"
              name='submit'
              className="btn view-all-job-button text-white w-100"
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;

import React from 'react';

const MapSection = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Find Us Here
        </h2>
        <div className="h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.7185567208486!2d74.1510501!3d30.029286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391df1079cfcb4b7%3A0xe47c7a90d917aa8!2sColony%20No%203%20Near%20Multani%20Darbar%20Junaid%20Furniture%20Point%2C%20Khanewal%20Pakistan!5e0!3m2!1sen!2sus!4v1682686128742!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

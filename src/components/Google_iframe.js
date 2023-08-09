function Google_iframe({ src, width, height, className }) {
  return (
    <iframe
      className={className}
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Google Map"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Google_iframe;

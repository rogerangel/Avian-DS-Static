function Google_iframe({ src, width, height, className }) {
  return (
    <iframe
      className={className}
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      title="Google Map"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Google_iframe;

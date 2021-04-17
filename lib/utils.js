export const getPublicUrl = (dataImage, size = "thumbnail") => {
  if (!dataImage) return "";
  if (size == "original") {
    return `${process.env.REACT_APP_URL}${dataImage.url}`;
  }

  if (dataImage && dataImage.formats) {
    return `${process.env.REACT_APP_URL}${dataImage.formats[size].url}`;
  } else {
    return `${process.env.REACT_APP_URL}${dataImage.url}`;
  }
};

export const splitBoldTitle = (title = "") => {
  const splitedTitle = title.split(" ");
  const firstLetter = splitedTitle.shift();
  if (!title) return "";

  return (
    <>
      <span className="font-weight-bold">{firstLetter} </span>
      {splitedTitle.join(" ")}
    </>
  );
};

export const handleDownload = async ({ url, title }) => {
  try {
    const response = await fetch(url);
    const file = await response.blob();
    const urlFile = window.URL.createObjectURL(file);
    const element = document.createElement("a");
    element.style.display = "none";
    element.href = urlFile;
    element.download = `${title}.gif`;
    document.body.appendChild(element);
    element.click();
    window.URL.revokeObjectURL(urlFile);
    element.remove();
  } catch (error) {
    alert(error.message);
  }
};

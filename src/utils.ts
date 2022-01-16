export const toDataURL = (url: string) => {
  return fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Origin: window.location.origin,
    },
  })
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      return URL.createObjectURL(blob);
    });
};

export const downloadFile = async (url: string, name: string) => {
  try {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (e) {
    alert("다운로드 중 문제가 발생했습니다.");
  }
};

// src/utils/linkUtils.js
export const openLinkWithFallback = async (primaryURL, fallbackURL) => {
  try {
    // Thử mở URL chính trước
    // eslint-disable-next-line no-unused-vars
    const res = await fetch(primaryURL, {
      method: "HEAD",
      mode: "no-cors",
    });
    // Với mode: 'no-cors', fetch có thể thành công nhưng không thể kiểm tra res.ok
    // nên tốt hơn là thử mở luôn URL và nếu fail thì dùng fallback
    window.open(primaryURL, "_blank");
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    window.open(fallbackURL, "_blank");
  }
};

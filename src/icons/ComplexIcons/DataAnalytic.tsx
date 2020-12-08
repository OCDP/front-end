import React from "react";

function DataAnalytic({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      fill="#fff"
      viewBox="0 0 512 512"
    >
      <path d="M508.046 455.014l-7.304-7.305a7.5 7.5 0 00-10.606-.001 7.498 7.498 0 00-.001 10.606l6.243 6.244-31.818 31.819-54.094-54.093 31.819-31.819 25.236 25.236a7.5 7.5 0 0010.607-10.607l-30.526-30.525-.013-.015-21.213-21.213-.018-.016-18.721-18.721c-2.55-2.551-5.94-3.956-9.547-3.956s-6.997 1.405-9.546 3.954l-1.061 1.062-26.837-26.844c19.182-23.966 33.036-52.367 39.76-83.398h52.845c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-50.186c.661-4.77 1.155-9.592 1.476-14.461H489c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-84.016a208.866 208.866 0 00-.605-14.462h48.873c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-50.586c-5.24-34.479-19.253-66.731-41.304-94.589a7.503 7.503 0 00-10.536-1.226A7.502 7.502 0 00349.6 86.22c26.43 33.389 40.4 73.598 40.4 116.28C390 305.888 305.888 390 202.5 390S15 305.888 15 202.5 99.112 15 202.5 15c46.738 0 91.511 17.298 126.069 48.707a7.5 7.5 0 1010.088-11.1C301.333 18.683 252.978 0 202.5 0 90.841 0 0 90.841 0 202.5c0 98.582 70.814 180.921 164.243 198.859v50.599c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-48.301c4.773.548 9.595.932 14.462 1.141v82.43c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-82.332c4.864-.147 9.688-.457 14.462-.943v48.005c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-50.104c33.863-6.042 64.83-20.538 90.654-41.208l26.844 26.838-1.06 1.06c-2.551 2.55-3.956 5.94-3.956 9.547s1.405 6.997 3.954 9.546l18.728 18.727.011.012 21.213 21.213.014.013 60.443 60.442c2.55 2.552 5.94 3.956 9.547 3.956s6.996-1.404 9.547-3.954l33.94-33.94c2.55-2.551 3.954-5.94 3.954-9.547s-1.404-6.997-3.954-9.545zM350.821 340.208l26.054 26.06-10.606 10.606-26.06-26.054a203.468 203.468 0 0010.612-10.612zm49.038 91.47l-10.607-10.606 31.819-31.819 10.606 10.607zm-1.768-65.407l12.374 12.374-31.819 31.819-12.374-12.374z"></path>
      <path d="M98.056 339.792C128.095 362.371 164.181 374.546 202.5 375c95.117 0 172.5-77.383 172.5-172.5S297.617 30 202.5 30c-45.903 0-89.078 17.967-121.569 50.591C48.577 113.076 30.49 156.343 30 202.42c-.45 42.419 14.963 83.191 43.399 114.805a7.5 7.5 0 0011.153-10.031C58.636 278.382 44.589 241.229 45 202.58c.447-42.143 16.982-81.707 46.559-111.403C121.215 61.399 160.614 45 202.5 45 289.346 45 360 115.654 360 202.5S289.346 360 202.589 360.001c-35.019-.416-68.049-11.551-95.521-32.199a7.498 7.498 0 00-10.501 1.489 7.497 7.497 0 001.489 10.501z"></path>
      <path d="M231 68.5h-52c-6.341 0-11.5 5.159-11.5 11.5v26.5H119c-6.341 0-11.5 5.159-11.5 11.5v80.5H97.462c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h215.076c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H302.5V156c0-6.341-5.159-11.5-11.5-11.5h-48.5V80c0-6.341-5.159-11.5-11.5-11.5zm-108.5 53h45v77h-45zm60-38h45v115h-45zm105 76v39h-45v-39zM289 277.053h-35.309l-16.04-41.003c-1.134-2.897-3.912-4.772-7.051-4.768a7.502 7.502 0 00-6.966 4.893l-21.92 59.109-15.32-43.423a7.5 7.5 0 00-13.622-1.162l-14.712 26.353h-35.216c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h39.618a7.502 7.502 0 006.549-3.844l8.763-15.695 16.691 47.31a7.5 7.5 0 007.013 5.005h.061a7.5 7.5 0 007.031-4.893l22.283-60.088 10.733 27.438a7.5 7.5 0 006.984 4.768H289c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"></path>
    </svg>
  );
}

export default DataAnalytic;
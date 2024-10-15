import React from "react";

function QrCard() {
  return (
    <div className="flex items-center flex-col w-[335px] h-[497px] rounded-xl bg-white shadow-xl p-4">
      <div className="rounded-xl">
        <img src="qr-code.png" alt="codigoQr" className="rounded-xl" />
      </div>
      <div>
        <p className="text-center font-bold text-xl">
          Improve your front-end skills by building projects
        </p>
        <p className="text-base text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCard;

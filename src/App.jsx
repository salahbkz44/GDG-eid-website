import { useState } from "react";
import star from "./assets/Star 4.svg";
import eidImage from "./assets/eidImage.svg";
import elipse1 from "./assets/Ellipse 4.png";
import elipse2 from "./assets/Ellipse 3.png";
import elipse3 from "./assets/Ellipse 5.png";
import elipse4 from "./assets/Ellipse 6.png";
import cardImage from "./assets/card image.svg";
import fanous from "./assets/fanous.svg";
import "./index.css";

function App() {
  const [clicked, setClicked] = useState(false);
  const [language, setLanguage] = useState("EN");

  function handleClick() {
    setClicked((prev) => !prev);
  }

  function toggleLanguage() {
    setLanguage((prev) => (prev === "EN" ? "AR" : "EN"));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <img
        src={elipse1}
        className="absolute -top-0 right-0 -z-10 w-1/2 md:w-1/3"
        alt="Background Elipse 1"
      />
      <img
        src={elipse2}
        className="absolute -top-0 right-0 -z-10 w-1/2 md:w-1/3"
        alt="Background Elipse 2"
      />

      <button
        onClick={toggleLanguage}
        className="absolute z-10 top-8 right-8 md:right-16 bg-eid-blue font-lora text-white px-4 py-2 rounded-full shadow-lg text-sm md:text-lg hover:bg-[#0b1a4ed0] transition-colors"
      >
        {language}
      </button>

      {clicked ? (
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full h-full">
          <div className="flex flex-col w-11/12 md:w-2/5 h-2/3 rounded-3xl border-[7px] border-eid-blue relative">
            <img
              src={elipse3}
              className="absolute -top-0 right-0 z-0 w-auto h-full rounded-tr-2xl rounded-br-2xl"
              alt=""
            />
            <img
              src={elipse4}
              alt=""
              className="absolute top-0 right-0 z-0 w-auto h-full rounded-tr-2xl rounded-br-2xl"
            />
            <div className="flex justify-around z-10 md:justify-center w-full">
              <img src={fanous} alt="" className="h-32 md:h-auto w-auto" />
              {language === "EN" ? (
                <h1 className="text-4xl md:text-6xl mt-4 md:mt-9 text-center font-eid text-eid-blue">
                  Eid <br />
                  Mubarak
                </h1>
              ) : (
                <h1 className="text-4xl md:text-6xl mt-4 md:mt-9 text-center font-arabic text-eid-blue">
                  عيد مبارك
                </h1>
              )}
              <img src={fanous} alt="" className="h-32 md:h-auto w-auto" />
            </div>
            {language === "EN" ? (
              <p className="font-lora text-lg md:text-2xl text-center w-4/5 text-eid-blue m-auto z-10">
                May blessings always flow in the family and community
              </p>
            ) : (
              <p className="font-lora text-lg md:text-3xl text-center w-4/5 text-eid-blue m-auto z-10">
                نسأل الله أن يتقبل الصيام والقيام و صالح الأعمال وكل عام وأنتم
                بخير{" "}
              </p>
            )}
            <img src={cardImage} alt="" className="h-1/3 z-10" />
            {language === "EN" ? (
              <button
                className="z-10 bg-eid-blue text-main font-lora text-lg md:text-3xl px-6 md:px-11 py-1 rounded-full m-auto mt-5 hover:bg-[#0b1a4ed0] transition-colors"
                onClick={handleClick}
              >
                close
              </button>
            ) : (
              <button
                className="z-10 bg-eid-blue text-main font-lora text-lg md:text-3xl px-6 md:px-11 py-1 rounded-full m-auto mt-5 hover:bg-[#0b1a4ed0] transition-colors"
                onClick={handleClick}
              >
                اغلاق
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-1/2">
          <img src={eidImage} alt="" className="w-1/3 md:w-1/4" />

          {language === "EN" ? (
            <h1 className="text-2xl md:text-4xl w-4/5 md:w-2/3 text-center m-5 font-lora">
              GDG Setif Wishes you a happy and blessed Eid
            </h1>
          ) : (
            <h1 className="text-2xl md:text-4xl w-full text-center m-5 font-lora">
              GDG Setif <br />
              تتمنى لكم عيد سعيد
              <br /> و أعاده الله علينا باليمن والبركات{" "}
            </h1>
          )}
          <button
            onClick={handleClick}
            className="flex items-center justify-evenly py-2 border-[5px] md:border-[7px] border-border-button bg-eid-blue rounded-2xl text-main w-4/5 md:w-1/2 hover:bg-[#0b1a4ed0] transition-colors"
          >
            <img src={star} alt="star image" className="w-6 md:w-auto" />
            <h4 className="font-eid block text-xl md:text-3xl">
              {language === "EN" ? "Eid Mubarak" : "عيد مبارك"}
            </h4>
            <img src={star} alt="star image" className="w-6 md:w-auto" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

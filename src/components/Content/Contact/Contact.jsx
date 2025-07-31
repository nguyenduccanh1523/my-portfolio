import React from "react";
import { useTranslation } from "react-i18next";
import { FaHome, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 px-4 text-center">
      <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
        {t("touch")}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 dark:text-blue-300">
        {t("getinTouch")}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-10 dark:text-gray-300 w-3/4 mx-auto">
        {t("getinTouchDescription")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Form liên hệ */}
        <form className="md:col-span-2 bg-white rounded-xl shadow p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={t("name")}
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email *"
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <input
            type="text"
            placeholder={t("subject")}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows={6}
            placeholder={t("message")}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
          <button
            type="submit"
            className="w-full py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-800 hover:to-blue-500 transition shadow-lg mt-2"
          >
            {t("send")}
          </button>
        </form>

        {/* Box thông tin liên hệ */}
        <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <FaHome className="text-blue-600 text-3xl" />
            <div>
              <h4 className="font-bold text-lg mb-1 text-left">{t("home")}</h4>
              <p className="text-gray-600 text-left">
                Dong Anh, HaNoi.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="text-blue-600 text-3xl" />
            <div>
              <h4 className="font-bold text-lg mb-1">{t("phone")}</h4>
              <p className="text-gray-600">
                094-555-3908
                <br />
                +84 087-676-1911
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 text-3xl" />
            <div>
              <h4 className="font-bold text-lg mb-1 text-left">Email</h4>
              <p className="text-gray-600">nguyenduccanh1523@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

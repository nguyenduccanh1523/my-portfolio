import React from 'react'
import { FaMapMarkerAlt, FaBirthdayCake, FaPhone, FaEnvelope } from 'react-icons/fa';
import avt from '../../../assets/avt.jpg';
import { useTranslation } from 'react-i18next';
const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section className="max-w-7xl mx-auto mt-12 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div className="border-4 border-blue-600 p-2">
        <img src={avt} alt="Profile" className="w-full h-96 object-cover" />
      </div>

      <div>
        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t("who")}</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 dark:text-blue-300">
          {t("portfolio")}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
          {t("portfolioDescription")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> <span className="font-semibold">Location:</span> Dong Anh, HaNoi.
          </div>
          <div className="flex items-center gap-2">
            <FaBirthdayCake /> <span className="font-semibold">Age:</span> 22
          </div>
          <div className="flex items-center gap-2">
            <FaPhone /> <span className="font-semibold">Phone:</span> +84 094-555-3908
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span className="font-semibold">Email:</span> nguyenduccanh1523@gmail.com
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Portfolio

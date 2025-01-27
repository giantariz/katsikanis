import React, { useState, useEffect } from 'react'
import { FiMenu, FiX, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import { useTranslation } from './i18n'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-dentalBlue text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Δρ. Κατσικάνης Φώτης</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#services" className="hover:text-dentalTeal">{t('services')}</a></li>
              <li><a href="#about" className="hover:text-dentalTeal">{t('about')}</a></li>
              <li><a href="#contact" className="hover:text-dentalTeal">{t('contact')}</a></li>
            </ul>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dentalBlue text-white p-4">
          <ul className="space-y-4">
            <li><a href="#services" className="block py-2">{t('services')}</a></li>
            <li><a href="#about" className="block py-2">{t('about')}</a></li>
            <li><a href="#contact" className="block py-2">{t('contact')}</a></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-dentalBlue text-center">
            {t('aboutTitle')}
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              {t('aboutContent1')}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t('aboutContent2')}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t('aboutContent3')}
            </p>
            <p className="text-lg text-gray-600">
              {t('aboutContent4')}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-dentalBlue text-center">
            {t('servicesTitle')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t('servicesList').map((service, index) => (
              <div key={index} className="bg-dentalLight p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-dentalLight p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-dentalBlue text-center">
            {t('contactTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-dentalBlue" size={24} />
                <div>
                  <p className="font-semibold">{t('addressTitle')}</p>
                  <p>{t('address')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="text-dentalBlue" size={24} />
                <div>
                  <p className="font-semibold">{t('phone')}</p>
                  <p>+30 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FiClock className="text-dentalBlue" size={24} />
                <div>
                  <p className="font-semibold">{t('hoursTitle')}</p>
                  <p>{t('hours')}</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder={t('name')}
                  className="w-full p-3 rounded border"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder={t('email')}
                  className="w-full p-3 rounded border"
                />
              </div>
              <div>
                <textarea
                  placeholder={t('message')}
                  className="w-full p-3 rounded border h-32"
                ></textarea>
              </div>
              <button className="bg-dentalBlue text-white px-6 py-3 rounded hover:bg-dentalTeal transition-colors">
                {t('sendButton')}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-dentalBlue text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 Δρ. Κατσικάνης Φώτης - {t('allRights')}</p>
        </div>
      </footer>
    </div>
  )
}

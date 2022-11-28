/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

// import card from '../assets/Cards.gif'

export default function Hero(){
    const { t } = useTranslation();


return(
    <section className="bg-white dark:bg-gray-900 py-20">
    <div className="grid max-w-screen-xl px-20 py-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl  text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{t("A Flashcards Learning Website")}</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{t("Create, browse and study different flashcards for studying or entertainment")}</p>
            <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            {t("Get started")}
            </Link>
          
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 px-10  lg:flex">
            <img src="https://images.prismic.io/quizlet-prod/31c85d7d-9e36-40a4-9fae-5027c355ddee_Flashcards-1.gif?auto=compress,format" alt="mockup"/>
        </div>                
    </div>
</section>

)
}
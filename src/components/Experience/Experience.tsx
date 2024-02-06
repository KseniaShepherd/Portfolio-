import  { FC, RefObject } from "react";

interface ExperienceProps {
    myExperienceRef: RefObject<HTMLDivElement>;
  }
const Experience: FC <ExperienceProps>= ({myExperienceRef}) => {
    return (
        <div>
            <h2 className="text-4xl font-bodoni mt-48" ref={myExperienceRef}>Experience</h2>
            <div className={"mt-20 flex flex-col gap-5"}>
                <div className={"flex justify-between"}>
                      <h4 className={"text-2xl font-bold"}>Проектная деятельность</h4>
                      <p> Oct 2023 - now</p>
                      </div>
              
                <h5 className={"text-xl font-bold text-emerald-400"}>Junior frontend developer</h5>
                <ul>
  <p>Осуществляю проектную деятельность, взаимодействуя с небольшими бизнес-инициативами. Участвую в командной разработке проектов</p>
</ul>
            </div>
            <div className={"mt-20 flex flex-col gap-5"}>
                <div className={"flex justify-between"}>
                    <h4 className={"text-2xl font-bold"}>SnowFlakes</h4>
                    <p> Jun 2023 - Oct 2023</p>
                </div>

                <h5 className={"text-xl font-bold text-emerald-400"}>Интерн</h5>
                <ul>
                    <li>- Участвовала в разработке совместных командных проектов</li>
                    <li>- Реализовывала адаптивный веб-дизайн</li>
                    <li>- Настраивала продвинутые системы аутентификации</li>
                    <li>- Настраивала мультиязычность приложения (i18next)</li>
                    <li>- Создавала анимации для улучшения взаимодействия с пользователем (FramerMotion)</li>
                    <li>- Создавала пользовательский интерфейс с использованием библиотек MUI и Ant Design</li>
                    <li>- Следовала методологии Feature Sliced Design для организации структуры проекта</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
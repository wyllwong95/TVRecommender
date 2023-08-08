import s from "./style.module.css";

export function Logo({ title, subtitle, img }) {
  return (
    <>
      <div className={s.icon_wrapper}>
        <img className={s.img} src={img} alt="Logo"></img>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.subtitle}>{subtitle}</div>
    </>
  );
}
